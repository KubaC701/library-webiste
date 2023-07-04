import { useState } from 'react';
import Input from '../Input/Input';
import { THUMBNAIL_DIMENSIONS } from '../../constants/books';
import Button from '../Button/Button';
import './BookForm.css';
import { addBook, updateBook } from '../../store/books/actions';
import useBooksContext from '../../contexts/BooksContext';
import useFormValidation from '../../hooks/useFormValidation';

export const BOOK_FORM_TYPES = {
  EDIT: 'EDIT',
  ADD: 'ADD',
};

const BookForm = ({ book, type, onSubmit }) => {
  const { dispatch } = useBooksContext();
  const [author, setAuthor] = useState(book?.author || '');
  const [title, setTitle] = useState(book?.title || '');
  const [description, setDescription] = useState(book?.description || '');
  const [thumbnail, setThumbnail] = useState(book?.thumbnail || '');
  const [thumbnailToDisplay, setThumbnailToDisplay] = useState(book?.thumbnail);

  const validateThumbnail = (thumbnail) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = thumbnail;
    });
  };

  const { errors, validate, clearError } = useFormValidation(
    {
      author,
      title,
      description,
      thumbnail,
    },
    {
      thumbnail: {
        validate: validateThumbnail,
        message: 'Invalid thumbnail URL',
      },
    }
  );

  const handleThumbnailBlur = async (event) => {
    const { value } = event.target;
    const isValid = await validateThumbnail(value);

    if (isValid) {
      setThumbnailToDisplay(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    const book = {
      id: book?.id,
      author,
      title,
      description,
      thumbnail: thumbnailToDisplay,
    };

    if (type === BOOK_FORM_TYPES.ADD) {
      dispatch(addBook(book));
    } else {
      dispatch(updateBook(book));
    }
    onSubmit?.();
  };

  return (
    <section>
      <h1 className="book-form__heading">
        {type === BOOK_FORM_TYPES.ADD ? 'Add book' : 'Edit book'}
      </h1>
      <form className="book-form__form" onSubmit={handleSubmit}>
        <div className="book-form__basic-info">
          <img
            src={thumbnailToDisplay}
            alt={book?.title}
            width={THUMBNAIL_DIMENSIONS.WIDTH}
            height={THUMBNAIL_DIMENSIONS.HEIGHT}
            className="book-form__thumbnail"
          />
          <div className="book-form__inputs">
            <Input
              label="Title"
              name="title"
              id="title"
              className="book-form__input"
              value={title}
              onChange={(event) => {
                clearError('title');
                setTitle(event.target.value);
              }}
              error={errors.title}
            />
            <Input
              label="Author"
              name="author"
              id="author"
              className="book-form__input"
              value={author}
              onChange={(event) => {
                clearError('author');
                setAuthor(event.target.value);
              }}
              error={errors.author}
            />
            <Input
              label="Thumbnail"
              name="thumbnail"
              id="thumbnail"
              className="book-form__input"
              placeholder="https://example.com"
              value={thumbnail}
              onChange={(event) => {
                clearError('thumbnail');
                setThumbnail(event.target.value);
              }}
              onBlur={handleThumbnailBlur}
              error={errors.thumbnail}
            />
          </div>
        </div>
        <label className="book-form__description-label" htmlFor="description">
          Description
        </label>
        <div className="book-form__description-wrapper">
          <textarea
            className="book-form__description"
            name="Description"
            id="Description"
            value={description}
            onChange={(event) => {
              clearError('description');
              setDescription(event.target.value);
            }}
            rows={10}
          />
          {errors.description && <p className="input__error">{errors.description}</p>}
        </div>
        <Button type="submit" className="book-form__save-changes">
          Save changes
        </Button>
      </form>
    </section>
  );
};

export default BookForm;
