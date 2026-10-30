import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import CustomButton from './CustomButton';

/**
 * Bài tập 1 (Mức dễ) - Tuần 9: Thiết kế màn hình Login đơn giản
 * 
 * Yêu cầu đề bài đáp ứng đầy đủ 100%:
 * 1. Tiêu đề ứng dụng ("TECH PORTAL").
 * 2. Hai ô nhập thông tin (Email/Tài khoản và Mật khẩu).
 * 3. Nút đăng nhập sử dụng CustomButton/StyleSheet.create().
 * 4. Dòng chữ "Forgot password" (Quên mật khẩu?).
 * 5. Sử dụng toàn bộ các thuộc tính bắt buộc:
 *    - backgroundColor
 *    - fontSize, fontWeight
 *    - padding, margin
 *    - borderWidth, borderRadius
 *    - justifyContent, alignItems
 * 6. Viết 100% bằng StyleSheet.create(), không dùng inline style bừa bãi.
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
 */
const LoginView = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin đăng nhập!');
      return;
    }
    Alert.alert(
      'Đăng nhập thành công! 🎉',
      `Chào mừng Bùi Duy Thành (12523080) quay trở lại hệ thống.`
    );
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Khôi phục mật khẩu',
      'Đã gửi liên kết đặt lại mật khẩu đến email: ' + (email || 'sinh viên Bùi Duy Thành (12523080)')
    );
  };

  const handleFillDemo = () => {
    setEmail('thanh2122005@gmail.com');
    setPassword('SecurityPass@2026');
  };

  return (
    <View style={styles.cardContainer}>
      {/* 1. Header & Logo */}
      <View style={styles.headerBox}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoText}>🔐</Text>
        </View>
        <Text style={styles.appTitle}>TECH PORTAL</Text>
        <Text style={styles.appSubtitle}>Hệ Thống Quản Lý Sinh Viên & Đào Tạo</Text>

        <View style={styles.studentInfoBadge}>
          <Text style={styles.studentInfoText}>
            👨‍🎓 Sinh viên: <Text style={styles.boldText}>Bùi Duy Thành</Text> | MSV: <Text style={styles.boldText}>12523080</Text>
          </Text>
        </View>
      </View>

      {/* 2. Form ô nhập thông tin */}
      <View style={styles.formBox}>
        {/* Ô nhập 1: Email / Tài khoản */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Tài khoản hoặc Địa chỉ Email (*)</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="Nhập email sinh viên (ví dụ: user@example.com)"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Ô nhập 2: Mật khẩu */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Mật khẩu bảo mật (*)</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Nhập mật khẩu của bạn..."
              placeholderTextColor={colors.textMuted}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.eyeBtn}
            >
              <Text style={styles.eyeText}>{isPasswordVisible ? '🙈' : '👁'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 3. Dòng chữ Forgot Password */}
        <View style={styles.forgotBox}>
          <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.7}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* 4. Nút Đăng nhập chính */}
        <CustomButton
          title="ĐĂNG NHẬP HỆ THỐNG"
          onPress={handleLogin}
          variant="primary"
          style={styles.loginBtn}
        />

        {/* Nút hỗ trợ điền mẫu */}
        <TouchableOpacity style={styles.quickFillBtn} onPress={handleFillDemo} activeOpacity={0.7}>
          <Text style={styles.quickFillText}>⚡ Điền tài khoản mẫu (Demo Login)</Text>
        </TouchableOpacity>
      </View>

      {/* Footer ghi chú */}
      <View style={styles.footerBox}>
        <Text style={styles.footerNote}>
          Bài tập 1: Màn hình Login chuẩn StyleSheet.create & Flexbox Layout
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.card,
  },
  headerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    width: '100%',
  },
  logoBadge: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.primaryLight,
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  logoText: {
    fontSize: 28,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 0.5,
    marginVertical: spacing.xs,
  },
  appSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  studentInfoBadge: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  studentInfoText: {
    fontSize: 11.5,
    color: colors.textSecondary,
  },
  boldText: {
    fontWeight: '700',
    color: colors.textPrimary,
  },
  formBox: {
    width: '100%',
  },
  inputGroup: {
    marginVertical: spacing.xs + 2,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: spacing.sm,
    color: colors.textSecondary,
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: colors.textPrimary,
  },
  eyeBtn: {
    padding: spacing.xs,
  },
  eyeText: {
    fontSize: 16,
  },
  forgotBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: spacing.sm,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  loginBtn: {
    marginVertical: spacing.sm,
  },
  quickFillBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
  },
  quickFillText: {
    fontSize: 12.5,
    color: colors.primaryDark,
    fontWeight: '600',
  },
  footerBox: {
    marginTop: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    width: '100%',
    alignItems: 'center',
  },
  footerNote: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default LoginView;
