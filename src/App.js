import './App.css';
import React, { useState } from 'react';

function App() {

	let difficulty = 12;
	let cardValues;
	let turn;
	let completed;
	let selectCard1 = null;
	let selectCard2 = null;
	const [count,setCount] = useState(0);

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
			img.onclick = select;
			img.src = "src/Cardback.png";
			img.alt = "card";
			img.className = "card";
			let card = document.createElement("td");
			card.className = "cardbox";
			card.append(img);
			rows[i % 3].appendChild(card);
		};
		turn = 0;
		setCount(turn);
		completed = 0;
		resetWin();
	}

	function select() {
		this.src = "src/Card" + this.value + ".png";
		this.onclick = function () { };
		if (selectCard1 == null) {
			selectCard1 = this;
		}
		else {
			selectCard2 = this;
			let blocker = document.getElementById("blocker");
			blocker.className = "blocker";
			setTimeout(turnUpdate, 1.0 * 1000);
		};
		console.log("Card value is " + this.value);
	}

	function turnUpdate() {
		turn++;
		setCount(turn);
		if (selectCard1.value === selectCard2.value) {
			selectCard1 = null;
			selectCard2 = null;
			completed++;
		}
		else {
			selectCard1.onclick = select;
			selectCard2.onclick = select;
			selectCard1.src = "src/Cardback.png";
			selectCard2.src = "src/Cardback.png";
			selectCard1 = null;
			selectCard2 = null;

		};
		setTimeout(removeBlocker, 0.5 * 1000);
		if (completed * 2 == difficulty) {
			youWin();
			console.log("You win");
		};
	}

	function removeBlocker() {
		let blocker = document.getElementById("blocker");
		blocker.className = "blockernull";
	}

	function youWin() {
		let youWin = document.getElementById("YouWin");
		youWin.className = "youWin";
		youWin.innerHTML = "You Win!";
	}

	function resetWin() {
		let youWin = document.getElementById("YouWin");
		youWin.className = "youWinnull";
		youWin.innerHTML = null;
	}

	function resetCardValue() {
		cardValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
		for (let i = 0; i < difficulty; i++) {
			let r = Math.floor(Math.random() * difficulty);
			while (cardValues[r] !== 0) {
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
				<p id="Turn" className="Turn">
					Turn {count}
				</p>
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
			<div id="blocker">
			</div>
			<div id="YouWin">
			</div>
		</div>
	);
}

export default App;