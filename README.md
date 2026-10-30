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
│   ├── BuiDuyThanh_LuyenTap7.docx       # Báo cáo lý thuyết và thực hành Tuần 7
│   ├── screenshot_buoi7.png             # Ảnh chụp màn hình chế độ dọc (Portrait 1 cột)
│   ├── screenshot_buoi7_landscape.png   # Ảnh chụp màn hình chế độ ngang (Landscape 2 cột)
│   ├── components/
│   │   ├── FixedHeader.js               # Header cố định bằng position absolute
│   │   ├── SearchBar.js                 # Controlled Component tìm kiếm real-time
│   │   ├── CategoryFilter.js            # Thanh lọc danh mục sản phẩm ngang
│   │   ├── ProductCard.js               # Component renderItem tách riêng cho FlatList
│   │   ├── LifecycleDemo.js             # Vòng đời Component (useEffect & Cleanup)
│   │   ├── ControlledInput.js           # Controlled Component thực hành
│   │   ├── Avatar.js                    # Component con Avatar
│   │   └── UserProfile.js               # Component lồng Avatar
│   └── App.js                           # Màn hình chính Clone UI Home Tech Mart Pro + Responsive
├── Luyện Tập 8/
│   ├── BuiDuyThanh_LuyenTap8.docx       # Báo cáo lý thuyết và thực hành Tuần 8
│   ├── screenshot_register_invalid.png  # Ảnh minh chứng form chưa hợp lệ (hiển thị lỗi đỏ, disable nút submit)
│   ├── screenshot_register_valid.png    # Ảnh minh chứng form hợp lệ (mở nút submit sẵn sàng)
│   ├── components/
│   │   ├── AppHeader.js                 # Component Header hiển thị tiêu đề và thông tin sinh viên
│   │   ├── PrimaryButton.js             # Component nút bấm hỗ trợ trạng thái disabled
│   │   ├── InputField.js                # Component ô nhập liệu nhận props và hiển thị lỗi validate đỏ
│   │   └── Card.js                      # Component khung thẻ chứa nội dung tái sử dụng
│   └── App.js                           # Màn hình Register hoàn chỉnh với form validation & state
├── Luyện Tập 9/
│   ├── BuiDuyThanh_LuyenTap9.docx       # Báo cáo lý thuyết và thực hành Tuần 9
│   ├── screenshot_login.png             # Ảnh minh chứng màn hình Login (Bài tập 1)
│   ├── screenshot_profile_settings_small.png # Ảnh Profile & Settings trên màn hình nhỏ (Phone - Layout Dọc)
│   ├── screenshot_profile_settings_large.png # Ảnh Profile & Settings trên màn hình lớn (Tablet - 2 Cột)
│   ├── theme.js                         # Hệ thống Design Tokens (Colors, Spacing, Typography, Shadows)
│   ├── components/
│   │   ├── CustomButton.js              # Nút bấm dùng chung hỗ trợ style & textStyle props
│   │   ├── LoginView.js                 # Màn hình Login (Bài tập 1 - StyleSheet.create)
│   │   ├── ProfileCard.js               # Thẻ Profile sinh viên & thông số (Flexbox row/col)
│   │   └── SettingsList.js              # Danh sách Settings nhóm với Switch tương tác
│   └── App.js                           # Màn hình tổng hợp kiểm thử Responsive & chuyển tab
├── Tài Liệu tuần/                       # Tài liệu học tập và slide bài giảng
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

## 📱 Báo cáo Thực hành 7: Clone UI mẫu, Vòng đời, Controlled Component & Responsive FlatList

### 1. Nhiệm vụ thực hành & Mục tiêu bài học (Buổi 07)
- **Clone UI mẫu Home E-commerce:** Xây dựng màn hình Home phong cách Tech Mart Pro với spacing (khoảng cách padding, margin, gap 8/12/16) rõ ràng, chuẩn UI/UX hiện đại.
- **Áp dụng `SafeAreaView`:** Bảo vệ nội dung không bị che khuất bởi tai thỏ (notch), camera nốt ruồi hay thanh trạng thái trên thiết bị di động.
- **Tạo Header cố định:** Sử dụng component [FixedHeader.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/FixedHeader.js) với thuộc tính `position: 'absolute'`, `zIndex: 100` luôn nổi trên đầu giao diện.
- **Tối ưu FlatList:**
  - Sử dụng `keyExtractor={(item) => item.id.toString()}` cam kết **không warning key**.
  - Tách `renderItem` thành component [ProductCard.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/ProductCard.js) độc lập.
  - Sử dụng `ListHeaderComponent`, `ListEmptyComponent`, `ListFooterComponent` để phân tách logic và tối ưu hiệu năng render.
