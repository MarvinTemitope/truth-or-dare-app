import React, { useState } from 'react';
import TruthButton from './components/TruthButton';
import DareButton from './components/DareButton';
import './App.css'; // Import the CSS file
const App = () => {
  const [message, setMessage] = useState('');
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [selectedImage, setSelectedImage] = useState(''); // Add selectedImage state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleTruthClick = () => {
    // Implement logic to fetch and display a random truth question
    // For example, you can create a list of truth questions and randomly select one.
    const truthQuestions = [
      "Have you ever lied to a friend to avoid a situation?",
      "What is your biggest fear?",
      "What is the most embarrassing thing you've ever done while under the influence?",
      "Have you ever cheated on a partner? If yes, what happened?",
      "What is your wildest sexual fantasy?",
      "Have you ever lied on your resume or job application? If yes, what did you lie about?",
      "What is the most rebellious thing you've ever done?",
      "Have you ever stolen something? If yes, what was it?",
      "What is your most irrational fear?",
      "What is the strangest place you've ever had sex?",
      "Have you ever had a one-night stand? If yes, tell us about it.",
      "What is the most embarrassing thing you've said during sex?",
      "Have you ever been caught in a compromising position? If yes, what happened?",
      "What is the biggest lie you've ever told your parents?",
      "What is the most ridiculous rumor you've spread about someone?",
      "Have you ever had a crush on any of your cousins? If yes, who?",
      "What is the most embarrassing thing you've done for money?",
      "Have you ever had an affair? If yes, share the details.",
      "What is the most illegal thing you've ever done?",
      "Have you ever been fired from a job? If yes, why?",
      "What is the most embarrassing nickname you've ever had?",
      "Have you ever been arrested? If yes, why?"

      // Add more truth questions here
    ];
    const randomIndex = Math.floor(Math.random() * truthQuestions.length);
    setMessage(truthQuestions[randomIndex]);
  };

  const handleDareClick = () => {
    // Implement logic to fetch and display a random dare task
    // For example, you can create a list of dare tasks and randomly select one.
    const dareTasks = [
      "Sing a song in front of everyone",
      "Do your best impersonation of a famous person",
      "Sing your favorite song in a language you don't know.",
      "Call your crush and tell them you have a secret to confess.",
      "Perform a belly dance or twerk in front of everyone.",
      "Go outside and ask a stranger for a piggyback ride.",
      "Let another player give you a makeover using only ketchup and mustard.",
      "Exchange an article of clothing with the player to your right.",
      "Post an embarrassing selfie on your social media account.",
      "Do your best impression of a famous person.",
      "Dance like nobody's watching for one minute.",
      "Lick the bottom of your own foot.",
      "Give a massage to the player on your left for five minutes.",
      "Eat a spoonful of hot sauce or chili peppers.",
      "Go up to a random person and ask them for their autograph.",
      "Perform a stand-up comedy routine for two minutes.",
      "Take a bite out of a lemon or lime without making a face.",
      "Let another player style your hair however they want.",
      "Do 10 push-ups or sit-ups right now.",
      "Lick the floor or ground.",
      "Put on a blindfold and let another player feed you something mysterious.",
      "Do your best impression of the opposite sex."
      // Add more dare tasks here
    ];
    const randomIndex = Math.floor(Math.random() * dareTasks.length);
    setMessage(dareTasks[randomIndex]);
  };
const handleAddPlayer = (e) => {
    e.preventDefault();
    setPlayers([...players, newPlayer]);
    setNewPlayer('');
  };
const handleRandomPlayer = () => {
    if (players.length === 0) {
      setMessage("Add players before selecting!");
    } else {
      const randomIndex = Math.floor(Math.random() * players.length);
      setMessage(`It's ${players[randomIndex]}'s turn!`);
    }
  };

 return (
    <div className="App">
      <h1>Truth or Dare</h1>
      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          placeholder="Enter player's name"
        />
        <button type="submit">Add Player</button>
      </form>
      <ul>
      <button className="random-player-button" onClick={handleRandomPlayer}>
        Select Random Player
      </button>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <TruthButton onClick={handleTruthClick} />
      <DareButton onClick={handleDareClick} />
      {message && <p className={`glowing-message`}>{message}</p>}
     <div
        className="background-image-container"
        style={{ backgroundImage: `url(${selectedImage})` }} // Set the background image dynamically
      >
        {/* You can add any additional content or leave it empty */}
      </div>
    </div>
  );
};

export default App;