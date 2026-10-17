import React, { useState, useEffect } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Import 4 Component độc lập đã tách theo đúng yêu cầu đề bài
import AppHeader from './components/AppHeader';
import PrimaryButton from './components/PrimaryButton';
import InputField from './components/InputField';
import Card from './components/Card';

/**
 * BÀI TẬP THỰC HÀNH TUẦN 8: TỪ PROPS ĐẾN FORM REGISTER
 * Chương 3 – Lab 03: Xây dựng bộ component tái sử dụng (Mục 3.7 - 3.11)
 * Môn: Phát triển ứng dụng Mobile đa nền tảng
 * 
 * Sinh viên thực hiện: Bùi Duy Thành
 * Mã sinh viên: 12523080 - Lớp: 12523W.3
 * 
 * Yêu cầu đạt chuẩn:
 * 1. Tách 4 component độc lập: AppHeader, PrimaryButton, InputField, Card.
 * 2. Màn hình Register với 3 trường cốt lõi: Tên, Email, Mật khẩu.
 * 3. Truyền props chuẩn vào InputField: label, value, onChangeText, placeholder, error...
 * 4. Quản lý State form và State lỗi validate.
 * 5. Validate: Tên không rỗng, Email có '@', Mật khẩu >= 6 ký tự.
 * 6. Hiển thị lỗi màu đỏ dưới ô nhập và Disable nút Submit khi form chưa hợp lệ.
 * 7. Tái sử dụng mỗi component ít nhất 2 lần, code sạch, không màn hình trắng.
 */
