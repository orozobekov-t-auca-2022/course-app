import { useEffect, useState } from 'react';
import RemoveFromAuthorsListButton from './RemoveFromAuthorsListButton';
import type { AuthorProps } from './types';

function CourseAuthors({
  authors,
  onRemoveAuthor,
}: {
  authors: string[];
  onRemoveAuthor: (authorId: string) => void;
}) {
  const [author, setAuthor] = useState<AuthorProps[]>([]);
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const authorData = await Promise.all(
          authors.map(async (authorId) => {
            const response = await fetch(
              `${import.meta.env.VITE_DUMMY_AUTHORS_API}/${authorId}`
            );
            const data = await response.json();
            return { id: authorId, name: data.name };
          })
        );
        setAuthor(authorData);
      } catch (error) {
        console.error('Failed to load authors:', error);
        setAuthor([]);
      }
    };
    fetchAuthors();
  }, [authors]);

  return (
    <div style={{ width: '187px' }}>
      {authors.length === 0 ? (
        <p>No authors added yet</p>
      ) : (
        <ul style={{ listStyleType: 'none' }}>
          {author.map((a, index) => (
            <li key={index} style={{ display: 'flex', gap: '8px' }}>
              <p style={{ width: '200px' }}>{a.name}</p>
              <RemoveFromAuthorsListButton
                onClick={() => onRemoveAuthor(a.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseAuthors;
