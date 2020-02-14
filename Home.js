import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home({navigation}) {

    const [image,setImage]=useState();

  return (
   <View>
      {/* <Text>Home</Text> 
      <FlatList 
        data={data}
        renderItem={({item}) => 
            <View></View>
        }/> */}
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
