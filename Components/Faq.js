import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text,Linking} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Faq extends Component{
    
    render(){
        
        return(
            
            <View >
            <View >
                 <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'row', borderRadius:10}}>
                 <View>
                         <TouchableOpacity>
                         <Icon  name="arrow-left" size={25}  />
                         
                         </TouchableOpacity>
                         </View>
                         <View>
                         <Text style={{ fontSize:20}} >   FAQs </Text>
                         </View>
                         </View>
            </View>

            <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'lightyellow',
                        width:'95%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:30,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:10 
                    }}>
           <Text style={{fontSize:30, textAlign:'center',fontStyle:'italic'}}>ZIPPY </Text>
           </View>

           <View style={{
                    
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        backgroundColor:'white',
                        width:'95%',
                        padding:20,
                        paddingLeft:30,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:10 
                    }}>
                    <Text style={{fontSize:20}}>Q1. Can I place order on call?</Text><Text ><Text style={{fontSize:20}}>A1.</Text> Sorry, we don’t accept 
                    orders on call. However you can 
                    call us on +91-8219640885 for any help related to placing order.</Text>
                   
                    </View>
                    <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:20,
                    paddingLeft:30,
                    paddingBottom:22,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                
                <Text style={{fontSize:20}}>Q2. How do I know my order is confirmed?</Text><Text ><Text style={{fontSize:20}}>A2.</Text> We will send you 
                a order confirmation email once we receive your order.</Text>

                </View>

                <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:20,
                    paddingLeft:30,
                    paddingBottom:22,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                      <Text style={{fontSize:20}}>Q3. What if I have a problem with my order?</Text><Text ><Text style={{fontSize:20}}>A3.</Text> Please call 
                      Zippy Partner Support on +91-8219640885 or write email to  <Text selectionColor='blue' onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') }

      title="support@example.in">support@zippy.in</Text> mentioning your Order # and we will help you out.</Text>

                </View>


                <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:20,
                    paddingLeft:30,
                    paddingBottom:22,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                
                <Text style={{fontSize:20}}>Q4. Will I get an invoice?</Text><Text ><Text style={{fontSize:20}}>A4.</Text> Yes, you will get it at the time when order is placed</Text>

                </View>
                <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:20,
                    paddingLeft:30,
                    paddingBottom:22,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                
                <Text style={{fontSize:20}}>Q5. Why is Swiggy doing this?</Text><Text ><Text style={{fontSize:20}}>A5.</Text> At Zippyy we strive to add value to your business. 
                We understand the challenges you face on a daily basis in sourcing the best quality food in time . </Text>

                </View>

                <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:20,
                    paddingLeft:30,
                    paddingBottom:22,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                
                <Text style={{fontSize:20}}>Q6. How it is different from other food delivery app?</Text><Text ><Text style={{fontSize:20}}>A6.</Text> At Zippyy we provide you
                time flexibility to book order and take that order at a particular time.</Text>

                </View>
                <View style={{
                    
                    alignSelf:'center',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'white',
                    width:'95%',
                    padding:10,
                    paddingLeft:30,
                    paddingBottom:12,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:10 
                }}>
                
                <Text style={{fontSize:20}}>©Zippy 2021</Text>

                </View>

               
                    

            </View>
        
            
            )
        }
    }
    
    
    export default Faq;