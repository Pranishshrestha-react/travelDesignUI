import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground, ScrollView} from 'react-native';
import AllCatScreen from './AllCatScreen';

const HomeScreen= props =>{
    return <View style ={{flex: 1, justifyContent:'flex-end'}}>
    <View style={{...StyleSheet.absoluteFill}}>
        
        <Image
            source={require('../assets/images/back.jpg')}
            style={{flex:1, width:null, height:null, position:'relative'}}
        />
        <View style={{flex:1, position:'absolute', justifyContent:'space-evenly', height:'100%', width:'100%', alignItems:'center',marginTop:60}}>
            <View >
              <Text style={{fontSize:40, color:'#000', opacity:1, fontFamily:'Original'}}>Travel With Us</Text>
            </View> 
            <View style={{backgroundColor:'orange',  borderRadius: 20, height:50, width:200, justifyContent:'center', alignItems:'center'}} >
                <Text style={{fontSize:30, color:'black', fontFamily:'Original'}} onPress={()=> props.navigation.navigate('AllCat')}>START</Text>
            </View> 
            <View style={{position:'absolute'}}>

            </View>
        </View>
    </View>
    

  </View>


}
 
const styles = StyleSheet.create({

});

export default HomeScreen;