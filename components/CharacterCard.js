// CharacterCard.js

import React from 'react';
import styles from './CharacterCard.module.css'; // Import CSS module

function CharacterCard({ name, film, image }) {
  return (
    <div className={styles.characterCard}>
      <img src={image} alt={name} className={styles.characterImage} />
      <div className={styles.characterName}> {/* Added a div with class name */}
        <h2>{name}</h2>
      </div>
      <p>{film}</p>
    </div>
  );
}

export default CharacterCard;