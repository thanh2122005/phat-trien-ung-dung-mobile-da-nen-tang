import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from './theme';
import LoginView from './components/LoginView';
import ProfileCard from './components/ProfileCard';
import SettingsList from './components/SettingsList';

/**
 * BÀI TẬP TUẦN 9: THIẾT KẾ GIAO DIỆN VỚI STYLESHEET VÀ FLEXBOX
 * Môn: Phát triển ứng dụng Mobile đa nền tảng
 * 
 * Sinh viên thực hiện: Bùi Duy Thành
 * Mã sinh viên: 12523080 - Lớp: 12523W.3
 * 
 * Nội dung tổng hợp:
 * - Bài tập 1: Màn hình Login đơn giản (tiêu đề, 2 ô nhập, nút login, forgot password).
 * - Bài tập 2: Clone UI Profile card + Settings list chuẩn Flexbox layout & Responsive.
 * - Hỗ trợ chuyển đổi tab và nút Toggle Responsive (Màn hình nhỏ 1 cột vs Màn hình lớn 2 cột).
 */
const App = () => {
  const { width, height } = useWindowDimensions();

  // State điều hướng giữa 2 bài tập
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'profile_settings'

  // State giả lập kích thước màn hình để kiểm thử Responsive trực tiếp trên giao diện
  const [simulatedMode, setSimulatedMode] = useState(null); // 'small' | 'large' | null

  // Xác định kích thước: Màn hình lớn (>= 680px hoặc landscape)
  const isLargeScreen = simulatedMode
    ? simulatedMode === 'large'
    : width >= 680 || width > height;

  const toggleSimulatedScreen = () => {
    setSimulatedMode((prev) => (prev === 'large' ? 'small' : 'large'));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            isLargeScreen && styles.scrollContentLarge,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER CHÍNH CỦA ỨNG DỤNG */}
          <View style={styles.appHeader}>
            <View style={styles.badgeRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>BÀI TẬP TUẦN 9 - STYLESHEET & FLEXBOX</Text>
              </View>
            </View>

            <Text style={styles.headerTitle}>HỆ THỐNG GIAO DIỆN REACT NATIVE</Text>
            <Text style={styles.headerSubtitle}>
              Chương 4: Thiết kế giao diện với StyleSheet & Flexbox Layout
            </Text>

            {/* Thông tin sinh viên thực hiện */}
            <View style={styles.studentBox}>
              <Text style={styles.studentName}>
                👨‍🎓 Sinh viên: <Text style={styles.boldText}>Bùi Duy Thành</Text>
              </Text>
              <Text style={styles.studentMeta}>
                MSV: <Text style={styles.boldText}>12523080</Text> | Lớp: <Text style={styles.boldText}>12523W.3</Text>
              </Text>
            </View>
          </View>

          {/* THANH ĐIỀU KHIỂN & CHUYỂN TAB */}
          <View style={styles.controlBar}>
            {/* Tab chuyển bài tập 1 và bài tập 2 */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tabBtn, activeTab === 'login' && styles.tabBtnActive]}
                onPress={() => setActiveTab('login')}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tabBtnText,
                    activeTab === 'login' && styles.tabBtnTextActive,
                  ]}
                >
                  Bài 1: Màn hình Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabBtn,
                  activeTab === 'profile_settings' && styles.tabBtnActive,
                ]}
                onPress={() => setActiveTab('profile_settings')}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.tabBtnText,
                    activeTab === 'profile_settings' && styles.tabBtnTextActive,
                  ]}
                >
                  Bài 2: Profile & Settings
                </Text>
              </TouchableOpacity>
            </View>

            {/* Nút Toggle kiểm thử Responsive (Màn hình nhỏ vs Màn hình lớn) */}
            <TouchableOpacity
              style={styles.responsiveToggleBtn}
              onPress={toggleSimulatedScreen}
              activeOpacity={0.8}
            >
              <Text style={styles.responsiveToggleText}>
                {isLargeScreen
                  ? '📱 Thu nhỏ (Màn hình nhỏ - 1 cột)'
                  : '📐 Mở rộng (Màn hình lớn - 2 cột)'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Dòng trạng thái kích thước hiện tại */}
          <View style={styles.statusBarBox}>
            <Text style={styles.statusLabel}>Trạng thái Responsive Flexbox:</Text>
            <Text style={styles.statusValue}>
              {isLargeScreen
                ? 'Chế độ Màn hình lớn (Large Screen / 2 Cột song song)'
                : 'Chế độ Màn hình nhỏ (Small Screen / 1 Cột xếp chồng)'}
              {' '}({Math.round(width)}x{Math.round(height)}px)
            </Text>
          </View>

          {/* NỘI DUNG TỪNG BÀI TẬP */}
          {activeTab === 'login' ? (
            /* ========================================================
               BÀI TẬP 1: MÀN HÌNH LOGIN ĐƠN GIẢN
               ======================================================== */
            <View style={isLargeScreen ? styles.loginWrapperLarge : styles.loginWrapperSmall}>
              <LoginView onLoginSuccess={() => setActiveTab('profile_settings')} />
            </View>
          ) : (
            /* ========================================================
               BÀI TẬP 2: PROFILE CARD + SETTINGS LIST (FLEXBOX RESPONSIVE)
               ======================================================== */
            <View style={isLargeScreen ? styles.gridTwoColumns : styles.gridOneColumn}>
              {/* Cột 1: Profile Card */}
              <View style={isLargeScreen ? styles.leftColumn : styles.fullWidth}>
                <ProfileCard onEditPress={() => setActiveTab('login')} />
              </View>

              {/* Cột 2: Settings List */}
              <View style={isLargeScreen ? styles.rightColumn : styles.fullWidth}>
                <SettingsList onLogout={() => setActiveTab('login')} />
              </View>
            </View>
          )}

          {/* FOOTER */}
          <View style={styles.appFooter}>
            <Text style={styles.footerBrand}>REACT NATIVE STYLESHEET & FLEXBOX</Text>
            <Text style={styles.footerAuthor}>
              Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
            </Text>
            <Text style={styles.footerNote}>
              Thiết kế giao diện đẹp, layout chuẩn Flexbox và responsive đa thiết bị
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    paddingBottom: 40,
  },
  scrollContentLarge: {
    paddingHorizontal: spacing.xxl,
  },
  appHeader: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  badgeRow: {
    marginBottom: spacing.xs,
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  studentBox: {
    backgroundColor: colors.cardBackground,
    marginTop: spacing.sm,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  studentName: {
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  studentMeta: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  boldText: {
    fontWeight: '700',
    color: colors.textPrimary,
  },
  controlBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.sm,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E2E8F0',
    borderRadius: borderRadius.md,
    padding: 3,
    flex: 1,
    minWidth: 260,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: borderRadius.sm + 2,
    alignItems: 'center',
  },
  tabBtnActive: {
    backgroundColor: colors.cardBackground,
    ...shadows.card,
  },
  tabBtnText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabBtnTextActive: {
    color: colors.primary,
    fontWeight: '700',
  },
  responsiveToggleBtn: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveToggleText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  statusBarBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: '#DBEAFE',
    marginBottom: spacing.md,
  },
  statusLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
    marginRight: 6,
  },
  statusValue: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  loginWrapperSmall: {
    width: '100%',
  },
  loginWrapperLarge: {
    width: '60%',
    alignSelf: 'center',
  },
  gridOneColumn: {
    flexDirection: 'column',
    width: '100%',
  },
  gridTwoColumns: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.lg,
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  leftColumn: {
    flex: 4, // Chiếm 40%
  },
  rightColumn: {
    flex: 6, // Chiếm 60%
  },
  appFooter: {
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerBrand: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.textMuted,
    letterSpacing: 0.5,
  },
  footerAuthor: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 2,
  },
  footerNote: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 2,
  },
});

export default App;
