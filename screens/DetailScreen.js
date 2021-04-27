import React from 'react';
import {View, StyleSheet, Text,Image, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailScreen= props =>{
    return <View style ={{flex: 1}}>
    <View style={{...StyleSheet.absoluteFill}}>
        <Image 
            source ={require('../assets/images/bg.jpg')}
            style={{flex:1, width:null, height:null, position: 'relative', opacity: 0.4}}
        />
    </View>


    <View style={styles.header}>
            <Text style={styles.headText}>Travel</Text>
            <Pressable onPress ={()=> props.navigation.navigate('Profile')}>
            <Image
                source={require('../assets/images/profile.png')}
                style={styles.proimg}
            /> 
            </Pressable>  
    </View>
<ScrollView>
    <View style={styles.imgBox}>
        <Image 
            source={require('../assets/images/dubai.jpg')}
            style={styles.mainImg}
        />
    </View>
    <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, fontFamily:'Original',}}>Dubai</Text>
    </View>

    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}>
        <Image source={require('../assets/images/dubai.jpg')} style={{height:150, width: 150, marginVertical:5, marginHorizontal:5, borderRadius:15}}/>
        <Image source={require('../assets/images/dubai4.jpg')} style={{height:150, width: 150, marginVertical:5, marginHorizontal:5, borderRadius:15}}/>
        <Image source={require('../assets/images/dubai2.jpg')} style={{height:150, width: 150, marginVertical:5, marginHorizontal:5, borderRadius:15}}/>
        <Image source={require('../assets/images/dubai3.jpg')} style={{height:150, width: 150, marginVertical:5, marginHorizontal:5, borderRadius:15}}/>
        <Image source={require('../assets/images/dubai4.jpg')} style={{height:150, width: 150, marginVertical:5, marginHorizontal:5, borderRadius:15}}/>
    </ScrollView>
    <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop: 5}}>
        <Text style={{fontFamily:'Original', fontSize:20}}>Package Detail</Text>
    </View>
    <DataTable style={{backgroundColor:'white', width:'95%',margin:9, borderRadius:15}}>
    <DataTable.Header>
      <DataTable.Title>Topic</DataTable.Title>
      <DataTable.Title>Detail</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Accommodation</DataTable.Cell>
      <DataTable.Cell>4 Nights at Dubai</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Travel destination(s)</DataTable.Cell>
      <DataTable.Cell>Dubai</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Meal Plan</DataTable.Cell>
      <DataTable.Cell>4 Breakfasts, 4 Lunches & 4 Dinners</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Duration</DataTable.Cell>
      <DataTable.Cell>4N/5D</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Sightseeing</DataTable.Cell>
      <DataTable.Cell n>Dubai City tour, Dhow Cruise Dinner & Desert Safari</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Accommodation</DataTable.Cell>
      <DataTable.Cell>4 Nights at Dubai</DataTable.Cell>
    </DataTable.Row>

    
  </DataTable>
    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <View style={{height: 60, width: 180, backgroundColor:'#cfcfcf', borderRadius: 30, marginBottom: 20, justifyContent:'center', alignItems:'center'}}>
            <Icon name="phone" size={30} color="gray" style={{paddingRight:10, position:'relative'}}/>       
            <Text style={{fontFamily:'Original', fontSize:20}}>Contact Us</Text>
        </View>
        <View style={{height: 60, width: 180, backgroundColor:'#cfcfcf', borderRadius: 30, marginBottom: 20, justifyContent:'center', alignItems:'center'}}>
            <Icon name="shopping-cart" size={30} color="gray" style={{paddingRight:10}}/>
            <Text style={{fontFamily:'Original', fontSize:20}}>Buy Now</Text>
        </View>

    </View>

    </ScrollView>

</View>

}
 
const styles = StyleSheet.create({
    header:{
        height:50,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    proimg:{
        height:40,
        width: 40,
        borderRadius:40,
    },
    headText:{
        fontSize: 30,
        paddingLeft: 137,
        fontFamily: 'Original',
    },
    mainImg:{
        height: 400,
        borderRadius: 20,     
    },
    imgBox:{
        height: 400,
        width:'100%',
        alignItems:'center',

    }
});

export default DetailScreen;