let questions = [];
let quizTitle = "";

function initApp(data) {
    questions = data.questions;
    const setName = new URLSearchParams(window.location.search).get("set");
    
    // show heading again (in case hidden before)
    /*const heading = document.getElementById("test-heading");
    if (heading) {
        heading.style.display = "block";   // ensure visible
        heading.style.visibility = "visible"; // extra safety
    }*/
    const heading = document.getElementById("test-heading");
    const nameSection = document.getElementById("name-section");
    const note = document.getElementById("note-marks");

    if (heading) heading.classList.remove("hidden");
    if (nameSection) nameSection.classList.remove("hidden");
    if (note) note.classList.remove("hidden");

    // update title
    document.title = data.title;
    document.querySelector("#test-heading span").innerHTML = `<a href="leaderboard.html?set=${setName}" target="_blank" style="color:#0033cc; text-decoration:none;">${data.title}</a>`;

    attachEvents();
}

function attachEvents() {
    startBtn.addEventListener('click', startQuiz);
    submitBtn.addEventListener('click', submitQuiz);
}

const startBtn = document.getElementById('start-btn');
const quizContent = document.getElementById('quiz-content');
const timerBox = document.getElementById('timer-box');
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score-display');

let totalTime = 70 * 60;
let timeLeft = totalTime;
let timerInterval;

function initQuiz() {
    questions.forEach((qObj, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';

        div.innerHTML = `
            <div class="question-text">
                <span class="q-num">${index + 1}.</span>
                <span class="q-body">${qObj.q}</span>
            </div>

            <div class="options-list">
                ${qObj.options.map((opt, i) => `
                    <label class="option-item" id="L-${index}-${i}">
                        <input type="radio" name="q${index}" value="${i}">
                        <span>${opt}</span>
                    </label>
                `).join('')}

                <label onclick="clearSelection(${index})">
                    🔄
                </label>
            </div>

            <div id="feedback-${index}" class="feedback"></div>
        `;

        quizForm.appendChild(div);
    });
}

function clearSelection(qIndex) {
    const options = document.querySelectorAll(`input[name="q${qIndex}"]`);
    options.forEach(opt => (opt.checked = false));
}

