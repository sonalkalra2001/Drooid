import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';
import SafariView from 'react-native-safari-view';
export default function LoginScreen({navigation}) {
  const [contact, setContact] = useState('');
  const [uri, setURL] = useState('');
  useEffect(() => {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then(url => {
      if (url) {
        this.handleOpenURL({url});
      }
    });
    return () => {
      Linking.removeAllListeners('url');
    };
  }, [uri]);

  handleOpenURL = ({url}) => {
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    } else setURL('');
  };
  openURL = url => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    } else {
      setURL(url);
    }
  };
  loginWithGoogle = () =>
    this.openURL('http://127.0.0.1:5000/user/login/google');
    loginWithFaceBook = () =>
    this.openURL('http://127.0.0.1:5000/user/login/facebook');
  // On Press event to navigate to interest page
  function PressHandler() {
    navigation.navigate('interestpage');
  }

  return (
    <>
      {uri !== '' ? (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.web}>
            <WebView
              userAgent={
                Platform.OS === 'android'
                  ? 'Chrome/18.0.1025.133 Mobile Safari/535.19'
                  : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'
              }
              source={{uri}}
              allowFileAccess={true}
              scalesPageToFit={true}
              javaScriptEnabled={true}
              startInLoadingState={true}
              domStorageEnabled={true}
              originWhitelist={['*']}
            />
          </View>
        </SafeAreaView>
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/Drooid.jpeg')}
          />
          {/* Login through contact number */}
          <View style={styles.inputView}>
            <View style={styles.shapes}>
              <View style={[styles.circle, {backgroundColor: '#007E99'}]}>
                <Icon name="phone" size={20} color="#FFF" />
              </View>
              <View style={[styles.triangle, {borderBottomColor: '#007E99'}]} />
            </View>
            <Text style={styles.contacttxt}>+91 </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="98XXXXXXXX"
              placeholderTextColor="#003f5c"
              onChangeText={contact => setContact(contact)}
              // onEndEditing={finished}
            />
          </View>
          <View style={styles.submitBtn}>
            <TouchableOpacity onPress={PressHandler}>
              <View >
                <Text style={styles.submitText}>Generate OTP</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.outerView}>
            <View style={styles.horizontalLine}>
              <View style={styles.sideLines} />
              <View>
                <View style={styles.insideSpace} />
                <Text style={styles.textBetween}>OR</Text>
                <View style={styles.insideSpace} />
              </View>
              <View style={styles.sideLines} />
            </View>

            <View style={styles.allbuttons}>
             

              <View>
               
              

                {/* Gmail Login */}
                <TouchableOpacity onPress={loginWithGoogle}>
                  <View style={styles.gmailBtn}>
                    <View style={styles.shapes}>
                      <View style={styles.circle}>
                        <Icon name="google" size={20} color="#F14336" />
                      </View>
                      <View style={styles.triangle} />
                    </View>
                    <View style={styles.loginTextalign}>
                      <Text style={styles.loginText}>Login with Gmail</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Submit Button */}
              {/* <TouchableOpacity onPress={PressHandler}>
                <View style={styles.submitBtn}>
                  <Text style={styles.submitText}>Submit</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '80%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },

  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    width: '100%',
    justifyContent: 'center',
  },

  contacttxt: {
    color: '#000',
    opacity: 0.5,
  },

  sideLines: {
    height: 1,
    width: '45%',
    backgroundColor: '#000',
    opacity: 0.2,
  },

  insideSpace: {
    width: '5%',
  },

  textBetween: {
    width: 50,
    textAlign: 'center',
    color: '#000',
    opacity: 0.2,
  },

  circle: {
    width: 42,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginTop: 2.5,
  },

  triangle: {
    borderTopWidth: 8,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 8,
    borderBottomColor: '#FFF',
    borderTopColor: '#FFFFFF00',
    borderRightColor: '#FFFFFF00',
    borderLeftColor: '#FFFFFF00',
    transform: [{rotate: '90deg'}],
    marginTop: 14,
  },

  outerView: {
    width: '85%',
    alignItems: 'center',
    marginTop: 20,
  },

  allbuttons: {
    width: '100%',
  },


  inputView: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    width: '85%',
    height: 45,
    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    shadowRadius: 1.0,
    shadowColor: '#D3D3D3',
    shadowOffset: {width: 1, height: 1},
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignContent: 'center',
    color: '#000',
    opacity: 0.5,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  submitBtn: {
    width: '55%',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007D9B',
    marginTop: 30,
    marginHorizontal: 'auto',
  },

  gmailBtn: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 30,
    height: 45,
    backgroundColor: '#F14336',
    marginBottom: 10,
    marginTop: 30
  },

  submitText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },

  loginText: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },

  loginTextalign: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  shapes: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  web: {
    flex: 1,
  },
});
