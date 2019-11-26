import React, { Component } from 'react';
import { Image, View, Text, Button, ImageBackground, Linking, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


export default class LoginScreen extends Component {
    render(){
        return(
                <ImageBackground
                    source={{ 
                        uri: 
                         'https://timedotcom.files.wordpress.com/2019/01/nike-air-max-1-golf-grass-sneakers.jpg'
                        }}
                    style={ styles.backGround }>
                <View style={ styles.mainStyle }>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                        if (error) {
                            console.log("login has error: " + error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                            () =>  Actions.replace("eredmenyek")
                            )
                        }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")}/>
                    
                    <Text 
                        style={ styles.textStyle }
                        onPress={ () => Linking.openURL('https://hu-hu.facebook.com/') }
                        >
                        Regisztráció
                    </Text>
                </View>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backGround: {
        height: 100+'%',
        width: 100+'%'
    },
    mainStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 130,
        height: 130
    },
    textStyle: {
        marginTop: 10,
        fontSize: 16,
        color: 'rgb(255,255,255)'
    }
})