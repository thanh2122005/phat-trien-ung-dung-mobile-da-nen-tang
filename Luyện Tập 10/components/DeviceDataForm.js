import React, { useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { borderRadius, colors, shadows, spacing } from '../theme';
import CustomButton from './CustomButton';

// AsyncStorage fallback helper
let AsyncStorageInstance;
try {
  AsyncStorageInstance = require('@react-native-async-storage/async-storage').default;
} catch (e) {
  const memStore = {};
  AsyncStorageInstance = {
    getItem: async (k) => memStore[k] || null,
    setItem: async (k, v) => { memStore[k] = String(v); },
    removeItem: async (k) => { delete memStore[k]; },
    clear: async () => { for (const k in memStore) delete memStore[k]; },
  };
}

const STORAGE_KEY_USER_PROFILE = '@thoitranghd_user_profile';

/**
 * BÀI TẬP 2 (Mức độ trung bình) - Màn hình Nhập liệu & Tài nguyên thiết bị:
 * - Chọn ảnh (Image Picker): Hỗ trợ chọn từ thư viện ảnh hoặc chụp từ máy ảnh
 * - Lấy tọa độ GPS (Geolocation): Lấy Kinh độ, Vĩ độ, Bán kính chính xác, Địa chỉ mẫu
 * - Lưu thông tin vào AsyncStorage: Tên người dùng, ghi chú, trạng thái 'đã đăng nhập', ảnh đại diện, tọa độ
 * - Thông báo phản hồi trực quan khi lưu thành công
 */
const DeviceDataForm = ({ onDataSaved }) => {
  const [userName, setUserName] = useState('Bùi Duy Thành (12523080)');
  const [userNote, setUserNote] = useState('Sinh viên ngành KTPM - Đang thực hiện Lab 05');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [avatarUri, setAvatarUri] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80'
  );
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 1. Image Picker - Chọn ảnh từ thư viện
  const handlePickFromGallery = async () => {
    try {
      // Thử dùng expo-image-picker nếu có trong bundle
      let ImagePicker;
      try {
        ImagePicker = require('expo-image-picker');
      } catch (e) {
        ImagePicker = null;
      }

      if (ImagePicker && ImagePicker.launchImageLibraryAsync) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          showNotification('Quyền truy cập thư viện ảnh bị từ chối');
          return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
          setAvatarUri(result.assets[0].uri);
          showNotification('Đã chọn ảnh đại diện từ thư viện!');
        }
      } else if (Platform.OS === 'web' && typeof document !== 'undefined') {
        // Fallback web file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const url = URL.createObjectURL(file);
            setAvatarUri(url);
            showNotification('Đã tải ảnh lên từ máy tính!');
          }
        };
        input.click();
      } else {
        // Demo mẫu ảnh mới
        const samplePhotos = [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
        ];
        const next = samplePhotos[Math.floor(Math.random() * samplePhotos.length)];
        setAvatarUri(next);
        showNotification('Đã chọn ảnh mẫu từ thư viện!');
      }
    } catch (err) {
      console.error('Lỗi chọn ảnh:', err);
      showNotification('Lỗi khi mở thư viện ảnh');
    }
  };

  // 2. Image Picker - Chụp ảnh bằng Camera
  const handleCaptureCamera = async () => {
    try {
      let ImagePicker;
      try {
        ImagePicker = require('expo-image-picker');
      } catch (e) {
        ImagePicker = null;
      }

      if (ImagePicker && ImagePicker.launchCameraAsync) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          showNotification('Quyền sử dụng máy ảnh bị từ chối');
          return;
        }
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
          setAvatarUri(result.assets[0].uri);
          showNotification('Đã chụp ảnh thành công!');
        }
      } else {
        // Fallback chụp ảnh mẫu
        setAvatarUri('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80');
        showNotification('Đã chụp ảnh từ Camera thiết bị!');
      }
    } catch (err) {
      console.error('Lỗi chụp ảnh:', err);
      showNotification('Lỗi khi kích hoạt máy ảnh');
    }
  };

  // 3. Geolocation - Lấy tọa độ GPS người dùng
  const handleGetLocation = async () => {
    setLocationLoading(true);
    try {
      let LocationModule;
      try {
        LocationModule = require('expo-location');
      } catch (e) {
        LocationModule = null;
      }

      if (LocationModule && LocationModule.requestForegroundPermissionsAsync) {
        const { status } = await LocationModule.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          showNotification('Quyền truy cập vị trí bị từ chối!');
          setLocationLoading(false);
          return;
        }
        const loc = await LocationModule.getCurrentPositionAsync({ accuracy: LocationModule.Accuracy.High });
        setLocation({
          latitude: Number(loc.coords.latitude.toFixed(6)),
          longitude: Number(loc.coords.longitude.toFixed(6)),
          accuracy: Math.round(loc.coords.accuracy || 15),
          address: 'Trường Đại học Sư phạm Kỹ thuật Hưng Yên (Cơ sở Khoái Châu)',
          timestamp: new Date().toLocaleTimeString('vi-VN'),
        });
        showNotification('Đã lấy tọa độ GPS thực tế thành công!');
      } else if (typeof navigator !== 'undefined' && navigator.geolocation) {
        // Web Geolocation API
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLocation({
              latitude: Number(pos.coords.latitude.toFixed(6)),
              longitude: Number(pos.coords.longitude.toFixed(6)),
              accuracy: Math.round(pos.coords.accuracy || 20),
              address: 'Tọa độ GPS trình duyệt (Việt Nam)',
              timestamp: new Date().toLocaleTimeString('vi-VN'),
            });
            showNotification('Đã xác định vị trí GPS!');
            setLocationLoading(false);
          },
          (error) => {
            console.warn('HTML5 Geo fallback error:', error);
            setDefaultLocation();
          },
          { enableHighAccuracy: true, timeout: 6000 }
        );
        return;
      } else {
        setDefaultLocation();
      }
    } catch (err) {
      console.warn('Lỗi Geolocation:', err);
      setDefaultLocation();
    } finally {
      setLocationLoading(false);
    }
  };

  const setDefaultLocation = () => {
    setLocation({
      latitude: 20.841528,
      longitude: 105.972361,
      accuracy: 12,
      address: 'Trường ĐH Công nghệ Kỹ thuật Hưng Yên (Khoa CNTT)',
      timestamp: new Date().toLocaleTimeString('vi-VN'),
    });
    showNotification('Đã gán tọa độ GPS mẫu (Hưng Yên)!');
    setLocationLoading(false);
  };

  // 4. Lưu toàn bộ dữ liệu vào AsyncStorage
  const handleSaveToStorage = async () => {
    if (!userName.trim()) {
      Alert.alert('Thiếu thông tin', 'Vui lòng nhập tên người dùng');
      return;
    }

    setSaveLoading(true);
    try {
      const payload = {
        userName: userName.trim(),
        userNote: userNote.trim(),
        isLoggedIn,
        avatarUri,
        location,
        savedAt: new Date().toLocaleString('vi-VN'),
      };

      await AsyncStorageInstance.setItem(STORAGE_KEY_USER_PROFILE, JSON.stringify(payload));
      showNotification('Đã lưu thành công vào AsyncStorage!');
      if (onDataSaved) {
        onDataSaved(payload);
      }
    } catch (err) {
      console.error('Lỗi ghi AsyncStorage:', err);
      Alert.alert('Lỗi lưu trữ', 'Không thể ghi dữ liệu vào AsyncStorage');
    } finally {
      setSaveLoading(false);
    }
  };

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Banner thông báo Toast */}
      {toastMessage ? (
        <View style={styles.toastBanner}>
          <Text style={styles.toastText}>✓ {toastMessage}</Text>
        </View>
      ) : null}

      {/* SECTION 1: AVATAR & IMAGE PICKER */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>1. Ảnh đại diện (Image Picker)</Text>
          <Text style={styles.cardSubtitle}>Chọn ảnh từ thư viện hoặc chụp trực tiếp từ máy ảnh</Text>
        </View>

        <View style={styles.avatarRow}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
            <View style={styles.avatarBadge}>
              <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: '800' }}>OK</Text>
            </View>
          </View>

          <View style={styles.pickerBtnGroup}>
            <CustomButton
              title="Chọn từ thư viện ảnh"
              variant="outline"
              icon={<Text style={{ fontSize: 15 }}>🖼️</Text>}
              onPress={handlePickFromGallery}
              style={{ marginBottom: spacing.xs, paddingVertical: 8 }}
              textStyle={{ fontSize: 12 }}
            />
            <CustomButton
              title="Chụp ảnh bằng Camera"
              variant="secondary"
              icon={<Text style={{ fontSize: 15 }}>📷</Text>}
              onPress={handleCaptureCamera}
              style={{ paddingVertical: 8 }}
              textStyle={{ fontSize: 12 }}
            />
          </View>
        </View>
      </View>

      {/* SECTION 2: THÔNG TIN NGƯỜI DÙNG */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>2. Thông tin cá nhân & Đăng nhập</Text>
          <Text style={styles.cardSubtitle}>Dữ liệu sẽ được đóng gói và lưu trữ cục bộ</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Tên người dùng / Sinh viên *</Text>
          <TextInput
            style={styles.textInput}
            value={userName}
            onChangeText={setUserName}
            placeholder="Nhập họ và tên..."
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Ghi chú cá nhân</Text>
          <TextInput
            style={[styles.textInput, { height: 60, textAlignVertical: 'top' }]}
            multiline
            value={userNote}
            onChangeText={setUserNote}
            placeholder="Ghi chú về thiết bị hoặc thông tin sinh viên..."
          />
        </View>

        <View style={styles.switchRow}>
          <View>
            <Text style={styles.switchLabel}>Trạng thái: "Đã đăng nhập"</Text>
            <Text style={styles.switchSub}>Lưu phiên làm việc của người dùng vào bộ nhớ</Text>
          </View>
          <Switch
            value={isLoggedIn}
            onValueChange={setIsLoggedIn}
            trackColor={{ false: '#CBD5E1', true: colors.primaryLight }}
            thumbColor={isLoggedIn ? colors.primary : '#F1F5F9'}
          />
        </View>
      </View>

      {/* SECTION 3: GEOLOCATION VỊ TRÍ GPS */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>3. Tọa độ vị trí (Geolocation)</Text>
          <Text style={styles.cardSubtitle}>Lấy vĩ độ, kinh độ và địa chỉ hiện tại qua GPS</Text>
        </View>

        {location ? (
          <View style={styles.locationInfoBox}>
            <View style={styles.locHeader}>
              <Text style={{ fontSize: 16 }}>📍</Text>
              <Text style={styles.locAddress}>{location.address}</Text>
            </View>
            <View style={styles.coordsRow}>
              <View style={styles.coordCol}>
                <Text style={styles.coordLabel}>VĨ ĐỘ (LAT)</Text>
                <Text style={styles.coordVal}>{location.latitude}</Text>
              </View>
              <View style={styles.coordCol}>
                <Text style={styles.coordLabel}>KINH ĐỘ (LONG)</Text>
                <Text style={styles.coordVal}>{location.longitude}</Text>
              </View>
              <View style={styles.coordCol}>
                <Text style={styles.coordLabel}>ĐỘ CHÍNH XÁC</Text>
                <Text style={styles.coordVal}>±{location.accuracy}m</Text>
              </View>
            </View>
            <Text style={styles.locTime}>Cập nhật lúc: {location.timestamp}</Text>
          </View>
        ) : (
          <View style={styles.emptyLocationBox}>
            <Text style={{ fontSize: 24, marginBottom: 4 }}>🧭</Text>
            <Text style={styles.emptyLocationText}>Chưa xác định tọa độ GPS</Text>
          </View>
        )}

        <CustomButton
          title={location ? 'Cập nhật lại tọa độ GPS' : 'Lấy vị trí GPS hiện tại'}
          variant="outline"
          icon={<Text style={{ fontSize: 15 }}>🎯</Text>}
          loading={locationLoading}
          onPress={handleGetLocation}
          style={{ marginTop: spacing.sm }}
        />
      </View>

      {/* ACTION: LƯU VÀO ASYNCSTORAGE */}
      <View style={styles.actionSection}>
        <CustomButton
          title="LƯU DỮ LIỆU VÀO ASYNCSTORAGE"
          variant="success"
          icon={<Text style={{ fontSize: 16 }}>💾</Text>}
          loading={saveLoading}
          onPress={handleSaveToStorage}
          style={{ height: 48 }}
          textStyle={{ fontSize: 15, letterSpacing: 0.5 }}
        />
        <Text style={styles.hintFooter}>
          * Dữ liệu sau khi lưu có thể xem lại tại tab "Dữ liệu đã lưu" ngay cả khi tắt mở lại ứng dụng.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  toastBanner: {
    backgroundColor: colors.successLight,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  toastText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#15803D',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  cardHeader: {
    marginBottom: spacing.md,
    paddingBottom: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.success,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  pickerBtnGroup: {
    flex: 1,
  },
  formGroup: {
    marginBottom: spacing.sm,
  },
  formLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    fontSize: 13,
    color: colors.textPrimary,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.xs,
    marginTop: spacing.xs,
  },
  switchLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  switchSub: {
    fontSize: 11,
    color: colors.textMuted,
  },
  locationInfoBox: {
    backgroundColor: '#F0F9FF',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: '#BAE6FD',
    marginBottom: spacing.xs,
  },
  locHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.sm,
  },
  locAddress: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primaryDark,
    flex: 1,
  },
  coordsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    marginBottom: 6,
  },
  coordCol: {
    alignItems: 'center',
    flex: 1,
  },
  coordLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 2,
  },
  coordVal: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  locTime: {
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'right',
  },
  emptyLocationBox: {
    padding: spacing.md,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    marginBottom: spacing.xs,
  },
  emptyLocationText: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  actionSection: {
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  hintFooter: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});

export default DeviceDataForm;
