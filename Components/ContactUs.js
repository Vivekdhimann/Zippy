import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text,Linking} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class ContactUs extends Component{
    
    render(){
        
        return(
            <View>
           <View >
                <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'row', borderRadius:10}}>
                <View>
                        <TouchableOpacity>
                        <Icon  name="arrow-left" size={25}  />
                        
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{ fontSize:20}} >   CONTACT US @ </Text>
                        </View>
                        </View>
           </View>

           <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'lightyellow',
                        width:'100%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20 
                    }}>
           <Text style={{fontSize:40, textAlign:'center',fontStyle:'italic'}}>Just Tap Here </Text>
           </View>

           <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'70%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20 
                    }}>
                      <Icon  name="phone" size={18} onPress={() => Linking.openURL('tel:${8219640885}')}/>  
                      <Text onPress={() => Linking.openURL('tel:${8219640885}')}>  +91 8219640885</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='green' name="whatsapp" size={18} onPress={() =>Linking.openURL('whatsapp://send?text=hello&phone=+91 8219640885')}/>  
                      <Text onPress={() =>Linking.openURL('whatsapp://send?text=hello&phone=+91 8219640885')}>  +91 8219640885</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'70%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="email-open" size={18} onPress={() => Linking.openURL('mailto:support@zippy.com?subject=SendMail&body=Description') }
      title="support@example.in"/>  
                      <Text onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') }
      title="support@example.in">  support@zippy.in</Text>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='blue' name="facebook" size={18} onPress={() => Linking.openURL('http://facebook.com')}/>  
                      <Text  onPress={() => Linking.openURL('http://facebook.com')}>  Facebook</Text>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'70%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='#cd486b' name="instagram" size={18} onPress={() => Linking.openURL('http://instagram.com')}/>  
                      <Text  onPress={() => Linking.openURL('http://instagram.com')}>  Instagram</Text>
                    </View>
                    

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='blue' name="linkedin" size={18} onPress={() => Linking.openURL('http://linkedin.com')}/>  
                      <Text  onPress={() => Linking.openURL('http://linkedin.com')}>  linkedin</Text>
                    </View>
           







        
           </View>


            )
        }
    }
    
    
    export default ContactUs;