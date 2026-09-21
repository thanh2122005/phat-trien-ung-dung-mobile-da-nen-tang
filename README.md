# BÁO CÁO BÀI TẬP VÀ THỰC HÀNH
## MÔN: PHÁT TRIỂN ỨNG DỤNG DI ĐỘNG ĐA NỀN TẢNG

---

### 👨‍🎓 Thông tin sinh viên
- **Họ và tên:** Bùi Duy Thành
- **Mã sinh viên:** 12523080
- **Lớp:** 12523W.3

---

### 📂 Cấu trúc thư mục Repository
Repository này được tổ chức theo từng tuần học và nội dung bài tập:

```text
├── Luyện tập 1/
│   ├── BuiDuyThanh_LuyenTap1.docx   # Báo cáo lý thuyết và thực hành Tuần 1
│   ├── screenshot_buoi1.png         # Ảnh chụp màn hình ứng dụng chạy trên thiết bị
│   └── RNStarter/                   # Mã nguồn dự án thực hành React Native (Expo)
├── Luyện tập 2/
│   ├── BuiDuyThanh_LuyenTap2.docx   # Báo cáo lý thuyết và thực hành Tuần 2
│   ├── screenshot_buoi2.png         # Ảnh chụp màn hình ứng dụng Todo Mini
│   └── TodoApp/                     # Mã nguồn dự án Todo Mini (State, List & Input)
├── Luyện Tập 4/
│   └── BuiDuyThanh_LuyenTap4.docx   # Báo cáo bài tập Tuần 4
├── Tài Liệu tuần/                   # Tài liệu học tập và slide bài giảng
└── README.md
```

---

## 📱 Báo cáo Thực hành 1: Tạo app khởi động (RNStarter)

### 1. Mục tiêu bài thực hành
- Cài đặt và chuẩn bị môi trường phát triển ứng dụng di động React Native (Node.js LTS, VS Code, Expo).
- Khởi tạo dự án ứng dụng React Native bằng Expo (`RNStarter`).
- Chạy dự án trực tiếp trên thiết bị di động thật thông qua ứng dụng **Expo Go**.
- Chỉnh sửa nội dung Text tại màn hình đầu tiên (`src/app/index.tsx`) và quan sát cơ chế **Fast Refresh / Hot Reload**.

### 2. Các bước triển khai
- **Khởi tạo dự án:**
  ```bash
  cd "Luyện tập 1"
  npx create-expo-app RNStarter
  ```
- **Khởi chạy ứng dụng:**
  ```bash
  cd "Luyện tập 1/RNStarter"
  npx expo start
  ```
- **Kiểm thử:** Mở app Expo Go trên điện thoại, quét mã QR từ Metro Bundler để mở ứng dụng và kiểm tra tính năng cập nhật giao diện trực tiếp (Fast Refresh).

### 3. Kết quả thực nghiệm trên thiết bị di động
Ứng dụng được biên dịch và chạy thành công trên thiết bị di động với nội dung hiển thị đã được chỉnh sửa theo yêu cầu:

<div align="center">
  <img src="./Luyện tập 1/screenshot_buoi1.png" alt="Kết quả chạy ứng dụng RNStarter trên thiết bị di động" width="320" />
  <p><i>Hình: Ứng dụng RNStarter hiển thị thành công trên thiết bị di động</i></p>
</div>

---

### 4. Checklist nộp bài
- [x] Repository chứa đầy đủ mã nguồn dự án `RNStarter` trong thư mục `Luyện tập 1/RNStarter`.
- [x] Ảnh chụp màn hình app chạy thực tế trên thiết bị di động (được lưu tại `Luyện tập 1/screenshot_buoi1.png` và đính kèm trong báo cáo `BuiDuyThanh_LuyenTap1.docx`).
- [x] Gắn thẻ Git tag: `buoi1`.

---

## 📝 Báo cáo Thực hành 2: Todo Mini App (State, List & Input)

### 1. Mục tiêu bài thực hành
- Nối liền nội dung lý thuyết với thao tác lập trình thực tế: **state → list → event → cập nhật UI**.
- Xây dựng màn hình Todo gồm: Danh sách công việc, ô nhập (`TextInput`) và nút Thêm (`+ Thêm`).
- Quản lý danh sách Todo bằng `useState` dạng mảng để giao diện tự động đồng bộ khi dữ liệu thay đổi.
- Sử dụng component `FlatList` để tối ưu hiệu năng hiển thị danh sách.
- Cài đặt tính năng xoá công việc bằng phương thức `filter` theo `id`.
- Hoàn thiện style giao diện (padding, border, spacing, shadow) sạch đẹp, rõ ràng.

### 2. Các bước triển khai
- **Khởi tạo dự án:**
  ```bash
  cd "Luyện tập 2"
  npx create-expo-app TodoApp -t expo-template-blank@54
  ```
- **Cài đặt dependencies & Lập trình:** Xây dựng toàn bộ logic ứng dụng tại `Luyện tập 2/TodoApp/App.js`.
- **Khởi chạy ứng dụng:**
  ```bash
  cd "Luyện tập 2/TodoApp"
  npx expo start -c
  ```
- **Kiểm thử trên thiết bị:** Quét mã QR bằng Expo Go trên điện thoại, thực hiện thêm công việc mới và xoá công việc để kiểm tra tính năng cập nhật state.

### 3. Kết quả thực nghiệm trên thiết bị di động
Ứng dụng chạy mượt mà, hiển thị danh sách công việc đầy đủ với ít nhất 3 item theo yêu cầu đề bài:

<div align="center">
  <img src="./Luyện tập 2/screenshot_buoi2.png" alt="Kết quả chạy ứng dụng Todo Mini trên thiết bị di động" width="320" />
  <p><i>Hình: Ứng dụng Todo Mini hoạt động hoàn chỉnh với danh sách 3 item và tính năng Thêm / Xoá</i></p>
</div>

---

### 4. Checklist nộp bài
- [x] Repository chứa mã nguồn ứng dụng `TodoApp` chạy được trong thư mục `Luyện tập 2/TodoApp`.
- [x] Ảnh chụp màn hình danh sách có ít nhất 3 item (được lưu tại `Luyện tập 2/screenshot_buoi2.png` và đính kèm trong báo cáo `BuiDuyThanh_LuyenTap2.docx`).
- [x] Gắn thẻ Git tag: `buoi2`.

