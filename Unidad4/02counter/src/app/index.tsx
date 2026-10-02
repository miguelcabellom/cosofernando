import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Index = () => {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
    checkClicks();
  };
  const handlePress2 = () => {
    setCount(count - 1);
    checkClicks();
  };
  const checkClicks = () => {
    setClickCount(prev => {
      const clicks = prev + 1;
      if (clicks % 10 === 0) {
        alert(`Enhorabuena, llevas ${clicks} clicks`);
      }
      return clicks;
    });
  };
  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>

      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      <Pressable onPress={handlePress2} style={styles.button}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="remove-circle" size={24} color="white" />
      </Pressable>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;