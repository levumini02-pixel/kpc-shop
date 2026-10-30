# KPC Shop — website bán hàng mẫu

Website front-end bằng **HTML, CSS và JavaScript thuần**, lấy cảm hứng từ cấu trúc cửa hàng công nghệ phổ biến. Đây là bản mô phỏng phục vụ học tập, không sao chép nguyên văn hoặc nhận diện thương hiệu FPT Shop.

## Chức năng chính

- Trang chủ KPC với banner, nhóm tiện ích, danh mục, sản phẩm nổi bật và tin công nghệ.
- 5 danh mục và 20 sản phẩm mẫu; tìm kiếm, lọc danh mục, sắp xếp theo giá/tên.
- Trang chi tiết cho từng sản phẩm, thông số, sản phẩm cùng danh mục.
- Giỏ hàng có tăng/giảm số lượng, xóa sản phẩm và bước đặt hàng mô phỏng.
- Tin công nghệ, trang thông tin cửa hàng mẫu.
- Khu vực **Quản trị**: SEO sản phẩm, SEO bài viết, tối ưu SEO hệ thống, cấu hình tính năng Facebook.
- Các cài đặt và giỏ hàng được lưu bằng `localStorage` trên trình duyệt.
- Giao diện responsive cho máy tính, tablet và điện thoại.

## Cách chạy trên macOS hoặc Windows

1. Giải nén `kpc-shop.zip`.
2. Mở Terminal/Command Prompt và chuyển vào thư mục `kpc-shop`.
3. Chạy máy chủ tĩnh:

   ```bash
   python3 -m http.server 5500
   ```

   Trên Windows có thể dùng `py -m http.server 5500`.

4. Mở trình duyệt tại `http://localhost:5500`.
5. Chọn **Quản trị** trên thanh menu để mở các cấu hình SEO và Facebook.

Có thể mở trực tiếp `index.html`, nhưng khuyến nghị dùng máy chủ tĩnh để tránh các hạn chế của trình duyệt.

## Lưu ý khi thuyết trình/nộp bài

- Giá, đánh giá, ưu đãi, địa chỉ cửa hàng và thông tin sản phẩm là dữ liệu minh họa; không phải báo giá hoặc địa chỉ kinh doanh đã xác minh.
- Ảnh sản phẩm đang sử dụng ảnh trực tuyến; cần kết nối Internet để tải ảnh. Nếu ảnh không tải được, giao diện có biểu tượng dự phòng.
- Cấu hình SEO trong bản demo minh họa biểu mẫu và lưu dữ liệu phía trình duyệt. Để SEO có hiệu lực trên website thực tế cần xuất metadata vào HTML được máy chủ phục vụ, canonical đúng, sitemap XML, robots.txt, schema phù hợp và triển khai hosting.
- Các công tắc Facebook chỉ lưu lựa chọn và ID. Muốn Page Plugin/Messenger/Meta Pixel hoạt động thực tế phải tích hợp SDK hoặc mã chính thức, cấu hình đúng ID và tuân thủ yêu cầu đồng ý cookie/quyền riêng tư.
- Đây là website front-end; không có backend, đăng nhập quản trị bảo mật, cơ sở dữ liệu, thanh toán hay xử lý đơn hàng thật.