function startQuiz() {
    const nameInput = document.getElementById('student-name');
    const studentDisplay = document.getElementById('student-display');

    if (!nameInput.value.trim()) {
        document.getElementById("student-name-required").style.display = "inline";
        return;
    }

    studentDisplay.textContent = `👤 Student: ${nameInput.value}`;
    document.getElementById('name-section').style.display = 'none';
    document.getElementById('student-display').style.background = '#f4f8ff';

    studentDisplay.classList.remove('hidden');

    startBtn.classList.add('hidden');
    quizContent.classList.remove('hidden');
    timerBox.classList.remove('hidden');

    initQuiz();
    MathJax.typeset();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;

        timerBox.textContent = `🕒${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (timeLeft <= 120) {
            timerBox.className = 'timer-red';
        } else if (timeLeft <= 600) {
            timerBox.className = 'timer-orange';
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    timerBox.classList.add('hidden');

    let timeTakenSeconds = totalTime - timeLeft;
    let timeTakenMinutes = Math.floor(timeTakenSeconds / 60);
    let timeTakenSecs = timeTakenSeconds % 60;

    let correctCount = 0;
    let wrongCount = 0;
    let notAttemptedCount = 0;
    let totalMarks = 0;
    let scoredMarks = 0;

    const studentName = document.getElementById('student-name').value;
    const labels = ["(A)", "(B)", "(C)", "(D)"];   
    const params = new URLSearchParams(window.location.search);
    const setNo = params.get("set");
    const currentTestName = `Mathematics Mock Test ${setNo}`;

    questions.forEach((qObj, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const feedback = document.getElementById(`feedback-${index}`);
        const options = document.querySelectorAll(`input[name="q${index}"]`);

        options.forEach(opt => (opt.disabled = true));
        feedback.style.display = 'block';

        let userAnswer = selected ? labels[parseInt(selected.value)] : null;

        totalMarks += 12;

        if (userAnswer === qObj.correct) {
            correctCount++;
            scoredMarks += 12;

            document
                .getElementById(`L-${index}-${selected.value}`)
                .classList.add('correct');

            feedback.innerHTML = "✅ Correct";
            feedback.style.color = "var(--success)";
        } 
        else if (!selected) {
            notAttemptedCount++;

            const correctIndex = labels.indexOf(qObj.correct);

            document
                .getElementById(`L-${index}-${correctIndex}`)
                .classList.add('correct');

            feedback.innerHTML = `⭕ Not attempted. Correct answer: ${qObj.correct}`;
            feedback.style.color = "#f39c12";
        } 
        else {
            scoredMarks -= 3;
            wrongCount++;

            document
                .getElementById(`L-${index}-${selected.value}`)
                .classList.add('incorrect');

            const correctIndex = labels.indexOf(qObj.correct);

            document
                .getElementById(`L-${index}-${correctIndex}`)
                .classList.add('correct');

            feedback.innerHTML = `❌ Incorrect. Correct answer: ${qObj.correct}`;
            feedback.style.color = "var(--danger)";
        }
    });
        
    scoreDisplay.innerHTML = `
        <div class="scoreBoard" style="font-size:18px; line-height:1.8; font-weight:normal">
            👤 Student: <b>${studentName}</b><br><br>

            🕒 Time Taken: ${timeTakenMinutes} min ${timeTakenSecs} sec <br><br>

            ✅ Correct: ${correctCount} <br>
            ❌ Wrong: ${wrongCount} <br>
            ⭕ Not Attempted: ${notAttemptedCount} <br>

            <hr>

            <span style="font-size:20px; font-weight:500; color:darkblue;">
                🏆 You have scored: ${scoredMarks} / ${totalMarks}
            </span><br>

            <span style="font-size:14px; color:#555;">
                Note: Each correct answer carries +12 marks and each incorrect answer carries −3 marks.
            </span>
        </div>
    `;

    scoreDisplay.style.display = 'block';
    submitBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    
    restartBtn.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });

    MathJax.typeset();

    sendToLeaderboard(
      	studentName,
      	scoredMarks,
      	currentTestName,
      	`T-${timeTakenMinutes}:${timeTakenSecs.toString().padStart(2,'0')}`
    	);
    document.getElementById("leaderboard-btn").classList.remove("hidden");
}

function sendToLeaderboard(name, score, testName, timeTaken) {

  const url = "https://script.google.com/macros/s/AKfycbybHrxfFGve-yIBXsIwZkoiEUZ1UdhMOwhwRusd7UGjBuGrnTNuiBhQr2QasPyHY1Hz/exec";

  const payload = {
    name: name,
    score: score,
    test: testName,
    time: timeTaken
  };

  console.log("Sending:", payload);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(payload)
  })
  .then(res => res.text())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Fetch error:", err));
}

function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffleWithSeed(array, seed) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(seededRandom(seed) * currentIndex);
        seed++;

        currentIndex--;

        [array[currentIndex], array[randomIndex]] =
        [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function loadSetFile(setNumber) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = `set_data/${setNumber}.js`;

        script.onload = () => {
            const dataCopy = JSON.parse(JSON.stringify(window.SET_DATA)); // ✅ clone
            resolve(dataCopy);
        };

        script.onerror = () => resolve(null);

        document.head.appendChild(script);
    });
}

async function generateRandomTestWithSeed(seed) {

    // ✅ SHOW UI FIRST (same as loadTest flow)
    const heading = document.getElementById("test-heading");
    const nameSection = document.getElementById("name-section");
    const note = document.getElementById("note-marks");

    if (heading) heading.classList.remove("hidden");
    if (nameSection) nameSection.classList.remove("hidden");
    if (note) note.classList.remove("hidden");

    let allQuestions = [];

    for (let set of AVAILABLE_SETS) {
        const data = await loadSetFile(set);
        if (data?.questions) {
            allQuestions = allQuestions.concat(data.questions);
        }
    }

    shuffleWithSeed(allQuestions, seed);

    const selected = allQuestions.slice(0, 50);

    // ✅ Now initialize app
    initApp({
        title: `Random Mock Test (${seed})`,
        questions: selected
    });
}