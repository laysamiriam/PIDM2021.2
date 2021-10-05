import React from "react";
import {StyleSheet, View, Text} from 'react-native';

export default function Aluno(){
    return(
        <View>  
            <Text style={styles.grey}>
                Nome:
                <Text style={styles.bold}> Laysa Miriam</Text>
             </Text>

             <Text style={styles.grey}>
                Idade:
                <Text style={styles.bold}> 22 anos</Text>
             </Text>

             <Text style={styles.grey}>
                Cidade:
                <Text style={styles.bold}> Quixeramobim</Text>
             </Text>

             <Text style={styles.grey}>
                Curso:
                <Text style={styles.bold}> Design Digital</Text>
             </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        color: 'black',
    },
    grey: {
        color: '#a8adb7',
    },
});