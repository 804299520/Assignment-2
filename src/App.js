import './App.css';

function App() {

	let difficulty = 12;

	function newGame() {
		console.log("NewGame");
		resetGameBox();
	}

	function resetGameBox() {
		let rows = [document.getElementById("row1"), document.getElementById("row2"), document.getElementById("row3")];
		for (let i = 0; i < rows.length; i++) {
			while (rows[i].firstChild) {
				rows[i].removeChild(rows[i].firstChild);
			};
		};
		for (let i = 0; i < difficulty; i++) {
			let img = document.createElement("img");
			img.src = "src/Cardback.png";
			img.alt = "card";
			img.className = "card";
			let card = document.createElement("td");
			card.className = "cardbox";
			card.append(img);
			rows[i % 3].appendChild(card);
		};
	}

	function selectdiffculty() {
		difficulty = document.getElementById("difficulty").value;
		console.log("Change difficulty to " + difficulty);
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
					<select onChange={selectdiffculty} id="difficulty">
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
					<tr id="row1">
					</tr>
					<tr id="row2">
					</tr>
					<tr id="row3">
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;