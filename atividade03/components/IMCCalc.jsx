import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Resultado from "./IMCMsg"

const IMCCalc = (props) =>{
    const imc = props.peso / (props.altura * props.altura)
    if(props.altura != null && props.peso != null){
        return(
            <View>
                <Text style={styles.bold}>Resultado do seu IMC: {imc}</Text>
                <Resultado IMC={imc}/>
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    bold:{
        fontWeight:'800',
        marginTop: 10,
        fontSize:22,
        color: '#1d1d1d'
    },
});

export default IMCCalc