import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

/**
 * Component ProfileCard - Bài tập 2 (Mức trung bình)
 * Thiết kế Card hồ sơ cá nhân chuẩn Flexbox Layout & StyleSheet.create()
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
 */
const ProfileCard = ({
  fullName = 'Bùi Duy Thành',
  studentId = '12523080',
  className = '12523W.3',
  major = 'Kỹ thuật phần mềm & Lập trình di động',
  email = 'thanh2122005@gmail.com',
  onEditPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Header Profile: Avatar + Thông tin cơ bản */}
      <View style={styles.headerRow}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>BT</Text>
          </View>
          <View style={styles.onlineDot} />
        </View>

        <View style={styles.infoCol}>
          <View style={styles.nameRow}>
            <Text style={styles.fullName}>{fullName}</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Đã xác thực</Text>
            </View>
          </View>
          <Text style={styles.majorText}>{major}</Text>
          <Text style={styles.metaText}>
            MSV: <Text style={styles.metaBold}>{studentId}</Text> | Lớp: <Text style={styles.metaBold}>{className}</Text>
          </Text>
          <Text style={styles.emailText}>✉ {email}</Text>
        </View>
      </View>

      {/* Dải phân cách mờ */}
      <View style={styles.divider} />

      {/* Thống kê học tập & hoạt động (Flexbox Row space-around) */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>08</Text>
          <Text style={styles.statLabel}>Tuần học</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statLabel}>Bài thực hành</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Đạt chuẩn Lab</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.9 ★</Text>
          <Text style={styles.statLabel}>Đánh giá UI</Text>
        </View>
      </View>

      {/* Nút tác vụ tương tác */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.primaryActionBtn}
          onPress={onEditPress}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryActionText}>✏ Chỉnh sửa hồ sơ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryActionBtn} activeOpacity={0.8}>
          <Text style={styles.secondaryActionText}>🔗 Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: spacing.md,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: '#BFDBFE',
  },
  avatarInitial: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  infoCol: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  fullName: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  verifiedBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  verifiedText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.success,
  },
  majorText: {
    fontSize: 12.5,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  metaText: {
    fontSize: 11.5,
    color: colors.textSecondary,
    marginTop: 2,
  },
  metaBold: {
    fontWeight: '700',
    color: colors.textPrimary,
  },
  emailText: {
    fontSize: 11.5,
    color: colors.textMuted,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm + 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  primaryActionBtn: {
    flex: 2,
    backgroundColor: colors.primary,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.button,
  },
  primaryActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  secondaryActionBtn: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryActionText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
});

export default ProfileCard;
