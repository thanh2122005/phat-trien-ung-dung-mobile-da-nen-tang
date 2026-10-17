import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

/**
 * Component InputField - Bài thực hành Tuần 8 (Chương 3: Lab 03)
 * Nhận props: label, value, onChangeText, placeholder, error, secureTextEntry...
 * Hiển thị lỗi màu đỏ dưới ô nhập và viền đỏ cảnh báo khi validate thất bại.
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  maxLength,
}) => {
  const hasError = !!error;

  return (
    <View style={styles.container}>
      {/* Label trường nhập */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* TextInput nhận props điều khiển từ component cha */}
      <TextInput
        style={[styles.input, hasError && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />

      {/* Hiển thị lỗi màu đỏ dưới ô nhập theo yêu cầu đề bài */}
      {hasError ? (
        <Text style={styles.errorText}>⚠ {error}</Text>
      ) : (
        <View style={styles.placeholderSpace} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  label: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14.5,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
  },
  inputError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
    paddingLeft: 4,
  },
  placeholderSpace: {
    height: 16,
  },
});

export default InputField;
