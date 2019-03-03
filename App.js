import React, {Component} from 'react';

import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Button
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
          <Button
            onPress={() => {}} 
            title="Teste com botão" />
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Loren Ipsum sit dolot amet
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#000'
  },
  postContainer:{
    marginHorizontal:20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 20,
    textAlign:"center",
    alignItems:"center",
    backgroundColor: "#FFF"
  },
  postTitle:{
    fontSize: 18,
    color: "#000",
    fontWeight:"bold",
    marginBottom: 6,
  },
  postDescription:{
    color:"#666",
    marginBottom: 10
  },
  buttonPadrao:{
    backgroundColor: "#000"
  }
});
