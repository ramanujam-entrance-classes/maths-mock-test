let questions = [];
let quizTitle = "";

function initApp(data) {
    questions = data.questions;

    // show heading again (in case hidden before)
    const heading = document.getElementById("test-heading");
    if (heading) heading.style.display = "block";

    // update title
    document.title = data.title;
    document.querySelector("#test-heading span").innerText = data.title;

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
//const currentTestName = "mocktest";

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
    const currentTestName = "mocktest";

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
    console.log("Before leaderboard");
    sendToLeaderboard(
      	studentName,
      	scoredMarks,
      	currentTestName,
      	`${timeTakenMinutes}:${timeTakenSecs}`
    	);
    console.log("After leaderboard");
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
}

function sendToLeaderboard(name, score, testName, timeTaken) {
  console.log("Leaderboard function called");

  fetch("https://script.google.com/macros/s/AKfycbybHrxfFGve-yIBXsIwZkoiEUZ1UdhMOwhwRusd7UGjBuGrnTNuiBhQr2QasPyHY1Hz/exec", {
    method: "POST",
    mode: "no-cors", // IMPORTANT
    body: new URLSearchParams({
      name: name,
      score: score,
      test: testName,
      time: timeTaken
    })
  }).catch(err => {
    console.log("Leaderboard error:", err);
  });

  console.log("Leaderboard request sent (non-blocking)");
}
