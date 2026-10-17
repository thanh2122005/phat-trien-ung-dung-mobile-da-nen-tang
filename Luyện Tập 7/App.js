import React, { useState, useEffect } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

// Import các Component con được chia nhỏ theo yêu cầu đề bài (Mục 3.6 & Tối ưu FlatList)
import FixedHeader from './components/FixedHeader';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';

/**
 * BÀI TẬP THỰC HÀNH TUẦN 7: CLONE UI MẪU + RESPONSIVE
 * Môn: Phát triển ứng dụng Mobile đa nền tảng
 * 
 * Sinh viên thực hiện: Bùi Duy Thành
 * Mã sinh viên: 12523080 - Lớp: 12523W.3
 * 
 * Các tiêu chí đáp ứng theo yêu cầu của Giảng viên:
 * 1. Chọn màn hình Home và clone UI chuẩn phong cách Tech Mart với spacing rõ ràng.
 * 2. Áp dụng SafeAreaView tránh nội dung bị che bởi tai thỏ / status bar.
 * 3. Tạo header cố định bằng position (absolute) luôn nổi trên đầu giao diện.
 * 4. Tối ưu FlatList với keyExtractor duy nhất (không warning key) và renderItem tách component độc lập.
 * 5. Hỗ trợ Responsive trên ít nhất 2 kích thước màn hình hoặc xoay ngang/dọc (Portrait & Landscape).
 * 6. Áp dụng Controlled Component (SearchBar) và Vòng đời Component (useEffect).
 */

// Danh mục sản phẩm công nghệ
const CATEGORIES = [
  { id: 'all', name: 'Tất cả', icon: '🔥' },
  { id: 'phone', name: 'Điện thoại', icon: '📱' },
  { id: 'laptop', name: 'Laptop', icon: '💻' },
  { id: 'audio', name: 'Tai nghe', icon: '🎧' },
  { id: 'tablet', name: 'Máy tính bảng', icon: '📟' },
  { id: 'watch', name: 'Đồng hồ', icon: '⌚' },
];

// Dữ liệu sản phẩm mẫu phong phú
const INITIAL_PRODUCTS = [
  {
    id: 'prod_1',
    title: 'iPhone 16 Pro Max 256GB - Titan Tự Nhiên',
    description: 'Chip A18 Pro mạnh mẽ, khung viền Titan chuẩn hàng không vũ trụ, Camera Control hiện đại.',
    category: 'phone',
    categoryName: 'Điện thoại',
    price: '34.990.000đ',
    originalPrice: '36.990.000đ',
    discount: '6',
    rating: '4.9',
    sold: '1.2k',
    emoji: '📱',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300',
  },
  {
    id: 'prod_2',
    title: 'MacBook Pro 14 M3 Pro (18GB / 512GB SSD)',
    description: 'Màn hình Liquid Retina XDR 120Hz, pin 22 giờ liên tục, hiệu năng đồ họa đột phá.',
    category: 'laptop',
    categoryName: 'Laptop',
    price: '49.490.000đ',
    originalPrice: '52.990.000đ',
    discount: '7',
    rating: '5.0',
    sold: '850',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300',
  },
  {
    id: 'prod_3',
    title: 'Tai nghe Sony WH-1000XM5 Chống Ồn Đỉnh Cao',
    description: 'Bộ xử lý chống ồn V1 và QN1 kép, đàm thoại AI rõ nét, thời lượng pin 30 giờ.',
    category: 'audio',
    categoryName: 'Tai nghe',
    price: '6.790.000đ',
    originalPrice: '8.490.000đ',
    discount: '20',
    rating: '4.8',
    sold: '3.4k',
    emoji: '🎧',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
  },
  {
    id: 'prod_4',
    title: 'iPad Pro M4 11 inch Ultra Retina XDR Tandem OLED',
    description: 'Độ mỏng ấn tượng chỉ 5.3mm, chip Apple M4 thế hệ mới hỗ trợ Apple Pencil Pro.',
    category: 'tablet',
    categoryName: 'Máy tính bảng',
    price: '28.990.000đ',
    originalPrice: '30.990.000đ',
    discount: '6',
    rating: '4.9',
    sold: '920',
    emoji: '📟',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300',
  },
  {
    id: 'prod_5',
    title: 'Apple Watch Ultra 2 GPS + Cellular 49mm',
    description: 'Khung vỏ Titan tái chế, màn hình siêu sáng 3000 nits, chuẩn lặn EN13319 chuyên nghiệp.',
    category: 'watch',
    categoryName: 'Đồng hồ',
    price: '20.990.000đ',
    originalPrice: '22.990.000đ',
    discount: '9',
    rating: '4.9',
    sold: '640',
    emoji: '⌚',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
  },
  {
    id: 'prod_6',
    title: 'Dell XPS 13 9340 Intel Core Ultra 7 OLED Touch',
    description: 'Thiết kế nhôm nguyên khối tương lai, phím chức năng cảm ứng vô hình, thời lượng pin cả ngày.',
    category: 'laptop',
    categoryName: 'Laptop',
    price: '42.990.000đ',
    originalPrice: '46.000.000đ',
    discount: '7',
    rating: '4.7',
    sold: '410',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300',
  },
];

