import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <View>
    {todos.length > 0 ? (
      todos.map(todo => (
        <View key={todo.id}>
          <TouchableOpacity onPress={() => toggleComplete && toggleComplete(todo.id)}>
            <Text>{todo.complete ? '✓ ' : '○ '}{todo.text}</Text>
          </TouchableOpacity>
          
          {deleteTodo && (
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))
    ) : (
      <Text>No todos yet</Text>
    )}
  </View>
);

export default TodoList;