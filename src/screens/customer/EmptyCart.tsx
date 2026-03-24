import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function EmptyCart({ navigation }: any) {
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
          <Text style={styles.headerTitle}>My Cart</Text>
          <Text style={styles.headerSubtitle}>0 items</Text>
        </View>
      </View>

      {/* Empty State */}
      <View style={styles.content}>
        <View style={styles.emptyContainer}>
          <View style={styles.iconCircle}>
            <Icon name="cart-outline" size={80} color="#d1d5db" />
          </View>
          <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
          <Text style={styles.emptyMessage}>
            Looks like you haven't added any fresh produce to your cart yet.
            Start shopping now!
          </Text>
        </View>

        {/* Suggestions */}
        <View style={styles.suggestions}>
          <Text style={styles.suggestionsTitle}>You might like</Text>
          <View style={styles.suggestionCards}>
            <TouchableOpacity
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Home')}
            >
              <Icon name="leaf" size={32} color="#4baf31" />
              <Text style={styles.suggestionLabel}>Browse Farms</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Home')}
            >
              <Icon name="heart" size={32} color="#EF4444" />
              <Text style={styles.suggestionLabel}>Your Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="basket" size={20} color="#fff" />
          <Text style={styles.shopButtonText}>Start Shopping</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="heart-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cart" size={22} color="#4baf31" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('UserProfile')}
        >
          <Icon name="person-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Profile</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
  emptyContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconCircle: {
    width: 180,
    height: 180,
    backgroundColor: '#f3f4f6',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1f2937',
    marginBottom: 12,
  },
  emptyMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  suggestions: {
    marginBottom: 32,
  },
  suggestionsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  suggestionCards: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  suggestionCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  suggestionLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#374151',
    marginTop: 8,
    textAlign: 'center',
  },
  shopButton: {
    backgroundColor: '#4baf31',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#4baf31',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  shopButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
});
