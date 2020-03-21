import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Colors';
import { Ionicons } from '@expo/vector-icons';

let width = Dimensions.get('window').width;

export default class Article extends React.Component {
  render(){
    const item = this.props.article;
    const items = this.props.article.items;

    const { title } = item;
    return(
      <TouchableOpacity style={styles.cardContentHorizontal}>
          <View style={styles.cardImageContent}>
              <Image
                  source={{ uri: items[0].image}}
                  style={styles.cardImage}
              />
          </View>
          <Text style={styles.category}>{items[0].category.toUpperCase()}</Text>
          <Text numberOfLines={2} style={styles.cardTitle}>{items[0].title}</Text>
          <View style={styles.cardRow}>
              <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <Ionicons 
                      name="md-eye" 
                      size={16} 
                      color={Colors.cardIcon} 
                      style={{ marginRight: 5 }} 
                   />
                  <Text style={styles.cardText}>{items[0].views}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <Ionicons 
                      name="md-time" 
                      size={16} 
                      color={Colors.cardIcon} 
                      style={{ marginRight: 5 }} 
                  />
                  <Text style={styles.cardText}>{items[0].published_at}</Text>
              </View>
          </View>
      </TouchableOpacity>
    )
  }
}  

const styles = StyleSheet.create({
  cardContentHorizontal: {
    width: width * 0.8,
    marginLeft: width * 0.05,
    marginBottom: 20,
    borderRadius: 15,
    paddingBottom: 10,
    backgroundColor: Colors.cardShadow,
    elevation: 3,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  cardImage: {
    width: '100%',
    height: 250
  },
  cardImageContent: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden'
  },
  category: {
    fontSize: 14,
    color: Colors.cardText,
    marginHorizontal: 15,
    marginTop: 10,
  },
  cardTitle:{
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 15,
    height: 50,
    fontWeight: 'bold',
    color: Colors.cardTitle
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  }
});
