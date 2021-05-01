import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,Text} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

class Suggestion extends Component{
    
    render(){
        
        return(
            <View>
                <ScrollView>
                <View >
                <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'row', borderRadius:10}}>
                <View>
                        <TouchableOpacity>
                        <Icon name="back" size={25}  />
                        
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{fontSize:20}} >   Suggestions & Feedback </Text>
                        </View>
                        </View>
           </View>
                         <Card>
                        <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:10,
                        paddingBottom:12,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:10,
                        borderColor:'black'
                        
                    }}>
                    <Text style={{fontSize:20, padding:10}}>Order id : 1456932</Text>
                    <Text style={{fontSize:20, padding:10, color:'red'}}>Suggestion</Text>

                  
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:10,
                        paddingBottom:12,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:1
                    }}>
                    
                    <Text style={{fontSize:20, padding:10}}>You need to improve the quantity of the item the quality of food is good</Text>

                  
                    </View>
                    </Card>

            


            </ScrollView>

            </View>



        )
    }
}


export default Suggestion;