import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        New Game
      </h1>
      <h3>
        Difficulty
      </h3>
      <h3>
        Turn 0
      </h3>
      <table className="gamebox">
        <tbody>
          <tr>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
          </tr>
          <tr>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
          </tr>
          <tr>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
            <td className="cardbox">
              <img src="src/Cardback.png" alt="card" className="card" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;