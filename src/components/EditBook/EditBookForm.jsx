import { useState } from 'react';
import Input from '../Input/Input';
import { THUMBNAIL_DIMENSIONS } from '../../constants/books';
import Button from '../Button/Button';

const EditBookForm = ({ currentBook }) => {
  const [author, setAuthor] = useState(currentBook.author);
  const [title, setTitle] = useState(currentBook.title);
  const [description, setDescription] = useState(currentBook.description);
  return (
    <section>
      <h1 className="edit-book-form__h1">Edit book</h1>
      <form className="edit-book-form__form">
        <div className="edit-book-form__basic-info">
          <img
            src={currentBook.thumbnail}
            alt={currentBook.title}
            width={THUMBNAIL_DIMENSIONS.WIDTH}
            height={THUMBNAIL_DIMENSIONS.HEIGHT}
            className="edit-book-form__thumbnail"
          />
          <div className="edit-book-form__inputs">
            <Input
              label="Title"
              name="title"
              id="title"
              className="edit-book-form__input"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              label="Author"
              name="author"
              id="author"
              className="edit-book-form__input"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <label className="edit-book-form__description-label" htmlFor="description">
          Description
        </label>
        <textarea
          className="edit-book-form__description"
          name="Description"
          id="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={10}
        />
        <Button type="submit" className="edit-book-form__save-changes">
          Save changes
        </Button>
      </form>
    </section>
  );
};

export default EditBookForm;
