import { StyleSheet, View, Text, Button } from "react-native";
import React, { Component } from "react";


const ResultadoIMC = (props) => {
    if(17 > props.IMC)
        return <Text style={styles.red}>Muito abaixo do peso</Text>

    if(17 <= props.IMC &&  props.IMC <= 18.49)
        return <Text style={styles.red}>Abaixo do peso</Text>

    if(18.5 <=  props.IMC &&  props.IMC <= 24.99)
        return <Text style={styles.blue}>Peso normal</Text>

    if(25 <=  props.IMC &&  props.IMC <= 29.99)
        return <Text style={styles.red}>Acima do peso</Text>

    if(30 <=  props.IMC &&  props.IMC <= 34.99)
        return <Text style={styles.red}>Obesidade I)</Text>

    if(35 <=  props.IMC &&  props.IMC <= 39.99)
        return <Text style={styles.red}>Obesidade II (Severa)</Text>

    if(40 <  props.IMC)
        return <Text style={styles.red}>Obesidade III (Mórbida)</Text>
}

export default class Resultado extends Component {

    constructor(props) {
        super(props)
        this.state = { imc: (this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}

    }
    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Resultado</Text>
                <Text style={styles.title}>{this.state.imc}</Text>
                <ResultadoIMC IMC={(this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}></ResultadoIMC>
                <View style={styles.button}>
                    <Button title="Home" onPress={() => this.props.navigation.navigate('Home', {})} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5'
        },
        red: {
            fontWeight:'800',
            color: 'red',
            fontSize: 20,
        },
        blue: {
            fontWeight:'800',
            color: 'blue',
            fontSize: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            margin: 10
        },
        button: {
            width: '90%',
            margin: 10,
        }
    }
)