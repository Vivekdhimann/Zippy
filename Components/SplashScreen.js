import React from 'react';
import { 
    View, 
    Text, 
    Dimensions,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
class SplashScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={{padding:50,paddingLeft:20,width:'100%',backgroundColor:'powderblue',height:100, flexDirection:'column', borderRadius:10}}>
                        <View>
                        <Text style={{fontWeight: 'bold', color:'#05375a',fontSize:40, textShadowColor:'black', textAlign:'center'}} >   Welcome to Zippy </Text>
                        </View>
                        </View>
            
            <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                
                <Animatable.Image 
                animation="bounceIn"
                duraton={1500}
            source={require('../assets/samp2.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
            <Text style={styles.title}>Stay connected with Zippy for better experience!</Text>
            <Text style={styles.text}>🏃‍♂️🏃‍♂️ Chase the Flavour Today !!</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>

            </Animatable.View>
            </View>

        )
    }
}



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'powderblue'
   
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#e0ffff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      fontSize: 15,
      marginTop:5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    
},
button: {
    alignItems: 'flex-end',
    marginTop: 30
},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
}
});
export default SplashScreen;