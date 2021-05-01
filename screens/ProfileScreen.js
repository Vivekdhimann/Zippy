import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity, Image,Text} from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';
import { Card } from "react-native-elements";


class ProfileScreen extends Component{
    render(){
        return(
            <View>
                <ScrollView>
                <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:200, flexDirection:'row' , borderRadius:10}}>
                <View>
                        <TouchableOpacity>
                        <Icon name="back" size={25}  />
                        
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{ fontSize:20}} >   PROFILE</Text>
                        </View>
                        </View>
                    <View style={{alignItems:'center'}}>
                    <Image source={require('../assets/samp2.png')}
                            style={{width:140,height:140, borderRadius:100, marginTop:-70}}></Image>  
                    <Text style={{fontSize:25, padding:10}}>Vivek Dhiman</Text>
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="isv" size={18} />  
                      <Text>  S.K. Foods</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="mail" size={18} />  
                      <Text>  vivek.dhiman098@gmail.com</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="idcard" size={18} />  
                      <Text>  11605</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="phone" size={18} />  
                      <Text>  8727906665</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="bank" size={18} />  
                      <Text>  Block 34</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="layout" size={18} />  
                      <Text>  202165987423659</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="rest" size={18} />  
                      <Text>  North-Indian</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'45%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="logout" size={18} />  
                      <Text color='#fff'>  LOGOUT</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ProfileScreen;







