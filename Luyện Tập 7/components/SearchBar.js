import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Component SearchBar - Controlled Component (Mục 3.5)
 * Dữ liệu ô tìm kiếm được đồng bộ hai chiều trực tiếp với React State
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const SearchBar = ({ searchQuery, onChangeSearch, onClear, totalResults = 0 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          value={searchQuery}
          onChangeText={onChangeSearch}
          placeholder="Tìm kiếm sản phẩm công nghệ (iPhone, MacBook, Sony...)"
          placeholderTextColor="#94A3B8"
          returnKeyType="search"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity style={styles.clearBtn} onPress={onClear} activeOpacity={0.7}>
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.feedbackRow}>
        <Text style={styles.feedbackText}>
          {searchQuery.trim().length > 0 ? (
            <>
              Đang lọc theo từ khóa: <Text style={styles.queryHighlight}>"{searchQuery}"</Text> ({totalResults} kết quả)
            </>
          ) : (
            `Tất cả sản phẩm có sẵn (${totalResults})`
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    height: 46,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    height: '100%',
  },
  clearBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: 'bold',
  },
  feedbackRow: {
    marginTop: 6,
    paddingHorizontal: 4,
  },
  feedbackText: {
    fontSize: 12,
    color: '#64748B',
  },
  queryHighlight: {
    color: '#2563EB',
    fontWeight: '700',
  },
});

export default SearchBar;
