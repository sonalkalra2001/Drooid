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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import DeepLinking from 'react-native-deep-linking';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import SafariView from 'react-native-safari-view';
export default function LoginScreen({navigation}) {
  const [contact, setContact] = useState('');
  // const [user, setUser] = useState(undefined);
  const [uri, setURL] = useState('');

  // Authentication through apple , facebook and gmail login
  const appleLoginLink = () => {
    Linking.openURL('https://appleid.apple.com/sign-in');
  };
  const facebookLoginLink = () => {
    Linking.openURL('https://www.facebook.com/');
  };
  // Set up Linking
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
      Linking.removeAllListeners("url");
    };
  }, [uri]);

  // useEffect(()=> {
  //   // Remove event listener
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // },[]);
  handleOpenURL = ({url}) => {
    // Extract stringified user string out of the URL
    // const user = decodeURI(url).match(
    //   /firstName=([^#]+)\/lastName=([^#]+)\/email=([^#]+)/,
    // );

    // // Decode the user string and parse it into JSON
    // // setUser(JSON.parse(decodeURI(user)));
    // const userData = {
    //   isAuthenticated: true,
    //   firstName: user[1],
    //   lastName: user[2],
    //   //some users on fb may not registered with email but rather with phone
    //   email: user && user[3] ? user[3] : "NA",
    // };
    // //redux function
    // login(userData);

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
    }
    // Or Linking.openURL on Android
    else {
      setURL(url);

      // Linking.openURL(url);
    }
  };
  loginWithGoogle = () => this.openURL('http://127.0.0.1:5000/user/login/google');
  // const loginWithGoogle = () => this.openURL('https://google.co.in');
  // const gmailLoginLink = () => {
  //   axios({
  //     method: 'get',
  //     url: this.openURL('http://127.0.0.1:5000/user/login/google'),

  //   })
  //     .then(response => {
  //      console.log("successfull response");

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  // On Press event to navigate to interest page
  // configure a route, in this case, a simple Settings route
  // DeepLinking.addRoute('/login', response => {
  //   navigation.navigate('Login');
  // });
  // // manage Linking event listener with useEffect
  // useEffect(() => {
  //   Linking.addEventListener('url', handleOpenurl);
  //   // return (() => {
  //   //   Linking.removeEventListener('url', handleOpenurl);
  //   // })
  // }, []);
  // // evaluate every incoming URL
  // const handleOpenurl = event => {
  //   DeepLinking.evaluateUrl(event.url);
  // };
  function PressHandler() {
    navigation.navigate('interestpage');
  }
  // const finished=()=>{
  //   axios.get("http://127.0.0.1:5000/test",{params:{cont:contact}
  // })
  //   .then((res)=>console.log(res))
  //   .catch((err)=>console.log(err));

  // };

  //////

  // const loginWithGoogle2 = () => {
  //   if (sign) {
  //     setSign(false);
  //     signOut();
  //     return;
  //   }
  //   setSign(true);
  //   GoogleSignin.configure({
  //     androidClientId:
  //       '421424934740-i1p0dbinad68uplqv5e7jcb8spvrqlug.apps.googleusercontent.com',
  //   });
  //   GoogleSignin.hasPlayServices()
  //     .then(hasPlayService => {
  //       if (hasPlayService) {
  //         GoogleSignin.signIn()
  //           .then(userInfo => {
  //             //  console.log(JSON.stringify(userInfo));
  //             console.log(userInfo);

  //             axios
  //               .get('http://127.0.0.1:5000/test', {params: {info: userInfo}})
  //               .then(res => console.log('res'))
  //               .catch(err => console.log('error'));
  //           })
  //           .catch(e => {
  //             console.log('ERROR IS: ' + JSON.stringify(e));
  //           });
  //       }
  //     })
  //     .catch(e => {
  //       console.log('ERROR IS: ' + JSON.stringify(e));
  //     });
  // };

  /////////////////////////////////////////////////////////////////////////
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '421424934740-i1p0dbinad68uplqv5e7jcb8spvrqlug.apps.googleusercontent.com',
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   });
  //   isSignedIn();
  // }, []);

  // const [sign, setSign] = useState(false);

  // const signIn = async () => {
  //   if (sign) {
  //     setSign(false);
  //     signOut();
  //     return;
  //   }
  //   setSign(true);

  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo);
  //     setUser(userInfo);
  //   } catch (error) {
  //     console.log('Message', error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('User Cancelled the Login Flow');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Signing In');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play Services Not Available or Outdated');
  //     } else {
  //       console.log('Some Other Error Happened');
  //     }
  //   }
  // };

  // const isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   if (!!isSignedIn) {
  //     getCurrentUserInfo();
  //   } else {
  //     console.log('Please Login');
  //   }
  // };

  // const getCurrentUserInfo = async () => {
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     setUser(userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //       alert('User has not signed in yet');
  //       console.log('User has not signed in yet');
  //     } else {
  //       // alert("Something went wrong. Unable to get user's info");
  //       console.log("Something went wrong. Unable to get user's info");
  //     }
  //   }
  // };
  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setUser({}); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // signOut()

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
          ) :(
            <View style={styles.container}>

          
      <Image style={styles.image} source={require('../images/Drooid.jpeg')} />
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
          {/* Apple Login */}
          {/* <TouchableOpacity onPress={() => appleLoginLink()}>
            <View style={styles.appleBtn}>
              <View style={styles.shapes}>
                <View
                  style={[
                    styles.circle,
                    {backgroundColor: '#000'},
                    {borderColor: '#FFF'},
                    {borderWidth: 0.01},
                  ]}>
                  <Icon name="apple" size={20} color="#FFF" />
                </View>
                <View style={[styles.triangle, {borderBottomColor: '#000'}]} />
              </View>
              <View style={styles.loginTextalign}>
                <Text style={styles.loginText}>Login with Apple</Text>
              </View>
            </View>
          </TouchableOpacity> */}

           
            <View>
              {/* Facebook Login */}
              <TouchableOpacity
                onPress={() =>
                  openUrl(`http://127.0.0.1:5000/user/login/facebook`)
                }>
                <View style={styles.facebookBtn}>
                  <View style={styles.shapes}>
                    <View style={styles.circle}>
                      <Icon name="facebook" size={20} color="#3B5998" />
                    </View>
                    <View style={styles.triangle} />
                  </View>
                  <View style={styles.loginTextalign}>
                    <Text style={styles.loginText}>Login with Facebook</Text>
                  </View>
                </View>
              </TouchableOpacity>

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
          <TouchableOpacity onPress={PressHandler}>
            <View style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableOpacity>
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
    width: '70%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  allbuttons: {
    width: '100%',
  },

  inputView: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    width: '85%',
    height: 45,
    marginTop: 80,
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
    width: '100%',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007D9B',
    marginTop: 80,
  },

  appleBtn: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 30,
    height: 45,
    backgroundColor: '#000',
    marginTop: 20,
    marginBottom: 10,
  },

  facebookBtn: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 30,
    height: 45,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },

  gmailBtn: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 30,
    height: 45,
    backgroundColor: '#F14336',
    marginBottom: 10,
  },

  submitText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },

  loginText: {
    color: '#FFF',
    fontSize: 11,
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
  web:{
    
    flex:1,





  }
});
