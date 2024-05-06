import React from "react";
import { View,StyleSheet,Text,Image } from "react-native";

const Fallback = ()=>{
    return(
        <View style={{alignItems:'center'}}>
            <Image
            source={require('../assets/image.png')}
            style={{height:300,width:300}}
            
            />
        </View>
    )
}

export default Fallback