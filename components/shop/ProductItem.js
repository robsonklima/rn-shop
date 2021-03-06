import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

import Colors from '../../constants/Colors';

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </View>
      <View style={styles.actions} >
        <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail}></Button>
        <Button color={Colors.primary} title="Add to Cart" onPress={props.onAddToCart}></Button>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '60%'
  },
  detail: {
    alignItems: 'center',
    height: '15%'
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%'

  }
});

export default ProductItem;