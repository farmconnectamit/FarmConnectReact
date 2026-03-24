import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  isActive: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 4.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    isActive: true,
  },
  {
    id: '2',
    name: 'Fresh Carrots',
    price: 3.49,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
    isActive: true,
  },
  {
    id: '3',
    name: 'Organic Lettuce',
    price: 2.99,
    unit: 'head',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400',
    isActive: false,
  },
];

export default function Products({ navigation }: any) {
  const [products, setProducts] = useState(mockProducts);

  const toggleActive = (id: string) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>
          ${item.price.toFixed(2)}/{item.unit}
        </Text>
      </View>
      <View style={styles.productActions}>
        <View style={styles.activeControl}>
          <Text style={styles.activeLabel}>
            {item.isActive ? 'Active' : 'Inactive'}
          </Text>
          <Switch
            value={item.isActive}
            onValueChange={() => toggleActive(item.id)}
            trackColor={{ false: '#d1d5db', true: '#4baf31' }}
            thumbColor="#fff"
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('FarmerEditProduct', { productId: item.id })}
          >
            <Icon name="create-outline" size={18} color="#3B82F6" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Icon name="trash-outline" size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
          <Text style={styles.headerTitle}>My Products</Text>
          <Text style={styles.headerSubtitle}>{products.length} products</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FarmerAddProduct')}>
          <Icon name="add-circle" size={28} color="#4baf31" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
    justifyContent: 'space-between',
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
  },
  headerContent: {
    flex: 1,
    marginLeft: 14,
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
  listContent: {
    padding: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  productInfo: {
    marginBottom: 12,
  },
  productName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  productPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#4baf31',
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  activeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  activeLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#374151',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    width: 36,
    height: 36,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    width: 36,
    height: 36,
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
