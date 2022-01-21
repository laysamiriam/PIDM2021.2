import { StyleSheet, View, Text, Button, Image } from "react-native";
import React, { Component } from "react";
import foto from "./foto.png"

export default class Perfil extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Image source={foto} style={{width:200, height:200}}/>
                <Text style={styles.title}>Perfil</Text>
                <Text style={styles.items}>Nome: {this.props.route.params.nome}</Text>
                <Text style={styles.items}>Idade: {this.props.route.params.idade}</Text>
                <Text style={styles.items}>Email: {this.props.route.params.email}</Text>
                <View style={styles.button}>
                    <Button title="Home" onPress={()=>this.props.navigation.navigate('Home', {})}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e5e5e5'
        },
        title:{
            fontSize:28,
            fontWeight:'bold',
            margin:10
        },
        items:{
            fontSize:18,
            fontWeight:'bold'
        },
        button:{
            width:'90%',
            margin:10,
        }
    }
)