const App = () => {
  // Lấy kích thước màn hình theo thời gian thực để thực hiện Responsive
  const { width, height } = useWindowDimensions();

  // State chế độ mô phỏng xoay ngang/dọc (để người dùng có thể test responsive ngay trên máy)
  const [forceOrientation, setForceOrientation] = useState(null); // 'portrait' | 'landscape' | null

  // Xác định hướng hiển thị và tính toán số cột cho FlatList
  const effectiveIsLandscape = forceOrientation
    ? forceOrientation === 'landscape'
    : width > height || width >= 600;

  const numColumns = effectiveIsLandscape ? 2 : 1;

  // Tính chiều rộng card responsive dựa trên số cột và padding
  const horizontalPadding = 16;
  const columnGap = 12;
  const cardWidth = effectiveIsLandscape
    ? (width - horizontalPadding * 2 - columnGap) / 2
    : width - horizontalPadding * 2;

  // State quản lý tìm kiếm (Controlled Component - Mục 3.5)
  const [searchQuery, setSearchQuery] = useState('');
  // State quản lý danh mục đã chọn
  const [selectedCategory, setSelectedCategory] = useState('all');
  // State danh sách sản phẩm
  const [products] = useState(INITIAL_PRODUCTS);

  // VÒNG ĐỜI (Mục 3.4): useEffect thông báo component gắn kết thành công
  useEffect(() => {
    console.log(`[Lifecycle - Mounting] Màn hình Home đã gắn kết. Kích thước: ${width}x${height}, Hướng: ${effectiveIsLandscape ? 'Ngang (Landscape)' : 'Dọc (Portrait)'}`);

    return () => {
      console.log('[Lifecycle - Unmounting] Màn hình Home đã tháo gỡ.');
    };
  }, []);

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm (Real-time Filter)
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBuy = (item) => {
    Alert.alert(
      'Đặt hàng thành công! 🛒',
      `Bạn đã chọn mua: ${item.title}\nGiá tiền: ${item.price}\n\nĐơn hàng được ghi nhận cho sinh viên Bùi Duy Thành (12523080).`
    );
  };

  // Header của danh sách FlatList (Tối ưu performance)
  const renderListHeader = () => (
    <View style={styles.listHeaderWrapper}>
      {/* Banner khuyến mãi nổi bật (Hero Card) */}
      <View style={styles.heroBanner}>
        <View style={styles.heroTagBadge}>
          <Text style={styles.heroTagText}>⚡ ƯU ĐÃI ĐẶC QUYỀN TUẦN 7</Text>
        </View>
        <Text style={styles.heroTitle}>LỄ HỘI CÔNG NGHỆ TECH MART</Text>
        <Text style={styles.heroDesc}>
          Giảm tới 30% cho sinh viên khoa CNTT. Miễn phí vận chuyển toàn quốc.
        </Text>
      </View>

      {/* Thanh chuyển chế độ Responsive (Cho phép kiểm tra nhanh 2 chế độ ngang / dọc) */}
      <View style={styles.responsiveBar}>
        <View style={styles.responsiveInfo}>
          <Text style={styles.responsiveLabel}>Kiểm thử Responsive:</Text>
          <Text style={styles.responsiveStatus}>
            {effectiveIsLandscape ? '📐 Chế độ Ngang (2 cột)' : '📱 Chế độ Dọc (1 cột)'} ({Math.round(width)}x{Math.round(height)}px)
          </Text>
        </View>

        <TouchableOpacity
          style={styles.switchModeBtn}
          activeOpacity={0.8}
          onPress={() =>
            setForceOrientation((prev) =>
              prev === 'landscape' ? 'portrait' : 'landscape'
            )
          }
        >
          <Text style={styles.switchModeBtnText}>
            {effectiveIsLandscape ? '⇄ Chuyển Dọc' : '⇄ Chuyển Ngang'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* CONTROLLED COMPONENT: SearchBar */}
      <SearchBar
        searchQuery={searchQuery}
        onChangeSearch={(text) => setSearchQuery(text)}
        onClear={() => setSearchQuery('')}
        totalResults={filteredProducts.length}
      />

      {/* Thanh lọc danh mục ngang */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* Tiêu đề danh sách */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionMainTitle}>
          {selectedCategory === 'all'
            ? 'Danh mục sản phẩm nổi bật'
            : `Sản phẩm ${CATEGORIES.find((c) => c.id === selectedCategory)?.name}`}
        </Text>
        <Text style={styles.sectionSubTitle}>
          {filteredProducts.length} sản phẩm
        </Text>
      </View>
    </View>
  );

  // Giao diện khi không tìm thấy kết quả
  const renderListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>🔍</Text>
      <Text style={styles.emptyTitle}>Không tìm thấy sản phẩm phù hợp</Text>
      <Text style={styles.emptyDesc}>
        Vui lòng thử tìm với từ khóa khác hoặc xóa bộ lọc để hiển thị toàn bộ danh sách.
      </Text>
      <TouchableOpacity
        style={styles.emptyBtn}
        onPress={() => {
          setSearchQuery('');
          setSelectedCategory('all');
        }}
      >
        <Text style={styles.emptyBtnText}>Xóa tất cả bộ lọc</Text>
      </TouchableOpacity>
    </View>
  );

  // Footer ghi thông tin bản quyền và sinh viên
  const renderListFooter = () => (
    <View style={styles.listFooter}>
      <Text style={styles.footerBrand}>TECH MART PRO - REACT NATIVE FLATLIST</Text>
      <Text style={styles.footerAuthor}>
        Bài thực hành Tuần 7: Bùi Duy Thành - MSV: 12523080 - Lớp: 12523W.3
      </Text>
      <Text style={styles.footerTag}>Git Tag: buoi7 | Responsive: Đạt chuẩn</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* ========================================================
          TIÊU CHÍ 3: HEADER CỐ ĐỊNH BẰNG POSITION: ABSOLUTE
          ======================================================== */}
      <FixedHeader
        studentName="Bùi Duy Thành"
        studentId="12523080"
        studentClass="12523W.3"
      />

      {/* ========================================================
          TIÊU CHÍ 4 & 5: FLATLIST TỐI ƯU VỚI KEYEXTRACTOR, 
          RENDERITEM TÁCH COMPONENT & RESPONSIVE NUMCOLUMNS
          ======================================================== */}
      <FlatList
        key={`flatlist_cols_${numColumns}`} // Force re-render khi thay đổi số cột
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()} // Đảm bảo key duy nhất, không warning key
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            cardWidth={cardWidth}
            onPressBuy={handleBuy}
          />
        )}
        numColumns={numColumns}
        columnWrapperStyle={
          numColumns > 1 ? { justifyContent: 'space-between' } : null
        }
        contentContainerStyle={[
          styles.flatListContent,
          { paddingTop: 105 }, // Khoảng cách đệm bù cho Header cố định tránh bị che
        ]}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderListEmpty}
        ListFooterComponent={renderListFooter}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  listHeaderWrapper: {
    marginBottom: 8,
  },
  heroBanner: {
    backgroundColor: '#1E3A8A',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    marginBottom: 10,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  heroTagBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 6,
  },
  heroTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  heroDesc: {
    color: '#BFDBFE',
    fontSize: 12,
    marginTop: 4,
    lineHeight: 16,
  },
  responsiveBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DBEAFE',
    marginBottom: 6,
  },
  responsiveInfo: {
    flex: 1,
  },
  responsiveLabel: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  responsiveStatus: {
    fontSize: 12,
    color: '#1E40AF',
    fontWeight: '700',
  },
  switchModeBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  switchModeBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  sectionMainTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  sectionSubTitle: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 12,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  emptyDesc: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 14,
  },
  emptyBtn: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  emptyBtnText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '700',
  },
  listFooter: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    marginTop: 16,
  },
  footerBrand: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  footerAuthor: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
    marginTop: 3,
  },
  footerTag: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '700',
    marginTop: 2,
  },
});

export default App;
