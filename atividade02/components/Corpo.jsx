import React, {Component} from "react"
import {StyleSheet, View, Image} from 'react-native'

export default class Corpo extends React.Component{
    render(){
        let figura = {uri:'https://i.pinimg.com/564x/93/e0/fe/93e0fe91ff5ccffec78f111f44a2d7b2.jpg'}
        
        return(
            <Image 
                source={figura} 
                style={styles.foto}/>
        )
    }
    
}

const styles = StyleSheet.create({
    foto: {
        width: 150, 
        height: 150,
        marginTop:20, 
        marginBottom:20,
    },
});