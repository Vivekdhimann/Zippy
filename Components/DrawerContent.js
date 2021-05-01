import React from 'react';
import { View,StyleSheet,Image } from "react-native";
import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
import { Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

function DrawerContent(props){

    const [isDarkTheme,setDarkTheme] = React.useState(false);
    const toggleTheme = ()=>{
        setDarkTheme(!isDarkTheme)
    }
    return(
        <View style={{flex:1}}>
                    <DrawerContentScrollView {...props}>
                        <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Vivek Dhiman</Title>
                                <Caption style={styles.caption}>vivek.dhiman@gmail.com</Caption>
                            </View>
                            
                        </View>
                       
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user-circle-o" 
                                color={color}
                                size={size}
                                
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="heart" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Past Orders"
                            onPress={() => {props.navigation.navigate('History')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="comment-o" 
                                color={color}
                                size={size}
                                
                                />
                            )}
                            label="Suggestions"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="star-half-empty" 
                                color={color}
                                size={size}
                                
                                />
                            )}
                            label="My overall rating"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="gears" 
                                color={color}
                                size={size}
                                type ={'feather'}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="support" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="users" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About Us"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                        </View>
                    </DrawerContentScrollView>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="sign-out" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => {signOut()}}
                    />

                </Drawer.Section>
        </View>

    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})

export default DrawerContent;