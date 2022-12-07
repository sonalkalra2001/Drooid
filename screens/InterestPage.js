import React from 'react';
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
  const renderItem = ({item}) => {

    return (
      <View style={styles.imageText}>
        {/* Press the image to choose your interest */}
        <Pressable onPress={PressHandler}>
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
  function PressHandler() {
    navigation.navigate('Feed');
  }
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
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Greorgia',
  },
  image: {
    width: 140,
    height: 150,
    borderRadius: 100,
  },
  rootContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imgView: {},

  textView: {
    marginTop: -25,
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
