import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Component ProductCard - Tách riêng từ renderItem của FlatList
 * Đảm bảo tiêu chí: "Tối ưu FlatList với keyExtractor và renderItem tách component"
 * Tự động responsive theo chiều rộng thẻ (cardWidth) do màn hình hoặc số cột truyền vào.
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const ProductCard = ({ item, cardWidth, onPressBuy }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={[styles.card, cardWidth ? { width: cardWidth } : null]}>
      {/* Khung ảnh sản phẩm có bo góc và tỷ lệ chuẩn */}
      <View style={styles.imageContainer}>
        {item.image && !imageError ? (
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode="contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <View style={styles.fallbackBox}>
            <Text style={styles.fallbackEmoji}>{item.emoji || '📦'}</Text>
          </View>
        )}

        {/* Badge Giảm giá */}
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{item.discount}%</Text>
          </View>
        )}

        {/* Badge Danh mục */}
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{item.categoryName}</Text>
        </View>
      </View>

      {/* Thông tin chi tiết sản phẩm */}
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        {/* Đánh giá sao & lượt bán */}
        <View style={styles.ratingRow}>
          <Text style={styles.star}>⭐ {item.rating}</Text>
          <Text style={styles.soldText}>| Đã bán {item.sold}</Text>
        </View>

        {/* Giá bán và Nút Mua ngay */}
        <View style={styles.footerRow}>
          <View>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>

          <TouchableOpacity
            style={styles.buyBtn}
            activeOpacity={0.8}
            onPress={() => onPressBuy && onPressBuy(item)}
          >
            <Text style={styles.buyBtnText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 14,
  },
  imageContainer: {
    height: 160,
    backgroundColor: '#F8FAFC',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  productImage: {
    width: '85%',
    height: '85%',
  },
  fallbackBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackEmoji: {
    fontSize: 54,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  categoryBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryBadgeText: {
    color: '#3730A3',
    fontSize: 10,
    fontWeight: '700',
  },
  contentContainer: {
    padding: 14,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 20,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  star: {
    fontSize: 12,
    color: '#D97706',
    fontWeight: '700',
    marginRight: 6,
  },
  soldText: {
    fontSize: 11,
    color: '#94A3B8',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 8,
  },
  originalPrice: {
    fontSize: 11,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563EB',
  },
  buyBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
  },
  buyBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default ProductCard;
