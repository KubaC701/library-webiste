const UserSearch = () => {
  return (
    <main>
      <div className="usersearch__container">
        <div>
          <h1 className="usersearch__h1">Enter user email:</h1>
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
    </main>
  );
};

export default UserSearch;
