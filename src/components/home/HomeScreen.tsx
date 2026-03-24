import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cartSlice';
import { useGetAllProductsQuery } from '../../../store/product-api';
import { isAuthenticated, clearTokens, getAuthToken } from '../../utils/auth';
import { useNavigation } from '@react-navigation/native';
import { SIGN_IN_SCREEN, HOME_SCREEN } from '../../navigation/NavigationConst';

const HomeScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ordering, setOrdering] = useState('-created_at');
  
  // Check authentication on focus
  useFocusEffect(
    React.useCallback(() => {
      const checkAuth = async () => {
        const authenticated = await isAuthenticated();
        if (!authenticated) {
          navigation.navigate(SIGN_IN_SCREEN);
        }
      };
      checkAuth();
    }, [navigation])
  );

  const handleLogout = async () => {
    try {
      await clearTokens();
      Alert.alert('Logged Out', 'You have been logged out successfully');
      navigation.navigate(SIGN_IN_SCREEN);
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'Failed to logout');
    }
  };
  
  // API call
  const { data: products, isLoading, isError, refetch } = useGetAllProductsQuery({
    search: searchQuery,
    category: selectedCategory,
    ordering: ordering
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>FarmConnect</Text>
        <Text style={styles.subtitle}>Fresh produce, delivered to you</Text>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearBtn}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  searchContainer: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearBtn: {
    color: '#007AFF',
    marginLeft: 10,
    fontWeight: '600',
  },
  categoryContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  categoryBadgeActive: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    color: '#333',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#fff',
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#007AFF',
    fontWeight: '600',
  },
  productList: {
    padding: 8,
    paddingBottom: 120,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#ff4444',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