- **Kiểm tra Responsive trên 2 kích thước màn hình / xoay ngang dọc:**
  - Sử dụng hook `useWindowDimensions()` tự động điều chỉnh số cột: **1 cột** khi xem dọc (Portrait, width < 600) và **2 cột** khi xem ngang (Landscape, width >= 600).
  - Tích hợp nút chuyển nhanh chế độ xem ngay trên giao diện để kiểm thử tức thì.
- **Tích hợp kiến thức Vòng đời & Controlled Component:**
  - [SearchBar.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/SearchBar.js): Controlled Component quản lý tìm kiếm thời gian thực với nút Clear.
  - `useEffect`: Quản lý Vòng đời (Mounting giả lập tải dữ liệu, Updating lọc sản phẩm, Unmounting dọn dẹp).

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 7/`)
- [FixedHeader.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/FixedHeader.js): Header cố định bằng position absolute, hiển thị logo, chuông thông báo và thông tin sinh viên Bùi Duy Thành (MSV: 12523080).
- [SearchBar.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/SearchBar.js): Ô tìm kiếm Controlled Component lọc sản phẩm thời gian thực, có nút xóa nhanh.
- [CategoryFilter.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/CategoryFilter.js): Thanh lọc danh mục ngang dạng cuộn mượt mà.
- [ProductCard.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/ProductCard.js): Component renderItem tách riêng của FlatList, cardWidth co giãn tự động theo Responsive.
- [LifecycleDemo.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/components/LifecycleDemo.js): Minh họa chuyên sâu 3 giai đoạn Vòng đời Component (Mounting, Updating, Unmounting & Cleanup).
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/App.js): Màn hình Home tổng hợp hoàn chỉnh, kết hợp FlatList tối ưu và nút kiểm thử Responsive.
- [BuiDuyThanh_LuyenTap7.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/BuiDuyThanh_LuyenTap7.docx): Tài liệu báo cáo hoàn chỉnh gồm lý thuyết, thuyết minh bài thực hành và bảng đối chiếu tiêu chí.

### 3. Kết quả thực nghiệm trên 2 kích thước màn hình (Responsive)

<div align="center">
  <img src="./Luyện Tập 7/screenshot_buoi7.png" alt="Chế độ dọc (Portrait 1 cột)" width="320" />
  <p><i>Hình 1: Giao diện chế độ dọc (Portrait 1 cột) với Fixed Header, SearchBar và FlatList tối ưu</i></p>
  <br/>
  <img src="./Luyện Tập 7/screenshot_buoi7_landscape.png" alt="Chế độ xoay ngang (Landscape 2 cột)" width="640" />
  <p><i>Hình 2: Giao diện xoay ngang (Landscape 2 cột) chứng minh tính Responsive linh hoạt tự động</i></p>
</div>

---

### 4. Checklist nộp bài
- [x] Chọn màn hình Home và clone UI theo spacing rõ ràng, chuẩn phong cách E-commerce.
- [x] Áp dụng `SafeAreaView` chống che lấp bởi tai thỏ / status bar.
- [x] Tạo Header cố định bằng `position: 'absolute'`.
- [x] Tối ưu `FlatList` với `keyExtractor` duy nhất (không warning key) và `renderItem` tách thành component `ProductCard.js`.
- [x] Kiểm tra thành công trên ít nhất 2 kích thước màn hình / xoay ngang dọc (`useWindowDimensions()`).
- [x] Ảnh chụp màn hình minh chứng đầy đủ ([screenshot_buoi7.png](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/screenshot_buoi7.png) và [screenshot_buoi7_landscape.png](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%207/screenshot_buoi7_landscape.png)).
- [x] Đã gắn thẻ Git tag: `buoi7`.

---

## 📱 Báo cáo Thực hành 8: Xây dựng bộ Component tái sử dụng & Form Register (Chương 3 – Lab 03)

### 1. Nhiệm vụ thực hành & Mục tiêu bài học (Buổi 08)
- **Tách 4 Component độc lập:** Xây dựng hệ thống component dùng chung trong thư mục `Luyện Tập 8/components/` gồm:
  - [AppHeader.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/AppHeader.js): Component tiêu đề hiển thị tên màn hình, mô tả và thông tin sinh viên thực hiện.
  - [PrimaryButton.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/PrimaryButton.js): Component nút bấm chính hỗ trợ trạng thái `disabled`, biến thể giao diện (`primary`, `secondary`).
  - [InputField.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/InputField.js): Component ô nhập liệu nhận các props `label`, `value`, `onChangeText`, `placeholder`, `error`, hiển thị lỗi màu đỏ dưới ô nhập.
  - [Card.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/Card.js): Component khung thẻ chứa nội dung tái sử dụng (hỗ trợ `children`, `title`, đổ bóng).
- **Xây dựng màn hình Register:**
  - 3 trường nhập liệu: Họ và tên (`name`), Địa chỉ email (`email`), Mật khẩu (`password`).
- **Validation logic chặt chẽ:**
  - Tên không được rỗng (độ dài tối thiểu 2 ký tự).
  - Email không được rỗng và bắt buộc phải chứa ký tự `@` (chuẩn định dạng email).
  - Mật khẩu có độ dài tối thiểu từ 6 ký tự.
- **Phản hồi giao diện thời gian thực:**
  - Viền ô nhập và thông báo lỗi hiển thị màu đỏ ngay dưới ô nhập khi chưa đạt chuẩn.
  - Vô hiệu hóa (Disable) nút Submit khi form chưa hợp lệ.
  - Mở kích hoạt nút Submit khi toàn bộ thông tin hợp lệ.
- **Tiêu chuẩn kiểm tra:**
  - Import/Export đúng (Named export & Default export).
  - Không lỗi màn hình trắng.
  - Mỗi component được tái sử dụng ít nhất 2 lần.

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 8/`)
- [AppHeader.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/AppHeader.js): Header nhận props định danh sinh viên Bùi Duy Thành (MSV: 12523080).
- [PrimaryButton.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/PrimaryButton.js): Nút bấm tái sử dụng cho Submit và Reset form.
- [InputField.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/InputField.js): Tái sử dụng cho cả 3 trường nhập Tên, Email và Mật khẩu.
- [Card.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/components/Card.js): Tái sử dụng cho Thẻ biểu mẫu đăng ký và Thẻ danh sách tài khoản.
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/App.js): Màn hình chính kết hợp toàn bộ hệ thống component và logic validation.
- [BuiDuyThanh_LuyenTap8.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/BuiDuyThanh_LuyenTap8.docx): Tài liệu báo cáo hoàn chỉnh gồm 8 câu hỏi lý thuyết mục 3.9 và Phiếu thực hành mẫu 04.

