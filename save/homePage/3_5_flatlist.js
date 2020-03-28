import React from 'react';
import {
  View, 
  Text, 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';
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
      return (
        <View key={items.id}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{items.title}</Text>
            {
              <TouchableOpacity
                style={{ marginRight: '5%', marginVertical: 7 }}
                onPress={() => console.log('clicked')}>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            }
          </View>
          {result}
        </View>
      );
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
  seeAll: {
    fontSize: 14,
    backgroundColor: Colors.categoryBackground,
    color: Colors.categoryText,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  title: { color: Colors.text, marginVertical: 7, marginLeft: '5%', fontSize: 24, fontWeight: 'bold' }
});