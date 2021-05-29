import React, { Fragment, useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td>{todo.description}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      );
    });
  };

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderTodos()}</tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
