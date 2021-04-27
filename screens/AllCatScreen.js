import React from 'react';
import {View, StyleSheet, Text, Image, Button, ScrollView, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AllCatScreen= props =>{
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
            <View style={styles.search}>
                <TextInput 
                placeholder="Search"
                />
                <Icon name="search" size={20} color="gray" style={{paddingRight:10}}/>                
            </View>

            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={styles.round}><Image source={require('../assets/images/plane.png')} style={styles.cicimg}/></View>
                    <Text style={styles.textFamily}>Flight</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={styles.round}><Image source={require('../assets/images/train.png')} style={styles.cicimg}/></View>
                    <Text style={styles.textFamily}>Train</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={styles.round}><Image source={require('../assets/images/bus.jpg')} style={styles.cicimg}/></View>
                    <Text style={styles.textFamily}>Bus</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={styles.round}><Image source={require('../assets/images/cycle.jpg')} style={styles.cicimg}/></View>
                    <Text style={styles.textFamily}>Cycle</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={styles.round}><Image source={require('../assets/images/ship.jpg')} style={styles.cicimg}/></View>
                    <Text style={styles.textFamily}>Cruise</Text>
                </View>            
            </ScrollView>


            <View style={styles.shortHead}>
                <Text style={{fontFamily:'Original', fontSize:20, margin: 10}}>Our Packages</Text>
                <Text style={{fontFamily:'Original', fontSize:13, margin: 10}}>See All</Text>
            </View>


            <View style={styles.packmain} >
                <Pressable onPress ={()=> props.navigation.navigate('Detail')}>
                    <View style={styles.pack}>
                        <View style={styles.packimg}>
                            <Image source={require('../assets/images/dubai.jpg')} style={styles.packmainimg}/>
                        </View>
                        <View>
                            <Text style={styles.packtext}>Dubai</Text>
                        </View>
                    </View>
                    </Pressable>
                <View style={styles.pack}>
                <View style={styles.packimg}>
                        <Image source={require('../assets/images/aus.jpg')} style={styles.packmainimg}/>
                    </View>
                    <View>
                        <Text style={styles.packtext}>Australia</Text>
                    </View>
                </View>
            </View>
            <View style={styles.packmain}>
                <View style={styles.pack}>
                    <View style={styles.packimg}>
                        <Image source={require('../assets/images/bali.jpg')} style={styles.packmainimg}/>
                    </View>
                    <View>
                        <Text style={styles.packtext}>Bali</Text>
                    </View>
                </View>
                <View style={styles.pack}>
                <View style={styles.packimg}>
                        <Image source={require('../assets/images/egypt.jpg')} style={styles.packmainimg}/>
                    </View>
                    <View>
                        <Text style={styles.packtext}>Egypt</Text>
                    </View>
                </View>
            </View>
            <View style={styles.packmain}>
                <View style={styles.pack}>
                    <View style={styles.packimg}>
                        <Image source={require('../assets/images/hongkong.jpg')} style={styles.packmainimg}/>
                    </View>
                    <View>
                        <Text style={styles.packtext}>Hong-Kong</Text>
                    </View>
                </View>
                <View style={styles.pack}>
                <View style={styles.packimg}>
                        <Image source={require('../assets/images/swiss.jpg')} style={styles.packmainimg}/>
                    </View>
                    <View>
                        <Text style={styles.packtext}>Switzerland</Text>
                    </View>
                </View>
            </View>


            <View style={{width:'100%', alignItems:'center'}}><Text style={{fontFamily:'Original'}}>@Copyright 2021. </Text></View>


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
    round:{
        backgroundColor:'red', 
        height:100, 
        width:100, 
        justifyContent:'center', 
        alignItems:'center', 
        margin: 5, 
        borderRadius: 50,
    },
    cicimg:{
        height:100,
        width:100,
        borderRadius: 50,
    },
    textFamily:{
        fontFamily:'Pacific',
    },
    search:{
        backgroundColor:'white',
        height:50,
        width:'95%',
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius: 25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    shortHead:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    packmain:{
        marginHorizontal:10, 
        flexDirection:'row', 
        marginVertical:5
    },
    pack:{
        //backgroundColor:'red',
        height: 200, 
        width:185, 
        marginRight:5,
        alignItems:'center'
    },
    packimg:{
        //backgroundColor:'green', 
        height: 170, 
        width: 185, 
        
    },
    packmainimg:{
        height: 170,
        width: 185,
        borderTopRightRadius:30, 
        borderBottomLeftRadius: 30,
    },
    packtext:{
        fontSize:23, 
        fontFamily:'Original',
    },
});

export default AllCatScreen;