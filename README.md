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
├── Luyện Tập 5/
│   ├── BuiDuyThanh_LuyenTap5.docx   # Báo cáo bài tập Tuần 5 (Lý thuyết & Thực hành)
│   └── App.js                       # Mã nguồn ví dụ thực hành Hello React Native
├── Luyện Tập 6/
│   ├── BuiDuyThanh_LuyenTap6.docx   # Báo cáo lý thuyết và thực hành Tuần 6
│   ├── components/
│   │   ├── Greeting.js              # Bài 1: Functional Component Greeting (Props)
│   │   ├── StudentInfo.js           # Bài 2: Component StudentInfo (Tái sử dụng hiển thị danh sách)
│   │   └── CounterHook.js           # Bài 3: Component CounterHook (Quản lý state với useState)
│   └── App.js                       # Màn hình chính tổng hợp các component Tuần 6
├── Luyện Tập 7/
│   ├── BuiDuyThanh_LuyenTap7.docx   # Báo cáo lý thuyết và thực hành Tuần 7
│   ├── components/
│   │   ├── LifecycleDemo.js         # Bài 1: Vòng đời Component (Mounting, Updating, Unmounting & Cleanup)
│   │   ├── ControlledInput.js       # Bài 2: Controlled Component với TextInput, validation & preview
│   │   ├── Avatar.js                # Bài 3a: Component con hiển thị ảnh đại diện bo tròn
│   │   └── UserProfile.js           # Bài 3b: Component lồng Avatar và thông tin cá nhân
│   └── App.js                       # Màn hình chính tổng hợp các chuyên đề Tuần 7
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

---

## 📱 Báo cáo Thực hành 5: Quy trình thiết kế, Kiến trúc luồng & Build trên thiết bị thật

### 1. Mục tiêu bài học & thực hành
- Nắm vững kiến trúc 3 luồng trong React Native: **Native thread**, **JavaScript thread** và **Shadow thread** (với Yoga Layout Engine).
- Hiểu sâu luồng render giao diện: từ khai báo JSX (`View`, `Text`) đến ánh xạ thành các Native Component thực thụ trên Android (`ViewGroup`, `TextView`) và iOS (`UIView`, `UITextView`).
- Hiểu rõ vai trò của **JSI** (JavaScript Interface) trong việc giao tiếp trực tiếp đồng bộ thay thế cho Bridge truyền thống.
- Làm chủ quy trình chuẩn bị thiết bị Android thật để build ứng dụng (Developer Options, USB Debugging, ADB devices, màn hình mở khóa) và xử lý các lỗi thường gặp.
- Nắm rõ sự khác biệt và điều kiện bắt buộc khi build trên Android so với iOS (Xcode, macOS, Apple ID).

### 2. Sản phẩm hoàn thành trong Tuần 5
- **Tài liệu báo cáo chi tiết:** `Luyện Tập 5/BuiDuyThanh_LuyenTap5.docx` (đầy đủ 5 câu hỏi ôn tập lý thuyết và 3 bài tập thực hành theo yêu cầu của giảng viên).
- **Mã nguồn thực hành:** `Luyện Tập 5/App.js` (ví dụ giao diện chuẩn React Native hiển thị 'Hello React Native' sử dụng `View` và `Text`).

---

## 📱 Báo cáo Thực hành 6: Component & Hooks trong React Native

