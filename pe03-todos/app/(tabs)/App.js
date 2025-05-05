import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './Todolist';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'all',
        };
    }

    inputChange(inputValue) {
        console.log('inputValue', inputValue);
        this.setState({ inputValue });
    }

    submitTodo = () => {
        if (this.state.inputValue.trim()) {
            const todo = {
                id: Date.now(), // Use timestamp as a simple unique ID
                text: this.state.inputValue,
                complete: false
            };
            
            this.setState({
                todos: [...this.state.todos, todo], // Add new todo to array
                inputValue: '' // Clear input field after adding
            });
        }
    }

    render() {
        const { inputValue, todos } = this.state; // Destructure todos from state
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={text => this.inputChange(text)}
                        submitTodo={this.submitTodo}
                    />
                    <TodoList todos={todos} />
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
