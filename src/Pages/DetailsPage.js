import React from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator, Dimensions, StyleSheet, StatusBar, Alert, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Colors';
//import { getArticleDetail } from '../../Api';
import HTML from 'react-native-render-html';
import detail from '../../data';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        item: props.navigation.getParam('article', null),
    }
  }

  componentDidMount(){
    this.loadArticle();
  }

  loadArticle = () => {
    const newDetail = detail.detail.news.filter(item => item.id === this.state.item.id);
    console.log('newDetail', newDetail);
    console.log('detail array', newDetail[0]);
    this.setState({ item: newDetail[0]});
  }

  renderContent = () => {
    if(this.state.item.content){
        let content = this.state.item.content.replace(/&lt;/gi,'<').replace(/&gt;/gi,'>');
        let startPos = content.indexOf('<iframe');
        let endPos = content.indexOf('</iframe>');

        if(startPos < endPos){
            endPos += 9;
            let iframeEl = content.substring(startPos, endPos);
            let srcPos = iframeEl.indexOf('src=');
            let iframeUrl = iframeEl.substring(srcPos+5, iframeEl.indexOf(iframeEl.substr(srcPos+4,1), srcPos+5));
            let videoEl = `<iframe width="${Dimensions.get('window').width*0.95}" src="${iframeUrl}"></iframe>`;
            content = content.replace(/<iframe.*iframe>/, videoEl);
        }
        return (<HTML html={content} baseFontStyle={{color: Colors.text}} imagesMaxWidth={Dimensions.get('window').width} />)
    }
    return null;
  }

  render(){
    const { title, views, published_at, image, category } = this.state.item;
    return(
      <ScrollView style={{ backgroundColor: Colors.background}}>
        <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />
        <View style={{ position: 'relative'}}>
            <Image 
                source={{ uri: image }}
                style={{ width: '100%', height: 250, resizeMode: 'cover'}}
            />
            <TouchableOpacity
                style={styles.icon}
                onPress={() => this.props.navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={22} color="#eee" />
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.categoryText}>{category}</Text>
                <TouchableOpacity style={{ marginRight: 10 }}>
                    <Ionicons size={24} name='ios-heart' color={Colors.heartIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <View style={{ flexDirection: 'row'}}>
                    <Ionicons name="md-eye" size={18} color="#999"/>
                    <Text style={styles.smallText}>{views}</Text>
                </View>
                <Text style={styles.smallText}>{published_at}</Text>
            </View>
            { this.renderContent() }
        </View>
        
      </ScrollView>
    );
  }
}  

const styles = StyleSheet.create({
    title: {
      fontSize: 20, 
      marginVertical: 5,
      color: Colors.text,
      fontWeight: 'bold'
    },
    smallText:{
      fontSize: 14,
      marginHorizontal: 5,
      color: Colors.cardText
    },
    content: {
      marginHorizontal: 10,
    },
    icon: {
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#595959',
      position: 'absolute',
      width: 32,
      height: 32,
      left: 10,
      top: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5
    },
    categoryText: {
      fontSize: 14,
      backgroundColor: Colors.categoryBackground,
      color: Colors.categoryText,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      overflow: 'hidden'
  }
})