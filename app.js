let questions = [];
let quizTitle = "";
const urlParams = new URLSearchParams(window.location.search);
const SHOW_REVIEW_MODE = urlParams.get("mode") === "review";
const SHOW_SET_DEBUG = urlParams.get("setno") === "show";

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
    /*if (setName === "random"){
        document.querySelector("#test-heading span").innerHTML = `<a href="leaderboard.html?set=${window.TEST_SEED_DATE}" target="_blank" style="color:#0033cc; text-decoration:none;">${data.title}</a>`;
    }
    else{
        document.querySelector("#test-heading span").innerHTML = `<a href="leaderboard.html?set=${setName}" target="_blank" style="color:#0033cc; text-decoration:none;">${data.title}</a>`;
    }*/
    if (heading) {
        if (setName === "random") {
            heading.innerHTML = `
                <a id="leaderboard-link" href="leaderboard.html?set=${window.TEST_SEED_DATE}" target="_blank" style="color:#0033cc; text-decoration:none;">
                    ${data.title}
                </a>
            `;
        } else {
            heading.innerHTML = `
                <a id="leaderboard-link" href="leaderboard.html?set=${setName}" target="_blank" style="color:#0033cc; text-decoration:none;">
                    ${data.title}
                </a>
            `;
        }
    }
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
let violationCount = 0;
let wakeLock = null;
let examSubmitted = false;
let examStarted = false;
let violationBannerTimeout = null;
let pageHidden = false;
let lastViolationTime = 0;
const VIOLATION_COOLDOWN = 2000;

/*function initQuiz() {
    questions.forEach((qObj, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';

        div.innerHTML = `
            <div class="question-text">
                <span class="q-num">${index + 1}.</span>
              <span class="q-body">${qObj.q}
     ${SHOW_SET_DEBUG ? `<span style="color:#888; font-size:12px;"> (Set ${qObj._set})</span>` : ""}
</span>
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
}*/

