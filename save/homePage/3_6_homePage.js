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
    console.log('data', data);
    this.setState({ items: data.data.items });
  }

  openArticle = (item) => {
    console.log('open article');
    this.props.navigation.navigate('Details', { article: item, title: item.title })
  }

  renderItem = (item, index) => {
      //console.log('item', item);
      //console.log('index', index);
      //console.log('item type', item.type);
      if (item.items.length === 0) return null;
      let result = null;
      console.log('item type switch', item.type);
      console.log('item.items', item.items);
      switch(item.type) {
        case 'list':
          result = item.items.map(i => <Article key={i.id + 100} article={i} onPress={() => this.openArticle(i)}/>);
          break;
        case 'carousel':

        case 'horizontal':
          result = <FlatList
              data={item.items}
              renderItem={({ item }) => <Article article={item} />}
              keyExtractor={item => item.id}
          />
        break;
      }
      
      return (
        <View key={index}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{item.title}</Text>
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
              {items.map(this.renderItem)}
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