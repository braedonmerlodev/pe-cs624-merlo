import React from 'react';

interface AllTabProps {
  todos: { id: number; text: string; completed: boolean }[];
}

const AllTab: React.FC<AllTabProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? '(Complete)' : '(Active)'}
        </li>
      ))}
    </ul>
  );
};

export default AllTab;