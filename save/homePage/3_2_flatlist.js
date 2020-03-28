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

  //display article single item using function
  render(){
    const { items } = this.state; 
    
    return(
      <FlatList
        data={items}
        renderItem={({ item }) => <Article title={item.title}/>}
        keyExtractor={item => item.id}
    />
    )
  }
}  