### 3. Kết quả thực nghiệm kiểm thử tính năng

<div align="center">
  <img src="./Luyện Tập 8/screenshot_register_invalid.png" alt="Trạng thái form chưa hợp lệ" width="320" />
  <p><i>Hình 1: Trạng thái chưa hợp lệ (Báo lỗi đỏ dưới từng ô nhập và nút Submit bị vô hiệu hóa)</i></p>
  <br/>
  <img src="./Luyện Tập 8/screenshot_register_valid.png" alt="Trạng thái form hợp lệ" width="320" />
  <p><i>Hình 2: Trạng thái hợp lệ (Các trường kiểm tra đạt chuẩn, nút Submit kích hoạt sẵn sàng)</i></p>
</div>

---

### 4. Checklist nộp bài
- [x] Tạo thư mục `Luyện Tập 8/components/` và tách đủ 4 component: `AppHeader`, `PrimaryButton`, `InputField`, `Card`.
- [x] Xây dựng form Register với 3 trường: tên, email, mật khẩu.
- [x] Truyền props đầy đủ vào `InputField`: `label`, `value`, `onChangeText`, `placeholder`, `error`.
- [x] Quản lý state cho form và state lỗi validate.
- [x] Disable nút Submit khi form chưa hợp lệ và hiển thị lỗi màu đỏ dưới ô nhập.
- [x] Mỗi component được tái sử dụng ít nhất 2 lần, import/export chuẩn, không lỗi màn hình trắng.
- [x] Ảnh chụp màn hình minh chứng đầy đủ ([screenshot_register_invalid.png](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/screenshot_register_invalid.png) và [screenshot_register_valid.png](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/screenshot_register_valid.png)).
- [x] File báo cáo lý thuyết & thực hành: [BuiDuyThanh_LuyenTap8.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%208/BuiDuyThanh_LuyenTap8.docx) (không ghi ngày làm).

