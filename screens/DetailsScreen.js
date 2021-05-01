import React,{Component, useState} from 'react';
import { Text, View ,ActivityIndicator,FlatList,Switch} from 'react-native';
import {DISHES2}  from "./dishes2";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from "react-native-elements";


function FoodItems() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderItem = ({item}) => {
    
  return (
    <Card key={item.id}>
    <Card.Title>{item.item_name}</Card.Title>
    <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={item.active}
      />
    </Card>
                   
  );
};

return(
  
    <FlatList
        data={DISHES2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        />
  

)

}



function Category() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>NO data</Text><ActivityIndicator size="large" color="#00ff00" /> 
    </View>
  );
}

function SubCategory() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>NO data </Text><ActivityIndicator size="large" color="powderblue" /> 
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

function DetailsScreen(props) {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{
        activeTintColor: '#000000',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="FoodItems"
        component={FoodItems}
        options={{ tabBarLabel: 'FoodItems' }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{ tabBarLabel: 'Category' }}
      />
      <Tab.Screen
        name="SubCategory"
        component={ SubCategory}
        options={{ tabBarLabel: ' SubCategory' }}
      />
    </Tab.Navigator>
  );
}
export default DetailsScreen;

