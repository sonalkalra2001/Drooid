import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function LoginScreen({navigation}) {
  const [contact, setContact] = useState('');
  // Authentication through apple , facebook and gmail login
  const appleLoginLink = () => {
    Linking.openURL('https://appleid.apple.com/sign-in');
  };
  const facebookLoginLink = () => {
    Linking.openURL('https://www.facebook.com/');
  };
  const gmailLoginLink = () => {
    Linking.openURL('http://mail.google.com/mail/');
  };
  // On Press event to navigate to interest page

  function PressHandler() {
    navigation.navigate('interestpage');
  }

  return (
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
          <TouchableOpacity onPress={() => appleLoginLink()}>
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
          </TouchableOpacity>

          {/* Facebook Login */}
          <TouchableOpacity onPress={() => facebookLoginLink()}>
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
          <TouchableOpacity onPress={() => gmailLoginLink()}>
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

          {/* Submit Button */}
          <TouchableOpacity onPress={PressHandler}>
            <View style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
});
