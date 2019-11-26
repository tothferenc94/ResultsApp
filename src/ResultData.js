import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native';
import { getResults, getTeams } from './FootballApi';

export default class UserData extends Component{

    state = {    
        teams: null,
        scores: null
    }

    componentDidMount(){
        getResults().then((rslt) => {
                var scores = []
                rslt.map(score => {
                    scores.push({
                        id: score.id,
                        team1: score.team1_id,
                        team2: score.team2_id,
                        score1: score.score1,
                        score2: score.score2
                    })
                })
                this.setState({scores: scores})
            }).catch((err) => {
                alert("Hiba!")
            });

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

    getTeamName(id){
        if(this.state.teams){
            let name;
            this.state.teams.forEach(team => {
                if(team.id == id){
                    name = team.name
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
                        data={ this.state.scores }
                        keyExtractor={ (item) => item.id.toString() }
                        renderItem={ this._renderItem }
                />
                </View>
            </ImageBackground>
        );
    }

    _renderItem = (item) => {
        return(
            <View style={ styles.mainStyle }>
                <Text style={ styles.homeTeam }>
                    { this.getTeamName(item.item.team1) }
                </Text>
                <Text style={ styles.scoreStyle }>
                    { item.item.score1 } : { item.item.score2 }
                </Text>
                <Text style={ styles.visitTeam }>
                    { this.getTeamName(item.item.team2) }
                </Text>
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
    homeTeam: {
        fontSize: 20,
        color: 'rgb(0,0,0)',
        marginTop: 10
    },
    scoreStyle: {
        fontSize: 20,
        color: 'rgb(0,0,0)'
    },
    visitTeam: {
        fontSize: 20,
        color: 'rgb(0,0,0)',
        marginBottom: 10
    },
    backGround: {
        height: 100+'%',
        width: 100+'%'
    }
});