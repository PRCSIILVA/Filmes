import React, { Component } from "react";
import { View,Text,Image, StyleSheet,TouchableOpacity } from "react-native";

export default class Filme extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
                <TouchableOpacity  onPress={()=> alert(this.props.data.descricao)}>
                <Image style={styles.capaFilme} source={{uri:this.props.data.foto}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        color:'white',
        fontSize:18,
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 30,
        marginBottom:8,
    },
    capaFilme:{
        width:220,
        height:250,
        alignSelf:'center',
        borderRadius:30,

        
    }
});