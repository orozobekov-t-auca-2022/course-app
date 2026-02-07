import AddAuthorToCourseButton from './AddAuthorToCourseButton';
import RemoveFromAuthorsListButton from './RemoveFromAuthorsListButton';

function AuthorsList({
  authors,
  onAddAuthor,
  onRemoveAuthor,
}: {
  authors: string[];
  onAddAuthor: (authorName: string) => void;
  onRemoveAuthor: (authorName: string) => void;
}) {
  return (
    <div>
      <p>Authors List</p>
      <ul
        style={{
          marginTop: '16px',
          listStyleType: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {authors.map((author, index) => (
          <li key={index} style={{ display: 'flex', gap: '8px' }}>
            <p
              style={{
                width: '88px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {author}
            </p>
            <AddAuthorToCourseButton
              onClick={() => {
                onAddAuthor(author);
                onRemoveAuthor(author);
              }}
            />
            <RemoveFromAuthorsListButton
              onClick={() => onRemoveAuthor(author)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsList;
