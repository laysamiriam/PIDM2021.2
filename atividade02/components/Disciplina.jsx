import React, {Component} from "react"
import {StyleSheet, View, Text} from 'react-native'


export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <Text style={styles.type}>
                    {this.props.nome_disciplina}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    type: {
        textAlign:'center'
    },
});