function initQuiz() {
    const labels = ["(A)", "(B)", "(C)", "(D)"];

    questions.forEach((qObj, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';

        div.innerHTML = `
            <div class="question-text">
                <span class="q-num">${index + 1}.</span>
                <span class="q-body">${qObj.q}
                ${SHOW_SET_DEBUG ? `<span style="color:#888; font-size:12px;"> (Set ${qObj._set})</span>` : ""}
                </span>
            </div>

            <div class="options-list">
                ${qObj.options.map((opt, i) => {
                    let checked = "";
                    let disabled = "";

                    // ✅ If ans=correct → pre-select correct option
                    if (SHOW_REVIEW_MODE && qObj.correct) {
                        if (labels[i] === qObj.correct) {
                            checked = "checked";
                        }
                        disabled = "disabled"; // optional: lock answers
                    }

                    return `
                        <label class="option-item ${checked ? 'correct' : ''}" id="L-${index}-${i}">
                            <input type="radio" name="q${index}" value="${i}" ${checked} ${disabled}>
                            <span>${opt}</span>
                        </label>
                    `;
                }).join('')}

                ${!SHOW_REVIEW_MODE ? `
                <label onclick="clearSelection(${index})">
                    🔄
                </label>` : ""}
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

// ===============================
// FULLSCREEN
// ===============================

async function enterFullscreen() {

    const elem = document.documentElement;

    try {

        if (elem.requestFullscreen) {
            await elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            await elem.msRequestFullscreen();
        }

    } catch (err) {

        console.log(err);

    }
}

// ===============================
// WAKE LOCK
// ===============================

async function enableWakeLock() {

    try {

        wakeLock =
            await navigator.wakeLock.request("screen");

    } catch (err) {

        console.log("Wake lock failed", err);

    }
}

function showViolationBanner(message) {

    let banner =
        document.getElementById("violation-banner");

    if (!banner) {

        banner = document.createElement("div");

        banner.id = "violation-banner";

        banner.style.position = "fixed";
        banner.style.top = "20px";
        banner.style.left = "50%";
        banner.style.transform = "translateX(-50%)";
        
        banner.style.width = "80%";
        banner.style.maxWidth = "500px";
        banner.style.padding = "16px 24px";
        banner.style.borderRadius = "12px";
        banner.style.textAlign = "center";
        
        banner.style.background = "#e74c3c";
        banner.style.color = "white";

        banner.style.fontWeight = "bold";

        banner.style.zIndex = "999999";

        banner.style.boxShadow =
            "0 4px 12px rgba(0,0,0,0.3)";

        banner.style.fontSize = "16px";

        document.body.appendChild(banner);
    }

    banner.innerHTML = message;

    banner.style.display = "block";

    clearTimeout(violationBannerTimeout);

    // ONLY hide if page visible
    if (!pageHidden) {

        violationBannerTimeout =
            setTimeout(() => {

                banner.style.display = "none";

            }, 5000);
    }
}

// ===============================
// VIOLATION HANDLER
// ===============================

function registerViolation(reason) {
    const now = Date.now();

    // Prevent duplicate violations
    if (now - lastViolationTime < VIOLATION_COOLDOWN) {
        return;
    }
    lastViolationTime = now;

    violationCount++;

    showViolationBanner(
        `⚠ ${reason} <br> 
        <span style="font-size:14px; opacity:0.9">
          (Violation ${violationCount}/3)
       </span>`
    );

    if (violationCount > 3) {

        showViolationBanner(
            `⚠ Too many violations<br>
            <span style="font-size:14px;">
                Test is being submitted...
            </span>`
        );

        setTimeout(() => {
            submitQuiz();
        }, 2000);
    }
}

function disableNavigationLinks() {

    const homeLink =
        document.getElementById("home-link");

    const leaderboardLink =
        document.getElementById("leaderboard-link");

    if (homeLink) {

        homeLink.style.pointerEvents = "none";

        //homeLink.style.opacity = "0.7";

        homeLink.style.cursor = "default";
    }

    if (leaderboardLink) {

        leaderboardLink.style.pointerEvents = "none";

        //leaderboardLink.style.opacity = "0.7";

        leaderboardLink.style.cursor = "default";
    }
}

function enableNavigationLinks() {

    const homeLink =
        document.getElementById("home-link");

    const leaderboardLink =
        document.getElementById("leaderboard-link");

    if (homeLink) {

        homeLink.style.pointerEvents = "auto";

        //homeLink.style.opacity = "1";

        homeLink.style.cursor = "pointer";
    }

    if (leaderboardLink) {

        leaderboardLink.style.pointerEvents = "auto";

        //leaderboardLink.style.opacity = "1";

        leaderboardLink.style.cursor = "pointer";
    }
}

function startQuiz() {
    const nameInput = document.getElementById('student-name');
    const studentDisplay = document.getElementById('student-display');

    if (!nameInput.value.trim()) {
        document.getElementById("student-name-required").style.display = "inline";
        return;
    }
    disableNavigationLinks();
    examStarted = true;
    enterFullscreen();
    enableWakeLock();
    
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
    examSubmitted = true;
    enableNavigationLinks();
    // Exit fullscreen after submission
    if (document.fullscreenElement) {
    
        document.exitFullscreen()
            .catch(err => console.log(err));
    }
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
    let currentTestName;
    if (setNo === "random") {
        currentTestName = `Mathematics Mock Test ${window.TEST_SEED_DATE}`;
    } else {
        currentTestName = `Mathematics Mock Test ${setNo}`;
    }
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
    setTimeout(() => {
    
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    
    }, 300);

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

function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % 1000000007;
    }
    return hash;
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

async function generateRandomTestWithSeed(seedNum, seedStr) {
    const numericSeed = seedNum;
    const slotBoost = {
        1: 111111,
        2: 222222,
        3: 333333,
        4: 444444
    };
    
    const slotMatch = seedStr.match(/(ALPHA|OMEGA|TITAN|PHOENIX)/);
    
    if (slotMatch) {
    
        const mapping = {
            ALPHA: 1,
            OMEGA: 2,
            TITAN: 3,
            PHOENIX: 4
        };
    
        const slot =
            mapping[slotMatch[1]];
    
        seedNum += slotBoost[slot];
    }
    window.TEST_SEED_DATE = seedStr;

    const TOTAL_QUESTIONS = 50;

    const heading = document.getElementById("test-heading");
    const nameSection = document.getElementById("name-section");
    const note = document.getElementById("note-marks");

    if (heading) {
        heading.classList.remove("hidden");
        heading.innerHTML += `<div style="font-size:14px; color:#888;">Loading...</div>`;
    }
    if (nameSection) nameSection.classList.remove("hidden");
    if (note) note.classList.remove("hidden");

    // ✅ Load all sets
    const promises = AVAILABLE_SETS.map(set => loadSetFile(set));
    const results = await Promise.all(promises);

    const validSets = results
        .map((data, i) => ({ set: AVAILABLE_SETS[i], questions: data?.questions || [] }))
        .filter(d => d.questions.length > 0);

    const totalSets = validSets.length;

    let finalQuestions = [];

    // ================================
    // ✅ CASE A: sets >= 50
    // ================================
    if (totalSets >= TOTAL_QUESTIONS) {

        const mixedSeed1 = (numericSeed * 9301) % 233280;
const shuffledSets = shuffleWithSeed([...validSets], mixedSeed1);

        const selectedSets = shuffledSets.slice(0, TOTAL_QUESTIONS);

        selectedSets.forEach(({ set, questions }) => {
            const mixedSeed2 = (numericSeed * 9301 + set * 49297) % 233280;
const shuffledQ = shuffleWithSeed([...questions], mixedSeed2);
            //finalQuestions.push(shuffledQ[0]);
finalQuestions.push({
    ...shuffledQ[0],
    _set: set   
});
        });
    }

    // ================================
    // ✅ CASE B: sets < 50
    // ================================
    else {

        const baseCount = Math.floor(TOTAL_QUESTIONS / totalSets);
        const remainder = TOTAL_QUESTIONS % totalSets;

        // Shuffle sets for fair remainder distribution
        const mixedSeed3 = (numericSeed * 9301) % 233280;
const shuffledSets = shuffleWithSeed([...validSets], mixedSeed3);

        shuffledSets.forEach((setObj, index) => {
            const { set, questions } = setObj;

            const count = baseCount + (index < remainder ? 1 : 0);

            const mixedSeed4 = (numericSeed * 9301 + set * 49297) % 233280;
const shuffledQ = shuffleWithSeed([...questions], mixedSeed4);

            //finalQuestions.push(...shuffledQ.slice(0, count));
finalQuestions.push(
    ...shuffledQ.slice(0, count).map(q => ({
        ...q,
        _set: set   // 👈 add this
    }))
);
        });
    }

    // ✅ Final shuffle (very important)
    const mixedSeed5 = (numericSeed * 9301 + 9999 * 49297) % 233280;
finalQuestions = shuffleWithSeed(finalQuestions, mixedSeed5);

    // ✅ Trim safety (edge-case protection)
    finalQuestions = finalQuestions.slice(0, TOTAL_QUESTIONS);

    /*initApp({
        title: `🎯 Mathematics Mock Test 🎯<br>(${seedStr})`,
        questions: finalQuestions
    });*/
              
    initApp({
        title: `🎯 Mathematics Mock Test 🎯<br>(${seedStr})`,
        questions: finalQuestions
    });
}

// ===============================
// FULLSCREEN EXIT DETECTION
// ===============================

document.addEventListener(
    "fullscreenchange",
    () => {

        // Ignore before exam starts
        if (!examStarted) return;

        // Ignore after submission
        if (examSubmitted) return;
        
        if (!document.fullscreenElement) {

            registerViolation(
                "Fullscreen exited / Tab switched"
            );

            enterFullscreen();
        }
    }
);

// ===============================
// REFRESH / CLOSE WARNING
// ===============================

window.addEventListener(
    "beforeunload",
    function (e) {

        if (!examStarted) return;

        if (examSubmitted) return;

        e.preventDefault();

        e.returnValue =
            "Your test progress will be lost.";
    }
);

// ===============================
// DISABLE RIGHT CLICK
// ===============================

document.addEventListener(
    "contextmenu",
    e => e.preventDefault()
);

// ===============================
// DISABLE COPY / PASTE
// ===============================

document.addEventListener(
    "copy",
    e => e.preventDefault()
);

document.addEventListener(
    "cut",
    e => e.preventDefault()
);

document.addEventListener(
    "paste",
    e => e.preventDefault()
);

// ===============================
// TAB SWITCH DETECTION
// ===============================

document.addEventListener(
    "visibilitychange",
    () => {

        // Ignore before exam starts
        if (!examStarted) return;

        // Ignore after submission
        if (examSubmitted) return;

        if (document.hidden) {

            registerViolation(
                "Fullscreen exited / Tab switched"
            );
        }
    }
);
// change tab visibility 
document.addEventListener(
    "visibilitychange",
    () => {

        if (!examStarted) return;
        if (examSubmitted) return;

        pageHidden = document.hidden;

        // ONLY handle when user RETURNS
        if (!document.hidden) {

            // If fullscreen is already exited,
            // then count violation now
            if (!document.fullscreenElement) {

                registerViolation(
                    "Fullscreen exited / Tab switched"
                );

                enterFullscreen();
            }

            // Show existing banner again
            const banner =
                document.getElementById("violation-banner");

            if (banner &&
                banner.style.display === "block") {

                clearTimeout(violationBannerTimeout);

                violationBannerTimeout =
                    setTimeout(() => {

                        banner.style.display = "none";

                    }, 5000);
            }
        }
    }
);
