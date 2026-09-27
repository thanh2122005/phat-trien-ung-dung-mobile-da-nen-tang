import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Bài tập Tuần 5 - Môn: Phát triển ứng dụng Mobile đa nền tảng
// Sinh viên: Bùi Duy Thành
// MSV: 12523080 - Lớp: 12523W.3
// Đề bài: Sử dụng View và Text hiển thị "Hello React Native"

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
});

export default HelloWorldApp;
