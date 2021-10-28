import React, {Component} from "react"
import {StyleSheet, View, Text} from 'react-native'


export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text style={styles.bold}>
                    {this.props.nome}
                </Text>
                <Text style={styles.grey}> 
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center'
    },
    grey: {
        color: '#a8adb7',
        textAlign:'center'
    },
});