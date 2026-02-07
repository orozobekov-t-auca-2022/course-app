import RemoveFromAuthorsListButton from './RemoveFromAuthorsListButton';

function CourseAuthors({
  authors,
  onRemoveAuthor,
}: {
  authors: string[];
  onRemoveAuthor: (authorName: string) => void;
}) {
  return (
    <div style={{ width: '187px' }}>
      {authors.length === 0 ? (
        <p>No authors added yet</p>
      ) : (
        <ul style={{ listStyleType: 'none' }}>
          {authors.map((author, index) => (
            <li key={index} style={{ display: 'flex', gap: '8px' }}>
              <p style={{ width: '200px' }}>{author}</p>
              <RemoveFromAuthorsListButton
                onClick={() => onRemoveAuthor(author)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseAuthors;