---

## 📱 Báo cáo Thực hành 9: Thiết kế giao diện với StyleSheet & Flexbox Layout (Chương 4 – Lab 04)

### 1. Nhiệm vụ thực hành & Mục tiêu bài học (Buổi 09)
- **A. Câu hỏi ôn tập lý thuyết:**
  - **Câu 1:** Phân tích vai trò của `StyleSheet` trong React Native và lý do ưu tiên sử dụng `StyleSheet.create()` thay vì viết inline style trong các dự án thực tế (Performance, ID Caching, Compile-time validation, Separation of concerns).
  - **Câu 2:** Giải thích cách sử dụng prop `style` và cơ chế ghi đè thuộc tính khi truyền mảng style (Nguyên tắc Last-wins & Property merging).
  - **Câu 3:** Ý nghĩa của việc export/import StyleSheet và xác định thời điểm nên tách style ra file riêng (`theme.js`, module UI dùng chung).
  - **Câu 4:** Kỹ thuật truyền style qua props cho component con; sự linh hoạt khi truyền `style` và `textStyle` vào `CustomButton`.
  - **Câu 5:** Phân tích vai trò của Flexbox trong thiết kế giao diện di động đa kích thước; ý nghĩa chi tiết của 5 thuộc tính cốt lõi: `flexDirection`, `justifyContent`, `alignItems`, `flex`, `flexWrap`.
