import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const featuredLives = [
  { id: '1', title: "Summer Fashion", influencer: "StyleQueen", viewers: 1200, image: "https://via.placeholder.com/300x150" },
  { id: '2', title: "Tech Gadgets", influencer: "GadgetGuru", viewers: 850, image: "https://via.placeholder.com/300x150" },
];

const trendingProducts = [
  { id: '1', name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/100x100" },
  { id: '2', name: "Smart Watch", price: 199.99, image: "https://via.placeholder.com/100x100" },
  { id: '3', name: "Portable Charger", price: 49.99, image: "https://via.placeholder.com/100x100" },
];

const LiveItem = ({ item }: any) => (
  <TouchableOpacity style={styles.liveItem}>
    <Image source={{ uri: item.image }} style={styles.liveImage} />
    <View style={styles.liveOverlay}>
      <Text style={styles.liveStatus}>LIVE</Text>
    </View>
    <View style={styles.liveInfo}>
      <Text style={styles.liveTitle}>{item.title}</Text>
      <Text style={styles.liveInfluencer}>By {item.influencer}</Text>
      <Text style={styles.liveViewers}>{item.viewers} viewers</Text>
    </View>
  </TouchableOpacity>
);

const ProductItem = ({ item }: any) => (
  <View style={styles.productItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Lives</Text>
      <FlatList
        data={featuredLives}
        renderItem={({ item }) => <LiveItem item={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Trending Products</Text>
      <FlatList
        data={trendingProducts}
        renderItem={({ item }) => <ProductItem item={item} />}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  liveItem: {
    width: 300,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  liveImage: {
    width: '100%',
    height: 150,
  },
  liveOverlay: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  liveStatus: {
    color: 'white',
    fontSize: 12,
  },
  liveInfo: {
    padding: 10,
  },
  liveTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  liveInfluencer: {
    fontSize: 14,
    color: 'gray',
  },
  liveViewers: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
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

