import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductsScreen() {
  const [products, setProducts] = useState([
    { id: '1', name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/100x100" },
    { id: '2', name: "Smart Watch", price: 199.99, image: "https://via.placeholder.com/100x100" },
    { id: '3', name: "Portable Charger", price: 49.99, image: "https://via.placeholder.com/100x100" },
  ]);

  const handleAddProduct = () => {
    // Here you would typically navigate to a new screen to add a product
    console.log('Add new product');
  };

  const renderProduct = ({ item }: {item: any}) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Products</Text>
        <TouchableOpacity onPress={handleAddProduct} style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 5,
  },
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
  },
});

