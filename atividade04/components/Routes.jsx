import React from "react";
import Cadastro from "./Cadastro";
import Home from "./Home";
import IMC from "./IMC";
import Modal from "./Perfil";
import Resultado from "./Resultado";
import Sobre from "./Sobre";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const PilhaDasTelas = createStackNavigator()
const PilhaRaiz = createStackNavigator()

function funcaoPilhaDasTelas(){
    return(
        <PilhaDasTelas.Navigator initialRouteName="Home">
            <PilhaDasTelas.Screen
                name="Cadastro"
                component={Cadastro}/>
            <PilhaDasTelas.Screen
                name="Home"
                component={Home}/>
            <PilhaDasTelas.Screen
                name="IMC"
                component={IMC}/>
            <PilhaDasTelas.Screen
                name="Resultado"
                component={Resultado}/>
            <PilhaDasTelas.Screen
                name="Sobre"
                component={Sobre}/>
        </PilhaDasTelas.Navigator>
    )
}
function funcaoPilhaRaiz(){
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                name='Principal'
                component={funcaoPilhaDasTelas}
                options={{headerShown:false}}
                />
                <PilhaRaiz.Screen
                name='Modal'
                component={Modal}
                options={{headerShown:false}}
                />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}
export default funcaoPilhaRaiz