- **B. Bài tập luyện tập thực hành:**
  - **Bài tập 1 (Mức dễ):** Thiết kế màn hình **Login** hoàn chỉnh gồm tiêu đề ứng dụng, 2 ô nhập thông tin (Email, Mật khẩu), nút đăng nhập (`CustomButton`), liên kết "Forgot password?". Toàn bộ style được định nghĩa bằng `StyleSheet.create()` với đầy đủ các thuộc tính `backgroundColor`, `fontSize`, `fontWeight`, `padding`, `margin`, `borderWidth`, `borderRadius`, `justifyContent`, `alignItems`.
  - **Bài tập 2 (Mức trung bình):** Xây dựng giao diện **Profile Card** (Avatar sinh viên Bùi Duy Thành - MSV 12523080, Pro Badge, thống kê 3 cột) + **Settings List** (Nhóm tài khoản & ứng dụng, Switch tương tác bật/tắt).
  - **Yêu cầu Responsive đa thiết bị:** Tự động thích ứng kích thước màn hình:
    - *Màn hình nhỏ (Phone đứng):* Xếp chồng dọc (`flexDirection: 'column'`).
    - *Màn hình lớn (Tablet / Ngang):* Chia 2 cột song song (`flexDirection: 'row'`).

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 9/`)
- [theme.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/theme.js): Hệ thống Design Tokens tập trung gồm bảng màu `colors`, `spacing`, `typography`, `borderRadius`, và `shadows`.
- [CustomButton.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/components/CustomButton.js): Nút bấm dùng chung nhận `style` (container) và `textStyle` (nhãn chữ), minh họa chuẩn mực câu hỏi lý thuyết 4.
- [LoginView.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/components/LoginView.js): Màn hình đăng nhập đầy đủ các thành phần và 100% sử dụng `StyleSheet.create()`.
- [ProfileCard.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/components/ProfileCard.js): Thẻ hồ sơ cá nhân sinh viên Bùi Duy Thành - MSV: 12523080 với bố cục Flexbox hàng ngang/hàng dọc lồng nhau.
- [SettingsList.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/components/SettingsList.js): Danh sách cài đặt phân nhóm trực quan với các công tắc Switch tương tác thời gian thực.
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/App.js): Ứng dụng tích hợp có thanh Tab chuyển đổi Bài tập 1 & Bài tập 2 kèm nút kích hoạt Responsive Emulator.
- [BuiDuyThanh_LuyenTap9.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/BuiDuyThanh_LuyenTap9.docx): Báo cáo học tập hoàn chỉnh gồm trả lời 5 câu hỏi lý thuyết, thuyết minh kỹ thuật và đính kèm 3 ảnh kết quả thực nghiệm.

### 3. Kết quả thực nghiệm minh chứng giao diện

<div align="center">
  <img src="./Luyện Tập 9/screenshot_login.png" alt="Giao diện màn hình Login (Bài tập 1)" width="320" />
  <p><i>Hình 1: Giao diện màn hình Login đơn giản chuẩn StyleSheet.create() (Bài tập 1 - Mức dễ)</i></p>
  <br/>
  <img src="./Luyện Tập 9/screenshot_profile_settings_small.png" alt="Profile Card & Settings List trên màn hình nhỏ" width="320" />
  <p><i>Hình 2: Giao diện Profile Card + Settings List trên màn hình nhỏ (Phone - Layout Dọc 1 cột)</i></p>
  <br/>
  <img src="./Luyện Tập 9/screenshot_profile_settings_large.png" alt="Profile Card & Settings List trên màn hình lớn" width="640" />
  <p><i>Hình 3: Giao diện Profile Card + Settings List trên màn hình lớn (Tablet / Màn hình ngang - Layout 2 cột)</i></p>
</div>

---

### 4. Checklist nộp bài
- [x] Trả lời đầy đủ và chi tiết 5 câu hỏi ôn tập lý thuyết về StyleSheet, prop style cascade, export/import theme, truyền style qua props cho child component và các thuộc tính Flexbox cốt lõi.
- [x] Bài tập 1 (Mức dễ): Màn hình Login đầy đủ tiêu đề, 2 ô nhập liệu (Email, Mật khẩu), nút đăng nhập `CustomButton`, và dòng chữ "Forgot password?".
- [x] Bài tập 1 sử dụng 100% `StyleSheet.create()`, áp dụng đầy đủ các thuộc tính: `backgroundColor`, `fontSize`, `fontWeight`, `padding`, `margin`, `borderWidth`, `borderRadius`, `justifyContent`, `alignItems`.
- [x] Bài tập 2 (Mức trung bình): Clone giao diện Profile Card (thông tin cá nhân sinh viên Bùi Duy Thành, MSV: 12523080) và Settings List (phân nhóm cài đặt, Switch tương tác).
- [x] Thiết kế Responsive: Tự động chuyển đổi giữa layout 1 cột (điện thoại nhỏ) và layout 2 cột (màn hình lớn / tablet).
- [x] Đầy đủ 3 hình ảnh minh chứng chụp từ giao diện:
  - `screenshot_login.png`: Màn hình Login.
  - `screenshot_profile_settings_small.png`: Profile Card & Settings List màn hình nhỏ.
  - `screenshot_profile_settings_large.png`: Profile Card & Settings List màn hình lớn.
- [x] File tài liệu báo cáo: [BuiDuyThanh_LuyenTap9.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%209/BuiDuyThanh_LuyenTap9.docx) (không ghi ngày làm theo yêu cầu).
- [x] Đã gắn thẻ Git tag: `buoi9`.




---

## 🚀 Báo cáo Thực hành 10: Tích hợp REST API, Thiết bị ngoại vi & Bộ nhớ AsyncStorage (Chương 5 – Lab 05)

### 1. Nhiệm vụ thực hành & Mục tiêu bài học (Buổi 10)
- **A. Câu hỏi ôn tập lý thuyết:**
  - **Câu 1:** Khái niệm API & REST API trong ứng dụng di động; ví dụ trong React Native gọi API lấy dữ liệu máy chủ (Fetch API, async/await, HTTP status, JSON parsing).
  - **Câu 2:** Phân biệt phương thức `GET` và `POST` khi làm việc với API (Mục đích, Query String vs Request Body, Caching, Security, Idempotent); Hướng dẫn khi nào dùng GET, khi nào dùng POST trong ứng dụng di động.
  - **Câu 3:** Vai trò của Geolocation; Phân tích các vấn đề quyền truy cập (`PermissionsAndroid`, runtime permissions) và quyền riêng tư (Foreground vs Background Location, Fine vs Coarse Location, tính minh bạch).
  - **Câu 4:** Vai trò của Image Picker trong ứng dụng di động; Phân tích sự khác biệt kỹ thuật và trải nghiệm người dùng giữa chọn ảnh từ thư viện (`launchImageLibraryAsync`) và chụp ảnh bằng camera (`launchCameraAsync`).
  - **Câu 5:** Bản chất của `AsyncStorage` và vai trò lưu trữ dữ liệu cục bộ (Key-Value offline persistence); Trình bày chi tiết 4 thao tác cơ bản (`setItem`, `getItem`, `removeItem`, `clear`) và ví dụ thực tế (lưu trữ token, user profile, settings).
- **B. Bài tập luyện tập thực hành:**
  - **Bài tập 1 (Mức dễ):** Gọi public API `https://jsonplaceholder.typicode.com/posts`, hiển thị danh sách bài viết bằng `FlatList` (Mã bài viết #ID, Tác giả User ID, Tiêu đề title, Trích dẫn body), xử lý toàn diện loading state (`ActivityIndicator`), error state (thông báo lỗi trực quan + nút retry "Thử lại kết nối API"), kéo để làm mới (`RefreshControl`), thanh tìm kiếm thời gian thực (`SearchFilter`), và đánh dấu bài viết yêu thích lưu vào `AsyncStorage`.
  - **Bài tập 2 (Mức trung bình):** Xây dựng ứng dụng Mini tích hợp tài nguyên thiết bị:
    - *Image Picker:* Chọn ảnh đại diện từ thư viện ảnh hoặc chụp ảnh từ máy ảnh camera.
    - *Geolocation:* Thu thập tọa độ GPS thời gian thực (Kinh độ, Vĩ độ, Bán kính sai số, Địa chỉ).
    - *Form nhập liệu:* Họ tên sinh viên (Bùi Duy Thành - MSV 12523080), Ghi chú chuyên ngành, Switch trạng thái "Đã đăng nhập".
    - *AsyncStorage Persistence:* Đóng gói cấu trúc dữ liệu JSON lưu trữ bền vững với khóa `@thoitranghd_user_profile`.
    - *Màn hình Saved Data:* Tự động đọc và hiển thị lại toàn bộ hồ sơ, tọa độ, và dữ liệu JSON raw; hỗ trợ nút tải lại và nút xóa sạch bộ nhớ.

