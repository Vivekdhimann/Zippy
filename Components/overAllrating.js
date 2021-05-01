import React, { Component } from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import { View,ScrollView,TouchableOpacity,Text} from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';

class OverAll extends Component{
    
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
                        <Text style={{ fontSize:20}} >   Overall Rating</Text>
                        </View>
                        </View>
                         
                        <View style={{
                        alignSelf:'center',
                        flexDirection:'column',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                    <Text style={{fontSize:25, padding:10, alignSelf:'center'}}>Over All Rating</Text>

                    <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Average", "OK", "Good"]}
  defaultRating={3}
  size={35}
/>
                    </View>



                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:10,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                       <View style={{flexDirection:'column', justifyContent:'center' }}>
                       <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
  defaultRating={1}
  size={35}
/>
                            
                            <Icon name="user" size={18} > <Text>125</Text></Icon>  
                   
                    </View>
                   
                   
                   
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:12,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                        <View style={{flexDirection:'column', justifyContent:'center' }}>
                        <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
  defaultRating={2}
  size={35}
/>
            
                            
                            <Icon name="user" size={18} > <Text>125</Text></Icon>  
                   
                    </View>
                   
                   
                    </View>

                    </View>




                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'48%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
    <View style={{flexDirection:'column', justifyContent:'center' }}>
    <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
  defaultRating={3}
  size={35}
/>
            
                            
                            <Icon name="user" size={18} > <Text>125</Text></Icon>  
                   
                    </View>
                   
                   
</View>

<View style={{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'48%',
    padding:10,
    paddingBottom:12,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20
}}>
   <View style={{flexDirection:'column', justifyContent:'center' }}>
   <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
  defaultRating={4}
  size={35}
/>
            
                            
                            <Icon name="user" size={18} > <Text>56</Text></Icon>  
                   
                    </View>
                   
                   
</View>

</View>


<View style={{flexDirection:'row', justifyContent:'space-between', paddingLeft:15,paddingRight:15 }}> 

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'48%',
                        padding:10,
                        paddingBottom:12,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                        <View style={{flexDirection:'column', justifyContent:'center' }}>
                        <AirbnbRating
  count={5.0}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
  defaultRating={5}
  size={35}
/>
                            
                            <Icon name="user" size={18} > <Text>47</Text></Icon>  
                   
                    </View>
                   
                   
                    </View>

                    </View>



                </ScrollView>
            </View>
        );
    }
}


export default OverAll;