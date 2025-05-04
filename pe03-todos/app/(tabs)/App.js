import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';


class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'all',
        };
        this.submitTodo = this.submitTodo.bind(this);
    }

    inputChange(inputValue) {
        console.log('inputValue', inputValue);
        this.setState({ inputValue });
    }

    submitTodo() {
        if (this.state.inputValue.trim()) {
            const todo = {
                id: Date.now(),
                text: this.state.inputValue,
                complete: false
                                                                          
            };             
            
            const todos = [...this.state.todos, todo];
            this.setState({
                  todos,
                  inputValue: ''
      });
    }
  }

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
            />
          <TodoList todo={todos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
