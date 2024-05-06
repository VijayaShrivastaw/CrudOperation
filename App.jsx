import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TodoScreen from "./screens/TodoScreen";
const App = () => {

  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)
  const [age, setage] = useState(0)

  return (
    // <View style={{ flex: 1 }}>
    //   <View style={styles.crudText} >
    //     <Text style={styles.textcurd}>CRUD APP</Text>
    //   </View>
    //   <View style={styles.inputField}>
    //     <ScrollView>
    //       <TextInput
    //         placeholder="Name"
    //         style={styles.textInputfield}
    //         value={name}
    //         onChangeText={(text) => setName(text)}
    //       />
    //         <TextInput
    //         placeholder="Phone"
    //         value={number}
    //         onChangeText={(num) => setNumber(num)}
    //         keyboardType="number-pad"
    //         maxLength={10}
    //         style={styles.textInputfield}
    //       />
        
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.buttonText}>
    //           Insert
    //         </Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.buttonText}>
    //           Update
    //         </Text>
    //       </TouchableOpacity>

    //       <TextInput
    //         placeholder="Phone"
    //         style={styles.textInputfield}
    //         keyboardType="number-pad"
    //         maxLength={10}
    //       />
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.buttonText}>
    //           Delete
    //         </Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.buttonText}>
    //           View
    //         </Text>
    //       </TouchableOpacity>
    //     </ScrollView>

    //   </View>
    // </View>
    <TodoScreen/>
  )
}
// const styles = StyleSheet.create({
//   crudText: {
//     // backgroundColor: 'red',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   inputField: {
//     flex: 5,
//     marginHorizontal: 20

//   },
//   textcurd: {
//     fontSize: 45,
//     color: '#000',
//     fontWeight: 'bold'
//   },
//   textInputfield: {

//     borderWidth: 1,
//     borderColor: '#000',

//     paddingHorizontal: 20,
//     marginBottom: 10
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10
//   },
//   buttonText: {
//     fontSize: 25,
//     color: '#fff'
//   }
// })

export default App;