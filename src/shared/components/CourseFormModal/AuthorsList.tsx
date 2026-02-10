import AddAuthorToCourseButton from './AddAuthorToCourseButton';
import RemoveFromAuthorsListButton from './RemoveFromAuthorsListButton';
import type { AuthorProps } from './types';

function AuthorsList({
  authors,
  onAddAuthor,
  onRemoveAuthor,
}: {
  authors: AuthorProps[];
  onAddAuthor: (author: AuthorProps) => void;
  onRemoveAuthor: (author: AuthorProps) => void;
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
              {author.name}
            </p>
            <AddAuthorToCourseButton
              onClick={() => {
                onAddAuthor(author);
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
