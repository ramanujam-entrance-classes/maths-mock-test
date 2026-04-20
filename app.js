(async function () {
    await loadConfig();
    // safety check
    if (!CONFIG || !CONFIG.openSets) {
        showMessage("Config failed to load");
        return;
    }
    startAppFlow()
})();

let CONFIG = null;
async function loadConfig() {
    const SHEET_URL = "https://docs.google.com/spreadsheets/d/1q1i6uIL9uuGI_UXBzNAGcgrdk_lRIm9AVJhkzW8fNR0/gviz/tq?sheet=Config&tqx=out:json";

    const res = await fetch(SHEET_URL + "&t=" + Date.now(), { cache: "no-store" });
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));

    let rows = json.table.rows.map(r =>
        r.c.map(c => (c ? c.v : ""))
    );

    // 👉 remove header row
    rows.shift();

    const openSets = [];
    const allSets = [];
    
    rows.forEach((r, i) => {
        const setNum = parseInt(r[0]);
        const isOpen = String(r[1]).trim().toLowerCase() === "true";
    
        console.log(`Row ${i}:`, r, "=> set:", setNum, "open:", isOpen);
    
        if (!isNaN(setNum)) {
            allSets.push(setNum);
            if (isOpen) openSets.push(setNum);
        }
    });
    CONFIG = {
        openSets,
        allSets,
        isAdmin: false
    };
    console.log("CONFIG:", CONFIG);
}

function startAppFlow() {
    const setName = new URLSearchParams(window.location.search).get("set");
    // 👉 No set → show selection screen
    if (!setName) {
        const dropdown = document.getElementById("set-dropdown");
        if (dropdown) renderSets();
        document.getElementById("set-selection").style.display = "flex";
        hideTestUI();
        clearMessage();
        return;
    }
    const setNum = parseInt(setName);
    // 👉 Check if set exists in system
    const exists = CONFIG.allSets.includes(setNum);
    if (!exists) {
        document.getElementById("set-selection").style.display = "flex";
        renderSets();
        hideTestUI();
        document.getElementById("name-section").classList.remove("hidden");
        showMessage("📝 Select a valid mock test to begin");
        return;
    }

    // 👉 Access rule (admin override included)
    const allowed =
        CONFIG.isAdmin || CONFIG.openSets.includes(setNum);

    if (!allowed) {
        document.getElementById("set-selection").style.display = "flex";
        renderSets();
        hideTestUI();
        document.getElementById("name-section").classList.remove("hidden");
        showMessage("📝 Select a valid mock test to begin");
        return;
    }

    // 👉 VALID → now load test data
    document.getElementById("set-selection").style.display = "none";
    clearMessage();

    loadTest(setNum); // IMPORTANT: your existing function
}

function renderSets() {
    if (!CONFIG || !CONFIG.openSets) {
        console.warn("CONFIG not ready");
        return;
    }
    const dropdown = document.getElementById("set-dropdown");
    if (!dropdown) {
        console.warn("Dropdown not found");
        return;
    }
    dropdown.innerHTML = `<option value="">Select Mock Test</option>`;
    CONFIG.openSets.forEach(set => {
        const option = document.createElement("option");
        option.value = set;
        option.textContent = `Mock Test Set ${set}`;
        dropdown.appendChild(option);
    });
}

document.getElementById("go-btn").addEventListener("click", handleGo);
document.addEventListener("DOMContentLoaded", () => {
    const goBtn = document.getElementById("go-btn");
    if (goBtn) {
        goBtn.addEventListener("click", handleGo);
    }
});
function handleGo() {
    const dropdown = document.getElementById("set-dropdown");
    const selectedSet = dropdown.value;

    if (!selectedSet) {
        showMessage("📝 Select a mock test to begin");
        return;
    }

    const setNumber = parseInt(selectedSet);

    // MS FORM route
    if (setNumber <= 13 && MS_FORM_LINKS[setNumber]) {
        window.location.href = MS_FORM_LINKS[setNumber];
        return;
    }

    // Web test route
    window.location.href = `?set=${setNumber}`;
}

function loadTest(testName) {
    const heading = document.getElementById("test-heading");
    if (heading) heading.style.display = "block";
      
    const script = document.createElement("script");
    script.src = `set_data/${testName}.js`;
    
    script.onload = () => {
      initApp(window.SET_DATA);
    };
    
    script.onerror = () => {
      // ❌ File not found → hide UI
      //hideTestUI();
      showMessage("📝 Invalid set selected");
      location.href = window.location.pathname;
    };
    
    document.head.appendChild(script);
}

let questions = [];
let quizTitle = "";

function initApp(data) {
    questions = data.questions;
    attachEvents();
    const setName = new URLSearchParams(window.location.search).get("set");
    document.title = data.title;
    document.querySelector("#test-heading span").innerHTML =
        `<a href="leaderboard.html?set=${setName}" target="_blank" style="color:#0033cc; text-decoration:none;">
        ${data.title}</a>`;
    
}

function attachEvents() {
    startBtn.addEventListener('click', startQuiz);
    submitBtn.addEventListener('click', submitQuiz);
}

function showMessage(msg) {
    let container = document.getElementById("custom-message");
    // 👉 If not created yet, create once
    if (!container) {
        container = document.createElement("div");
        container.id = "custom-message";
        container.style.textAlign = "center";
        container.style.marginTop = "30px";
        document.querySelector(".quiz-card").appendChild(container);
    }
    // 👉 Just update text (no duplication)
    container.innerHTML = `<h3>${msg}</h3>`;
}

function goToLeaderboard() {
  const setName = new URLSearchParams(window.location.search).get("set");
  window.open(`leaderboard.html?set=${setName}`, "_blank");
}

function clearMessage() {
    const container = document.getElementById("custom-message");
    if (container) container.innerHTML = "";
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
      	`${timeTakenMinutes}:${timeTakenSecs}`
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
