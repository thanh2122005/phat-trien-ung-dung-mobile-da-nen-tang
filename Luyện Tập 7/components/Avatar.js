import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Bài tập 3a - Tuần 7: Component Avatar
 * Áp dụng Mục 3.6: Component con nhận props imageUrl và hiển thị ảnh đại diện bo tròn
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const Avatar = ({ imageUrl, name = '', size = 56 }) => {
  const [imageError, setImageError] = useState(false);

  // Lấy chữ cái đầu làm avatar dự phòng nếu không có ảnh hoặc tải ảnh lỗi
  const initials = name
    ? name
        .trim()
        .split(' ')
        .map((part) => part[0])
        .slice(-2)
        .join('')
        .toUpperCase()
    : 'U';

  const avatarRadius = size / 2;

  return (
    <View style={[styles.avatarWrapper, { width: size, height: size, borderRadius: avatarRadius }]}>
      {imageUrl && !imageError ? (
        <Image
          source={{ uri: imageUrl }}
          style={[styles.avatarImage, { width: size, height: size, borderRadius: avatarRadius }]}
          onError={() => setImageError(true)}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.fallbackContainer, { width: size, height: size, borderRadius: avatarRadius }]}>
          <Text style={[styles.fallbackText, { fontSize: size * 0.38 }]}>{initials}</Text>
        </View>
      )}

      {/* Chấm tròn trạng thái hoạt động */}
      <View style={[styles.onlineIndicator, { right: 2, bottom: 2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    position: 'relative',
    backgroundColor: '#E2E8F0',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  avatarImage: {
    backgroundColor: '#F1F5F9',
  },
  fallbackContainer: {
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  onlineIndicator: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default Avatar;
