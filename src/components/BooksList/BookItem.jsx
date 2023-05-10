const BooksItem = ({ book }) => {
  return (
    // TODO: Remove style
    <li style={{ color: 'white' }}>{JSON.stringify(book, null, 2)}</li>
  );
};

export default BooksItem;
