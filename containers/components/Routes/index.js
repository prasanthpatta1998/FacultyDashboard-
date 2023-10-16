import React from 'react';
import { View, Text,FlatList,TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../Footer';

const data = [
    {
        id:1,
        icon:"user-tie",
        title:"Basic Information"
    },
    {
        id:2,
        icon:"calendar-check",
        title:"Student Attendence Mark"
    },{
        id:3,
        icon:"calendar",
        title:"Faculty Time Table"
    },
    {
        id:4,
        icon:"user-check",
        title:"Invigilation Allotment"
    },
    {
        id:5,
        icon:"print",
        title:"Circular's"
    },
]

const Routes = ({navigation}) => {
  return (
    <>
    <View style={style.navigationContainer}>
    {/* <FlatList 
    data={data}
    numColumns={2}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item})=>(
        <TouchableHighlight style={{marginVertical:5, backgroundColor:"black"}}>
             <View >
            <Icon name={item.icon} size={80} color="green" />
            <Text>{item.title}</Text>
            </View>
        </TouchableHighlight>
    )}
    /> */}
    <View style={style.listElement}>
    {data.map(item =>(

    <TouchableHighlight key={item.id} style={style.basicInfoContainer} onPress={() => navigation.navigate(item.title)}>
    <View style={[style.basicInfoContainer,{marginBottom:0, paddingLeft:20,paddingRight:20}]}>
    <View style={style.iconsStyle}>
    <Icon name={item.icon} size={30} color="#ffffff"/>
    </View>
    <Text style={style.textStyle}>{item.title}</Text>
    </View>
    </TouchableHighlight>
    ))}
    </View>
    </View>
    <Footer navigation={navigation}/>
    </>
  );
}

export default Routes;

const style = StyleSheet.create({
    navigationContainer:{
        backgroundColor:"#f5f0f0",
        flex:1,
        justifyContent:"center"
    },
    listElement:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap",
    },
    basicInfoContainer:{
        height:150,
        width:150,
        backgroundColor:"white",
        borderRadius:5,
        marginBottom:30,
        justifyContent:"center",
        alignItems:"center",
        elevation: 5,
    },
    iconsStyle:{
        height:50,
        width:50,
        backgroundColor:"#4dd6e8",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
    },
    textStyle:{
        color:"black",
        fontSize:12,
        fontWeight:"600",
        textAlign:"center",
        marginTop:10
    }
})