### 2. Cấu trúc mã nguồn thực hành (Thư mục `Luyện Tập 10/`)
- [theme.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/theme.js): Bảng quy chuẩn Design Tokens tập trung (`colors`, `typography`, `spacing`, `borderRadius`, `shadows`).
- [CustomButton.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/components/CustomButton.js): Nút bấm đa năng hỗ trợ các biến thể `primary`, `secondary`, `outline`, `danger`, `success`, `disabled`, và `loading`.
- [PostItem.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/components/PostItem.js): Thẻ hiển thị bài viết tối ưu cho FlatList với huy hiệu ID, title in đậm, body tóm tắt, nút chi tiết và nút toggle sao yêu thích.
- [ApiPostsView.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/components/ApiPostsView.js): Màn hình Bài tập 1 hoàn chỉnh kết nối REST API JSONPlaceholder, xử lý loading/error/retry, pull-to-refresh, modal xem chi tiết, và tìm kiếm.
- [DeviceDataForm.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/components/DeviceDataForm.js): Màn hình form nhập liệu tích hợp Image Picker (Thư viện & Camera), Geolocation (GPS), Switch đăng nhập và lưu vào AsyncStorage.
- [SavedDataView.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/components/SavedDataView.js): Màn hình Bài tập 2 đọc lại dữ liệu đã lưu từ AsyncStorage, hiển thị hồ sơ sinh viên, tọa độ GPS và raw JSON inspector.
- [App.js](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/App.js): Ứng dụng tích hợp với thanh điều hướng 3 Tab: "Bài 1: REST API", "Bài 2: Thiết Bị", và "Bài 2: Đã Lưu".
- [BuiDuyThanh_LuyenTap10.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/BuiDuyThanh_LuyenTap10.docx): Báo cáo thực hành chính thức đầy đủ 5 câu hỏi lý thuyết, thuyết minh kỹ thuật, bảng đối chiếu và 4 ảnh minh chứng thực nghiệm.

