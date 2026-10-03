import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/**
 * Bài tập 3 - Tuần 6
 * Component CounterHook: Sử dụng useState quản lý giá trị đếm ban đầu là 0.
 * Có phần hiển thị số lần bấm và nút "Tăng" để tăng giá trị đếm thêm 1.
 */
const CounterHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.description}>
        Quản lý trạng thái đếm bằng Hook <Text style={styles.codeText}>useState</Text>
      </Text>

      {/* Vùng hiển thị số lần bấm */}
      <View style={styles.displayBox}>
        <Text style={styles.displayLabel}>Số lần bấm:</Text>
        <Text style={styles.counterValue}>{count}</Text>
      </View>

      {/* Các nút bấm thao tác */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.increaseButton} 
          onPress={handleIncrement}
          activeOpacity={0.7}
        >
          <Text style={styles.increaseButtonText}>➕ Tăng</Text>
        </TouchableOpacity>

        {count > 0 && (
          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={handleReset}
            activeOpacity={0.7}
          >
            <Text style={styles.resetButtonText}>🔄 Đặt lại</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.noteText}>
        Mỗi lần bấm nút &ldquo;Tăng&rdquo;, hàm <Text style={styles.codeText}>setCount</Text> được gọi làm thay đổi state, kích hoạt React re-render lại giao diện.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  description: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 12,
    textAlign: 'center',
  },
  codeText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#0284C7',
  },
  displayBox: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1.5,
    borderColor: '#86EFAC',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 180,
  },
  displayLabel: {
    fontSize: 13,
    color: '#166534',
    fontWeight: '600',
    marginBottom: 4,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#15803D',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  increaseButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  increaseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  resetButtonText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
  noteText: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 14,
    lineHeight: 18,
    fontStyle: 'italic',
  },
});

export default CounterHook;
