import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { borderRadius, colors, shadows, spacing } from '../theme';

/**
 * Component Nút Bấm Tái Sử Dụng (CustomButton)
 * Hỗ trợ các biến thể: primary, secondary, outline, danger, success
 */
const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  icon = null,
  style,
  textStyle,
}) => {
  const getContainerStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.btnSecondary;
      case 'outline':
        return styles.btnOutline;
      case 'danger':
        return styles.btnDanger;
      case 'success':
        return styles.btnSuccess;
      case 'primary':
      default:
        return styles.btnPrimary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return styles.textOutline;
      case 'secondary':
        return styles.textSecondary;
      case 'primary':
      case 'danger':
      case 'success':
      default:
        return styles.textLight;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.baseButton,
        getContainerStyle(),
        disabled && styles.btnDisabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? colors.primary : '#FFFFFF'}
        />
      ) : (
        <>
          {icon}
          <Text style={[styles.baseText, getTextStyle(), disabled && styles.textDisabled, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
    ...shadows.button,
  },
  btnPrimary: {
    backgroundColor: colors.primary,
  },
  btnSecondary: {
    backgroundColor: colors.secondary,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  btnDanger: {
    backgroundColor: colors.danger,
    shadowColor: colors.danger,
  },
  btnSuccess: {
    backgroundColor: colors.success,
    shadowColor: colors.success,
  },
  btnDisabled: {
    backgroundColor: '#CBD5E1',
    borderColor: '#CBD5E1',
    shadowOpacity: 0,
    elevation: 0,
  },
  baseText: {
    fontSize: 14,
    fontWeight: '700',
  },
  textLight: {
    color: '#FFFFFF',
  },
  textOutline: {
    color: colors.primary,
  },
  textSecondary: {
    color: '#FFFFFF',
  },
  textDisabled: {
    color: '#94A3B8',
  },
});

export default CustomButton;
