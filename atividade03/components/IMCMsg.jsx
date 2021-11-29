import React from "react";
import { Text, StyleSheet } from "react-native";

const Resultado = (props) => {
    if(17 > props.IMC) 
        return <Text style={styles.red}>Muito abaixo do peso</Text>

    if(17 <= props.IMC &&  props.IMC <= 18.49) 
        return <Text style={styles.red}>Abaixo do peso</Text>

    if(18.5 <=  props.IMC &&  props.IMC <= 24.99) 
        return <Text style={styles.blue}>Peso normal</Text>

    if(25 <=  props.IMC &&  props.IMC <= 29.99) 
        return <Text style={styles.red}>Acima do peso</Text>
        
    if(30 <=  props.IMC &&  props.IMC <= 34.99) 
        return <Text style={styles.red}>Obesidade I</Text>

    if(35 <=  props.IMC &&  props.IMC <= 39.99) 
        return <Text style={styles.red}>Obesidade II (Severa)</Text>

    if(40 <  props.IMC) 
        return <Text style={styles.red}>Obesidade III (Mórbida)</Text>
}

const styles = StyleSheet.create({
    red:{
        fontWeight:'800',
        color: 'red',
        fontSize: 20,
    },
    blue:{
        fontWeight:'800',
        color: 'blue',
        fontSize: 20,
    }
});

export default Resultado