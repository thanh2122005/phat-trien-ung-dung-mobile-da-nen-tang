import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors, typography, borderRadius, shadows } from '../theme';

/**
 * Component CustomButton - Bài tập Tuần 9
 * Minh họa Mục 4.4 & Câu hỏi 4: Nhận prop `style` và `textStyle` từ component cha
 * để mở rộng khả năng tùy biến và tái sử dụng linh hoạt.
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'danger'
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' && styles.primaryButton,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'outline' && styles.outlineButton,
        variant === 'danger' && styles.dangerButton,
        disabled && styles.disabledButton,
        style, // Style truyền từ cha sẽ ghi đè các style mặc định phía trước
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'outline' && styles.outlineButtonText,
          variant === 'secondary' && styles.secondaryButtonText,
          disabled && styles.disabledButtonText,
          textStyle, // textStyle truyền từ cha ghi đè font, màu sắc...
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    ...shadows.button,
  },
  secondaryButton: {
    backgroundColor: colors.primaryLight,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  disabledButton: {
    backgroundColor: colors.border,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    ...typography.buttonText,
  },
  outlineButtonText: {
    color: colors.primary,
  },
  secondaryButtonText: {
    color: colors.primaryDark,
  },
  disabledButtonText: {
    color: colors.textMuted,
  },
});

export default CustomButton;
