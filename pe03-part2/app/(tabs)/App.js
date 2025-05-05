import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import Todolist from './Todolist';
import TabBar from './TabBar'; // Import the TabBar component

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'all', // Default tab is "all"
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setTab = this.setTab.bind(this); // Bind the setTab method
  }

  setTab(type) {
    this.setState({ type }); // Update the current tab
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      todoIndex: todoIndex,
      title: this.state.inputValue,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState(
      {
        todos,
        inputValue: '',
      },
      () => {
        console.log('State: ', this.state);
      }
    );
  }

  render() {
    const { todos, inputValue, type } = this.state;

    // Filter todos based on the selected tab
    const filteredTodos = todos.filter((todo) => {
      if (type === 'complete') return todo.complete;
      if (type === 'active') return !todo.complete;
      return true; // 'all'
    });

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
          <Todolist toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} todos={filteredTodos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar setTab={this.setTab} currentTab={type} /> {/* Add the TabBar at the bottom */}
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