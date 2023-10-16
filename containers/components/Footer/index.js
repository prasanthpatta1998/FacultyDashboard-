
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer =({navigation}) =>  {
  return (
    <View style={style.container}>
        <TouchableHighlight style={[style.footerSubContainer,{width:"50%"}]} onPress={() => navigation.navigate("Navigations")}>
        <View style={style.footerSubContainer}>
        <Icon name="user-circle" size={30} color="#22b3d4" />
        <Text style={{color:"#22b3d4"}}>Faculty</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={[style.footerSubContainer,{width:"50%"}]} onPress={() => navigation.navigate("Navigations")}>
        <View style={style.footerSubContainer}>
        <Icon name="sign-out" size={30} color="#22b3d4" />
        <Text style={{color:"#22b3d4"}}>Log Out</Text>
        </View>
        </TouchableHighlight>
    </View>
  );
}

export default Footer;


const style = StyleSheet.create({
      container:{
        position: "absolute",
        bottom:0, 
        height: 60, 
        flexDirection:"row",
        justifyContent:"space-around",        
        width:"100%",
        backgroundColor:"white"
      },
      footerSubContainer:{
        justifyContent:'center',
        alignItems:"center"
      }
})