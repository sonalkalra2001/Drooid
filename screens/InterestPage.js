import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Data from '../util/Data';

function InterestPage({navigation}) {
  const [interest, setInterest] = useState(null);
  const renderItem = ({item}) => {

    const pressHandler = (value) => {
      setInterest({...value,[interest]:value});
      navigation.navigate('Feed');
      console.log(value);
    }
    return (
      <View style={styles.imageText}>
        {/* Press the image to choose your interest */}
        <Pressable onPress={() => pressHandler(item.name)}>
          <View style={styles.imgView}>
            <Image source={item.src} style={styles.image} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}> {item.name}</Text>
          </View>
        </Pressable>
      </View>
    );
  };
  
  return (
    <View style={styles.rootContainer}>
      {/* imported data from /util/Data.js
      and the unique id used as a key to extract data...
      and scroll bar enabled
       */}
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={renderItem}
        scrollEnabled={true}
      />
    </View>
  );
}
export default InterestPage;

const styles = StyleSheet.create({
  imageText: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  text: {
    color: 'white',
    fontFamily: 'Greorgia',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  rootContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  imgView: {
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  textView: {
    marginTop: -20,
    borderColor: 'white',
    width: '70%',
    marginLeft: '15%',
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 100,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
});

