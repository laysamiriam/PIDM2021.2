import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Sobre extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.title}>Sobre</Text>
                <Text style={estilos.text}>Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM Texto atividade 4 de PIDM </Text>
                <View style={estilos.button}>
                    <Button title="Home" onPress={()=>this.props.navigation.navigate('Home', {})}/>
                </View>
            </View>
        )
    }
}
const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e5e5e5'
        },
        title:{
            fontSize:24,
            fontWeight:'bold',
            margin:10
        },
        text:{
            width:'90%',
            margin:10,
            fontSize:18,
            fontWeight:'bold'
        },
        button:{
            width:'90%',
            margin:10,
        }
    }
)