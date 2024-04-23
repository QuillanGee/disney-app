import React, { useState } from 'react';
import styles from './index.module.css'; // Import CSS file
import CharacterCard from '../components/CharacterCard';
import charactersData from '../components/characterData';
import Header from '../components/Header'; // Import Header component


function HomePage() {
  const [currentShowIndex, setCurrentShowIndex] = useState(0);

  const nextShow = () => {
    setCurrentShowIndex((prevIndex) => (prevIndex + 1) % charactersData.length);
  };

  const prevShow = () => {
    setCurrentShowIndex((prevIndex) => (prevIndex - 1 + charactersData.length) % charactersData.length);
  };

  const currentShow = charactersData[currentShowIndex];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Disney Characters</h1>
      <div className={styles.characterCardContainer}>
        <CharacterCard
          name={currentShow.name}
          film={currentShow.films[0]}
          image={currentShow.imageUrl}
          className="character-card"
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={prevShow}>Previous Show</button>
        <button className={styles.button} onClick={nextShow}>Next Show</button>
      </div>
    </div>
  );
}

export default HomePage;