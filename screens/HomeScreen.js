import React,{Component, useState} from 'react';
import { Text, View ,FlatList,StyleSheet,Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {DISHES} from './dishes';


function All(props)
{
    
    
    const renderOrders = ({item})=>{
        
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
        return(
          
           <View style={styles.container}>
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {item.totalitemprice}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY"    
                        />
                    </View>
            </View>
            </View>
            
        )
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={dishes}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
           /> 
           
        </View>
    )
}



function Ready(props)
{
    
    
    const renderOrders = ({item})=>{
        
        
      
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Ready" ){
        return(
            <View style={styles.container}>
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {item.totalitemprice}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY"    
                        />
                    </View>
            </View>
            </View>
        )}
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={dishes}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
           /> 
           
        </View>
    )
}








function Preparing(props)
{ 
    const renderOrders = ({item})=>{
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Preparing" ){
        return(
            <View style={styles.container}>
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {item.totalitemprice}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER READY"    
                        />
                    </View>
            </View>
            </View>
        )}
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={dishes}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
           /> 
           
        </View>
    )
}





function Picked(props)
{
    
    const renderOrders = ({item})=>{
    
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Picked" ){
        return(
            <View style={styles.container}>
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {item.totalitemprice}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER Delivered"    
                        />
                    </View>
            </View>
            </View>
        )}
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={dishes}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
           /> 
           
        </View>
    )
}


function Rejected(props)
{
    
    const renderOrders = ({item})=>{
   
         
        return(

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop:5,marginBottom:10}} >{item.itemname} × {item.no} </Text>
                <Text>Rs. {item.price * item.no}</Text> 
            </View> 
            
            
        )
    }
    const [dishes,setDishes] = useState(DISHES);
  const renderItem = ({item, index}) => {
    if(item.status== "Rejected" ){
        return(
            <View style={styles.container}>
            <View key={item.id} style={{backgroundColor:'white',padding:5,borderRadius:10 }}>
                    <View style={styles.f1}>
                        <Text>ID:{item.id}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.f2}>
                        <View style={{backgroundColor:'#9a6ee6',padding:5,borderRadius:10}}>
                            <Text style={{color:'white'}}>{item.status}</Text>
                        </View>
                        <Text style={{marginLeft:10}}>{item.username}</Text>
                    </View>
                    <View style={{borderBottomColor:'#e0e0e0',borderBottomWidth:1,borderTopColor:'#e0e0e0',borderTopWidth:1 }}>
                      <FlatList
                        data={item.orders}
                        renderItem={renderOrders}
                        keyExtractor={item=> item.idd.toString()}
                      />
                    </View>
                    <View style={styles.f4}>
                        <Text>{item.total} item</Text>
                        <Text>Rs. {item.totalitemprice}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Cash to be collected</Text>
                        <Text>Rs. {item.cashtocollected}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Restaurant Promo</Text>
                        <Text>Rs. {item.restaurantpromo}</Text>
                    </View>
                    <View style={styles.f4}>
                        <Text>Taxes</Text>
                        <Text>Rs. {item.taxes}</Text>
                    </View>
                    <View style={styles.f5}>
                        <Text style={{fontSize:25,color:'#6a696b'}}>Total Bill:</Text>
                        <Text style={{fontSize:25,color:'#6a696b'}}> {item.totalbill}  </Text>
                        <View style={{backgroundColor:'red',padding:5,borderRadius:10}}>
                            <Text style={{color:'white',fontWeight:'bold'}}>PAID</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            title="ORDER REJECTED"    
                        />
                    </View>
            </View>
            </View>
        )}
    }
    return(
        <View style={styles.container}>
           <FlatList
              data={dishes}
              renderItem={renderItem}
              keyExtractor={item=> item.id.toString()}
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
        name="Preparing"
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
      backgroundColor:'#dcdcdc',
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