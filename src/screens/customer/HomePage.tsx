import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { Farm } from '../../types/home';
import { useGetAllFarmsQuery } from '../../../store/product-api';
import { useSelector } from 'react-redux';

import { currentUser } from '../../../store';
const categories = [
  { id: 'all', label: 'All' },
  { id: 'vegetables', label: 'Vegetables' },
  { id: 'poultry', label: 'Poultry' },
  { id: 'butcher', label: 'Butcher' },
  { id: 'fishery', label: 'Fishery' },
];

export default function HomePage({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const user = useSelector(currentUser);

  const { data: farms = [], isLoading, error, isError } = useGetAllFarmsQuery();

  const filteredFarms = farms.filter((farm) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      farm.tags.some(tag => tag.name.toLowerCase() === selectedCategory);
    const matchesSearch = farm.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });



  const renderFarmCard = ({ item }: { item: Farm }) => (
    <TouchableOpacity
      style={styles.farmCard}
      onPress={() => navigation.navigate('StoreFront', { farmId: item.id })}
    >
      <Image source={{ uri: item.image_url }} style={styles.farmImage} />
      <View style={styles.farmInfo}>
        <Text style={styles.farmName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.farmCategory}>{item.tags[0].name}</Text>
        <View style={styles.farmMeta}>
          <View style={styles.rating}>
            <Icon name="star" size={12} color="#FFA500" />
            <Text style={styles.ratingText}>
              {item.rating} ({item.reviews})
            </Text>
          </View>
          <View style={styles.distance}>
            <Icon name="location-outline" size={12} color="#6b7280" />
            <Text style={styles.distanceText}>{item.distance}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>{user?.first_name} 👋</Text>
            <View style={styles.locationContainer}>
              <Icon name="location" size={16} color="#4baf31" />
              <Text style={styles.location}>Address {user?.address ?? "its null"}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('UserProfile')}
          >
            {user?.image_url ? <Image source={{ uri: user?.image_url }} style={styles.profileImage} />
              : <Icon name="person" size={20} color="#4baf31" />}
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search farms..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryChip,
                  selectedCategory === category.id && styles.categoryChipActive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={[
                    styles.categoryLabel,
                    selectedCategory === category.id &&
                    styles.categoryLabelActive,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Farms Grid */}
      <FlatList
        data={filteredFarms}
        renderItem={renderFarmCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.farmsGrid}
        columnWrapperStyle={styles.farmRow}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={22} color="#4baf31" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Icon name="heart-outline" size={22} color="#9ca3af" />
          <Text style={styles.navLabel}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Deals')}
        >
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
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  greeting: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1f2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0fdf4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
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
  categoriesScroll: {
    marginBottom: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryChipActive: {
    backgroundColor: '#4baf31',
    borderColor: '#4baf31',
  },
  categoryLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#6b7280',
  },
  categoryLabelActive: {
    color: '#fff',
  },
  farmsGrid: {
    padding: 16,
    paddingBottom: 80,
  },
  farmRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  farmCard: {
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
  farmImage: {
    width: '100%',
    height: 96,
  },
  farmInfo: {
    padding: 8,
  },
  farmName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1f2937',
    marginBottom: 2,
  },
  farmCategory: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  farmMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#6b7280',
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  distanceText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#6b7280',
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
