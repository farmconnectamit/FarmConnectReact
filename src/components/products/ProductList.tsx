import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import ProductCard from './ProductCard';
import { Product } from '../../types/api-response';
import { PRODUCT_DETAILS_SCREEN } from '../../navigation/NavigationConst';

type RootStackParamList = {
    Details: { product: Product };
    Home: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Cart: undefined;
};

const HomeProductList = ({ products, isLoading, isError }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleProductPress = (product: Product) => {
        navigation.navigate(PRODUCT_DETAILS_SCREEN, { product });
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading products...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error loading products. Please try again.</Text>
            </View>
        );
    }

    const renderProductItem = ({ item }: { item: Product }) => (
        <ProductCard product={item} />
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.productsHeader}>
                <Text style={styles.productsTitle}>
                    {`${products?.length || 0} Products Found`}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    productsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginBottom: 8,
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
});

export default HomeProductList;