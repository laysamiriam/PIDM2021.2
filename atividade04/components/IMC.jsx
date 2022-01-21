import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { Component } from "react";

export default class IMC extends Component{
    
    constructor(props){
        super(props)
        this.state = {altura: null, peso: null, mensagem: null}

    }

    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.title}>IMC</Text>
                <TextInput placeholder="Digite sua altura. Ex: 1.80" style={styles.inputs} onChangeText={(valor)=>this.setState({altura:valor})}></TextInput>
                <TextInput placeholder="Digite seu peso. Ex: 70" style={styles.inputs} onChangeText={(valor)=>this.setState({peso:valor})}></TextInput>
                <View style={styles.button}>
                    <Button title="Confirmar" onPress={()=>this.props.navigation.navigate('Resultado', {altura:this.state.altura, peso:this.state.peso})}/>
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
            fontSize:24,
            fontWeight:'bold',
            margin:10
        },
        inputs:{
            height:45,
            width:'95%',
            borderColor: 'gray',
            borderWidth:2,
            marginTop:3,
            paddingLeft:20,
            fontSize:20
        },
        button:{
            width:'90%',
            margin:10,
        }
    }
)