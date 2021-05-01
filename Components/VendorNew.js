import React, { Component } from 'react';
import { View,TouchableOpacity,Text, TextInput} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
class VendorNew extends Component{
    
    render(){

        
        return(
            
            <View >
            <View >
                 <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'row', borderRadius:10}}>
                 <View>
                         <TouchableOpacity>
                         <Icon  name="back" size={25}  />
                         
                         </TouchableOpacity>
                         </View>
                         <View>
                         <Text style={{ fontSize:20}} >   Necessary Details </Text>
                         </View>
                         </View>
            </View>
            
            <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="user" size={18} /> 
                     <Text >   Full Name</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          backgroundColor='#f1e9e7'
          
        /></View>
                    </View>



                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="idcard" size={18} /> 
                     <Text >   University ID</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          numeric
          maxLength={10}  
          keyboardType={'numeric'}
          backgroundColor='#f1e9e7'
          
        /></View>
                    </View>





            <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="phone" size={18} /> 
                     <Text >   Phone</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          numeric
          maxLength={10}  
          keyboardType={'numeric'}
          backgroundColor='#f1e9e7'
          
        /></View>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="layout" size={18} /> 
                     <Text >   GST Lisence Number</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          backgroundColor='#f1e9e7'
          maxLength={15} 
        /></View>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="appstore1" size={18} /> 
                     <Text >   Type of firm</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          backgroundColor='#f1e9e7'
        
        /></View>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="exception1" size={18} /> 
                     <Text >   Services</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          backgroundColor='#f1e9e7'
          
        /></View>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="questioncircleo" size={18} /> 
                     <Text >   Gender</Text>
                      </View>
                      <View>
                      <TextInput
          placeholder="Male/ Female/ Other "
          placeholderTextColor="#60605e"
          backgroundColor='#f1e9e7'
          maxLength={15} 
        />
                      </View>
                    </View>



                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="camera" size={18} /> 
                     <Text >   Image</Text>
                      </View>
                      <View>
                      <Text>Upload image</Text>
                      </View>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="camera" size={18} /> 
                     <Text >   Id Proof</Text>
                      </View>
                      <View>
                      <Text>Upload Id proof</Text>
                      </View>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                   <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                     <Icon color='red' name="camera" size={18} /> 
                     <Text >   GST Lisence Image</Text>
                      </View>
                      <View>
                      <Text>GST Lisence Image</Text>
                      </View>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'94%',
                        padding:15,
                        paddingLeft:30,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignSelf:'center'}}>
                     <Icon color='red' name="solution1" size={18} /> 
                     <Text >   Address</Text>
                      </View>
                      <View>
                     <TextInput
          placeholder="Enter details here "
          placeholderTextColor="#60605e"
          underlineColorAndroid="transparent"
            numberOfLines={3}
            multiline={true}
            backgroundColor='#f1e9e7'
          
        /></View>
                    </View>


                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'powderblue',
                        width:'45%',
                        padding:15,
                        paddingBottom:15,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                      <Icon color='red' name="logout" size={18} />  
                      <Text color='#fff'>  Submit</Text>
                    </View>




            </View>
           
            
            )
        }
    }
    

    
    
    export default VendorNew;