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
    this.setState({ items: data });
  }

  renderItem = (item) => {
    <FlatList
      data={item}
      renderItem={}
      keyExtractor={}
      horizontal={true}
    />
  }

  //display article single item using function
  render(){
    const { items } = this.state; 
    
    return(
      <View>
        {
          items.items && items.items.map(this.renderItem)
        }
      </View>
    )
  }
}  