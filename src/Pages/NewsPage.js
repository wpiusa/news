import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Article from '../Components/Article';
import Colors from '../../Colors';
//import { getArticle } from '../../Api';
import data from '../../data';

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //loading: true,
      has_next: true,
      category_id: props.navigation.getParam('id', null),
      items: []
    };
  }

  componentDidMount() {
    console.log('state', this.state);
    this.setState({ items: data.data.items[0] });
    //this.loadArticle();
  }

  openArticle = (item) => {
    this.props.navigation.navigate('Details', { article: item, title: item.title })
  }
 
  /*
      result = <FlatList
              data={item.items}
              renderItem={({ item }) => <Article article={item} />}
              keyExtractor={item => item.id}
          />
  */
  render(){
    console.log('news item', this.state.items);
      return(
        <FlatList
            style={{ backgroundColor: Colors.background, marginTop: 7 }}
            data={this.state.items}
            renderItem={({ item }) => <Article article={item} onPress={() => this.openArticle(item)} />}
            keyExtractor={item => item.id}
            //refreshing={this.state.loading}
            //onRefresh={this.handleRefresh}
            //onEndReachedThreshold={0.4}
            //onEndReached={this.state.has_next ? this.loadArticle : null}
        />
    );
  
  }
}  