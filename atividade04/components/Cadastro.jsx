import { StyleSheet, View, Text,TextInput, Button } from "react-native";
import React, { Component } from "react";
export default class Cadastro extends Component{

    constructor(props){
        super(props)
        this.state = { nome:null, idade:null, email:null }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>
                <TextInput placeholder="Digite seu nome. Ex: Ricardo" id="nome" style={styles.inputs} onChangeText={(valor)=>this.setState({nome:valor})}></TextInput>
                <TextInput placeholder="Digite sua idade. Ex: 21" style={styles.inputs} onChangeText={(valor)=>this.setState({idade:valor})}></TextInput>
                <TextInput placeholder="Digite seu email. Ex: laysa@gmail.com" style={styles.inputs} onChangeText={(valor)=>this.setState({email:valor})}></TextInput>
                <View style={styles.button}>
                    <Button title="Confirmar" onPress={()=>this.props.navigation.navigate('Modal', {nome:this.state.nome, idade:this.state.idade, email:this.state.email})}/>
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
            margin:12
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
            width:'95%',
            margin:15,
        }
    }
)