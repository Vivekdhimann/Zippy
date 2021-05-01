import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  DrawerContent  from "./DrawerContent";
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from "@react-navigation/stack";


function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}
const MenuNavigator = ({navigation}) => {
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator initialRouteName="Menu" screenOptions={{
        title: 'ZiPPy',
        headerLeft: () => (
          <Icon name="reorder" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />
        ),
        headerStyle: {
          backgroundColor: '#09bc8d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      
      </Stack.Navigator>
    )
  }
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MenuNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}