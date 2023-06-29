import Input from '../Input/Input';

const UserSearch = ({ query, setQuery }) => {
  return (
    <div className="user-search__container">
      <div className="user-search__search">
        <Input
          label="Enter user email:"
          className="user-search__input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="example@lib.com"
        />
      </div>
    </div>
  );
};

export default UserSearch;
