import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { FarmItemModel } from '../../types/api-response';
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import HomeProductList from '../products/ProductList';
import HomeCategorgiesList from '../home/HomeCategorgiesList';
import { useGetProductsByFarmIdQuery } from '../../../store/product-api';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cartSlice';
import { isAuthenticated } from '../../utils/auth';
import { SIGN_IN_SCREEN } from '../../navigation/NavigationConst';

//type FarmDetailRouteProp = RouteProp<{ FarmDetail: { item: FarmItemModel } }, 'FarmDetail'>;

const FarmItemDetail = () => {
    const route = useRoute();
    const { item } = route.params;
    
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    // API call
    const { data: products, isLoading, isError, refetch } = useGetProductsByFarmIdQuery(item.id);

    // Pull to refresh handler
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setIsRefreshing(true);
        refetch().then(() => {
            setIsRefreshing(false);
        });
    }, [refetch]);

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery'];
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
    return (
        <View style={styles.container}>
            <ScrollView>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.address}</Text>
            </View>

            {/* Categories */}
            <HomeCategorgiesList categories={categories} />

            {/* Product list */}
            <HomeProductList
                products={products}
                isLoading={isLoading}
                isError={isError}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        colors={['#007AFF']}
                        tintColor="#007AFF"
                    />
                }
            />
            </ScrollView>
        </View>
    );
};

export default FarmItemDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        padding: 16,
        backgroundColor: '#fff',
    },
    infoContainer: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 8,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    location: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
});
