import './App.css';

function App() {

	let difficulty = 12;
	let cardValues;

	function newGame() {
		console.log("NewGame");
		resetGameBox();
	}

	function resetGameBox() {
		console.log("Resetting GameBox...");
		let rows = document.getElementsByTagName("tr");
		for (let i = 0; i < rows.length; i++) {
			while (rows[i].firstChild) {
				rows[i].removeChild(rows[i].firstChild);
			};
		};
		resetCardValue();
		for (let i = 0; i < difficulty; i++) {
			let img = document.createElement("img");
			img.value = cardValues[i];
			img.onclick = function(){
				select(this.value);
			};
			img.src = "src/Cardback.png";
			img.alt = "card";
			img.className = "card";
			let card = document.createElement("td");
			card.className = "cardbox";
			card.append(img);
			rows[i % 3].appendChild(card);
		};
	}

	function resetCardValue() {
		cardValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
		for (let i = 0; i < difficulty; i++) {
			let r = Math.floor(Math.random() * difficulty);
			while (cardValues[r] != 0) {
				r = Math.floor(Math.random() * difficulty);
			}
			cardValues[r] = (i % (difficulty / 2)) + 1;
			console.log("Card Value is now " + cardValues[r]);
		};
	}

	function selectDiffculty() {
		difficulty = document.getElementById("difficulty").value;
		console.log("Changed difficulty to " + difficulty);
	}

	function select(value) {
		console.log("Card value is " + value);
	}

	return (
		<div className="App">
			<div className="board">
				<button onClick={newGame} className="newGame">
					New Game
				</button>
				<br />
				<div className="difficulty">
					<label>Difficulty: </label>
					<select onChange={selectDiffculty} id="difficulty">
						<option value="12">12</option>
						<option value="14">14</option>
						<option value="16">16</option>
						<option value="18">18</option>
						<option value="20">20</option>
						<option value="22">22</option>
						<option value="24">24</option>
						<option value="26">26</option>
						<option value="28">28</option>
						<option value="30">30</option>
					</select>
				</div>
				<h3>
					Turn 0
				</h3>
			</div>
			<table className="gamebox">
				<tbody>
					<tr>
					</tr>
					<tr>
					</tr>
					<tr>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;