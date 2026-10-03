import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Bài tập 2 - Tuần 6
 * Component StudentInfo: Hiển thị thông tin sinh viên gồm họ tên, lớp và ngành học được truyền qua props.
 */
const StudentInfo = ({ fullName, studentClass, className, major, studentId }) => {
  const actualClass = studentClass || className || 'Chưa cập nhật';
  // Lấy chữ cái đầu của tên làm Avatar
  const initial = fullName ? fullName.trim().charAt(fullName.trim().lastIndexOf(' ') + 1) || fullName.charAt(0) : 'S';

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial.toUpperCase()}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.nameText}>{fullName}</Text>
          {studentId ? <Text style={styles.idBadge}>{studentId}</Text> : null}
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Lớp:</Text>
          <Text style={styles.value}>{actualClass}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Ngành:</Text>
          <Text style={styles.value}>{major}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 14,
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
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1.5,
    borderColor: '#6366F1',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  infoContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  idBadge: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4F46E5',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  detailRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  label: {
    fontSize: 13,
    color: '#64748B',
    width: 55,
    fontWeight: '500',
  },
  value: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
    flex: 1,
  },
});

export default StudentInfo;
