import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Bài tập 1 - Tuần 6
 * Component Greeting: Nhận prop 'name' và hiển thị lời chào mừng người dùng.
 */
const Greeting = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.waveIcon}>👋</Text>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>
          Xin chào, <Text style={styles.highlightName}>{name || 'Bạn'}!</Text>
        </Text>
        <Text style={styles.subText}>Chào mừng bạn đến với ứng dụng React Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  waveIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  highlightName: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});

export default Greeting;
