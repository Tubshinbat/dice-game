var activePlayer;
// Тоглогчдын цугуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
var diceDom = document.querySelector(".dice");

// Тоглоомыг шинээр бэлдэх функц
function initGame() {
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    diceDom.style.display = "none";

    // document.querySelector('#score-0').textContent = dice;
    // document.querySelector('#score-1').innerHTML = "<em> Yes! </em>";

    // Програм эхлэхэд бэлтгэе
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = 'none';
  }

diceDom.style.display = "none";
initGame();

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй / Тоглогчийн ээлжийн оноог өөрчлөнө.
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа.
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

    // Тоглогчийн ээжлийг нөгөө тоглогч руу шилжүүлэнэ
    switchToNextPlayer();
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.

  scores[activePlayer] += roundScore;

  // Дэлгэц дээр оноог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Ээлжийн оноог нь 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Уг тоглогч 100 оноотой болсон тохиолдолд хожсон болгоно
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    var winnerPlayer = document.querySelector(
      ".player-" + activePlayer + "-panel"
    );
    winnerPlayer.classList.add("winner");
    winnerPlayer.classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Тоглогчийн ээжлийг нөгөө тоглогч руу шилжүүлэнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товч
document.querySelector(".btn-new").addEventListener("click", initGame);
