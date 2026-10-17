import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Component Card - Bài thực hành Tuần 8 (Chương 3: Lab 03)
 * Component khung chứa tái sử dụng nhận props children, title, style...
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const Card = ({ title, children, style, headerRight }) => {
  return (
    <View style={[styles.card, style]}>
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {headerRight}
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  content: {
    width: '100%',
  },
});

export default Card;
