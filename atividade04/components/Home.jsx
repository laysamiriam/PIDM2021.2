import { StyleSheet, View, Text, Button } from "react-native";
import React, { Component } from "react";
export default class Home extends Component{

    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Atividade 4</Text>
                <View style={styles.button}>
                    <Button title="Cadastrar" onPress={()=>this.props.navigation.navigate('Cadastro', {})}/>
                </View>
                <View style={styles.button}>
                    <Button title="IMC" onPress={()=>this.props.navigation.navigate('IMC', {})}/>
                </View>
                <View style={styles.button}>
                    <Button title="Sobre" onPress={()=>this.props.navigation.navigate('Sobre', {})}/>
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
        button:{
            width:'90%',
            margin:10,
        }
    }
)