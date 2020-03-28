import React from 'react';
import {View, Text } from 'react-native';
import data from '../../data';

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

  render(){
    const { items } = this.state; 
    
    return(
      <View>
        {
          items.items && items.items.map((article) => (
            <Text>{article.title}</Text>
          ))
        }
      </View>
    )
  }
}  