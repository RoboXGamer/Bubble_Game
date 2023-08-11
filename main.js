let timer = 90;
let score = 0;
let hitval = 1;

document.querySelector("#pbottom").addEventListener("click", function (e) {
	let bubbleElHit = e.target;
	if (Number(bubbleElHit.textContent) === hitval) {
		// console.log("Correct Hit Hua");

		increaseScore();
		getnewHit();
		makeBubble();
	} else {
		// console.log("Hit nahi hua");
	}
});

function makeBubble() {
	const bubbleCount = 50;

	const bubbleArea = document.querySelector("#pbottom");

	function bubbleMaker1() {
		for (let i = 1; i <= bubbleCount; i++) {
			const bubbleEl = document.createElement("div");

			bubbleEl.innerHTML = `
  <div class="bubble flex">
    ${Math.floor(Math.random() * 10 + 1)}
  </div>
  `;
			bubbleArea.appendChild(bubbleEl);
		}
	}
	// bubbleMaker1();

	function bubbleMaker2() {
		let clutter = ``;
		for (let i = 1; i <= bubbleCount; i++) {
			let rn = Math.floor(Math.random() * 10 + 1);
			clutter += `
    <div class="bubble flex">
      ${rn}
    </div>
    `;
		}
		bubbleArea.innerHTML = clutter;
	}
	bubbleMaker2();
}

function runTimer() {
	const timerint = setInterval(function () {
		if (timer > 0) {
			timer--;
			document.querySelector("#timerval").textContent = timer;
		} else {
			clearInterval(timerint);

			document.querySelector("#pbottom").innerHTML = `
      <div id="Ending" style='margin:auto'>
        <h1>Game Ended</h1>
        <p style='font-size:2rem;'>Final Score: ${score}</p>
      </div>
      `;
		}
	}, 1000);
}

function getnewHit() {
	hitval = Math.floor(Math.random() * 10 + 1);
	document.querySelector("#hitval").textContent = hitval;
}

function increaseScore() {
	score += 10;
	document.querySelector("#scoreval").textContent = score;
}

makeBubble();
runTimer();
getnewHit();
