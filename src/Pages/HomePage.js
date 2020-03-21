import React from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import data from '../../data';
import Article from '../Components/Article';
import Colors from '../../Colors';
import Constants from 'expo-constants';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount(){
    this.setState({ items: data.items });
  }

  renderItem = (items) => {
      const result = <FlatList
          data={items}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.id}
      />
      return result;
  }

  //display article single item using function
  render(){
    const { items } = this.state; 
    return(
      <SafeAreaView style={styles.container}>
          <ScrollView>
              {this.renderItem(items)}
          </ScrollView>
      </SafeAreaView>
    )
  }
}  

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.categoryBackground,
    marginBottom: 80,
    height: '100%',
    paddingTop: Constants.statusBarHeight
  },
});