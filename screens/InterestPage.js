import React from "react";
import { Text, View, StyleSheet, FlatList , Image, SafeAreaView, Pressable} from "react-native"; 
import Data from "../util/Data";
import Home from "./Home";
function InterestPage({navigation}){

    const renderItem=({item})=>{

        // var url=item.src;
        
        return(
            <View style={styles.imageText}>
               <View style={styles.imgView}>
               <Image source={item.src} style={styles.image} />
               </View>
                <View style={styles.textView}>
                <Text style={styles.text}> {item.name}</Text>
                </View>
                

            </View>

        )


    };
    function PressHandler(){
        navigation.navigate("Home");
        

    }
    return(
        <View style={styles.rootContainer}>
            <Pressable onPress={PressHandler}>

            
            <FlatList 
                
                data={Data}
                keyExtractor={(item)=>item.id}
                numColumns={2}
                renderItem={renderItem}
                scrollEnabled={true}
                
                
            />

            </Pressable>
        </View>

    );

}
export default InterestPage;

const styles=StyleSheet.create({

    imageText:{
        
       
       marginTop:40,
       marginLeft:20,
       marginRight:20,
       






    },
    text:{
        color:"white",
        fontFamily:'Greorgia'

    },
    image:{
        width:140,
        height:150,
        borderRadius:100,


       


    },
    rootContainer:{
       
        flexGrow :1,
        flexDirection:'row',
        justifyContent:'center',
        textAlign:'center',
        
        

    }
    ,
    imgView:{
        
       
        
        

    },

    textView:{
        marginTop:-25,
        borderColor:'white',

        
        width:"70%",

        marginLeft:"15%",

        
        borderWidth:1,
        backgroundColor:"black",
        borderRadius:100,
        padding:7,
        textAlign:'center',
        alignItems:'center',

        justifyContent:'center',
        paddingLeft:3,
        paddingRight:3,
        



    }


});
