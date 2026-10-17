import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Import component con Avatar để thực hiện lồng component (Nested Component)
import Avatar from './Avatar';

/**
 * Bài tập 3b - Tuần 7: Component lồng Component (UserProfile chứa Avatar)
 * Áp dụng Mục 3.6: Kỹ thuật lồng ghép component và truyền dữ liệu thông qua props
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const UserProfile = ({
  name,
  role,
  bio,
  profileImage,
  studentId,
  email,
  onPressConnect,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.profileHeader}>
        {/* LỒNG COMPONENT: Nhúng Avatar bên trong UserProfile */}
        <Avatar imageUrl={profileImage} name={name} size={58} />

        <View style={styles.headerInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.nameText}>{name}</Text>
            {studentId && (
              <View style={styles.idBadge}>
                <Text style={styles.idBadgeText}>MSV: {studentId}</Text>
              </View>
            )}
          </View>
          <Text style={styles.roleText}>{role || 'Thành viên'}</Text>
          {email && <Text style={styles.emailText}>✉ {email}</Text>}
        </View>
      </View>

      {/* Tiểu sử / Giới thiệu */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{bio}</Text>
      </View>

      {/* Nút tương tác */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.connectButton}
          activeOpacity={0.8}
          onPress={() => onPressConnect && onPressConnect(name)}
        >
          <Text style={styles.connectButtonText}>Kết nối hồ sơ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 14,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  idBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  idBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  roleText: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 2,
  },
  emailText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  bioContainer: {
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  bioText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  connectButton: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  connectButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
});

export default UserProfile;
