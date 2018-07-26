import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'

import styles from './style'

class Detail extends Component{
    static navigationOptions = {
        title: 'Detail'
    }

    render () {
        const item = this.props.navigation.getParam('text', ' ini kalo defAULTNY')
        return (
            <View  style={styles.container}>
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
                        </Text>
                        <Text>{"\n"}</Text>
                        <Text>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}


export default Detail;