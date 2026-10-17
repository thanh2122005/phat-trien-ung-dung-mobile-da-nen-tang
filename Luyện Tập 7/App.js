import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Import các Component theo nội dung Buổi 7 (Chương 3: 3.4 - 3.6)
import LifecycleDemo from './components/LifecycleDemo';
import ControlledInput from './components/ControlledInput';
import UserProfile from './components/UserProfile';

/**
 * Bài tập Tuần 7 - Môn: Phát triển ứng dụng Mobile đa nền tảng
 * Sinh viên thực hiện: Bùi Duy Thành
 * MSV: 12523080 - Lớp: 12523W.3
 * 
 * Nội dung bài học và thực hành:
 * - 3.4: Trình tự hoạt động của Component (Lifecycle: Mounting, Updating, Unmounting & Cleanup)
 * - 3.5: Các Component điều khiển (Controlled Component với TextInput và State)
 * - 3.6: Kỹ thuật lồng Component (Nested Component: UserProfile chứa Avatar)
 */
const App = () => {
  // State điều khiển ẩn/hiện LifecycleDemo để kiểm chứng giai đoạn Unmounting
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(true);

  // Danh sách hồ sơ mẫu để render lồng component (Mục 3.6)
  const profileList = [
    {
      id: '12523080',
      name: 'Bùi Duy Thành',
      role: 'Sinh viên & Lập trình viên React Native',
      bio: 'Đam mê nghiên cứu và phát triển ứng dụng di động đa nền tảng với React Native, Expo và tối ưu hóa hiệu năng UI/UX.',
      profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      studentId: '12523080',
      email: 'thanh2122005@gmail.com',
    },
    {
      id: '12523081',
      name: 'Nguyễn Văn An',
      role: 'Kỹ sư Phần mềm',
      bio: 'Chuyên xây dựng hệ thống backend Node.js và tích hợp RESTful API cho ứng dụng di động.',
      profileImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150',
      studentId: '12523081',
      email: 'an.nguyen@example.com',
    },
    {
      id: '12523082',
      name: 'Trần Thị Mai',
      role: 'Chuyên viên Thiết kế UI/UX',
      bio: 'Yêu thích thiết kế giao diện hiện đại, tối giản, tương tác vi mô (micro-interactions) và trải nghiệm người dùng liền mạch.',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      studentId: '12523082',
      email: 'mai.tran@example.com',
    },
  ];

  const handleConnect = (userName) => {
    Alert.alert('Kết nối thành công', `Bạn đã gửi lời mời kết nối tới ${userName}!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ========================================================
            HEADER THÔNG TIN SINH VIÊN VÀ BÀI TẬP TUẦN 7
            ======================================================== */}
        <View style={styles.header}>
          <Text style={styles.badge}>BÀI TẬP TUẦN 7</Text>
          <Text style={styles.title}>Vòng Đời, Controlled Component & Lồng Component</Text>
          <Text style={styles.subtitle}>Môn: Phát triển ứng dụng Mobile đa nền tảng (Chương 3.4 - 3.6)</Text>
          <View style={styles.authorBox}>
            <Text style={styles.authorText}>
              Sinh viên: <Text style={styles.bold}>Bùi Duy Thành</Text>
            </Text>
            <Text style={styles.authorText}>
              MSV: <Text style={styles.bold}>12523080</Text> | Lớp: <Text style={styles.bold}>12523W.3</Text>
            </Text>
          </View>
        </View>

        {/* ========================================================
            CHUYÊN ĐỀ 1: VÒNG ĐỜI CỦA COMPONENT (LIFECYCLE - 3.4)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>1</Text>
            </View>
            <View style={styles.sectionHeaderInfo}>
              <Text style={styles.sectionTitle}>3.4 Vòng đời Component (Lifecycle)</Text>
              <Text style={styles.sectionDesc}>Mounting → Updating → Unmounting & Cleanup</Text>
            </View>
          </View>

          {/* Nút bật/tắt để kiểm chứng quá trình Unmounting */}
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              showLifecycleDemo ? styles.toggleBtnActive : styles.toggleBtnInactive,
            ]}
            activeOpacity={0.8}
            onPress={() => setShowLifecycleDemo((prev) => !prev)}
          >
            <Text style={styles.toggleBtnText}>
              {showLifecycleDemo
                ? '✕ Ẩn Component (Kích hoạt Unmounting)'
                : '+ Hiện Component (Kích hoạt Mounting)'}
            </Text>
          </TouchableOpacity>

          {showLifecycleDemo ? (
            <LifecycleDemo />
          ) : (
            <View style={styles.unmountedNotice}>
              <Text style={styles.unmountedNoticeText}>
                Component đã bị tháo gỡ (Unmounted). Cleanup function trong useEffect đã được gọi để giải phóng tài nguyên.
              </Text>
            </View>
          )}
        </View>

        {/* ========================================================
            CHUYÊN ĐỀ 2: CÁC COMPONENT ĐIỀU KHIỂN (CONTROLLED COMPONENT - 3.5)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>2</Text>
            </View>
            <View style={styles.sectionHeaderInfo}>
              <Text style={styles.sectionTitle}>3.5 Controlled Component</Text>
              <Text style={styles.sectionDesc}>Quản lý dữ liệu ô nhập (TextInput) đồng bộ với State</Text>
            </View>
          </View>

          <ControlledInput />
        </View>

        {/* ========================================================
            CHUYÊN ĐỀ 3: COMPONENT LỒNG COMPONENT (NESTED COMPONENT - 3.6)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>3</Text>
            </View>
            <View style={styles.sectionHeaderInfo}>
              <Text style={styles.sectionTitle}>3.6 Component lồng Component</Text>
              <Text style={styles.sectionDesc}>Lồng ghép Avatar bên trong UserProfile qua props</Text>
            </View>
          </View>

          {/* Render danh sách hồ sơ người dùng lồng Avatar */}
          {profileList.map((item) => (
            <UserProfile
              key={item.id}
              name={item.name}
              role={item.role}
              bio={item.bio}
              profileImage={item.profileImage}
              studentId={item.studentId}
              email={item.email}
              onPressConnect={handleConnect}
            />
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Hoàn thành bài tập luyện tập thực hành Tuần 7 - Bùi Duy Thành (12523080)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 36,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 12,
  },
  badge: {
    backgroundColor: '#DBEAFE',
    color: '#1D4ED8',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  authorBox: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 13,
    color: '#475569',
    marginVertical: 1,
  },
  bold: {
    fontWeight: '700',
    color: '#1E293B',
  },
  section: {
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sectionNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionHeaderInfo: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 1,
  },
  toggleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleBtnActive: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  toggleBtnInactive: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  toggleBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
  },
  unmountedNotice: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  unmountedNoticeText: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
