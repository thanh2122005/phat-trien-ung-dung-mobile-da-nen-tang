
<div align="center">

# 🏆 BỘ KỊCH BẢN KIỂM THỬ HỆ THỐNG (TEST CASES)
## TỔNG KẾT HỌC PHẦN: PHÁT TRIỂN ỨNG DỤNG DI ĐỘNG ĐA NỀN TẢNG
### Đề tài: Ứng dụng Thương mại Điện tử Thời trang Đa nền tảng ThoiTrangHD

[![Test Status](https://img.shields.io/badge/Test%20Cases-98%2F98%20Passed-brightgreen?style=for-the-badge&logo=checkmarx)](./TEST_CASES_TONG_KET.md)
[![Platform](https://img.shields.io/badge/Platform-React%20Native%20%7C%20Node.js%20%7C%20MySQL-blue?style=for-the-badge)](https://github.com/thanh2122005/phat-trien-ung-dung-mobile-da-nen-tang)
[![Student](https://img.shields.io/badge/Sinh%20viên-Bùi%20Duy%20Thành%20(12523080)-orange?style=for-the-badge)](./BuiDuyThanh_TestCases_TongKetHocPhan.docx)

[📥 **Tải về File Báo Cáo Word (.docx)**](./BuiDuyThanh_TestCases_TongKetHocPhan.docx) • [⚡ **Chạy Script Kiểm Thử Tự Động**](./verify_all_testcases.js)

</div>

---

## Đề tài: Ứng dụng Thương mại Điện tử Thời trang Đa nền tảng ThoiTrangHD

**Sinh viên thực hiện:** Bùi Duy Thành  
**Mã số sinh viên (MSV):** 12523080  
**Lớp chuyên ngành:** 12523W.3  
**Học phần:** Phát triển ứng dụng di động đa nền tảng (React Native)  
**Giảng viên hướng dẫn:** ThS. Vũ Xuân Thắng  

> **Tổng quan:** Toàn bộ hệ thống ThoiTrangHD được kiểm thử toàn diện qua **19 nhóm chức năng** với tổng cộng **98 kịch bản kiểm thử (Test Cases)**. Tỷ lệ vượt qua kiểm thử: **100% ĐẠT (Passed)**.

---

### Bảng 4.5. Test case chức năng đăng ký tài khoản

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-DK-01 | Đăng ký hợp lệ | Nhập đầy đủ họ tên, email mới, mật khẩu hợp lệ, xác nhận mật khẩu khớp | Tạo tài khoản mới và chuyển sang đăng nhập/hiển thị thông báo thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-02 | Email đã tồn tại | Nhập email đã có trong hệ thống | Hệ thống từ chối và thông báo email đã tồn tại | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-03 | Bỏ trống họ tên | Không nhập họ tên | Hệ thống yêu cầu nhập họ tên | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-04 | Email sai định dạng | Nhập email không đúng định dạng | Hệ thống thông báo email không hợp lệ | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-05 | Mật khẩu quá ngắn | Nhập mật khẩu ngắn hơn yêu cầu | Hệ thống từ chối và yêu cầu nhập mật khẩu hợp lệ | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-06 | Xác nhận mật khẩu không khớp | Mật khẩu và xác nhận mật khẩu khác nhau | Hệ thống thông báo mật khẩu xác nhận không khớp | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DK-07 | Bỏ trống trường bắt buộc | Bỏ trống email hoặc mật khẩu | Hệ thống yêu cầu nhập đầy đủ thông tin bắt buộc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.6. Test case chức năng đăng nhập

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-DN-01 | Đăng nhập đúng | Nhập email và mật khẩu hợp lệ | Hệ thống xác thực thành công, lưu trạng thái đăng nhập và chuyển đến màn hình tương ứng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DN-02 | Sai mật khẩu | Nhập email đúng nhưng mật khẩu sai | Hệ thống từ chối đăng nhập và thông báo mật khẩu không chính xác | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DN-03 | Email không tồn tại | Nhập email chưa đăng ký trong hệ thống | Hệ thống thông báo thông tin đăng nhập không hợp lệ | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DN-04 | Bỏ trống email | Không nhập email | Hệ thống yêu cầu nhập email trước khi đăng nhập | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DN-05 | Bỏ trống mật khẩu | Không nhập mật khẩu | Hệ thống yêu cầu nhập mật khẩu | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DN-06 | Điều hướng theo vai trò | Đăng nhập với tài khoản role 'user' vs tài khoản role 'admin@thoitranghd.com' | Tài khoản User được điều hướng về Trang chủ; Tài khoản Admin được kích hoạt quyền và hiển thị lối tắt vào trang Quản trị | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.7. Test case chức năng xem và tìm kiếm sản phẩm (UC-KH-01)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-SP-01 | Xem danh sách sản phẩm | Truy cập màn hình trang chủ / danh mục sản phẩm thời trang | Hiển thị danh sách sản phẩm kèm ảnh, tên, giá bán và nhãn phân loại | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SP-02 | Tìm kiếm theo từ khóa | Nhập từ khóa tìm kiếm (ví dụ: 'Áo sơ mi', 'Quần jean') | Hệ thống trả về danh sách các sản phẩm có tên chứa từ khóa tìm kiếm | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SP-03 | Lọc theo danh mục/giá | Chọn phân loại danh mục (Áo/Quần/Váy) và lọc theo khoảng giá | Hệ thống hiển thị đúng các mặt hàng thỏa mãn đồng thời tiêu chí lọc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SP-04 | Xem chi tiết sản phẩm | Bấm vào một sản phẩm cụ thể từ danh sách | Hiển thị đầy đủ thông tin chi tiết: gallery ảnh, mô tả, bảng Size và bảng Màu | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SP-05 | Chọn biến thể Size/Màu | Trên màn hình chi tiết, chọn kích cỡ (M) và màu sắc (Đen) | Giao diện cập nhật trạng thái lựa chọn và kiểm tra số lượng tồn kho tương ứng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SP-06 | Tìm kiếm không có kết quả | Nhập từ khóa không tồn tại trong hệ thống (ví dụ: 'xyz999') | Hiển thị thông báo không tìm thấy sản phẩm phù hợp kèm gợi ý tìm kiếm khác | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.8. Test case chức năng quản lý giỏ hàng & Gợi ý kích cỡ (UC-KH-02)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-GH-01 | Thêm vào giỏ hàng | Chọn sản phẩm, chọn Size M, Màu Trắng và nhấn 'Thêm vào giỏ hàng' | Sản phẩm được đưa vào giỏ hàng; biểu tượng giỏ hàng tăng số lượng mục | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-GH-02 | Chưa chọn Size/Màu | Bấm 'Thêm vào giỏ hàng' khi chưa chọn Size hoặc Màu | Hệ thống hiển thị thông báo yêu cầu người dùng chọn đủ kích cỡ và màu sắc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-GH-03 | Cập nhật số lượng giỏ | Tăng/giảm số lượng của một mặt hàng trong màn hình giỏ hàng | Số lượng thay đổi và tổng tiền tạm tính được cập nhật ngay lập tức | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-GH-04 | Xóa khỏi giỏ hàng | Bấm nút xóa một sản phẩm trong giỏ hàng | Mặt hàng bị xóa khỏi danh sách giỏ hàng; cập nhật lại tổng tiền | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-GH-05 | Chọn mục thanh toán | Tích chọn một số sản phẩm cần thanh toán trong giỏ hàng | Tổng tiền chỉ tính trên các mặt hàng được chọn thanh toán | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-GH-06 | Gợi ý Smart Size | Mở modal gợi ý kích cỡ, nhập Chiều cao: 170cm, Cân nặng: 65kg | Hệ thống phân tích theo bảng quy tắc và đề xuất Size phù hợp (Size L) | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.9. Test case chức năng đặt hàng và thanh toán - COD & VietQR (UC-KH-03)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-DH-01 | Đặt hàng COD hợp lệ | Nhập họ tên, SĐT, địa chỉ nhận hàng, chọn thanh toán COD, bấm 'Đặt hàng' | Tạo đơn hàng 'Pending', trừ tồn kho trong Transaction, hiển thị thông báo thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-02 | Áp dụng Voucher hợp lệ | Nhập mã voucher giảm giá hợp lệ thỏa mãn điều kiện đơn hàng | Tổng tiền được giảm đúng theo giá trị chiết khấu của voucher | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-03 | Voucher không đủ VIP | Nhập voucher yêu cầu hạng VIP cao hơn hạng hiện tại của tài khoản | Hệ thống từ chối áp dụng và thông báo không đủ điều kiện hạng thành viên | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-04 | Đặt hàng qua VietQR | Chọn phương thức thanh toán chuyển khoản VietQR và bấm 'Đặt hàng' | Tạo đơn hàng 'Pending', client sinh mã VietQR từ orderCode + tổng tiền để khách quét | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-05 | Tính phí vận chuyển | Đơn hàng dưới 500.000đ; Đơn hàng từ 500.000đ trở lên | Đơn < 500k tính phí 30.000đ; Đơn >= 500k áp dụng miễn phí vận chuyển (0đ) | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-06 | Bỏ trống địa chỉ nhận | Bỏ trống trường địa chỉ nhận hàng hoặc số điện thoại người nhận | Hệ thống báo lỗi yêu cầu nhập đầy đủ thông tin giao hàng trước khi đặt | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-07 | Sản phẩm hết hàng | Đặt hàng khi sản phẩm trong kho vừa hết (stock = 0) | Transaction rollback, hệ thống thông báo sản phẩm đã hết hàng và không tạo đơn | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DH-08 | Giỏ hàng rỗng | Truy cập màn hình checkout khi chưa có sản phẩm nào được chọn | Hệ thống thông báo giỏ hàng trống và ngăn chặn thao tác đặt hàng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.10. Test case chức năng theo dõi đơn hàng & Hủy đơn (UC-KH-04)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-TD-01 | Xem danh sách đơn mua | Vào mục Đơn mua, lọc theo các tab: Tất cả, Chờ xử lý, Đang xử lý, Hoàn thành | Hiển thị đúng danh sách đơn hàng tương ứng với trạng thái đã lọc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TD-02 | Xem chi tiết đơn hàng | Bấm xem chi tiết một đơn hàng cụ thể | Hiển thị đầy đủ mã đơn, ngày đặt, danh sách món kèm Size/Màu, giá và địa chỉ nhận | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TD-03 | Hủy đơn trạng thái Pending | Bấm nút 'Hủy đơn hàng' khi đơn hàng đang ở trạng thái 'Pending' | Đơn chuyển sang 'Cancelled', hệ thống hoàn lại số lượng tồn kho cho sản phẩm | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TD-04 | Hủy đơn trạng thái Processing | Thao tác bấm hủy đơn khi đơn hàng đã chuyển sang trạng thái 'Processing' (Đang xử lý) | Hệ thống từ chối hủy đơn và thông báo: 'Chỉ có thể hủy đơn hàng khi đơn đang ở trạng thái Chờ xác nhận' | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TD-05 | Đơn Completed không được hủy | Kiểm tra đơn hàng đã hoàn tất giao hàng (status = 'Completed') | Không hiển thị nút 'Hủy đơn'; chuyển hướng khách hàng sang chức năng Đổi/Trả | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.11. Test case chức năng gửi yêu cầu Đổi/Trả hàng (UC-KH-05)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-DT-01 | Gửi yêu cầu đổi hàng hợp lệ | Đơn Completed trong 7 ngày, chọn 'Đổi hàng', nhập lý do, chọn Size/Màu mới, gửi | Lưu vào orders với return_status = 'Requested', thông báo gửi yêu cầu thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DT-02 | Gửi yêu cầu trả hàng hợp lệ | Đơn Completed trong 7 ngày, chọn 'Trả hàng - Hoàn tiền', nhập lý do, gửi | Lưu vào orders với return_status = 'Requested', hiển thị trạng thái chờ duyệt | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DT-03 | Đính kèm ảnh minh chứng | Tải lên 1-3 ảnh chụp tình trạng sản phẩm (tùy chọn) khi gửi form đổi trả | Ảnh được upload lên server; lưu danh sách URL vào trường return_images | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DT-04 | Quá hạn 7 ngày | Thử bấm yêu cầu đổi trả cho đơn Completed đã giao quá 7 ngày | Hệ thống từ chối tiếp nhận và thông báo đơn hàng đã hết thời hạn đổi trả quy định | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DT-05 | Bỏ trống lý do đổi trả | Gửi form yêu cầu đổi trả nhưng không nhập lý do | Hệ thống báo lỗi yêu cầu nhập lý do đổi trả trước khi gửi | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DT-06 | Khách hủy yêu cầu đổi trả | Bấm nút 'Hủy yêu cầu' khi return_status đang ở trạng thái 'Requested' | Cập nhật return_status sang 'Cancelled'; kết thúc quy trình đổi trả của đơn | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.12. Test case chức năng đánh giá sản phẩm (UC-KH-06)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-DG-01 | Đánh giá hợp lệ | Chọn đơn hàng Completed, chọn 5 sao, nhập nhận xét chất lượng sản phẩm | Lưu bản ghi vào bảng reviews với is_verified_purchase = true, cập nhật đánh giá | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DG-02 | Chưa mua hàng đánh giá | Thử gửi đánh giá sản phẩm khi chưa mua hoặc đơn chưa Completed | Hệ thống từ chối và phản hồi HTTP 403: chỉ người mua đã nhận hàng thành công mới có thể gửi đánh giá | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DG-03 | Bỏ trống số sao | Nhập nội dung đánh giá nhưng không chọn số sao (rating = 0) | Hệ thống yêu cầu chọn mức đánh giá từ 1 đến 5 sao | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DG-04 | Chống đánh giá trùng lặp | Gửi đánh giá lần thứ hai cho cùng một sản phẩm đã được người dùng đánh giá trước đó | Backend kiểm tra trong bảng reviews, từ chối và thông báo: 'Bạn đã gửi đánh giá cho sản phẩm này rồi' | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-DG-05 | Xem đánh giá ở trang chi tiết | Mở trang chi tiết sản phẩm, cuộn đến khu vực Đánh giá khách hàng | Hiển thị danh sách đánh giá công khai, avatar người dùng và số sao trung bình | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.13. Test case chức năng quản lý sản phẩm yêu thích (UC-KH-07)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-YT-01 | Thêm vào yêu thích | Bấm biểu tượng trái tim trên thẻ sản phẩm khi đã đăng nhập | Lưu vào bảng favorites; biểu tượng trái tim chuyển sang trạng thái đã chọn | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-YT-02 | Bỏ yêu thích | Bấm lại vào biểu tượng trái tim của sản phẩm đã yêu thích | Xóa bản ghi trong bảng favorites; biểu tượng trở về trạng thái chưa chọn | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-YT-03 | Xem danh sách yêu thích | Vào mục 'Sản phẩm yêu thích' trong màn hình tài khoản | Hiển thị đầy đủ danh sách các mẫu thời trang đã được người dùng lưu lại | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-YT-04 | Yêu thích khi chưa login | Bấm biểu tượng trái tim khi đang ở trạng thái Khách vãng lai | Hệ thống thông báo và chuyển hướng yêu cầu người dùng đăng nhập | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.14. Test case chức năng thông tin cá nhân & Địa chỉ (UC-KH-08)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-TK-01 | Xem hồ sơ & Hạng VIP | Truy cập màn hình Tài khoản cá nhân | Hiển thị tên, email, SĐT, địa chỉ và hạng VIP tính từ tổng chi tiêu đơn Completed | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TK-02 | Cập nhật hồ sơ thành công | Chỉnh sửa họ tên, số điện thoại, địa chỉ mặc định và bấm 'Lưu' | Hệ thống cập nhật thông tin mới vào bảng users qua API PUT /api/auth/profile/:id và thông báo thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-TK-03 | Đăng xuất tài khoản | Bấm nút 'Đăng xuất' trong màn hình tài khoản | Xóa thông tin/trạng thái đăng nhập được lưu cục bộ và điều hướng về màn hình đăng nhập | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.15. Test case phân hệ quản trị - Dashboard thống kê (UC-QT-01)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-DB-01 | Hiển thị Dashboard tổng quan | Đăng nhập tài khoản Admin và truy cập trang Dashboard | Hiển thị đầy đủ các thẻ thống kê: Tổng doanh thu, Tổng đơn hàng, Sản phẩm, Khách hàng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DB-02 | Thống kê doanh thu hôm nay | Kiểm tra thẻ doanh thu và số lượng đơn tạo trong ngày | Tính toán chính xác tổng tiền các đơn không bị hủy tạo trong ngày hiện tại (CURDATE) | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DB-03 | Thống kê đơn theo trạng thái | Xem phân bổ số lượng đơn hàng theo các trạng thái trên Dashboard | Hiển thị đúng số lượng đơn ở các trạng thái Pending, Processing, Completed, Cancelled | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.16. Test case phân hệ quản trị - Quản lý sản phẩm (UC-QT-02)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-SP-01 | Thêm sản phẩm mới | Nhập tên sản phẩm, danh mục, giá, mô tả, cấu hình danh sách Size x Màu, ảnh | Lưu sản phẩm mới vào bảng products, hiển thị trong danh mục quản lý | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-SP-02 | Chỉnh sửa sản phẩm | Thay đổi giá bán, mô tả hoặc cập nhật thêm màu sắc mới cho sản phẩm | Dữ liệu cập nhật thành công và hiển thị đồng bộ sang phía ứng dụng khách hàng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-SP-03 | Xóa sản phẩm | Bấm nút xóa một sản phẩm trong danh sách quản lý | Hệ thống thực hiện lệnh DELETE xóa bản ghi sản phẩm khỏi bảng products trong CSDL và phản hồi thông báo xóa thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-SP-04 | Bỏ trống trường bắt buộc | Thêm sản phẩm nhưng để trống tên sản phẩm hoặc giá bán | Hệ thống báo lỗi yêu cầu nhập đầy đủ thông tin bắt buộc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-SP-05 | Nhập giá bán âm | Nhập giá bán là số âm (ví dụ: -50.000đ) | Hệ thống từ chối và thông báo giá bán sản phẩm phải lớn hơn 0 | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.17. Test case phân hệ quản trị - Nhập kho & Kiểm định QC (UC-QT-03)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-NK-01 | Nhập kho hợp lệ có QC | Chọn sản phẩm, nhập nhà cung cấp, mã lô (batch_code), số lượng, giá nhập, QC: Đạt | Lưu bản ghi vào stock_imports với qc_passed = 1, cộng dồn tồn kho tổng và biến thể vào bảng products | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-NK-02 | Ghi nhận QC không đạt | Nhập thông tin lô hàng và đánh dấu QC: Không đạt (qc_passed = false) | Ghi nhận phiếu nhập kèm trạng thái qc_passed = 0 và ghi chú lỗi vào bảng stock_imports phục vụ biên bản kiểm tra chất lượng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-NK-03 | Xem lịch sử nhập kho | Truy cập màn hình Lịch sử nhập kho | Hiển thị danh sách các lần nhập, mã lô, ngày nhập, số lượng, giá và trạng thái QC | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-NK-04 | Số lượng nhập không hợp lệ | Nhập số lượng bằng 0 hoặc số âm | Hệ thống từ chối lưu và thông báo số lượng nhập kho phải lớn hơn 0 | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-NK-05 | Bỏ trống mã lô | Tạo phiếu nhập nhưng không nhập mã lô kiểm định | Hệ thống yêu cầu nhập mã lô phục vụ truy xuất nguồn gốc | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.18. Test case phân hệ quản trị - Quản lý đơn hàng (UC-QT-04)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-DH-01 | Xem danh sách đơn hàng | Truy cập mục Quản lý đơn hàng, lọc theo trạng thái | Hiển thị đầy đủ danh sách đơn, tên khách, ngày đặt, tổng tiền, phương thức trả | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DH-02 | Xem chi tiết đơn hàng | Bấm xem chi tiết một đơn hàng cụ thể | Hiển thị chi tiết từng mặt hàng, kích cỡ, màu sắc, địa chỉ giao hàng và ghi chú | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DH-03 | Duyệt đơn: Pending -> Processing | Admin bấm duyệt đơn hàng đang ở trạng thái 'Pending' | Đơn chuyển sang 'Processing' (Đang xử lý/đóng gói), cập nhật CSDL | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DH-04 | Hoàn tất: Processing -> Completed | Admin xác nhận đơn hàng đã giao thành công | Đơn chuyển sang 'Completed', ghi nhận doanh thu và kích hoạt thời hạn đổi trả 7 ngày | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DH-05 | Admin hủy đơn hàng | Admin bấm hủy đơn hàng khi đang ở Pending hoặc Processing | Đơn chuyển sang 'Cancelled', hệ thống tự động hoàn lại tồn kho cho sản phẩm | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DH-06 | Chuyển trạng thái trái quy tắc | Thử chuyển đơn hàng từ 'Completed' ngược lại 'Pending' | Hệ thống từ chối thao tác và báo lỗi chuyển trạng thái không hợp lệ | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.19. Test case phân hệ quản trị - Xử lý Đổi/Trả hàng (UC-QT-05)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-DT-01 | Xem danh sách yêu cầu Đổi/Trả | Truy cập mục Quản lý Đổi/Trả, lọc các đơn có return_status = 'Requested' | Hiển thị danh sách các hồ sơ đang chờ duyệt, mã đơn, khách hàng, hình thức đổi/trả | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DT-02 | Xem chi tiết hồ sơ đổi trả | Mở chi tiết một yêu cầu đổi trả | Hiển thị lý do của khách, ảnh chụp minh chứng sản phẩm, size/màu mới muốn đổi | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DT-03 | Phê duyệt đổi trả (Approved) | Admin chọn duyệt yêu cầu, nhập hướng dẫn đổi hàng vào trường return_note | Cập nhật return_status = 'Approved', lưu return_note, không tự động đổi stock kho | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DT-04 | Từ chối đổi trả (Rejected) | Admin chọn từ chối yêu cầu do không đủ điều kiện, nhập lý do từ chối | Cập nhật return_status = 'Rejected', lưu lý do từ chối vào return_note | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-DT-05 | Xử lý hồ sơ đã kết thúc | Thử thao tác duyệt/từ chối trên đơn đã ở trạng thái Approved hoặc Rejected | Hệ thống thông báo hồ sơ đổi trả này đã được xử lý hoàn tất trước đó | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.20. Test case phân hệ quản trị - Quản lý Voucher & Hạng VIP (UC-QT-06)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-VC-01 | Tạo voucher mới | Nhập mã: 'VIP10', loại giảm: percent, giá trị: 10%, min đơn: 300k, min_vip_level: 1 | Lưu voucher mới vào bảng vouchers, hiển thị trong danh sách mã khuyến mại | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-VC-02 | Xóa voucher | Bấm xóa một mã voucher khỏi hệ thống | Xóa bản ghi voucher khỏi CSDL qua API DELETE /api/admin/vouchers/:code | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-VC-03 | Mã voucher bị trùng | Tạo voucher mới với mã trùng với mã đã có trong hệ thống | Hệ thống từ chối và thông báo mã voucher đã tồn tại | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-VC-04 | Phần trăm giảm không hợp lệ | Nhập phần trăm giảm giá bằng 0 hoặc lớn hơn 100% (ví dụ: 120%) | Hệ thống báo lỗi phần trăm giảm giá phải nằm trong khoảng từ 1% đến 100% | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-VC-05 | Giá trị giảm là số âm | Nhập giá trị giảm giá (value) là số âm | Hệ thống báo lỗi giá trị giảm giá phải là số dương | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.21. Test case phân hệ quản trị - Quản lý tài khoản & Phân quyền (UC-QT-07)

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-AD-PQ-01 | Xem danh sách người dùng | Truy cập mục Quản lý tài khoản trong phân hệ admin | Hiển thị danh sách tài khoản: họ tên, email, số điện thoại, vai trò và ngày tạo | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-PQ-02 | Tìm kiếm tài khoản | Nhập email hoặc tên người dùng vào ô tìm kiếm | Hệ thống lọc và hiển thị chính xác các tài khoản có thông tin trùng khớp | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-PQ-03 | Nâng cấp quyền Admin | Admin chọn một tài khoản khách hàng (role: 'user') và đổi thành 'admin' | Cập nhật role = 'admin' trong bảng users; tài khoản có thể truy cập khu vực quản trị | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-AD-PQ-04 | Hạ cấp quyền tài khoản | Admin đổi vai trò của một tài khoản admin thành 'user' | Cập nhật role = 'user' trong bảng users; tài khoản bị thu hồi quyền quản trị | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.22. Test case an toàn, bảo mật & Phân quyền hệ thống

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-SEC-01 | Kiểm soát quyền truy cập Admin | Tài khoản người dùng thường (role: 'user') cố truy cập màn hình Quản trị /admin | Giao diện kích hoạt cơ chế bảo vệ Client Guard, từ chối hiển thị nội dung và thông báo 'Trang này chỉ dành riêng cho Admin', điều hướng về Trang chủ | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SEC-02 | Kiểm soát quyền sở hữu đơn hàng (403) | Tài khoản người dùng A gửi request hủy đơn hoặc yêu cầu đổi trả cho đơn hàng của tài khoản B | Backend kiểm tra sai lệch user_id so với order.user_id, từ chối thao tác và phản hồi HTTP 403 Forbidden kèm thông báo bảo mật | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SEC-03 | Bảo vệ dữ liệu nhạy cảm | Gọi API lấy thông tin hồ sơ người dùng GET /api/auth/profile/:id | Response JSON trả về thông tin cá nhân nhưng tuyệt đối không chứa trường password trong kết quả | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SEC-04 | Phòng chống SQL Injection | Nhập chuỗi ' OR '1'='1 vào ô tìm kiếm sản phẩm hoặc biểu mẫu đăng nhập | Hệ thống sử dụng Prepared Statements của thư viện mysql2, xử lý an toàn tham số đầu vào, không bị khai thác lỗ hổng | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-SEC-05 | Toàn vẹn Transaction khi đặt hàng | Hai tài khoản đồng thời bấm đặt mua 1 mặt hàng chỉ còn đúng 1 sản phẩm trong kho | Cơ chế SELECT ... FOR UPDATE khóa hàng; 1 đơn thành công, đơn còn lại bị từ chối và Rollback toàn bộ Transaction, không âm kho | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.23. Test case cài đặt, build và triển khai ứng dụng

| Mã TC | Chức năng | Dữ liệu/Thao tác kiểm thử | Kết quả mong đợi | Kết quả thực tế | Đánh giá |
| --- | --- | --- | --- | --- | --- |
| TC-ENV-01 | Khởi động Backend Express | Chạy lệnh `npm run server` hoặc `node server.js` | Server khởi động thành công trên cổng 5000, in thông báo kết nối MySQL thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-ENV-02 | Khởi tạo CSDL tự động | Chạy lệnh `npm run init-db` hoặc `node init_db.js` | Tạo đủ 8 bảng thực thể chính và nạp dữ liệu mẫu ban đầu thành công | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-ENV-03 | Chạy ứng dụng Expo Client | Chạy lệnh `npx expo start` và quét mã QR trên thiết bị thật | Ứng dụng biên dịch Metro Bundler thành công, tải và hiển thị giao diện mượt mà | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |
| TC-ENV-04 | Kiểm tra kết nối đa nền tảng | Gửi request từ ứng dụng di động tới API backend trên mạng nội bộ LAN | Giao tiếp mạng thông suốt, dữ liệu JSON hiển thị tức thì trên cả Mobile và Web | Đạt theo kết quả kiểm thử trong môi trường cục bộ | Đạt |


### Bảng 4.24. Tổng hợp kết quả kiểm thử các phân hệ chức năng hệ thống ThoiTrangHD

| Phân hệ / Nhóm chức năng | Số bảng kiểm thử | Số ca kiểm thử (TC) | Số ca Đạt | Tỷ lệ Đạt (%) |
| --- | --- | --- | --- | --- |
| Phân hệ Khách hàng | 10 bảng (Bảng 4.5 – 4.14) | 56 | 56 | 100% |
| Phân hệ Quản trị viên | 7 bảng (Bảng 4.15 – 4.21) | 33 | 33 | 100% |
| An toàn, bảo mật & Giao dịch đồng thời | 1 bảng (Bảng 4.22) | 5 | 5 | 100% |
| Cài đặt, build & Triển khai ứng dụng | 1 bảng (Bảng 4.23) | 4 | 4 | 100% |
| TỔNG CỘNG HỆ THỐNG | 19 Bảng kịch bản | 98 | 98 | 100% |

