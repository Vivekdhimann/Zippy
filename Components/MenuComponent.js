import React, { Component,useState } from 'react';
import { DISHES } from "../screens/dishes";
import { ListItem } from "react-native-elements";
import { FlatList,Image ,View} from "react-native";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}


function Menu(props) {
    const [dishes,setDishes] = useState(DISHES);
        const renderItem = ({item, index}) => {

            return (
              <Animatable.View animation="fadeInRightBig" duration={2000}>
                <ListItem  onPress={() => {
                    props.navigation.navigate('DishDetail', {
                      dishId: item._id,
                    });console.log('id of dishssss' + item._id)
                  }} key={index} bottomDivider>
                <Image style={{width:80,height:80}} source={{uri: baseUrl + item.image}} />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>

              <View >
                    <Text>{item.name}</Text>
                    <Text>{item.imag}</Text>
              </View>
              </Animatable.View>
            );
        };
        return(
          <View>
            <FlatList
                data={props.dishes}
                renderItem={renderItem}
                keyExtractor={item => item._id.toString()}
                />
          </View>

        )
       
}

export default connect(mapStateToProps)(Menu);