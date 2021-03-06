import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Item, Input, Label} from 'native-base';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {colors, images} from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';


const RenderHeader = () => {
   let navigation = useNavigation();
 const  goBack=() => {
    navigation.navigate('userNav')
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goBack )
    return () => {
    BackHandler.removeEventListener('hardwareBackPress', goBack )
    };
 
  }, []);
 


  return (
    <View style={{height: '10%'}}>
      <View
        style={{
          width: '95%',
          height: 90,
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Entypo
            name="menu"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
        <Image source={images.logo} style={{height: 30, width: '30%'}} />
        <Text
          style={{
            position: 'absolute',
            right: '-1%',
            top: '20%',
            fontSize: 10,
            backgroundColor: colors.ORANGE.DEFAULT,
            borderRadius: 50,
            zIndex: 12,
            height: 18,
            width: 18,
            textAlign: 'center',
            paddingTop: 2,
            color: 'white',
          }}>
          23
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', right: '3%'}}
          onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={25} color="black" />
          <Text style={{color: 'black'}}>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
let Login = () => {
  // const {ch} = route.params;
  // ch;
  const [ref, setRef] = useState('true');
  const [usr, setUsr] = useState('');
    const [eml, setEml] = useState('');
    const [phn, setPhn] = useState('');
    
    const [usid, setUsid] = useState('');
  let navigation = useNavigation();
  useEffect(() => { 
  
    
    
    if (ref) {
      AsyncStorage.getItem('userData').then((result) => {
       // console.log('result' + result);
        let user = JSON.parse(result);
        console.log("check------------"+user)
        setUsr(user.user_name);
        setEml(user.user_email);
        setPhn(user.user_phone);
        setUsid(user.user_id);
        setRef('false');
      });
    }
  ;
 
  }, []);
  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
      }}>
      <RenderHeader />
      <Text
        style={{padding: 10, borderRadius: 1, elevation: 1, marginBottom: 10}}>
        Home <Feather name="chevron-right" size={15} /> Update Profile
      </Text>
      <ScrollView
        style={{
          width: '95%',
          height: '86%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={{marginRight: '5%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'sans-serif',
              color: 'black',
            }}>
            Update Profile
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
          }}>
          <View style={{width: '100%', marginTop: '4%'}}>
            {/* {form.map((item, key) => (
              
              <View style={{marginBottom: 10}} key={key}>
                <Label style={{color: 'black', fontSize: 16, marginBottom: 10}}>
                  {item.label}
                </Label>
                <Item regular>
                  <Input placeholder={item.placeholder} />
                </Item>
              </View>
            ))}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.ORANGE.DEFAULT,
                padding: 10,
                width: '100%',
                marginTop: 20,
              }}
              onPress={() => navigation.navigate('Checkout')}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Update Profile
              </Text>
            </TouchableOpacity> */}
            <View style={styles.form}>
              <Text>Full Name *</Text>
              <TextInput
                style={[styles.textb, {color: '#808080'}]}
                placeholder={'Name'}
                placeholderTextColor={'#808080'}
                autoCapitilize={false}
                value={usr}
                onChangeText={(text) => setUsr(text)}
              />
              <Text>Email *</Text>
              <TextInput
                style={[styles.textb, {color: '#808080'}]}
                placeholder={'Email'}
                placeholderTextColor={'#808080'}
                autoCapitilize={false}
                value={eml}
                onChangeText={(text) => setEml(text)}
              />
              <Text>Phone Number *</Text>
              <TextInput
                style={[styles.textb, {color: '#808080'}]}
                placeholder={'Phone No'}
                placeholderTextColor={'#808080'}
                autoCapitilize={false}
                value={phn}
                onChangeText={(text) => setPhn(text)}
              />
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: colors.ORANGE.DEFAULT,
                  padding: 10,
                  width: '100%',
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate('Checkout')}>
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.ORANGE.DEFAULT,
                    textAlign: 'center',
                  }}>
                  Update Profile
                </Text>
              </TouchableOpacity>
              {/* <Text>Password</Text>
              <TextInput
                style={[styles.textb, {color: '#808080'}]}
                placeholder={'Password'}
                placeholderTextColor={'#808080'}
                autoCapitilize={false}
                value={pwd}
                secureTextEntry={true}
                onChangeText={(text) => setPwd(text)}
              /> */}
            </View>
          </View>
          <View style={{width: '100%', marginTop: '10%'}}>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                paddingVertical: 10,
                // backgroundColor: 'red',
              }}>
              <Label
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginBottom: 10,
                  width: '40%',
                }}>
                Name
              </Label>
              <Label style={{color: 'black', fontSize: 16, marginBottom: 10}}>
                {usr}
              </Label>
            </View>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                paddingVertical: 10,
                //backgroundColor: 'red',
              }}>
              <Label
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginBottom: 10,
                  width: '40%',
                }}>
                Email
              </Label>

              <Label style={{color: 'black', fontSize: 16, marginBottom: 10}}>
                {eml}
              </Label>
            </View>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                paddingVertical: 10,
                //backgroundColor: 'red',
              }}>
              <Label
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginBottom: 10,
                  width: '40%',
                }}>
                Phone No
              </Label>

              <Label style={{color: 'black', fontSize: 16, marginBottom: 10}}>
                {phn}
              </Label>
            </View>
          </View>

     
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: '7%'},
  text: {fontSize: 20, fontWeight: 'bold', color: 'white'},
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
  textbb: {
    margin: 15,
  },
  chck: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Login;
