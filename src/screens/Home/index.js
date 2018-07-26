import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    Button,
} from 'react-native'
import axios from 'axios'

// style
import styles from './style'


const API_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bed55e63078b41cf87108bfb00b5d203`
export default class Home extends Component{
    static navigationOptions = {
        title: 'Home'
    }

    constructor (){
        super()
        this.state = {
            news: []
        }
    }

    getData = ()=>{
        axios.get(API_NEWS)
        .then(({ data })=>{ this.setState({ news: data.articles }) })
        .catch((err)=> { console.log(err) })
    }

    componentDidMount(){
        this.getData()
    }

    render () {
        const { news } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={news}
                    style={styles.flatstyle}
                    renderItem={({ item })=>(
                        <View style={styles.cardStyle}>
                            <View style={styles.title}>
                                <Text>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={styles.ImageStye}>
                                {item.urlToImage !== null ?(
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 100,
                                        }}
                                        source={{uri: item.urlToImage}}
                                    />
                                ) :
                                (
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 100,
                                        }}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kj8frzJy7P5aRXamcc4zI-c-6C6htrededhz22uZhgAPMnlK'}}
                                    />
                                )}
                            </View>
                            <View style={styles.describe}>
                                <Text>
                                    {item.publishedAt.substring(0, 10)}
                                    test...123
                                </Text>
                                <Text>{' '}</Text>

                                <Button
                                    title="go to about"
                                    containerViewStyle={{width: '50%', marginLeft: 2}}
                                    onPress={() => this.props.navigation.navigate('Detail', { text: item })}
                                />
                            </View>

                        </View>
                    )}
                />
            </View>
        )
    }
}
