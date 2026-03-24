import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function UserProfile({ navigation }: any) {
  const [showAddCard, setShowAddCard] = useState(false);

  const orderStats = [
    { label: 'Orders', value: '12', icon: 'cart-outline', color: '#3B82F6' },
    { label: 'Favorites', value: '8', icon: 'heart-outline', color: '#EF4444' },
  ];

  const savedCards = [
    { id: 1, last4: '4242', brand: 'Visa', expiry: '12/25' },
    { id: 2, last4: '5555', brand: 'Mastercard', expiry: '08/26' },
  ];

  const profileSections = [
    { icon: 'person-outline', label: 'Personal Information' },
    { icon: 'location-outline', label: 'My Addresses' },
    { icon: 'time-outline', label: 'Order History' },
    { icon: 'heart-outline', label: 'Favorites' },
    { icon: 'settings-outline', label: 'Settings' },
  ];

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
          <Text style={styles.headerTitle}>My Profile</Text>
          <Text style={styles.headerSubtitle}>Manage your account</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Icon name="person" size={40} color="#fff" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@email.com</Text>
              <Text style={styles.profilePhone}>+1 (555) 123-4567</Text>
            </View>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            {orderStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={[styles.statIcon, { backgroundColor: stat.color }]}>
                  <Icon name={stat.icon} size={20} color="#fff" />
                </View>
                <View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Profile Menu */}
        <View style={styles.menuCard}>
          {profileSections.map((section, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                    <Icon name={section.icon} size={20} color="#666" />
                  </View>
                  <Text style={styles.menuLabel}>{section.label}</Text>
                </View>
                <Icon name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
              {index < profileSections.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentCard}>
          <View style={styles.paymentHeader}>
            <Text style={styles.sectionTitle}>Payment Methods</Text>
            <TouchableOpacity
              style={styles.addCardButton}
              onPress={() => setShowAddCard(true)}
            >
              <Icon name="add" size={16} color="#fff" />
              <Text style={styles.addCardText}>Add Card</Text>
            </TouchableOpacity>
          </View>

          {savedCards.map((card, index) => (
            <View key={card.id}>
              {index > 0 && <View style={styles.divider} />}
              <TouchableOpacity style={styles.cardItem}>
                <View style={styles.cardItemLeft}>
                  <View style={styles.cardIconContainer}>
                    <Icon name="card-outline" size={20} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.cardBrand}>
                      {card.brand} •••• {card.last4}
                    </Text>
                    <Text style={styles.cardExpiry}>Expires {card.expiry}</Text>
                  </View>
                </View>
                <Icon name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('AuthLanding')}
        >
          <Icon name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>Farm Connect v1.0.0</Text>
          <Text style={styles.appInfoText}>© 2026 All rights reserved</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="heart-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Cart')}
        >
          <Icon name="cart-outline" size={22} color="#999" />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={22} color="#4baf31" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Add Card Modal */}
      <Modal
        visible={showAddCard}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowAddCard(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Payment Card</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowAddCard(false)}
              >
                <Icon name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Card Preview */}
              <View style={styles.cardPreview}>
                <View style={styles.cardPreviewHeader}>
                  <View style={styles.chipIcon}>
                    <Icon name="card" size={24} color="#fff" />
                  </View>
                  <Text style={styles.cardBrandText}>VISA</Text>
                </View>
                <Text style={styles.cardNumber}>•••• •••• •••• ••••</Text>
                <View style={styles.cardPreviewFooter}>
                  <View>
                    <Text style={styles.cardLabel}>Card Holder</Text>
                    <Text style={styles.cardValue}>John Doe</Text>
                  </View>
                  <View>
                    <Text style={styles.cardLabel}>Expires</Text>
                    <Text style={styles.cardValue}>MM/YY</Text>
                  </View>
                </View>
              </View>

              {/* Form */}
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Card Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="1234 5678 9012 3456"
                    keyboardType="number-pad"
                    maxLength={19}
                    placeholderTextColor="#9ca3af"
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Cardholder Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="John Doe"
                    autoCapitalize="words"
                    placeholderTextColor="#9ca3af"
                  />
                </View>

                <View style={styles.formRow}>
                  <View style={[styles.formGroup, styles.formGroupHalf]}>
                    <Text style={styles.formLabel}>Expiry Date</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="MM/YY"
                      keyboardType="number-pad"
                      maxLength={5}
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                  <View style={[styles.formGroup, styles.formGroupHalf]}>
                    <Text style={styles.formLabel}>CVV</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="123"
                      keyboardType="number-pad"
                      maxLength={4}
                      secureTextEntry
                      placeholderTextColor="#9ca3af"
                    />
                  </View>
                </View>

                <View style={styles.checkboxContainer}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>
                    Set as default payment method
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setShowAddCard(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.submitButton]}
                  onPress={() => setShowAddCard(false)}
                >
                  <Text style={styles.submitButtonText}>Add Card</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  profileCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4baf31',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1f2937',
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  profilePhone: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1f2937',
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  menuCard: {
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginHorizontal: 16,
  },
  paymentCard: {
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#4baf31',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addCardText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#fff',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBrand: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1f2937',
  },
  cardExpiry: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  logoutText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#EF4444',
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  appInfoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    color: '#9ca3af',
  },
  navLabelActive: {
    color: '#4baf31',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  modalTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1f2937',
  },
  closeButton: {
    width: 32,
    height: 32,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPreview: {
    backgroundColor: '#4baf31',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardPreviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  chipIcon: {
    width: 48,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBrandText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#fff',
  },
  cardNumber: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#fff',
    letterSpacing: 2,
    marginBottom: 16,
  },
  cardPreviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  cardValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
  },
  form: {
    paddingHorizontal: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  formRow: {
    flexDirection: 'row',
    gap: 12,
  },
  formGroupHalf: {
    flex: 1,
  },
  formLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1f2937',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 4,
  },
  checkboxLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#374151',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
  },
  cancelButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
  },
  submitButton: {
    backgroundColor: '#4baf31',
  },
  submitButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
});
