import React,{Component, useState} from 'react';
import { Text, View ,ScrollView,ActivityIndicator,FlatList,StyleSheet,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from "react-native-elements";
import {DISHES}  from "./dishes";







function All(props) {
  const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
  return (
    //<Animatable.View animation="fadeInRightBig" duration={2000}>
    <Card >
    <View style={styles.container} key={index}>
            <View style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID: {item.id}</Text>
                        <Text>7:48</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>Vivek's 1st order</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                        <Text style={{marginTop:5,marginBottom:10}} >{item.quantity} X {item.item_name}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>1 item</Text>
                        <Text>Rs. 120</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. 0</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. 12</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. 5.4</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.total} </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>{item.payment_type}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY"    
                        />
                    </View>
            </View>
           
        </View>
  </Card>

  //</Animatable.View>
            );
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}



function Ready(props) {
  const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Ready" ){
  return (
    //<Animatable.View animation="fadeInRightBig" duration={2000}>
    <Card >
    <View style={styles.container} key={index}>
    
            <View style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID: {item.id}</Text>
                        <Text>7:48</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>Vivek's 1st order</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                        <Text style={{marginTop:5,marginBottom:10}} >{item.quantity} X {item.item_name}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>1 item</Text>
                        <Text>Rs. 120</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. 0</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. 12</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. 5.4</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.total} </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>{item.payment_type}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY"    
                        />
                    </View>
            </View>
    
  
        </View>
  </Card>

  //</Animatable.View>
            );}
            else {
              <Text>NO order Preparing</Text>
            }
           
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}









function Preparing(props) {
  const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Preparing" ){
  return (
    //<Animatable.View animation="fadeInRightBig" duration={2000}>
    <Card >
    <View style={styles.container} key={index}>
    
            <View style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID: {item.id}</Text>
                        <Text>7:48</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>Vivek's 1st order</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                        <Text style={{marginTop:5,marginBottom:10}} >{item.quantity} X {item.item_name}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>1 item</Text>
                        <Text>Rs. 120</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. 0</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. 12</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. 5.4</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.total} </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>{item.payment_type}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER Ready in (10 min)"    
                        />
                    </View>
            </View>
  
  
        </View>
  </Card>

  //</Animatable.View>
            );}
            else {
              <Text>NO order Preparing</Text>
            }
           
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}





function Picked(props) {
  const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Picked" ){
  return (
    //<Animatable.View animation="fadeInRightBig" duration={2000}>
    <Card >
    <View style={styles.container} key={index}>
    
            <View style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID: {item.id}</Text>
                        <Text>7:48</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>Vivek's 1st order</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                        <Text style={{marginTop:5,marginBottom:10}} >{item.quantity} X {item.item_name}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>1 item</Text>
                        <Text>Rs. 120</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. 0</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. 12</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. 5.4</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.total} </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>{item.payment_type}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER Delivered"    
                        />
                    </View>
            </View>
   
  
        </View>
  </Card>

  //</Animatable.View>
            );}
            else {
              <Text>NO order Preparing</Text>
            }
           
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}


function Rejected(props) {
  const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Rejected" ){
  return (
    //<Animatable.View animation="fadeInRightBig" duration={2000}>
    <Card >
    <View style={styles.container} key={index}>
    
            <View style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID: {item.id}</Text>
                        <Text>7:48</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>Vivek's 1st order</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                        <Text style={{marginTop:5,marginBottom:10}} >{item.quantity} X {item.item_name}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>1 item</Text>
                        <Text>Rs. 120</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. 0</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. 12</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. 5.4</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.total} </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>{item.payment_type}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER Rejected"    
                        />
                    </View>
            </View>
  
  
        </View>
  </Card>

  //</Animatable.View>
            );}
            else {
              <Text>NO order Preparing</Text>
            }
           
        };
        return(
          <View>
            <FlatList
                data={dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
          </View>

        )
       
}


const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000000',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'lightblue' },
      }}
    >
      <Tab.Screen
        name="All"
        component={All}
        options={{ tabBarLabel: 'All' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Preparing}
        options={{ tabBarLabel: 'Preparing' }}
      />
      <Tab.Screen
        name="Ready"
        component={Ready}
        options={{ tabBarLabel: 'Ready' }}
      />
      <Tab.Screen
        name="Picked"
        component={Picked}
        options={{ tabBarLabel: 'Picked' }}
      />
      <Tab.Screen
        name="Rejected"
        component={Rejected}
        options={{ tabBarLabel: 'Rejected' }}
      />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingTop:10,
      backgroundColor:'powderblue',
      padding:10 ,
  },
  f1:{
      flexDirection:'row',
      justifyContent:"space-between",
      
  },
  f2:{
     
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop:10,
      marginBottom:10
  },
  f4:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  f5:{
      flexDirection:'row',

  }
})


export default HomeScreen;