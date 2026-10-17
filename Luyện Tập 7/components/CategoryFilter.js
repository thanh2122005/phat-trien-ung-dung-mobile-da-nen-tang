import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Component CategoryFilter - Thanh phân loại danh mục sản phẩm (Horizontal List)
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const renderCategoryItem = ({ item }) => {
    const isSelected = item.id === selectedCategory;
    return (
      <TouchableOpacity
        style={[styles.categoryChip, isSelected && styles.categoryChipActive]}
        onPress={() => onSelectCategory(item.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.categoryIcon}>{item.icon}</Text>
        <Text style={[styles.categoryText, isSelected && styles.categoryTextActive]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoryChipActive: {
    backgroundColor: '#2563EB',
    borderColor: '#1D4ED8',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default CategoryFilter;
