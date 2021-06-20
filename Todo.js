import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Todo = (props) => {
  return (
    <View>
    <Text style={{ ...styles.todo, ...props.style }}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Todo;
