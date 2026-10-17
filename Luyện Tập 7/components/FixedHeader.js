import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Component FixedHeader - Bài tập thực hành Tuần 7
 * Tiêu chí: Tạo header cố định bằng position (absolute/fixed) nổi trên nội dung
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const FixedHeader = ({ studentName = 'Bùi Duy Thành', studentId = '12523080', studentClass = '12523W.3' }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoText}>📱</Text>
          </View>
          <View>
            <Text style={styles.appTitle}>TECH MART PRO</Text>
            <Text style={styles.appSubtitle}>Buổi 07: Clone UI & Responsive FlatList</Text>
          </View>
        </View>

        {/* Nút thông báo / biểu tượng */}
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconText}>🔔</Text>
          <View style={styles.badgeDot} />
        </TouchableOpacity>
      </View>

      {/* Thông tin sinh viên thực hiện */}
      <View style={styles.studentBar}>
        <Text style={styles.studentText}>
          👨‍🎓 Sinh viên: <Text style={styles.studentBold}>{studentName}</Text>
        </Text>
        <Text style={styles.studentMeta}>
          MSV: <Text style={styles.studentBold}>{studentId}</Text> | Lớp: <Text style={styles.studentBold}>{studentClass}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  logoText: {
    fontSize: 20,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E3A8A',
    letterSpacing: 0.5,
  },
  appSubtitle: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },
  iconButton: {
    position: 'relative',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  badgeDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  studentBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  studentText: {
    fontSize: 11.5,
    color: '#334155',
  },
  studentMeta: {
    fontSize: 11.5,
    color: '#475569',
  },
  studentBold: {
    fontWeight: '700',
    color: '#1E293B',
  },
});

export default FixedHeader;