### 3. Kết quả thực nghiệm minh chứng giao diện

<div align="center">
  <img src="./Luyện Tập 10/screenshot_bai1_api_posts.png" alt="Giao diện danh sách bài viết từ REST API (Bài tập 1)" width="320" />
  <p><i>Hình 1: Giao diện danh sách bài viết từ REST API JSONPlaceholder với FlatList, Tìm kiếm và Yêu thích (Bài tập 1)</i></p>
  <br/>
  <img src="./Luyện Tập 10/screenshot_bai1_loading_error.png" alt="Xử lý Loading và Lỗi mạng kèm nút Retry" width="320" />
  <p><i>Hình 2: Trạng thái Loading (ActivityIndicator), Xử lý lỗi mạng kèm nút Retry và Modal xem chi tiết bài viết (Bài tập 1)</i></p>
  <br/>
  <img src="./Luyện Tập 10/screenshot_bai2_form_device.png" alt="Form thu thập thông tin thiết bị (Bài tập 2)" width="320" />
  <p><i>Hình 3: Form nhập liệu tích hợp Image Picker (Avatar), Geolocation (GPS) và Switch lưu vào AsyncStorage (Bài tập 2)</i></p>
  <br/>
  <img src="./Luyện Tập 10/screenshot_bai2_saved_data.png" alt="Màn hình hiển thị dữ liệu đã lưu từ AsyncStorage" width="320" />
  <p><i>Hình 4: Màn hình đọc dữ liệu từ AsyncStorage (@thoitranghd_user_profile) hiển thị hồ sơ, GPS và Raw JSON (Bài tập 2)</i></p>
</div>

---

### 4. Checklist nộp bài Buổi 10
- [x] Trả lời đầy đủ, chi tiết và chuyên sâu 5 câu hỏi ôn tập lý thuyết Chương 5 (Khái niệm REST API, phân biệt GET vs POST, Geolocation & quyền riêng tư, Image Picker Camera vs Library, 4 thao tác AsyncStorage).
- [x] Bài tập 1 (Mức dễ): Gọi public API `https://jsonplaceholder.typicode.com/posts`, hiển thị danh sách bài viết mượt mà bằng `FlatList`.
- [x] Xử lý trạng thái đang tải (Loading state với `ActivityIndicator`).
- [x] Xử lý trạng thái lỗi kết nối (Error state trực quan màu đỏ + nút bấm Retry kích hoạt gọi lại API).
- [x] Tích hợp Pull-to-refresh (`RefreshControl`) và thanh tìm kiếm thời gian thực (`SearchFilter`).
- [x] Bài tập 2 (Mức trung bình): Ứng dụng Mini tích hợp Image Picker (Thư viện/Camera), Geolocation (GPS), Form thông tin sinh viên Bùi Duy Thành (MSV 12523080).
- [x] Lưu trữ cấu trúc dữ liệu đầy đủ vào `AsyncStorage` (`@thoitranghd_user_profile`).
- [x] Màn hình "Saved Data" đọc lại dữ liệu thành công từ AsyncStorage và hiển thị trực quan.
- [x] Đầy đủ 4 hình ảnh minh chứng chụp từ giao diện hoàn chỉnh:
  - `screenshot_bai1_api_posts.png`: Danh sách bài viết REST API FlatList.
  - `screenshot_bai1_loading_error.png`: Xử lý Loading, Error State kèm Retry và Modal chi tiết.
  - `screenshot_bai2_form_device.png`: Form thu thập Image Picker, Geolocation và AsyncStorage.
  - `screenshot_bai2_saved_data.png`: Màn hình đọc dữ liệu đã lưu từ AsyncStorage.
- [x] File tài liệu báo cáo chính thức: [BuiDuyThanh_LuyenTap10.docx](file:///d:/Source%20mobile%202/Luyện%20tập%201/Luyện%20Tập%2010/BuiDuyThanh_LuyenTap10.docx) (không ghi ngày làm theo đúng quy định).
- [x] Đã gắn thẻ Git tag: `buoi10`.
