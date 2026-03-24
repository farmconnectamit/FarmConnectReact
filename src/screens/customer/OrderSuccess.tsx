import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function OrderSuccess({ navigation }: any) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Animation */}
        <Animated.View
          style={[
            styles.successCircle,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.checkmarkCircle}>
            <Icon name="checkmark" size={80} color="#fff" />
          </View>
        </Animated.View>

        {/* Success Message */}
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.message}>
          Your order has been confirmed and will be delivered soon
        </Text>

        {/* Order Details */}
        <View style={styles.orderCard}>
          <View style={styles.orderRow}>
            <Text style={styles.orderLabel}>Order ID</Text>
            <Text style={styles.orderValue}>#FRM2026789</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.orderRow}>
            <Text style={styles.orderLabel}>Estimated Delivery</Text>
            <Text style={styles.orderValue}>Tomorrow, 2-4 PM</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.orderRow}>
            <Text style={styles.orderLabel}>Total Amount</Text>
            <Text style={[styles.orderValue, styles.totalAmount]}>$45.50</Text>
          </View>
        </View>

        {/* Delivery Info */}
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryHeader}>
            <Icon name="location" size={20} color="#4baf31" />
            <Text style={styles.deliveryTitle}>Delivery Address</Text>
          </View>
          <Text style={styles.deliveryAddress}>
            123 Main Street, Apt 4B{'\n'}
            New York, NY 10001{'\n'}
            United States
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.primaryButtonText}>Continue Shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('UserProfile')}
          >
            <Icon name="time-outline" size={18} color="#4baf31" />
            <Text style={styles.secondaryButtonText}>View Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  successCircle: {
    marginBottom: 32,
  },
  checkmarkCircle: {
    width: 160,
    height: 160,
    backgroundColor: '#4baf31',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4baf31',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  orderCard: {
    width: '100%',
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  orderLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  orderValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1f2937',
  },
  totalAmount: {
    color: '#4baf31',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  deliveryCard: {
    width: '100%',
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  deliveryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  deliveryTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#1f2937',
  },
  deliveryAddress: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#374151',
    lineHeight: 20,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#4baf31',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#f0fdf4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4baf31',
  },
  secondaryButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4baf31',
  },
});
