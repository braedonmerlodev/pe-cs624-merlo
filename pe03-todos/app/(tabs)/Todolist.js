import React from 'react';
import { View, Text } from 'react-native';

const TodoList = ({ todos }) => {
  return (
    <View>
      {todos.length > 0 ? (
        todos.map(todo => (
          <View key={todo.id}>
            <Text>{todo.text}</Text>
          </View>
        ))
      ) : (
        <Text>No todos yet</Text>
      )}
    </View>
  );
};

export default TodoList;