const App = () => {
  // 1. STATE FORM: Lưu trữ dữ liệu các ô nhập
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // 2. STATE ERRORS: Lưu trữ thông báo lỗi validation của từng trường
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State theo dõi trạng thái đã chạm (touched) vào ô nhập hay chưa
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  // State danh sách các tài khoản đã đăng ký thành công
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      id: '1',
      name: 'Bùi Duy Thành',
      email: 'thanh2122005@gmail.com',
      studentId: '12523080',
    },
  ]);

  // HÀM KIỂM TRA TÍNH HỢP LỆ (VALIDATION LOGIC)
  const validateField = (field, value) => {
    let errorMsg = '';
    const trimmedVal = (value || '').trim();

    if (field === 'name') {
      if (!trimmedVal) {
        errorMsg = 'Họ và tên không được để trống.';
      } else if (trimmedVal.length < 2) {
        errorMsg = 'Họ và tên phải có ít nhất 2 ký tự.';
      }
    } else if (field === 'email') {
      if (!trimmedVal) {
        errorMsg = 'Email không được để trống.';
      } else if (!trimmedVal.includes('@')) {
        errorMsg = 'Email không hợp lệ (bắt buộc phải chứa ký tự @).';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedVal)) {
          errorMsg = 'Định dạng email chưa đúng (ví dụ: user@example.com).';
        }
      }
    } else if (field === 'password') {
      if (!value) {
        errorMsg = 'Mật khẩu không được để trống.';
      } else if (value.length < 6) {
        errorMsg = 'Mật khẩu phải có độ dài tối thiểu từ 6 ký tự.';
      }
    }

    return errorMsg;
  };

  // Hàm xử lý khi người dùng nhập dữ liệu
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Kiểm tra và cập nhật lỗi ngay khi gõ
    const fieldError = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  // Kiểm tra toàn bộ form có hợp lệ hay không để bật/tắt nút Submit
  const isNameValid = formData.name.trim().length >= 2;
  const isEmailValid =
    formData.email.trim().includes('@') &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isPasswordValid = formData.password.length >= 6;

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    !errors.name &&
    !errors.email &&
    !errors.password;

  // Xử lý nộp form đăng ký
  const handleRegister = () => {
    // Validate lại toàn bộ trước khi submit
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const passErr = validateField('password', formData.password);

    if (nameErr || emailErr || passErr) {
      setErrors({ name: nameErr, email: emailErr, password: passErr });
      setTouched({ name: true, email: true, password: true });
      Alert.alert('Lỗi đăng ký', 'Vui lòng kiểm tra và sửa các thông tin chưa hợp lệ!');
      return;
    }

    // Đăng ký thành công
    const newUser = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      studentId: '12523080',
    };

    setRegisteredUsers((prev) => [newUser, ...prev]);

    Alert.alert(
      '🎉 Đăng ký thành công!',
      `Chào mừng ${formData.name}!\nTài khoản email: ${formData.email} đã được đăng ký thành công.`
    );

    // Reset form sau khi đăng ký
    setFormData({ name: '', email: '', password: '' });
    setErrors({ name: '', email: '', password: '' });
    setTouched({ name: false, email: false, password: false });
  };

  // Nút điền mẫu dữ liệu hợp lệ nhanh (để tiện kiểm thử)
  const handleFillSample = () => {
    const sampleData = {
      name: 'Bùi Duy Thành',
      email: 'thanh2122005@gmail.com',
      password: 'StrongPassword123',
    };
    setFormData(sampleData);
    setErrors({ name: '', email: '', password: '' });
    setTouched({ name: true, email: true, password: true });
  };

  // Nút điền mẫu dữ liệu không hợp lệ (để kiểm thử lỗi đỏ và nút disabled)
  const handleFillInvalidSample = () => {
    const invalidData = {
      name: 'B',
      email: 'thanh2122005', // Thiếu @
      password: '123',        // Dưới 6 ký tự
    };
    setFormData(invalidData);
    setErrors({
      name: validateField('name', invalidData.name),
      email: validateField('email', invalidData.email),
      password: validateField('password', invalidData.password),
    });
    setTouched({ name: true, email: true, password: true });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ========================================================
              COMPONENT 1: AppHeader (TÁI SỬ DỤNG LẦN 1)
              ======================================================== */}
          <AppHeader
            title="ĐĂNG KÝ TÀI KHOẢN"
            subtitle="Chương 3 – Lab 03: Xây dựng bộ component tái sử dụng"
            studentName="Bùi Duy Thành"
            studentId="12523080"
            studentClass="12523W.3"
          />

          {/* Thanh hướng dẫn kiểm thử tiện lợi */}
          <View style={styles.testToolbar}>
            <Text style={styles.testToolbarLabel}>Chế độ kiểm thử nhanh:</Text>
            <View style={styles.testBtnRow}>
              <TouchableOpacity
                style={[styles.quickTestBtn, styles.quickTestInvalid]}
                onPress={handleFillInvalidSample}
              >
                <Text style={styles.quickTestInvalidText}>⚡ Test Dữ Liệu Lỗi</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.quickTestBtn, styles.quickTestValid]}
                onPress={handleFillSample}
              >
                <Text style={styles.quickTestValidText}>✓ Test Dữ Liệu Chuẩn</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ========================================================
              COMPONENT 2: Card (TÁI SỬ DỤNG LẦN 1 - FORM ĐĂNG KÝ)
              ======================================================== */}
          <Card
            title="Thông tin đăng ký"
            headerRight={
              <View
                style={[
                  styles.statusBadge,
                  isFormValid ? styles.badgeValid : styles.badgeInvalid,
                ]}
              >
                <Text
                  style={[
                    styles.statusBadgeText,
                    isFormValid ? styles.textBadgeValid : styles.textBadgeInvalid,
                  ]}
                >
                  {isFormValid ? 'Hợp lệ' : 'Chưa hợp lệ'}
                </Text>
              </View>
            }
          >
            {/* COMPONENT 3: InputField (TÁI SỬ DỤNG LẦN 1 - HỌ VÀ TÊN) */}
            <InputField
              label="Họ và tên sinh viên / người dùng (*)"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
              placeholder="Nhập đầy đủ họ và tên (ví dụ: Bùi Duy Thành)"
              error={touched.name ? errors.name : ''}
              autoCapitalize="words"
            />

            {/* COMPONENT 3: InputField (TÁI SỬ DỤNG LẦN 2 - EMAIL) */}
            <InputField
              label="Địa chỉ Email (*)"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              placeholder="Nhập email có chứa '@' (ví dụ: user@example.com)"
              error={touched.email ? errors.email : ''}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* COMPONENT 3: InputField (TÁI SỬ DỤNG LẦN 3 - MẬT KHẨU) */}
            <InputField
              label="Mật khẩu bảo mật (*)"
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
              placeholder="Nhập mật khẩu (tối thiểu từ 6 ký tự)"
              error={touched.password ? errors.password : ''}
              secureTextEntry={true}
              autoCapitalize="none"
            />

            {/* Thông báo điều kiện nút Submit */}
            {!isFormValid && (
              <View style={styles.hintBox}>
                <Text style={styles.hintTitle}>Điều kiện hợp lệ để mở nút Đăng ký:</Text>
                <Text style={styles.hintItem}>
                  {isNameValid ? '✓' : '•'} Họ tên không được để trống (>= 2 ký tự)
                </Text>
                <Text style={styles.hintItem}>
                  {isEmailValid ? '✓' : '•'} Email hợp lệ và bắt buộc chứa ký tự '@'
                </Text>
                <Text style={styles.hintItem}>
                  {isPasswordValid ? '✓' : '•'} Mật khẩu có độ dài tối thiểu từ 6 ký tự
                </Text>
              </View>
            )}

            {/* COMPONENT 4: PrimaryButton (TÁI SỬ DỤNG LẦN 1 - NÚT SUBMIT CHÍNH) */}
            <PrimaryButton
              title={
                isFormValid
                  ? 'Đăng Ký Tài Khoản Ngay'
                  : 'Vui Lòng Hoàn Thiện Thông Tin'
              }
              onPress={handleRegister}
              disabled={!isFormValid}
              variant="primary"
              style={styles.submitBtn}
            />

            {/* COMPONENT 4: PrimaryButton (TÁI SỬ DỤNG LẦN 2 - NÚT XÓA FORM) */}
            <PrimaryButton
              title="Nhập lại từ đầu (Reset)"
              onPress={() => {
                setFormData({ name: '', email: '', password: '' });
                setErrors({ name: '', email: '', password: '' });
                setTouched({ name: false, email: false, password: false });
              }}
              variant="secondary"
            />
          </Card>

          {/* ========================================================
              COMPONENT 2: Card (TÁI SỬ DỤNG LẦN 2 - DANH SÁCH TÀI KHOẢN)
              ======================================================== */}
          <Card title="Danh sách tài khoản đã kích hoạt">
            {registeredUsers.map((user, idx) => (
              <View key={user.id} style={styles.userRow}>
                <View style={styles.userAvatar}>
                  <Text style={styles.avatarText}>
                    {user.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userEmail}>{user.email}</Text>
                  {user.studentId && (
                    <Text style={styles.userMeta}>MSV: {user.studentId}</Text>
                  )}
                </View>
                <View style={styles.userActiveBadge}>
                  <Text style={styles.userActiveText}>Hoạt động</Text>
                </View>
              </View>
            ))}
          </Card>

          {/* Footer bản quyền */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Hoàn thành bài thực hành Tuần 8 - Bùi Duy Thành (12523080)
            </Text>
            <Text style={styles.footerSubText}>
              Chương 3 – Lab 03: Xây dựng bộ component tái sử dụng
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  testToolbar: {
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  testToolbarLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  testBtnRow: {
    flexDirection: 'row',
    gap: 8,
  },
  quickTestBtn: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  quickTestInvalid: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  quickTestInvalidText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '700',
  },
  quickTestValid: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  quickTestValidText: {
    color: '#15803D',
    fontSize: 12,
    fontWeight: '700',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeValid: {
    backgroundColor: '#DCFCE7',
  },
  badgeInvalid: {
    backgroundColor: '#FEE2E2',
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  textBadgeValid: {
    color: '#16A34A',
  },
  textBadgeInvalid: {
    color: '#DC2626',
  },
  hintBox: {
    backgroundColor: '#FFFBEB',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
    marginVertical: 10,
  },
  hintTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#92400E',
    marginBottom: 4,
  },
  hintItem: {
    fontSize: 11.5,
    color: '#78350F',
    marginVertical: 1,
  },
  submitBtn: {
    marginTop: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  userEmail: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 1,
  },
  userMeta: {
    fontSize: 11,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 1,
  },
  userActiveBadge: {
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  userActiveText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#16A34A',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  footerSubText: {
    fontSize: 11,
    color: '#CBD5E1',
    marginTop: 2,
  },
});

export default App;
