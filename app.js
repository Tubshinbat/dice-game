// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.

var activePlayer = 1;

// Тоглогчдын цугуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

// Шооны аль талаарай буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.



// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em> Yes! </em>";

// Програм эхлэхэд бэлтгэе 
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
});
