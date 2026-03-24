import React, {Component, useEffect, useState, PureComponent} from 'react';
import { FarmItemModel } from '../../types/api-response';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity,RefreshControl } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FARM_DETAILS_SCREEN } from '../../navigation/NavigationConst';

type RootParamList = {
    FarmDetail: { item: FarmItemModel };
};

const FarmItem = ({ item }: { item: FarmItemModel }) => {
    const navigation = useNavigation<NavigationProp<RootParamList>>();
    const[data, setData] = useState("")
     useEffect(()=>{

    })
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate(FARM_DETAILS_SCREEN, { item })}}>
                <View style={styles.container}>
                    <Image source={{ uri: item.image_url ?? 'https://farmer-app-storage-2025.s3.us-east-1.amazonaws.com/Merchants_images/merchany1-small.jpg' }} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.location}>{item.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        
        </View>
    );
}


export default FarmItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    name: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    price: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 4,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});