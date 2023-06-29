import { useState } from 'react';
import Input from '../Input/Input';
import { THUMBNAIL_DIMENSIONS } from '../../constants/books';

const EditBookEdition = ({ currentBook }) => {
  const [author, setAuthor] = useState(currentBook.author);
  const [title, setTitle] = useState(currentBook.title);
  const [description, setDescription] = useState(currentBook.description);
  return (
    <main>
      <div className="edit-book-edition__container">
        <div>
          <h1 className="edit-book-edition__h1">Edit book</h1>
        </div>
        <form className="edit-book-edition__form">
          <div className="edit-book-edition__basic-info">
            <img
              src={currentBook.thumbnail}
              alt={currentBook.title}
              width={THUMBNAIL_DIMENSIONS.WIDTH}
              height={THUMBNAIL_DIMENSIONS.HEIGHT}
              className="edit-book-edition__thumbnail"
            />
            <div>
              <Input
                label="Title"
                name="title"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <Input
                label="Author"
                name="author"
                id="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
          </div>
          <label className="edit-book-edition__description-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="edit-book-edition__description"
            name="Description"
            id="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button type="submit" className="edit-book-edition_save-changes">
            Save changes
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditBookEdition;
