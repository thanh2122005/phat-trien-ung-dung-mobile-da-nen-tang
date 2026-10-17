import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Component AppHeader - Bài thực hành Tuần 8 (Chương 3: Lab 03)
 * Tái sử dụng hiển thị tiêu đề và thông tin định danh cho màn hình
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const AppHeader = ({
  title = 'ĐĂNG KÝ TÀI KHOẢN',
  subtitle = 'Thực hành: Từ props đến form Register',
  studentName = 'Bùi Duy Thành',
  studentId = '12523080',
  studentClass = '12523W.3',
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>BÀI THỰC HÀNH TUẦN 8</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* Thông tin sinh viên thực hiện */}
      <View style={styles.authorBox}>
        <Text style={styles.authorText}>
          👨‍🎓 Sinh viên: <Text style={styles.authorBold}>{studentName}</Text>
        </Text>
        <Text style={styles.authorMeta}>
          MSV: <Text style={styles.authorBold}>{studentId}</Text> | Lớp: <Text style={styles.authorBold}>{studentClass}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  badge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 6,
  },
  badgeText: {
    color: '#1D4ED8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  authorBox: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 12,
    color: '#334155',
  },
  authorMeta: {
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
  },
  authorBold: {
    fontWeight: '700',
    color: '#1E293B',
  },
});

export default AppHeader;
