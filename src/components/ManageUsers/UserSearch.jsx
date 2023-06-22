const UserSearch = () => {
  return (
    <div className="user-search__container">
      <label className="user-search__label" htmlFor="search">
        Enter user email:
      </label>
      <div className="user-search__search">
        <input
          className="user-search__input"
          type="text"
          name="search"
          id="search"
          placeholder="example@lib.com"
        />
      </div>
      <button type="button" className="user-search__add-user-button">
        Add user
      </button>
    </div>
  );
};

export default UserSearch;
