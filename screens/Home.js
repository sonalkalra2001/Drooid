import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

function Home({route, navigation}){

return(

    <View>
        <ScrollView>
        <View style={styles.headView}>
        <Text style={styles.main}>
        <Text style={styles.head}> Indian Cricket Team </Text>
        <Text style={styles.time}> 7h ago</Text>

        </Text>
            
        </View>
        <View style={StyleSheet.imgView}>

       
        <Image source={require("../images/v3.webp")} 

            style={styles.img}
        />
         </View>
         <View style={styles.box}>
                <View style={styles.insidebox}>
                    <Text>Diwali is a Hindu festival that is known as the festival of lights. This festival usually lasts for five days and is celebrated during the Hindu month of Kartika.</Text>

                </View>


         </View>
         <View style={styles.paraView}>
         <Text style={styles.para}>
         Diwali is one of the most important festivals in Hindu culture. It is one of the most important holidays in the Hindu calendar. Diwali gets its name from the Sanskrit word ‘Deepavali’ that roughly translates to  row of lights. It is a great time to have fun with your family and friends. People decorate their houses with oil lamps and fairy lights at night. They cook delicious food and share them with their neighbors. It is a festival of lights; every street is lit up with beautiful lights. It spreads cheer and joy among people and makes them fall in love with their culture.
         </Text>
         <Text style={styles.para}>Diwali is the season to celebrate with joy and cheer. It was the day when king Rama destroyed the evil forces and reached home to a rousing welcome by his subjects. Diwali has long been associated with bursting crackers, which is not in the true spirits of the festival. The main motive of the festival is to spread happiness with your loved ones.</Text>
         </View>


         
        
        
         </ScrollView>
    </View>

);




};
export default Home;
const styles=StyleSheet.create({

    main:{
        color:'black',
        fontSize:15,


    },

    head:{
        fontWeight:'bold',

    },
    headView:{
        padding: 18,


    },
    time:{
        fontSize:12,

    },

    imgView:{
        



    },

    img:{
        width:"100%",
        height:250,
        marginBottom:20,




    }, 
    box:{
        backgroundColor:'black',
        margin:15,
        borderWidth:2,
        borderColor:"white",
        borderRadius:5,




    }, 
    insidebox:{
        margin:25,

        borderBottomColor:"grey",

    },
    para:{
        color:"black"
    },
    paraView:{
        margin:25,

    }
    


});

