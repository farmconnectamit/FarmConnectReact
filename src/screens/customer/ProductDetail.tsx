import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
  discount?: number;
  rating: number;
  reviews: number;
  farm: string;
  category: string;
  weight: string;
  origin: string;
}

const products: Record<string, ProductDetail> = {
  p1: {
    id: 'p1',
    name: 'Organic Tomatoes',
    description: 'Fresh heirloom tomatoes',
    longDescription:
      'Premium quality organic heirloom tomatoes grown without pesticides. These tomatoes are vine-ripened for maximum flavor and nutrition. Perfect for salads, sauces, and fresh eating.',
    price: 4.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    inStock: true,
    discount: 10,
    rating: 4.8,
    reviews: 124,
    farm: 'Green Valley Farm',
    category: 'Vegetables',
    weight: '1 lb',
    origin: 'Springfield, CA',
  },
};

export default function ProductDetail({ navigation, route }: any) {
  const { productId } = route.params || { productId: 'p1' };
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products[productId] || products['p1'];

  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
          <Text style={styles.headerTitle}>Product Details</Text>
          <Text style={styles.headerSubtitle}>View product info</Text>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart-outline" size={24} color="#4baf31" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          {product.discount && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{product.discount}% OFF</Text>
            </View>
          )}
        </View>

        {/* Product Info */}
        <View style={styles.infoCard}>
          <View style={styles.productHeader}>
            <View style={styles.productTitleSection}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productCategory}>{product.category}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFA500" />
              <Text style={styles.ratingText}>{product.rating}</Text>
              <Text style={styles.reviewsText}>({product.reviews})</Text>
            </View>
          </View>

          <Text style={styles.description}>{product.longDescription}</Text>

          {/* Product Details */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Icon name="scale-outline" size={20} color="#6b7280" />
              <View>
                <Text style={styles.detailLabel}>Weight</Text>
                <Text style={styles.detailValue}>{product.weight}</Text>
              </View>
            </View>
            <View style={styles.detailItem}>
              <Icon name="location-outline" size={20} color="#6b7280" />
              <View>
                <Text style={styles.detailLabel}>Origin</Text>
                <Text style={styles.detailValue}>{product.origin}</Text>
              </View>
            </View>
          </View>

          {/* Farm Info */}
          <View style={styles.farmInfo}>
            <Icon name="leaf" size={20} color="#4baf31" />
            <View style={styles.farmDetails}>
              <Text style={styles.farmLabel}>Farm</Text>
              <Text style={styles.farmName}>{product.farm}</Text>
            </View>
          </View>

          {/* Quantity Selector */}
          <View style={styles.quantitySection}>
            <Text style={styles.sectionLabel}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Icon name="remove" size={20} color="#4baf31" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Icon name="add" size={20} color="#4baf31" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Price Summary */}
          <View style={styles.priceSummary}>
            <View>
              <Text style={styles.priceLabel}>Total Price</Text>
              <View style={styles.priceRow}>
                <Text style={styles.finalPrice}>
                  ${(finalPrice * quantity).toFixed(2)}
                </Text>
                {product.discount && (
                  <Text style={styles.originalPrice}>
                    ${(product.price * quantity).toFixed(2)}
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={[styles.addToCartButton, addedToCart && styles.addedToCart]}
              onPress={handleAddToCart}
            >
              {addedToCart ? (
                <>
                  <Icon name="checkmark" size={20} color="#fff" />
                  <Text style={styles.addToCartText}>Added!</Text>
                </>
              ) : (
                <>
                  <Icon name="cart-outline" size={20} color="#fff" />
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
  favoriteButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 280,
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  discountText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#fff',
  },
  infoCard: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 20,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  productTitleSection: {
    flex: 1,
  },
  productName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#1f2937',
    marginBottom: 4,
  },
  productCategory: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#6b7280',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
  },
  reviewsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9ca3af',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 22,
    marginBottom: 20,
  },
  detailsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    alignItems: 'center',
  },
  detailLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#9ca3af',
  },
  detailValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#374151',
  },
  farmInfo: {
    flexDirection: 'row',
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    padding: 16,
    gap: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  farmDetails: {
    flex: 1,
  },
  farmLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#15803d',
  },
  farmName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#15803d',
  },
  quantitySection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4baf31',
  },
  quantityText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1f2937',
    minWidth: 40,
    textAlign: 'center',
  },
  priceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  priceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  finalPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4baf31',
  },
  originalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#4baf31',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  addedToCart: {
    backgroundColor: '#16a34a',
  },
  addToCartText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
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
});
