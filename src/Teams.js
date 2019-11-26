import React, { Component } from 'react';
import { ImageBackground, View, Text, FlatList, StyleSheet } from 'react-native';
import { getTeams } from './FootballApi';

export default class Teams extends Component{
    state = {    
        teams: null
    }

    componentDidMount(){
        getTeams().then((club) => {
                var teams = []
                club.map(team => {
                    teams.push({
                        id: team.id,
                        name: team.title
                    })
                })
                this.setState({teams:teams})
            }).catch((err) => {
                alert("Hiba!")
            });
        }

    render(){
        return(
            <ImageBackground
                source={{ 
                    uri: 
                    'https://timedotcom.files.wordpress.com/2019/01/nike-air-max-1-golf-grass-sneakers.jpg'
                    }}
                style={ styles.backGround }>
                <View>
                    <FlatList
                        data={this.state.teams}
                        keyExtractor={(item) => item.id}
                        renderItem={this._renderItem}
                />
                </View>
            </ImageBackground>
        );
    }

    _renderItem = (item) => {
        return(
            <View style={ styles.mainStyle }>
                <Text>{item.item.name}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mainStyle: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgb(200,200,200)',
        borderRadius: 20
    },
    backGround: {
        height: 100+'%',
        width: 100+'%'
    }
});