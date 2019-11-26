import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getResults } from './FootballApi';

export default class ScoreBoard extends Component {
    state = {
        homeTeam: "home",
        visitTeam: "visit",
        homeScore: 0,
        visitScore: 0
    }

    render(){
        return(
            <View style={ styles.mainStyle }>
                <Text style={ styles.homeTeam }>
                    { this.state.homeTeam }
                </Text>
                <Text style={ styles.scoreStyle }>
                    { this.state.homeScore } : { this.state.visitScore }
                </Text>
                <Text style={ styles.visitTeam }>
                    { this.state.visitTeam }
                    </Text>
            </View>
        );
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
    }
});