const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="What needs to be done ?💀"
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
