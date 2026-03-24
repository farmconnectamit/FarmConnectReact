import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { selectCartItems } from '../../../store/cartSlice';
import { Product } from '../../types/api-response';


const ProductCard = ({ product }: { product: Product }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { title, name, description, image, price, category, rating, id } = product;
  const isInCart = cartItems.find(item => item.product.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      product,
      quantity: 1
    }));
  };

  return (
    <Card style={styles.card}>
      <Chip style={styles.chip}>Price {price}</Chip>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={title} />
      <Card.Content>
        <Text>{description}</Text>
      </Card.Content>
      <Card.Actions >
        <TouchableOpacity
          style={[styles.addToCartButton, isInCart && styles.inCartButton]}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>
            {isInCart ? 'In Cart' : 'Add to cart'}
          </Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  chip: {
    margin: 5,
    marginRight: "auto"
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  inCartButton: {
    backgroundColor: '#333'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default ProductCard;