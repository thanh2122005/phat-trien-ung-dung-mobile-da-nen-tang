import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import các Component theo yêu cầu của đề bài
import Greeting from './components/Greeting';
import StudentInfo from './components/StudentInfo';
import CounterHook from './components/CounterHook';

/**
 * Bài tập Tuần 6 - Môn: Phát triển ứng dụng Mobile đa nền tảng
 * Sinh viên thực hiện: Bùi Duy Thành
 * MSV: 12523080 - Lớp: 12523W.3
 * 
 * Nội dung: Tổng hợp các bài tập thực hành về Component & Hooks trong React Native:
 * - Bài tập 1: Functional Component Greeting (sử dụng props).
 * - Bài tập 2: Component StudentInfo (tái sử dụng component hiển thị danh sách).
 * - Bài tập 3: Component CounterHook (quản lý state với useState).
 */
const App = () => {
  // Dữ liệu danh sách sinh viên cho Bài tập 2
  const studentList = [
    {
      id: '12523080',
      fullName: 'Bùi Duy Thành',
      studentClass: '12523W.3',
      major: 'Công nghệ thông tin',
    },
    {
      id: '12523081',
      fullName: 'Nguyễn Văn An',
      studentClass: '12523W.3',
      major: 'Kỹ thuật phần mềm',
    },
    {
      id: '12523082',
      fullName: 'Trần Thị Mai',
      studentClass: '12523W.2',
      major: 'Hệ thống thông tin',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header thông tin sinh viên & bài học */}
        <View style={styles.header}>
          <Text style={styles.badge}>BÀI TẬP TUẦN 6</Text>
          <Text style={styles.title}>Component & Hooks</Text>
          <Text style={styles.subtitle}>Môn: Phát triển ứng dụng Mobile đa nền tảng</Text>
          <View style={styles.authorBox}>
            <Text style={styles.authorText}>Sinh viên: <Text style={styles.bold}>Bùi Duy Thành</Text></Text>
            <Text style={styles.authorText}>MSV: <Text style={styles.bold}>12523080</Text> | Lớp: <Text style={styles.bold}>12523W.3</Text></Text>
          </View>
        </View>

        {/* ========================================================
            BÀI TẬP 1: COMPONENT GREETING (PROPS)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>1</Text>
            </View>
            <View>
              <Text style={styles.sectionTitle}>Bài tập 1: Component Greeting</Text>
              <Text style={styles.sectionDesc}>Truyền dữ liệu bằng props và tái sử dụng component</Text>
            </View>
          </View>

          {/* Sử dụng Greeting ít nhất 2 lần với các tên khác nhau theo yêu cầu đề bài */}
          <Greeting name="Bùi Duy Thành" />
          <Greeting name="Nguyễn Văn An" />
          <Greeting name="Trần Thị Mai" />
        </View>

        {/* ========================================================
            BÀI TẬP 2: COMPONENT STUDENTINFO (HIỂN THỊ DANH SÁCH)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>2</Text>
            </View>
            <View>
              <Text style={styles.sectionTitle}>Bài tập 2: Component StudentInfo</Text>
              <Text style={styles.sectionDesc}>Tổ chức giao diện thành các phần nhỏ & tái sử dụng</Text>
            </View>
          </View>

          {/* Render danh sách sinh viên qua các StudentInfo độc lập */}
          {studentList.map(student => (
            <StudentInfo
              key={student.id}
              studentId={student.id}
              fullName={student.fullName}
              studentClass={student.studentClass}
              major={student.major}
            />
          ))}
        </View>

        {/* ========================================================
            BÀI TẬP 3: COMPONENT COUNTERHOOK (USESTATE)
            ======================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumber}>
              <Text style={styles.sectionNumberText}>3</Text>
            </View>
            <View>
              <Text style={styles.sectionTitle}>Bài tập 3: Component CounterHook</Text>
              <Text style={styles.sectionDesc}>Quản lý trạng thái và re-render giao diện với useState</Text>
            </View>
          </View>

          {/* Gọi Component CounterHook */}
          <CounterHook />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Hoàn thành bài tập luyện tập thực hành Tuần 6</Text>
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
    paddingBottom: 32,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 1,
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
  },
});

export default App;
