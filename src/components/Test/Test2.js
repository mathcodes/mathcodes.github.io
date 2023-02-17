import { useState } from 'react';

let nextId = 0;

export default function Test() {
  const [ingredient, setIngredient] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
      />
      <button onClick={() => {
        setIngredient('');
        artists.push({
          id: nextId++,
          ingredient: ingredient,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.ingredient}</li>
        ))}
      </ul>
    </>
  );
}
