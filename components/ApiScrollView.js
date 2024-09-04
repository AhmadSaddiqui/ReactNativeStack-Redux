import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';




const ApiScrollView = () => {
  const [data, setData]=useState([]);
  const getAPIData = async () => {
   const url = "https://jsonplaceholder.typicode.com/posts";
   let result = await fetch(url);
   result = await result.json();
   setData(result);
  }
  useEffect(()=>{
   getAPIData()
  },[])
  return (
 
  <ScrollView>
  <View>
    <Text style = {{fontSize:30}}>API MAP</Text>
    {
    data.length ?
    data.map((item)=>
        <View style ={{padding:10, borderBottomColor:"#ccc", borderBottomWidth:1}}>
          <Text style = {{fontSize:30, backgroundColor:"#ddd"}}>ID : {item.id}</Text>
          <Text style = {{fontSize:30}}>UserId : {item.userId}</Text>
          <Text style = {{fontSize:30}}>Title : {item.title}</Text>
          <Text style = {{fontSize:30}}>Body : {item.body}</Text>
        </View>
    ) 
  :null
   }
  </View>
  </ScrollView>
  );
};

 



export default ApiScrollView;




