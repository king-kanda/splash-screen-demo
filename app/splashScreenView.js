import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function splashScreenView() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/Hulu.png')} />
      <Text>splashScreenView</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },

    image : {
        width: 300,
        height: 200,
        backgroundSize: 'cover',
    }
})