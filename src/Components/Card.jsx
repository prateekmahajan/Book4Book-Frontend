import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import rootCss from '../rootCss';

class Card extends Component {
    render() {
        const { title, subTitle, image, uri } = this.props
        return (
            <View style={styles.mainContainer}>
                {image && <Image style={styles.image} source={image} />}
                {uri && <Image style={styles.image} source={{ uri: uri, width:'100%', height:250 }} />}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: rootCss.white,
        borderRadius: 20,
        marginTop: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 20
    },
    subTitle: {
        paddingHorizontal: 20,
        fontSize: 20,
        padding: 10,
        color: rootCss.secondaryColor,
        fontWeight: 'bold'
    }
})

export default Card;