import "./Dailygrowth.css";
import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { motion } from "framer-motion";


const Dailygrowth = () => {
  const [todoText, setTodoText] = useState("");
  const [rating, setRating] = useState(1); // Default rating set to 1
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [showRating, setShowRating] = useState(null); // Modified to track specific todo

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = (prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime(),
        todoText,
        isCompleted: false,
        rating, // Add rating to the todo object
      },
    ];

    setTodos(newTodos);
    setTodoText("");
    setRating(1); // Reset rating to default
    setShowRating(null); // Hide rating dropdown
  };

  const deleteTodo = (id) => {
    const newTodos = (prevTodos) => prevTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (e, id) => {
    e.preventDefault();
    const newTodos = [...todos].map((todo) => {
      if (id === todo.id) {
        todo.todoText = editedText;
      }
      return todo;
    });
    setTodos(newTodos);
    setEditedTodo(null);
  };

  const toggleTodoState = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        if (todo.isCompleted) {
          setShowRating(null); // Hide rating dropdown if todo is completed
        } else {
          setShowRating(id); // Show rating dropdown if todo is not completed
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const setInputFocus = (input) => {
    if (input !== null) {
      input.focus();
    }
  };

  return (
    <motion.div
      className="todo-card2"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="todos-wrapper">
        <h3 className="todo-heading">Daily Growth Checklist</h3>
        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
            ref={setInputFocus}
          />
          <button type="submit" className="btn-add">
            Add +
          </button>
        </form>
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {todo.id === editedTodo ? (
              <div className="todo-wrapper">
                <form onSubmit={(e) => editTodo(e, todo.id)}>
                  <input
                    type="text"
                    className="todo-input input-edit"
                    onChange={(e) => setEditedText(e.target.value)}
                    defaultValue={todo.todoText}
                    ref={setInputFocus}
                  />
                </form>
                <button
                  className="todo-controls cancel"
                  onClick={() => setEditedTodo(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="todo-wrapper">
                <div className="todo-content">
                  <span
                    className={
                      "todo-text " + (todo.isCompleted && "completed")
                    }
                  >
                    {todo.todoText}
                  </span>
                  <div className="todo-controls">
                    {todo.isCompleted ? (
                      <ImCheckboxChecked
                        onClick={() => toggleTodoState(todo.id)}
                      />
                    ) : (
                      <ImCheckboxUnchecked
                        onClick={() => {
                          setShowRating(todo.id);
                          toggleTodoState(todo.id);
                        }}
                      />
                    )}
                    <RiDeleteBin6Line onClick={() => deleteTodo(todo.id)} />
                    <AiFillEdit onClick={() => setEditedTodo(todo.id)} />
                  </div>
                </div>
                {showRating === todo.id && !todo.isCompleted && (
                  <div className="todo-rating-wrapper">
                    <select
                      className="todo-rating"
                      onChange={(e) => {
                        const newRating = Number(e.target.value);
                        setTodos((prevTodos) =>
                          prevTodos.map((item) =>
                            item.id === todo.id
                              ? { ...item, rating: newRating }
                              : item
                          )
                        );
                      }}
                      value={todo.rating}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <span>Rating: {todo.rating}</span>
                  </div>
                )}
                {todo.isCompleted && (
                  <div className="todo-rating-wrapper">
                    <span>Rating: {todo.rating}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dailygrowth;
