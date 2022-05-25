export const Input = (props) => {

  return (
    <div>
      <input
        value={props.search}
        onChange={({ target }) => props.setSearch(target.value)}
        type="text"
        placeholder="Введите аниме..."
      />
    </div>
  );
};
