import React, { Component } from 'react';
import { ImageBackground, View, Text, FlatList, StyleSheet } from 'react-native';
import { getGoals, getPlayers } from './FootballApi';

export default class Goals extends Component{
    state = {
        goals: null,
        players: null
    }

    componentDidMount(){
        getGoals().then((scorer) => {
                var goals = []
                scorer.map(goal => {
                    goals.push({
                        id: goal.id,
                        player_name: goal.person_id,
                        club_name: goal.team_id
                    })
                })
                this.setState({goals:goals})
            }).catch((err) => {
                alert("Hiba!")
            });

            getPlayers().then((person) => {
                var players = []
                person.map(player => {
                    players.push({
                        id: player.id,
                        name: player.name
                    })
                })
                this.setState({players:players})
            }).catch((err) => {
                alert("Hiba!")
            });
        }

        getPlayerName(id){
            if(this.state.players){
                let name;
                this.state.players.forEach(player => {
                    if(player.id == id){
                        name = player.name
                    }
                });
                return name;
            }
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
                            data={this.state.goals}
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
                    <Text>{ this.getPlayerName(item.item.player_name) }</Text>
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