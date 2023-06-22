const UserSearch = () => {
  return (
    <div className="usersearch__container">
      <div>
        <label className="usersearch__label">Enter user email:</label>
      </div>
      <div className="usersearch__search">
        <input
          className="usersearch__input"
          type="text"
          name="search"
          id="search"
          placeholder="example@lib.com"
        />
      </div>
      <button type="active" className="usersearch__adduserbutton">
        Add user
      </button>
    </div>
  );
};

export default UserSearch;
