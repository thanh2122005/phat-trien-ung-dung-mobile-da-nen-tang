import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { borderRadius, colors, spacing } from '../theme';
import CustomButton from './CustomButton';
import PostItem from './PostItem';

// AsyncStorage fallback helper (tương thích cả khi có hoặc chưa cài package native)
let AsyncStorageInstance;
try {
  AsyncStorageInstance = require('@react-native-async-storage/async-storage').default;
} catch (e) {
  // Memory fallback cho môi trường Web/Test
  const memStore = {};
  AsyncStorageInstance = {
    getItem: async (k) => memStore[k] || null,
    setItem: async (k, v) => { memStore[k] = String(v); },
    removeItem: async (k) => { delete memStore[k]; },
    clear: async () => { for (const k in memStore) delete memStore[k]; },
  };
}

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const FAVORITES_STORAGE_KEY = '@thoitranghd_favorite_posts';

/**
 * BÀI TẬP 1 (Mức độ dễ):
 * - Gọi API public JSONPlaceholder: https://jsonplaceholder.typicode.com/posts
 * - Hiển thị danh sách bài viết bằng FlatList
 * - Hiển thị tối thiểu tiêu đề (title) và tóm tắt (body)
 * - Xử lý 3 trạng thái: Loading (ActivityIndicator), Error (thông báo lỗi + nút retry), Success
 * - Tính năng mở rộng chuẩn Lab 05: Tìm kiếm lọc bài viết, Pull-to-refresh, đánh dấu yêu thích lưu AsyncStorage
 */
const ApiPostsView = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // 1. Tải danh sách Favorites từ AsyncStorage
  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorageInstance.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        setFavoriteIds(JSON.parse(stored));
      }
    } catch (err) {
      console.warn('Lỗi đọc favorite từ storage:', err);
    }
  };

  // 2. Gọi REST API lấy danh sách bài viết (GET)
  const fetchPosts = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setErrorMessage(null);

    try {
      // Giới hạn 20 bài viết theo chuẩn yêu cầu Phiếu bài tập Lab 05
      const response = await fetch(`${API_ENDPOINT}?_limit=20`);
      if (!response.ok) {
        throw new Error(`Máy chủ phản hồi mã lỗi: HTTP ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (err) {
      console.error('Lỗi gọi API:', err);
      setErrorMessage(err.message || 'Không thể kết nối đến máy chủ JSONPlaceholder');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    loadFavorites();
  }, [fetchPosts]);

  // 3. Tìm kiếm / Lọc bài viết theo tiêu đề
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(text.toLowerCase()) ||
        p.body.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  // 4. Toggle Bookmark / Favorite bài viết và lưu vào AsyncStorage
  const handleToggleFavorite = async (post) => {
    try {
      let updatedIds;
      if (favoriteIds.includes(post.id)) {
        updatedIds = favoriteIds.filter((id) => id !== post.id);
      } else {
        updatedIds = [...favoriteIds, post.id];
      }
      setFavoriteIds(updatedIds);
      await AsyncStorageInstance.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedIds));
    } catch (err) {
      console.error('Lỗi lưu favorite:', err);
    }
  };

  // 5. Render Header (Thanh tìm kiếm & thông tin trạng thái)
  const renderHeader = () => (
    <View style={styles.listHeader}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm bài viết theo tiêu đề hoặc nội dung..."
          placeholderTextColor={colors.textMuted}
          value={searchQuery}
          onChangeText={handleSearch}
          clearButtonMode="while-editing"
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => handleSearch('')} style={styles.clearBtn}>
            <Text style={{ fontSize: 13, color: colors.textMuted }}>✕</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaCountText}>
          Hiển thị <Text style={{ fontWeight: '700', color: colors.primary }}>{filteredPosts.length}</Text> / {posts.length} bài viết
        </Text>
        <View style={styles.favBadge}>
          <Text style={styles.favBadgeText}>★ {favoriteIds.length} đã lưu</Text>
        </View>
      </View>
    </View>
  );

  // 6. Xử lý trạng thái LOADING
  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingTitle}>Đang tải bài viết...</Text>
        <Text style={styles.loadingSub}>Đang kết nối REST API jsonplaceholder.typicode.com</Text>
      </View>
    );
  }

  // 7. Xử lý trạng thái ERROR
  if (errorMessage && posts.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.errorIconCircle}>
          <Text style={{ fontSize: 32 }}>⚠️</Text>
        </View>
        <Text style={styles.errorTitle}>Lỗi kết nối API</Text>
        <Text style={styles.errorDescription}>{errorMessage}</Text>
        <CustomButton
          title="Thử lại ngay"
          variant="primary"
          onPress={() => fetchPosts()}
          style={{ minWidth: 160 }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PostItem
            item={item}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={handleToggleFavorite}
            onPress={(post) => setSelectedPost(post)}
          />
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Không tìm thấy bài viết nào phù hợp.</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchPosts(true)}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
      />

      {/* MODAL XEM CHI TIẾT BÀI VIẾT */}
      <Modal visible={!!selectedPost} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View style={styles.modalBadge}>
                <Text style={styles.modalBadgeText}>BÀI VIẾT #{selectedPost?.id}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setSelectedPost(null)}
                style={styles.modalCloseBtn}
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
            <Text style={styles.modalAuthor}>Đăng bởi: Người dùng hệ thống #{selectedPost?.userId}</Text>

            <View style={styles.modalDivider} />
            <Text style={styles.modalBody}>{selectedPost?.body}</Text>

            <View style={styles.modalFooter}>
              <CustomButton
                title={favoriteIds.includes(selectedPost?.id) ? 'Bỏ đánh dấu ★' : 'Đánh dấu yêu thích ★'}
                variant={favoriteIds.includes(selectedPost?.id) ? 'warning' : 'outline'}
                onPress={() => {
                  if (selectedPost) handleToggleFavorite(selectedPost);
                }}
                style={{ flex: 1, marginRight: spacing.sm }}
              />
              <CustomButton
                title="Đóng"
                variant="secondary"
                onPress={() => setSelectedPost(null)}
                style={{ width: 90 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  listHeader: {
    marginBottom: spacing.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    height: 44,
    marginBottom: spacing.sm,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: colors.textPrimary,
  },
  clearBtn: {
    padding: spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  metaCountText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  favBadge: {
    backgroundColor: colors.warningLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  favBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B45309',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  loadingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  loadingSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
  errorIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.dangerLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.danger,
    marginBottom: spacing.xs,
  },
  errorDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    maxWidth: 280,
    lineHeight: 18,
  },
  emptyContainer: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 13,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    width: '100%',
    maxWidth: 480,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  modalBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: borderRadius.xs,
  },
  modalBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primaryDark,
  },
  modalCloseBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  modalAuthor: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  modalDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  modalBody: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  modalFooter: {
    flexDirection: 'row',
  },
});

export default ApiPostsView;
