import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text,Linking} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class AboutUs extends Component{
    
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
                         <Text style={{ fontSize:20}} >   ABOUT </Text>
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
                    <Text ><Text style={{fontSize:20}}>It</Text> started back in January 2021, when the whole word is suffering from covid-19 the three student of 
                    Lovely Professional university Vivek, Sumit and Gautam came up with an idea for their University. They have found that during the lunch breaks 
                    there was a lot of stampede around the food courts. Student have to stand in lines for hours to fulfil their hunger. Even they are part of it most 
                    of the time. This is happening from the last 5-10 years but no one was looked into it.</Text>
                   
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
                
                <Text><Text style={{fontSize:20}}>To </Text>counter this problem they came up with an idea that why dont we provide a platform for student 
                so that they can pre book their order for a particular time slot and just reach the food court at that time only instesd od standing in queues.</Text>

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
                     <Text><Text style={{fontSize:20}}>From </Text>there it all started. As the platform is get adapted by the students the user experience is improve with that.
                     </Text>

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
                     <Text><Text style={{fontSize:20}}>The</Text> main purpose of this project is to decrease the crowd gathering outside the food court during lunch breaks 
                     or after classes are over. At that time there is a lot of stampede around the food courts. The project provides an efficient way of ordering food for each
                      customer before reaching the food court. After the order is placed the vendor provides a time that you can pick your order at that time. As per the past 
                      data, students had bought food during the peak time but with the application, the system will provide a platform for the vendors to increase their selling 
                      and reduce wastage of food. 
                     </Text>

                </View>

                <View style={{
                    
                    alignSelf:'center',
                    backgroundColor:'white',
                    width:'95%',
                    bottom:-420,
                    padding:10,
                    marginBottom:10,
                    borderRadius:10,
                    shadowOpacity:80,
                    elevation:15,
                    marginTop:5 ,
                    position:'absolute',
                    height:40
                }}>
                     
                     <Text style={{fontSize:20}}>©2021 Zippy all right reserved </Text>
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
    
    
    export default AboutUs;