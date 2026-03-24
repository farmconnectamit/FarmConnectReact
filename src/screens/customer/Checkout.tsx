import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Checkout({ navigation }: any) {
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = 18.96;
  const delivery = 4.99;
  const total = deliveryOption === 'delivery' ? subtotal + delivery : subtotal;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Checkout</Text>
          <Text style={styles.headerSubtitle}>Review your order</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Delivery Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Option</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                deliveryOption === 'delivery' && styles.optionCardActive,
              ]}
              onPress={() => setDeliveryOption('delivery')}
            >
              <Icon
                name="bicycle"
                size={24}
                color={deliveryOption === 'delivery' ? '#4baf31' : '#6b7280'}
              />
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionTitle,
                    deliveryOption === 'delivery' && styles.optionTitleActive,
                  ]}
                >
                  Delivery
                </Text>
                <Text style={styles.optionDescription}>20-30 min • $4.99</Text>
              </View>
              {deliveryOption === 'delivery' && (
                <Icon name="checkmark-circle" size={24} color="#4baf31" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                deliveryOption === 'pickup' && styles.optionCardActive,
              ]}
              onPress={() => setDeliveryOption('pickup')}
            >
              <Icon
                name="bag-handle"
                size={24}
                color={deliveryOption === 'pickup' ? '#4baf31' : '#6b7280'}
              />
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionTitle,
                    deliveryOption === 'pickup' && styles.optionTitleActive,
                  ]}
                >
                  Pickup
                </Text>
                <Text style={styles.optionDescription}>15 min • Free</Text>
              </View>
              {deliveryOption === 'pickup' && (
                <Icon name="checkmark-circle" size={24} color="#4baf31" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Address */}
        {deliveryOption === 'delivery' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <View style={styles.addressCard}>
              <Icon name="location" size={20} color="#4baf31" />
              <View style={styles.addressContent}>
                <Text style={styles.addressName}>Home</Text>
                <Text style={styles.addressText}>
                  123 Main Street, Apt 4B{'\n'}
                  New York, NY 10001
                </Text>
              </View>
              <TouchableOpacity>
                <Icon name="create-outline" size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                paymentMethod === 'card' && styles.optionCardActive,
              ]}
              onPress={() => setPaymentMethod('card')}
            >
              <Icon
                name="card"
                size={24}
                color={paymentMethod === 'card' ? '#4baf31' : '#6b7280'}
              />
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionTitle,
                    paymentMethod === 'card' && styles.optionTitleActive,
                  ]}
                >
                  Credit Card
                </Text>
                <Text style={styles.optionDescription}>**** 4242</Text>
              </View>
              {paymentMethod === 'card' && (
                <Icon name="checkmark-circle" size={24} color="#4baf31" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                paymentMethod === 'cash' && styles.optionCardActive,
              ]}
              onPress={() => setPaymentMethod('cash')}
            >
              <Icon
                name="cash"
                size={24}
                color={paymentMethod === 'cash' ? '#4baf31' : '#6b7280'}
              />
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionTitle,
                    paymentMethod === 'cash' && styles.optionTitleActive,
                  ]}
                >
                  Cash on Delivery
                </Text>
                <Text style={styles.optionDescription}>Pay when you receive</Text>
              </View>
              {paymentMethod === 'cash' && (
                <Icon name="checkmark-circle" size={24} color="#4baf31" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Notes (Optional)</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Add delivery instructions..."
            multiline
            numberOfLines={3}
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Order Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>

          {deliveryOption === 'delivery' && (
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>${delivery.toFixed(2)}</Text>
            </View>
          )}

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => navigation.navigate('OrderSuccess')}
        >
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
          <Icon name="checkmark" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  backButton: {
    width: 20,
    height: 20,
    backgroundColor: '#4baf31',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#020202',
  },
  headerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8d92a3',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 12,
  },
  optionsContainer: {
    gap: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  optionCardActive: {
    borderColor: '#4baf31',
    backgroundColor: '#f0fdf4',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
    marginBottom: 2,
  },
  optionTitleActive: {
    color: '#15803d',
  },
  optionDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  addressContent: {
    flex: 1,
  },
  addressName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1f2937',
    marginBottom: 4,
  },
  addressText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 20,
  },
  notesInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1f2937',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    height: 80,
    textAlignVertical: 'top',
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },
  summaryTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  summaryValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },
  totalLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
  },
  totalValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#4baf31',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  placeOrderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#4baf31',
    paddingVertical: 16,
    borderRadius: 12,
  },
  placeOrderButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});
