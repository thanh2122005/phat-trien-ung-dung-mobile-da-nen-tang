import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Bài tập 1 - Tuần 7: Minh họa Vòng đời Component (Lifecycle)
 * Áp dụng Mục 3.4: Mounting, Updating và Unmounting thông qua Hook useEffect
 * 
 * Sinh viên thực hiện: Bùi Duy Thành - MSV: 12523080
 */
const LifecycleDemo = () => {
  // State theo dõi số lần cập nhật và thời gian hoạt động (uptime)
  const [updateCount, setUpdateCount] = useState(0);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  const [mountedTime, setMountedTime] = useState('');
  const [logs, setLogs] = useState([]);

  // Hàm thêm nhật ký vòng đời
  const addLog = (message) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [
      `[${time}] ${message}`,
      ...prevLogs.slice(0, 4), // Lưu tối đa 5 log gần nhất
    ]);
  };

  // 1. GIAI ĐOẠN MOUNTING & UNMOUNTING (useEffect với dependency array rỗng [])
  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    setMountedTime(currentTime);
    addLog('🟢 [MOUNTING] Component được tạo và gắn vào giao diện');

    // Thiết lập timer đếm thời gian tồn tại (side-effect)
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);

    // GIAI ĐOẠN UNMOUNTING (Cleanup function)
    return () => {
      clearInterval(timer);
      console.log('🔴 [UNMOUNTING] Cleanup: Timer đã được hủy khi component bị unmount');
    };
  }, []);

  // 2. GIAI ĐOẠN UPDATING (useEffect lắng nghe sự thay đổi của updateCount)
  useEffect(() => {
    if (updateCount > 0) {
      addLog(`🔄 [UPDATING] State updateCount thay đổi thành: ${updateCount}`);
    }
  }, [updateCount]);

  return (
    <View style={styles.card}>
      <View style={styles.badgeRow}>
        <View style={styles.liveBadge}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>Component Đang Hoạt Động</Text>
        </View>
        <Text style={styles.uptimeText}>Thời gian chạy: {uptimeSeconds}s</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Thời điểm Mount:</Text>
        <Text style={styles.infoValue}>{mountedTime || 'Đang khởi tạo...'}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Số lần kích hoạt Updating:</Text>
        <Text style={styles.highlightValue}>{updateCount} lần</Text>
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.8}
        onPress={() => setUpdateCount((prev) => prev + 1)}
      >
        <Text style={styles.actionButtonText}>Kích hoạt Updating (Tăng State)</Text>
      </TouchableOpacity>

      {/* Hiển thị nhật ký sự kiện vòng đời */}
      <View style={styles.logContainer}>
        <Text style={styles.logTitle}>Nhật ký Vòng đời (Lifecycle Logs):</Text>
        {logs.map((log, index) => (
          <Text key={index} style={styles.logText}>
            {log}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginVertical: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16A34A',
    marginRight: 6,
  },
  liveText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#15803D',
  },
  uptimeText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: '#475569',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  highlightValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
  actionButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  logContainer: {
    backgroundColor: '#0F172A',
    padding: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  logTitle: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  logText: {
    color: '#E2E8F0',
    fontSize: 12,
    fontFamily: 'monospace',
    marginVertical: 2,
  },
});

export default LifecycleDemo;
