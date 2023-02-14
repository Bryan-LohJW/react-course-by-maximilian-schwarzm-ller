import React, { useState } from 'react';

import Todo from '../models/todo';

type TodosContextObj = {
	items: Todo[];
	addToDo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addToDo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
	props
) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => prevTodos.concat(newTodo));
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => todo.text !== todoId)
		);
	};

	const contextValue: TodosContextObj = {
		items: todos,
		addToDo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
