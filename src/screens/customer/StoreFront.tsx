import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
  discount?: number;
}

const storeData: Record<string, any> = {
  '1': {
    name: 'Green Valley Farm',
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500',
    rating: 4.8,
    reviews: 245,
    distance: '2.3 km',
    delivery: '20-30 min',
    products: [
      {
        id: 'p1',
        name: 'Organic Tomatoes',
        description: 'Fresh heirloom tomatoes',
        price: 4.99,
        unit: 'lb',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
        inStock: true,
        discount: 10,
      },
      {
        id: 'p2',
        name: 'Fresh Carrots',
        description: 'Crunchy organic carrots',
        price: 3.49,
        unit: 'lb',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
        inStock: true,
      },
      {
        id: 'p3',
        name: 'Organic Lettuce',
        description: 'Fresh crispy greens',
        price: 2.99,
        unit: 'head',
        image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400',
        inStock: true,
      },
      {
        id: 'p4',
        name: 'Fresh Spinach',
        description: 'Leafy greens, nutrient-rich',
        price: 3.99,
        unit: 'lb',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
        inStock: true,
      },
      {
        id: 'p5',
        name: 'Bell Peppers',
        description: 'Mixed color peppers',
        price: 5.49,
        unit: 'lb',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400',
        inStock: true,
        discount: 15,
      },
      {
        id: 'p6',
        name: 'Cucumbers',
        description: 'Fresh garden cucumbers',
        price: 2.49,
        unit: 'lb',
        image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400',
        inStock: true,
      },
    ],
  },
};

export default function StoreFront({ navigation, route }: any) {
  const { farmId } = route.params || { farmId: '1' };
  const [searchQuery, setSearchQuery] = useState('');
  
  const store = storeData[farmId] || storeData['1'];

  const filteredProducts = store.products.filter(
    (product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}% OFF</Text>
          </View>
        )}
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {item.description}
        </Text>
        <View style={styles.productFooter}>
          <View>
            <Text style={styles.productPrice}>
              ${item.discount ? (item.price * (1 - item.discount / 100)).toFixed(2) : item.price.toFixed(2)}
              <Text style={styles.productUnit}> /{item.unit}</Text>
            </Text>
            {item.discount && (
              <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

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
          <Text style={styles.headerTitle}>{store.name}</Text>
          <Text style={styles.headerSubtitle}>Browse products</Text>
        </View>
      </View>

      {/* Store Info */}
      <View style={styles.storeInfo}>
        <Image source={{ uri: store.image }} style={styles.storeBanner} />
        <View style={styles.storeDetails}>
          <View style={styles.storeRow}>
            <View style={styles.storeRating}>
              <Icon name="star" size={16} color="#FFA500" />
              <Text style={styles.ratingText}>
                {store.rating} ({store.reviews} reviews)
              </Text>
            </View>
            <View style={styles.storeMeta}>
              <Icon name="location-outline" size={14} color="#6b7280" />
              <Text style={styles.metaText}>{store.distance}</Text>
            </View>
          </View>
          <View style={styles.deliveryInfo}>
            <Icon name="time-outline" size={14} color="#4baf31" />
            <Text style={styles.deliveryText}>Delivery: {store.delivery}</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsGrid}
        columnWrapperStyle={styles.productRow}
        showsVerticalScrollIndicator={false}
      />

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
          <Icon name="pricetag-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Cart')}
        >
          <Icon name="cart-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Cart</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>3</Text>
          </View>
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
  storeInfo: {
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  storeBanner: {
    width: '100%',
    height: 120,
  },
  storeDetails: {
    padding: 16,
  },
  storeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  storeRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#374151',
  },
  storeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  deliveryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4baf31',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1f2937',
  },
  productsGrid: {
    padding: 16,
    paddingBottom: 80,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1f2937',
    marginBottom: 2,
  },
  productDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#4baf31',
  },
  productUnit: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  originalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  addButton: {
    width: 32,
    height: 32,
    backgroundColor: '#4baf31',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'relative',
  },
  navLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    color: '#9ca3af',
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: 12,
    backgroundColor: '#EF4444',
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 8,
    color: '#fff',
  },
});
