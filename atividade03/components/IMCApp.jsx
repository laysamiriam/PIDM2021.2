import React, { Component } from 'react';
import { View, Button, TextInput, Text, StyleSheet} from "react-native";

import IMCCalc from "./IMCCalc";

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, click:false}
    }

    calculo = () =>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({click:true})
        }
        console.log(this.state.click);
    }

    renderIMC(){
        if(this.state.click){
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}></IMCCalc>
            )
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <TextInput placeholder="Digite sua altura. Ex: 1.80" style={styles.inputs} onChangeText={(valor)=>this.setState({altura:valor})}></TextInput>
                <TextInput placeholder="Digite seu peso. Ex: 70" style={styles.inputs} onChangeText={(valor)=>this.setState({peso:valor})}></TextInput>
                <View style={styles.button}>
                    <Button title="Calcular IMC" onPress={this.calculo}/>
                </View>
                {this.renderIMC()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'800',
        fontSize: 22,
        marginBottom:12,
    },
    inputs:{
        fontSize: 20,
        marginBottom: 8,
    },
});