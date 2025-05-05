import React from 'react';

interface ActiveTabProps {
  todos: { id: number; text: string; completed: boolean }[];
}

const ActiveTab: React.FC<ActiveTabProps> = ({ todos }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <ul>
      {activeTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ActiveTab;