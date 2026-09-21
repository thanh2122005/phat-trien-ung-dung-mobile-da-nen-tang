import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // 1. State lưu trữ danh sách todo dạng mảng (khởi tạo sẵn 3 item để đáp ứng yêu cầu checklist)
  const [todos, setTodos] = useState([
    { id: '1', text: 'Học lý thuyết React Native & JSX' },
    { id: '2', text: 'Thực hành State, Props và FlatList' },
    { id: '3', text: 'Hoàn thành bài tập Todo mini Buổi 2' },
  ]);

  // State lưu trữ nội dung ô nhập input
  const [inputText, setInputText] = useState('');

  // 2. Hàm thêm Todo mới vào state mảng
  const handleAddTodo = () => {
    if (inputText.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập nội dung công việc!');
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: inputText.trim(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInputText('');
  };

  // 3. Hàm xoá Todo bằng filter theo id
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 4. Render từng phần tử trong danh sách FlatList
  const renderTodoItem = ({ item, index }) => (
    <View style={styles.todoItem}>
      <View style={styles.todoTextContainer}>
        <Text style={styles.todoBadge}>#{index + 1}</Text>
        <Text style={styles.todoText}>{item.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTodo(item.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📝 Todo Mini App</Text>
          <Text style={styles.headerSubtitle}>Thực hành Buổi 2: State, List & Input</Text>
        </View>

        {/* Form nhập liệu & Nút Thêm */}
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="Nhập công việc cần làm..."
            placeholderTextColor="#94a3b8"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleAddTodo}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTodo}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>+ Thêm</Text>
          </TouchableOpacity>
        </View>

        {/* Thống kê số lượng */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>
            Tổng số công việc: <Text style={styles.statsBold}>{todos.length}</Text>
          </Text>
        </View>

        {/* Danh sách công việc bằng FlatList */}
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>🎉 Chưa có công việc nào!</Text>
              <Text style={styles.emptySubtext}>Hãy nhập vào ô bên trên và bấm "+ Thêm".</Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  inputCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1e293b',
  },
  addButton: {
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  statsText: {
    fontSize: 13,
    color: '#64748b',
  },
  statsBold: {
    fontWeight: 'bold',
    color: '#2563eb',
  },
  listContainer: {
    paddingBottom: 24,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  todoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  todoBadge: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3b82f6',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 15,
    color: '#1e293b',
    lineHeight: 20,
  },
  deleteButton: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#ef4444',
    fontWeight: '600',
    fontSize: 13,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 13,
    color: '#94a3b8',
  },
});

