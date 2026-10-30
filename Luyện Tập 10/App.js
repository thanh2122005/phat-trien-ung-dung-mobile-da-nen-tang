import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { borderRadius, colors, shadows, spacing } from './theme';
import ApiPostsView from './components/ApiPostsView';
import DeviceDataForm from './components/DeviceDataForm';
import SavedDataView from './components/SavedDataView';

/**
 * BÀI TẬP THỰC HÀNH TUẦN 10 (Chương 5 - Lab 05)
 * TÍCH HỢP REST API, THIẾT BỊ NGOẠI VI (IMAGE PICKER, GEOLOCATION) VÀ LƯU TRỮ ASYNCSTORAGE
 * 
 * Sinh viên thực hiện: BÙI DUY THÀNH
 * Mã số sinh viên: 12523080 - Lớp: 12523W.3
 * 
 * Cấu trúc ứng dụng:
 * - Tab 1: Bài 1 (Mức dễ): Gọi API public JSONPlaceholder, hiển thị FlatList có loading, error và pull-to-refresh
 * - Tab 2: Bài 2 (Mức trung bình): Chọn ảnh Image Picker, lấy tọa độ Geolocation, lưu thông tin vào AsyncStorage
 * - Tab 3: Bài 2 (Mức trung bình): Màn hình "Saved Data" đọc lại dữ liệu đã lưu từ AsyncStorage
 */
const App = () => {
  const [activeTab, setActiveTab] = useState('bai1'); // 'bai1' | 'bai2_form' | 'bai2_saved'

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />

      {/* TOP BANNER: THÔNG TIN SINH VIÊN */}
      <View style={styles.topHeader}>
        <View style={styles.studentBadgeRow}>
          <View style={styles.studentPill}>
            <Text style={styles.studentPillText}>BÙI DUY THÀNH - 12523080</Text>
          </View>
          <View style={styles.classPill}>
            <Text style={styles.classPillText}>LỚP 12523W.3</Text>
          </View>
        </View>
        <Text style={styles.headerAppTitle}>BÀI TẬP TUẦN 10: REST API & THIẾT BỊ</Text>
        <Text style={styles.headerSubtitle}>
          Chương 5 – Lab 05: API + Lưu trữ cục bộ + Tài nguyên thiết bị
        </Text>
      </View>

      {/* TAB NAVIGATION BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'bai1' && styles.tabItemActive]}
          onPress={() => setActiveTab('bai1')}
        >
          <Text style={[styles.tabText, activeTab === 'bai1' && styles.tabTextActive]}>
            📰 Bài 1: REST API
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'bai2_form' && styles.tabItemActive]}
          onPress={() => setActiveTab('bai2_form')}
        >
          <Text style={[styles.tabText, activeTab === 'bai2_form' && styles.tabTextActive]}>
            ⚙️ Bài 2: Nhập liệu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'bai2_saved' && styles.tabItemActive]}
          onPress={() => setActiveTab('bai2_saved')}
        >
          <Text style={[styles.tabText, activeTab === 'bai2_saved' && styles.tabTextActive]}>
            💾 Bài 2: Saved Data
          </Text>
        </TouchableOpacity>
      </View>

      {/* TAB CONTENTS */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {activeTab === 'bai1' && <ApiPostsView />}
        {activeTab === 'bai2_form' && (
          <DeviceDataForm onDataSaved={() => setActiveTab('bai2_saved')} />
        )}
        {activeTab === 'bai2_saved' && (
          <SavedDataView onNavigateToInput={() => setActiveTab('bai2_form')} />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topHeader: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  studentBadgeRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  studentPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
  },
  studentPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  classPill: {
    backgroundColor: colors.warning,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
  },
  classPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  headerAppTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 11,
    color: '#BAE6FD',
    marginTop: 2,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    ...shadows.card,
  },
  tabItem: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabItemActive: {
    borderBottomColor: colors.primary,
    backgroundColor: '#F0F9FF',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.primary,
    fontWeight: '800',
  },
});

export default App;
