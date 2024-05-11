// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   TextInput,
//   Button,
// } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Foundation from "@expo/vector-icons/Foundation";


// export const Home = () => {
//   const [input, setInput] = useState("");
//   console.log(input);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={{
//           borderWidth: 1,
//           height: 30,
//           borderRadius: 15,
//           padding: 8,
//           postion: "relative ",
//         }}
//         placeholder="Search"
//         onChangeText={setInput}
//       />
//       <Ionicons
//         name="search"
//         size={20}
//         style={{ postion: "absolute", left: "90%", top: "-4%"}}
//       />
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//         }}
//       >
//         <Text style={styles.chips}>#react</Text>
//         <Text style={styles.chips}>#react</Text>
//         <Text style={styles.chips}>#Native</Text>
//       </View>
//       <ScrollView>
//         <Post
//           img={
//             "https://pbs.twimg.com/media/FljAjxEXEAAH1mz?format=jpg&name=medium"
//           }
//           title="Kookie"
//           time="now"
//         />
//         <Post
//           img={
//             "https://pbs.twimg.com/media/Flo8OhDaEAEInwe?format=jpg&name=small"
//           }
//           title="Suga Nim"
//           time="earlier"
//         />
//         <Post
//           img={
//             "https://pbs.twimg.com/media/FlrK3U5XwAA3YTT?format=jpg&name=large"
//           }
//           title="Jimin ssi"
//           time="earlier"
//         />

//         {/*         
//         <Button
//           onPress={() => {
//             alert("You tapped the button!");
//           }}
//           title="Press Me"
//         />
//         <View style={{ margin: 16 }} />
//         <Collapse /> */}
//       </ScrollView>
//     </View>
//   );
// };

// const Post = ({ img, title, time }) => {
//   return (
//     <View>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: img,
//         }}
//       />
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           columnGap: 20,
//         }}
//       >
//         <View
//           style={{
//             width: 50,
//             height: 50,
//             backgroundColor: "#f1f1f1",
//             borderRadius: 50,
//             marginRight: 10,
//           }}
//         />
//         <View>
//           <Text>{title}</Text>
//           <Text style={{ fontSize: 12 }}>{time}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 42,
//     paddingLeft: 20,
//     paddingRight: 20,
//     height: "100%",
//   },
//   tinyLogo: {
//     width: "100%",
//     height: 200,
//     margin: 8,
//   },
//   chips: {
//     borderWidth: 1,
//     borderRadius: 15,
//     margin: 8,
//     paddingTop: 4,
//     paddingBottom: 4,
//     paddingLeft: 12,
//     paddingRight: 12,
//   },
// });


import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home