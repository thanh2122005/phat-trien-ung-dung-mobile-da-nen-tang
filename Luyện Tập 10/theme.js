/**
 * Hệ thống Theme & Design Tokens dùng chung (Theme System)
 * Tuần 10 - Môn: Phát triển ứng dụng Mobile đa nền tảng
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
 * Áp dụng cho: REST API, Device Resources (Image Picker, Geolocation), AsyncStorage
 */

export const colors = {
  primary: '#0284C7',        // Xanh Sky blue hiện đại
  primaryDark: '#0369A1',    // Xanh đậm
  primaryLight: '#E0F2FE',   // Xanh nhạt (nền badge)
  secondary: '#64748B',      // Xám phụ
  background: '#F8FAFC',     // Nền màn hình chính
  cardBackground: '#FFFFFF', // Nền thẻ card
  textPrimary: '#0F172A',    // Chữ chính (đen than)
  textSecondary: '#475569',  // Chữ phụ
  textMuted: '#94A3B8',      // Chữ mờ / placeholder
  border: '#E2E8F0',         // Đường viền chuẩn
  borderFocus: '#0284C7',    // Đường viền khi focus
  success: '#16A34A',        // Xanh lá thành công
  successLight: '#DCFCE7',   // Nền xanh lá nhạt
  danger: '#EF4444',         // Đỏ cảnh báo / lỗi
  dangerLight: '#FEE2E2',    // Nền đỏ nhạt
  warning: '#F59E0B',        // Vàng cam cảnh báo
  warningLight: '#FEF3C7',   // Nền vàng nhạt
  purple: '#8B5CF6',         // Tím thời thượng
  purpleLight: '#EDE9FE',    // Nền tím nhạt
  divider: '#F1F5F9',        // Đường kẻ phân cách
};

export const typography = {
  titleLarge: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  titleMedium: {
    fontSize: 17,
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
    fontSize: 14,
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
  xs: 4,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  full: 9999,
};

export const shadows = {
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHover: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  button: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
};
