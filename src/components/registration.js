import {React, useState} from 'react';
import {Icon} from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {CheckBox} from 'native-base';
import {TabView, SceneMap} from 'react-native-tab-view';
const initialLayout = {width: Dimensions.get('window').width};
const Reg = () => {
  
  function login() {
    const [text, setText] = useState(' ');
    return (
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.text}>Username Or Email Address</Text>
          <TextInput
            style={[styles.textb, {color: '#808080'}]}
            placeholder={'Name'}
            placeholderTextColor={'#808080'}
            autoCapitilize={false}
            onChangeText={(text) => setText(text)}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={[styles.textb, {color: '#808080'}]}
            placeholder={'Password'}
            placeholderTextColor={'#808080'}
            autoCapitilize={false}
            secureTextEntry={true}
          />
          <Text style={styles.text}>Forgot Your Password</Text>
          <View style={styles.chck}>
            <CheckBox />
            <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>
              {' '}
              Remember Me
            </Text>
          </View>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              Alert.alert('login');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                alignContent: 'center',
                color: 'orange',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#d3d3d3',
              borderBottomWidth: 1,
              paddingTop: 20,
              marginBottom: 20,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: '#808080', padding: 15}}>
              {' '}
              or sign in with{' '}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.logins}
            onPress={() => {
              Alert.alert('login with Google');
            }}>
            <Text style={styles.btn}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logins}
            onPress={() => {
              Alert.alert('login With Facebook');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="facebook-f"
                type="font-awesome"
                size={24}
                color="blue"
              />
              <Text style={styles.btn}>Login with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
 

  function signup() {
    return (
      <ScrollView>
        <View style={styles.form}>
          <Text>Your Name *</Text>
          <TextInput
            style={[styles.textb, {color: '#808080'}]}
            placeholder={'Name'}
            placeholderTextColor={'#808080'}
            autoCapitilize={false}
          />
          <Text style={styles.text}>Your Email Address *</Text>
          <TextInput
            style={[styles.textb, {color: '#808080'}]}
            placeholder={'Email'}
            placeholderTextColor={'#808080'}
            autoCapitilize={false}
          />
          <Text style={styles.text}>Password *</Text>
          <TextInput
            style={[styles.textb, {color: '#808080'}]}
            placeholder={'Password'}
            placeholderTextColor={'#808080'}
            autoCapitilize={false}
            secureTextEntry={true}
          />

          <View style={styles.chck}>
            <CheckBox color="#d3d3d3" backgroundColor="#d3d3d3" />
            <Text style={{paddingLeft: 15}}>I agree to the </Text>
            <Text style={{textDecorationLine: 'underline'}}>
              privacy policy *
            </Text>
          </View>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              Alert.alert('signup with Google');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.btns}>SIGN UP</Text>
              <Icon
                name="arrow-right"
                type="font-awesome"
                size={24}
                color="orange"
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#d3d3d3',
              borderBottomWidth: 1,
              paddingTop: 20,
              marginBottom: 20,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: '#808080', padding: 15}}>
              {' '}
              or sign in with{' '}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.logins}
            onPress={() => {
              Alert.alert('login with Google');
            }}>
            <Text style={styles.btn}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logins}
            onPress={() => {
              Alert.alert('login With Facebook');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="facebook-f"
                type="font-awesome"
                size={24}
                color="blue"
              />
              <Text style={styles.btn}>Login with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'SIGN IN'},
    {key: 'second', title: 'SIGN UP'},
  ]);

  const renderScene = SceneMap({
    first: login,
    second: signup,
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              Reg();
              // Alert.alert(data.Data[0].user_name + ' You Are logged in');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                alignContent: 'center',
                color: 'orange',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#469FA6'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  login: {
    paddingVertical: 10,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    marginVertical: 10,
  },
  logins: {
    paddingVertical: 10,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginVertical: 10,
  },
  form: {
    flexDirection: 'column',
    margin: 20,
  },
  btns: {
    fontSize: 20,
    color: 'orange',
    marginRight: 15,
  },
  btn: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
    color: '#808080',
  },
  textb: {
    width: '100%',
    height: 44,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 13,
  },
  text: {
    margin: 15,
  },
  chck: {
    flexDirection: 'row',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
});

export default Reg;
