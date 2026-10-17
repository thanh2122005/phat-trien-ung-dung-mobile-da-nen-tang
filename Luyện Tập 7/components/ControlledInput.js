import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Bài tập 2 - Tuần 7: Controlled Component trong React Native
 * Áp dụng Mục 3.5: Quản lý dữ liệu ô nhập (TextInput) đồng bộ 2 chiều với State
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const ControlledInput = () => {
  // 1. Quản lý giá trị TextInput bằng React State
  const [text, setText] = useState('');
  const maxLength = 50;

  // Xử lý thay đổi văn bản
  const handleChangeText = (newText) => {
    setText(newText);
  };

  // Nút xóa nhanh nội dung
  const handleClear = () => {
    setText('');
  };

  // Nút điền mẫu văn bản nhanh
  const handleFillSample = () => {
    setText('React Native là framework tuyệt vời để xây dựng ứng dụng di động!');
  };

  // Logic kiểm tra tính hợp lệ (Validation)
  const isValid = text.trim().length >= 3;
  const isTooLong = text.length > maxLength;

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Ô nhập văn bản có kiểm soát (Controlled TextInput):</Text>

      {/* TextInput có value được kiểm soát bởi state text */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isTooLong && styles.inputError]}
          value={text}
          onChangeText={handleChangeText}
          placeholder="Nhập ghi chú hoặc nội dung bất kỳ..."
          placeholderTextColor="#94A3B8"
          maxLength={maxLength + 10}
        />
        {text.length > 0 && (
          <TouchableOpacity style={styles.clearIconBtn} onPress={handleClear}>
            <Text style={styles.clearIconText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Bộ đếm ký tự và trạng thái kiểm tra */}
      <View style={styles.statusRow}>
        <Text style={[styles.validationText, isValid ? styles.validText : styles.hintText]}>
          {text.length === 0
            ? 'Vui lòng nhập ít nhất 3 ký tự'
            : isValid
            ? '✓ Độ dài văn bản hợp lệ'
            : 'Độ dài tối thiểu là 3 ký tự'}
        </Text>
        <Text style={[styles.charCount, isTooLong && styles.charCountError]}>
          {text.length}/{maxLength}
        </Text>
      </View>

      {/* Nút tác vụ nhanh */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.btn, styles.btnSecondary]}
          onPress={handleFillSample}
        >
          <Text style={styles.btnSecondaryText}>Điền mẫu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnDanger, text.length === 0 && styles.btnDisabled]}
          onPress={handleClear}
          disabled={text.length === 0}
        >
          <Text style={[styles.btnDangerText, text.length === 0 && styles.btnDisabledText]}>
            Xóa nội dung
          </Text>
        </TouchableOpacity>
      </View>

      {/* Vùng hiển thị kết quả đồng bộ theo thời gian thực */}
      <View style={styles.previewBox}>
        <Text style={styles.previewTitle}>Kết quả đồng bộ thời gian thực (Real-time Preview):</Text>
        <Text style={styles.previewContent}>
          {text.length > 0 ? text : '(Chưa có nội dung nhập)'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 48,
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingRight: 40,
    fontSize: 15,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  clearIconBtn: {
    position: 'absolute',
    right: 12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearIconText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: 'bold',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 10,
  },
  validationText: {
    fontSize: 12,
  },
  hintText: {
    color: '#94A3B8',
  },
  validText: {
    color: '#16A34A',
    fontWeight: '600',
  },
  charCount: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  charCountError: {
    color: '#EF4444',
    fontWeight: '700',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 8,
  },
  btnSecondary: {
    backgroundColor: '#EEF2FF',
  },
  btnSecondaryText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '600',
  },
  btnDanger: {
    backgroundColor: '#FEE2E2',
  },
  btnDangerText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '600',
  },
  btnDisabled: {
    backgroundColor: '#F1F5F9',
  },
  btnDisabledText: {
    color: '#94A3B8',
  },
  previewBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  previewTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  previewContent: {
    fontSize: 14,
    color: '#1E293B',
    fontStyle: 'italic',
  },
});

export default ControlledInput;
