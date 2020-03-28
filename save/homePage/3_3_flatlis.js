import React from 'react';
import {View, Text, FlatList } from 'react-native';
import data from '../../data';
import Article from '../Components/Article';

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

  renderItem = (item) => {
    console.log('item', item.items);  //child items
    const result = <FlatList
        data={item.items} //child items
        renderItem={({ item }) => <Article article={item}/>}
        keyExtractor={item => item.id}
        horizontal={true}
    />
    return result;
  }

  //display article single item using function
  render(){
    const { items } = this.state; 
    
    return(
      <View>
        { items && items.map(this.renderItem) }
      </View>
    )
  }
}  