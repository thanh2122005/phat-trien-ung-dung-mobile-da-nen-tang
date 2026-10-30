import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

/**
 * Component SettingsList - Bài tập 2 (Mức trung bình)
 * Thiết kế danh sách cài đặt giao diện (Settings UI) chuẩn Flexbox
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
 */
const SettingsList = ({ onLogout }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);

  const handleItemPress = (title) => {
    Alert.alert('Cài đặt', `Bạn đã chọn tùy chỉnh: ${title}`);
  };

  const handleLogoutPress = () => {
    Alert.alert(
      'Xác nhận đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất tài khoản sinh viên Bùi Duy Thành (12523080)?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đăng xuất',
          style: 'destructive',
          onPress: () => {
            if (onLogout) onLogout();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* NHÓM 1: CÀI ĐẶT TÀI KHOẢN & BẢO MẬT */}
      <View style={styles.groupCard}>
        <Text style={styles.groupHeaderTitle}>TÀI KHOẢN & BẢO MẬT</Text>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleItemPress('Thông tin cá nhân & MSV')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: '#EFF6FF' }]}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Hồ sơ sinh viên</Text>
            <Text style={styles.itemSubtitle}>Bùi Duy Thành (MSV: 12523080)</Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <View style={styles.itemDivider} />

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleItemPress('Đổi mật khẩu')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: '#FEF3C7' }]}>
            <Text style={styles.iconText}>🔑</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Đổi mật khẩu</Text>
            <Text style={styles.itemSubtitle}>Cập nhật lần cuối: Đã bảo vệ 2 lớp</Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <View style={styles.itemDivider} />

        <View style={styles.settingItem}>
          <View style={[styles.iconBox, { backgroundColor: '#ECFDF5' }]}>
            <Text style={styles.iconText}>🛡️</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Xác thực sinh trắc học</Text>
            <Text style={styles.itemSubtitle}>Face ID / Vân tay khi mở ứng dụng</Text>
          </View>
          <Switch
            value={biometricsEnabled}
            onValueChange={setBiometricsEnabled}
            trackColor={{ false: '#CBD5E1', true: colors.primary }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      {/* NHÓM 2: TÙY CHỌN HỆ THỐNG & GIAO DIỆN */}
      <View style={styles.groupCard}>
        <Text style={styles.groupHeaderTitle}>TÙY CHỈNH HỆ THỐNG & GIAO DIỆN</Text>

        <View style={styles.settingItem}>
          <View style={[styles.iconBox, { backgroundColor: '#FEE2E2' }]}>
            <Text style={styles.iconText}>🔔</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Thông báo bài tập & lịch học</Text>
            <Text style={styles.itemSubtitle}>Nhận thông báo nhắc nhở nộp bài Lab</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#CBD5E1', true: colors.primary }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.itemDivider} />

        <View style={styles.settingItem}>
          <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
            <Text style={styles.iconText}>🌙</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Chế độ nền tối (Dark Mode)</Text>
            <Text style={styles.itemSubtitle}>Tối ưu hiển thị và bảo vệ mắt</Text>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            trackColor={{ false: '#CBD5E1', true: colors.primary }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.itemDivider} />

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handleItemPress('Ngôn ngữ hiển thị')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: '#E0E7FF' }]}>
            <Text style={styles.iconText}>🌐</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Ngôn ngữ (Language)</Text>
            <Text style={styles.itemSubtitle}>Tiếng Việt (Mặc định)</Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>
      </View>

      {/* NHÓM 3: NÚT ĐĂNG XUẤT */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={handleLogoutPress}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutText}>🚪 Đăng xuất tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  groupCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
    marginBottom: spacing.md,
  },
  groupHeaderTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primaryDark,
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm + 2,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  iconText: {
    fontSize: 18,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  itemSubtitle: {
    fontSize: 11.5,
    color: colors.textSecondary,
    marginTop: 2,
  },
  arrowIcon: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textMuted,
    paddingLeft: spacing.sm,
  },
  itemDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 2,
  },
  logoutBtn: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1.5,
    borderColor: '#FECACA',
    borderRadius: borderRadius.md,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.xs,
  },
  logoutText: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default SettingsList;
