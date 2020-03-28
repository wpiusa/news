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

  renderItem = (item) => {
    console.log('single item', item); // console.log is for testing from browser
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