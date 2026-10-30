import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { borderRadius, colors, shadows, spacing } from '../theme';
import CustomButton from './CustomButton';

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
const FAVORITES_STORAGE_KEY = '@thoitranghd_favorite_posts';

/**
 * BÀI TẬP 2 - Màn hình "Saved data":
 * - Tự động đọc lại toàn bộ thông tin đã lưu từ AsyncStorage (tên, ghi chú, trạng thái, ảnh, GPS, danh sách yêu thích)
 * - Hiển thị thẻ Profile card sinh viên và thẻ Tọa độ GPS rõ ràng, chuyên nghiệp
 * - Hỗ trợ làm mới (Pull-to-refresh) và chức năng Xóa bộ nhớ (Clear Cache)
 */
const SavedDataView = ({ onNavigateToInput }) => {
  const [profile, setProfile] = useState(null);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadSavedData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const storedProfile = await AsyncStorageInstance.getItem(STORAGE_KEY_USER_PROFILE);
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      } else {
        setProfile(null);
      }

      const storedFavs = await AsyncStorageInstance.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavs) {
        const arr = JSON.parse(storedFavs);
        setFavoriteCount(Array.isArray(arr) ? arr.length : 0);
      }
    } catch (err) {
      console.error('Lỗi đọc AsyncStorage:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadSavedData();
  }, [loadSavedData]);

  const handleClearData = async () => {
    Alert.alert(
      'Xác nhận xóa dữ liệu',
      'Bạn có chắc chắn muốn xóa toàn bộ dữ liệu lưu trong AsyncStorage?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa ngay',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorageInstance.removeItem(STORAGE_KEY_USER_PROFILE);
              setProfile(null);
              Alert.alert('Thành công', 'Đã xóa dữ liệu hồ sơ trong AsyncStorage.');
            } catch (e) {
              console.error('Lỗi xóa storage:', e);
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => loadSavedData(true)}
          colors={[colors.primary]}
        />
      }
    >
      {/* HEADER SECTION */}
      <View style={styles.headerBox}>
        <View style={styles.headerTitleRow}>
          <Text style={{ fontSize: 20 }}>📂</Text>
          <Text style={styles.headerTitle}>Màn hình: Saved Data</Text>
        </View>
        <Text style={styles.headerSub}>
          Đọc và giải mã dữ liệu cục bộ đã lưu trữ trong AsyncStorage
        </Text>
      </View>

      {profile ? (
        <>
          {/* PROFILE CARD */}
          <View style={styles.card}>
            <View style={styles.profileTopRow}>
              <Image
                source={{
                  uri:
                    profile.avatarUri ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
                }}
                style={styles.profileAvatar}
              />
              <View style={styles.profileMainInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.profileName}>{profile.userName}</Text>
                  <View
                    style={[
                      styles.statusPill,
                      profile.isLoggedIn ? styles.statusPillActive : styles.statusPillInactive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        profile.isLoggedIn ? styles.statusTextActive : styles.statusTextInactive,
                      ]}
                    >
                      {profile.isLoggedIn ? '● Đã đăng nhập' : '○ Chưa đăng nhập'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.profileNote}>{profile.userNote || 'Không có ghi chú'}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoGrid}>
              <View style={styles.infoGridItem}>
                <Text style={styles.infoLabel}>KHÓA LƯU TRỮ (KEY)</Text>
                <Text style={styles.infoVal}>@thoitranghd_user_profile</Text>
              </View>
              <View style={styles.infoGridItem}>
                <Text style={styles.infoLabel}>THỜI ĐIỂM LƯU GẦN NHẤT</Text>
                <Text style={styles.infoVal}>{profile.savedAt || 'N/A'}</Text>
              </View>
            </View>
          </View>

          {/* GEOLOCATION CARD */}
          {profile.location ? (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>📍 Tọa độ GPS đã lưu</Text>
                <View style={styles.badgeSuccess}>
                  <Text style={styles.badgeSuccessText}>Độ chính xác: ±{profile.location.accuracy}m</Text>
                </View>
              </View>

              <Text style={styles.locAddress}>{profile.location.address}</Text>

              <View style={styles.coordsDisplayRow}>
                <View style={styles.coordDisplayBox}>
                  <Text style={styles.coordDisplayLabel}>VĨ ĐỘ (LATITUDE)</Text>
                  <Text style={styles.coordDisplayVal}>{profile.location.latitude}</Text>
                </View>
                <View style={styles.coordDisplayBox}>
                  <Text style={styles.coordDisplayLabel}>KINH ĐỘ (LONGITUDE)</Text>
                  <Text style={styles.coordDisplayVal}>{profile.location.longitude}</Text>
                </View>
              </View>
              <Text style={styles.coordTimeText}>Thời gian ghi nhận: {profile.location.timestamp}</Text>
            </View>
          ) : (
            <View style={[styles.card, { paddingVertical: spacing.lg, alignItems: 'center' }]}>
              <Text style={{ fontSize: 22, marginBottom: 4 }}>🧭</Text>
              <Text style={{ fontSize: 13, color: colors.textMuted }}>Chưa lưu dữ liệu tọa độ GPS</Text>
            </View>
          )}

          {/* BÀI 1 INTEGRATION CARD: BÀI VIẾT ĐÃ LƯU FAVORITES */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>★ Bài viết yêu thích đã lưu (Bài 1)</Text>
              <View style={styles.favBadge}>
                <Text style={styles.favBadgeText}>{favoriteCount} bài viết</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>
              Khóa lưu trữ: <Text style={{ fontWeight: '700' }}>@thoitranghd_favorite_posts</Text>. Được đồng bộ tức thời khi bạn đánh dấu bài viết ở Bài tập 1.
            </Text>
          </View>

          {/* ACTIONS */}
          <View style={styles.actionBtnRow}>
            <CustomButton
              title="Cập nhật thông tin"
              variant="outline"
              icon={<Text>✏️</Text>}
              onPress={onNavigateToInput}
              style={{ flex: 1, marginRight: spacing.sm }}
            />
            <CustomButton
              title="Xóa bộ nhớ"
              variant="danger"
              icon={<Text>🗑️</Text>}
              onPress={handleClearData}
              style={{ flex: 1 }}
            />
          </View>
        </>
      ) : (
        <View style={styles.emptyCard}>
          <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>📭</Text>
          <Text style={styles.emptyTitle}>Chưa có dữ liệu nào trong AsyncStorage</Text>
          <Text style={styles.emptySub}>
            Vui lòng chuyển sang tab "Nhập liệu & Thiết bị" để chọn ảnh, lấy tọa độ GPS và bấm Lưu.
          </Text>
          <CustomButton
            title="Đi đến màn hình Nhập liệu →"
            variant="primary"
            onPress={onNavigateToInput}
            style={{ marginTop: spacing.md }}
          />
        </View>
      )}
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
  headerBox: {
    marginBottom: spacing.md,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  headerSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  cardDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  profileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  profileMainInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  profileName: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  statusPill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  statusPillActive: {
    backgroundColor: colors.successLight,
  },
  statusPillInactive: {
    backgroundColor: '#F1F5F9',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statusTextActive: {
    color: '#15803D',
  },
  statusTextInactive: {
    color: colors.textMuted,
  },
  profileNote: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 17,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoGridItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 2,
  },
  infoVal: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  badgeSuccess: {
    backgroundColor: colors.successLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
  },
  badgeSuccessText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#15803D',
  },
  locAddress: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  coordsDisplayRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: 4,
  },
  coordDisplayBox: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  coordDisplayLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 2,
  },
  coordDisplayVal: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
  },
  coordTimeText: {
    fontSize: 10,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  favBadge: {
    backgroundColor: colors.warningLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  favBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B45309',
  },
  actionBtnRow: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  emptySub: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
    maxWidth: 280,
  },
});

export default SavedDataView;