### 1. Mục tiêu bài học & thực hành
- Nắm vững khái niệm **Component** - khối xây dựng cơ bản của ứng dụng React Native với các đặc tính: độc lập (independent), tái sử dụng (reusable), và đóng gói (encapsulated).
- Hiểu và phân biệt rõ sự khác nhau giữa **Functional Component** và **Class Component**, lý do Functional Component kết hợp Hooks trở thành xu hướng chuẩn hiện đại.
- Làm chủ Hook cốt lõi **`useState`**: Quản lý trạng thái nội tại, hiểu luồng kích hoạt re-render giao diện khi state cập nhật so với biến thông thường.
- Hiểu cơ chế hoạt động của **`useEffect`**: Xử lý các tác vụ phụ (side effects), vòng đời component, API fetching, subscriptions và cleanup function.
- Rèn luyện kỹ năng chia nhỏ giao diện thành các Component độc lập, truyền và tái sử dụng dữ liệu thông qua **props**.

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 6/`)
- [Greeting.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%206/components/Greeting.js): Functional component nhận prop `name` và render lời chào thân thiện.
- [StudentInfo.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%206/components/StudentInfo.js): Component hiển thị thẻ thông tin sinh viên (Họ tên, Lớp, Ngành, Mã sinh viên) nhận qua `props`.
- [CounterHook.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%206/components/CounterHook.js): Component sử dụng `useState` quản lý bộ đếm khởi tạo từ 0, nút bấm "Tăng" kích hoạt cập nhật state và re-render giao diện.
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%206/App.js): Màn hình chính tổng hợp cả 3 bài tập với giao diện phân khu trực quan, hiển thị thông tin sinh viên Bùi Duy Thành (MSV: 12523080).

---

## 📱 Báo cáo Thực hành 7: Vòng đời, Controlled Component & Lồng Component trong React Native

### 1. Mục tiêu bài học & thực hành
- Nắm vững **Vòng đời của Component (Lifecycle)** trong React Native:
  - **Mounting (Gắn kết):** Khởi tạo component và gắn vào Virtual DOM; khởi chạy side-effects như timers, API calls với `useEffect(() => { ... }, [])`.
  - **Updating (Cập nhật):** Re-render giao diện khi props/state thay đổi, theo dõi và xử lý dữ liệu qua `useEffect(() => { ... }, [dependencies])`.
  - **Unmounting (Tháo gỡ):** Giải phóng tài nguyên, hủy timers/subscriptions thông qua **cleanup function** (`return () => { ... }`).
- Hiểu và làm chủ **Controlled Component**:
  - Dữ liệu của ô nhập liệu (`TextInput`) được kiểm soát và đồng bộ hai chiều trực tiếp bởi React `state`.
  - Kiểm tra tính hợp lệ dữ liệu thời gian thực (real-time validation), chuẩn hóa ký tự, điều khiển nút xóa nội dung (Clear) và xem trước (live preview).
- Thực hành kỹ thuật **Lồng Component (Nested Component)**:
  - Chia nhỏ cấu trúc giao diện phức tạp thành các component chuyên trách độc lập.
  - Xây dựng component con `Avatar` (hiển thị ảnh bo tròn, indicator trạng thái online) và nhúng vào component cha `UserProfile` (hiển thị danh thiếp sinh viên/chuyên viên).
  - Quản lý luồng dữ liệu một chiều (Unidirectional Data Flow) thông qua việc truyền và tái sử dụng `props`.

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 7/`)
- [LifecycleDemo.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/LifecycleDemo.js): Minh họa đầy đủ 3 giai đoạn Mounting, Updating và Unmounting; tích hợp timer đếm thời gian sống, nút kích hoạt re-render và hiển thị nhật ký vòng đời (lifecycle logs).
- [ControlledInput.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/ControlledInput.js): Minh họa Controlled Component với ô nhập TextInput kết nối state, bộ đếm ký tự, validation tức thời, nút điền mẫu và nút xóa dữ liệu.
- [Avatar.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/Avatar.js): Component con hiển thị ảnh đại diện bo tròn, hỗ trợ chữ cái đầu fallback và chấm tròn trạng thái online.
- [UserProfile.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/UserProfile.js): Component lồng Avatar bên trong, nhận thông tin hồ sơ (họ tên, vai trò, mã sinh viên, email, tiểu sử) qua `props`.
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/App.js): Màn hình chính tổng hợp cả 3 chuyên đề với thiết kế phân khu hiện đại, có nút Toggle kiểm tra quá trình Unmounting và danh sách hồ sơ sinh viên Bùi Duy Thành (MSV: 12523080).
- [BuiDuyThanh_LuyenTap7.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/BuiDuyThanh_LuyenTap7.docx): Tài liệu báo cáo hoàn chỉnh gồm đầy đủ câu hỏi ôn tập lý thuyết chuyên sâu và thuyết minh thực hành.

