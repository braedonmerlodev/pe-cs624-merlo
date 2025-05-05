import React from 'react';

interface CompleteTabProps {
  todos: { id: number; text: string; completed: boolean }[];
}

const CompleteTab: React.FC<CompleteTabProps> = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <ul>
      {completedTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default CompleteTab;