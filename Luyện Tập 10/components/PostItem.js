import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { borderRadius, colors, shadows, spacing } from '../theme';

/**
 * Component hiển thị một bài viết trong FlatList (Bài tập 1 - Mức dễ)
 * Hiển thị tối thiểu: ID, Tiêu đề (title), Tóm tắt (body)
 * Tích hợp nút Đánh dấu yêu thích (Favorite) lưu AsyncStorage theo chuẩn Lab 05
 */
const PostItem = ({ item, isFavorite, onToggleFavorite, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onPress && onPress(item)}
      style={styles.card}
    >
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>#{item.id}</Text>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => onToggleFavorite && onToggleFavorite(item)}
          style={[styles.favBtn, isFavorite && styles.favBtnActive]}
        >
          <Text style={[styles.favIcon, isFavorite && styles.favIconActive]}>
            {isFavorite ? '★' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>

      <Text style={styles.body} numberOfLines={3}>
        {item.body}
      </Text>

      <View style={styles.footerRow}>
        <Text style={styles.userIdText}>Tác giả: User #{item.userId}</Text>
        <Text style={styles.readMoreText}>Chi tiết →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  favBtn: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favBtnActive: {
    backgroundColor: colors.warningLight,
  },
  favIcon: {
    fontSize: 18,
    color: colors.textMuted,
  },
  favIconActive: {
    color: '#D97706',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    textTransform: 'capitalize',
    lineHeight: 21,
  },
  body: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
    marginBottom: spacing.sm,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.xs,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  userIdText: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  readMoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default PostItem;
