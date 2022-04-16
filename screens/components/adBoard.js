import React from 'react';
import { StyleSheet, View, } from 'react-native'
import {
    AdMobBanner,
  } from 'expo-ads-admob';


export default class adBoard extends React.Component {

  render() {
    return (
        <View style={styles.container}>

        <View styles={styles.board}>
        <AdMobBanner
                bannerSize="largeBanner"
                adUnitID="ca-app-pub-8330076437591523/1358225926" 
                servePersonalizedAds 
                onDidFailToReceiveAdWithError={this.bannerError} />
        </View>
           
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    board: {
        height: 100,
        width: '100%',
    },
})