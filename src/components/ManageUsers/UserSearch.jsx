import Input from '../Input/Input';

const UserSearch = ({ query, setQuery }) => {
  return (
    <div className="user-search__container">
      <Input
        label="Enter user email:"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="example@lib.com"
      />
    </div>
  );
};

export default UserSearch;
