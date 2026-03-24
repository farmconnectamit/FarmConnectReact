import React, { useCallback, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../types/api-response";
import FarmItem from "./FarmItem";
import { FarmItemModel } from '../../types/api-response';
import { useGetAllFarmsQuery } from "../../../store/product-api";

const FarmList = () => {
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  // API call
  const { data: merchants = [], isLoading, isError, refetch, error } = useGetAllFarmsQuery({});

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    refetch().then(() => {
      setIsRefreshing(false);
    });
  }, [refetch]);

  const renderMerchantItem = ({ item }: { item: FarmItemModel }) => (
    <FarmItem item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Near by</Text>
      {isLoading ? (
        <Text>Loading farms...</Text>
      ) : isError ? (
        <Text>Error loading farms. Please try again.</Text>
      ) : (
        <FlatList
          style={styles.merchantList}
          data={merchants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMerchantItem}
          contentContainerStyle={{ paddingBottom: 16 }}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={['#007AFF']}
              tintColor="#007AFF"
            />
          }
        />
      )}
    </View>
  );
};

export default FarmList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  merchantCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,

  },
  merchantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  merchantDescription: {
    fontSize: 14,
    color: "#666",
  },
  merchantList: {
    marginBottom: 16
  },
});
