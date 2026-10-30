/**
 * Hệ thống Theme & Định dạng dùng chung (Theme System)
 * Tuần 9 - Môn: Phát triển ứng dụng Mobile đa nền tảng
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
 * Áp dụng Mục 4.3 & 4.5: Export/Import StyleSheet, chia sẻ theme màu sắc và typography
 */

export const colors = {
  primary: '#2563EB',       // Xanh dương chủ đạo
  primaryDark: '#1E40AF',   // Xanh dương đậm
  primaryLight: '#DBEAFE',  // Xanh dương nhạt (background badge)
  secondary: '#64748B',     // Xám phụ
  background: '#F8FAFC',    // Nền ứng dụng sáng
  cardBackground: '#FFFFFF',// Nền thẻ card
  textPrimary: '#0F172A',   // Chữ chính (đen than)
  textSecondary: '#64748B', // Chữ phụ (xám)
  textMuted: '#94A3B8',     // Chữ mờ / placeholder
  border: '#E2E8F0',        // Đường viền
  borderFocus: '#3B82F6',   // Viền khi focus
  success: '#16A34A',       // Xanh lá thành công
  danger: '#EF4444',        // Đỏ cảnh báo / lỗi
  dangerLight: '#FEE2E2',   // Đỏ nhạt
  warning: '#F59E0B',       // Cam cảnh báo
  divider: '#F1F5F9',       // Đường kẻ phân cách
};

export const typography = {
  titleLarge: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  titleMedium: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  titleSmall: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  bodyRegular: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  bodyBold: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const borderRadius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  full: 9999,
};

export const shadows = {
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
};
