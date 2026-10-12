let _pdfResultData = null;
let questions = [];
let quizTitle = "";
const urlParams = new URLSearchParams(window.location.search);
const SHOW_REVIEW_MODE = urlParams.get("mode") === "review";
const SHOW_SET_DEBUG = urlParams.get("setno") === "show";

function getParams() {
    return new URLSearchParams(window.location.search);
}

function getCategory() {
    return getParams().get("category");
}

function getTopic() {
    return getParams().get("topic");
}

function getMarkingScheme() {

    const category = getCategory();

    if (!category || !TEST_CATEGORIES[category]) {

        return {
            correct: 12,
            wrong: -3
        };
    }

    return TEST_CATEGORIES[category].marks;
}

function initApp(data) {
    questions = data.questions || [];

    const config =
        TEST_CATEGORIES[getCategory()];

    const maxQuestions =
        config?.totalQuestions || questions.length;

    // limit safely
    questions =
        questions.slice(0, maxQuestions);
    
    const totalQuestions = config.totalQuestions || questions.length;
    const duration = config?.durationMinutes || 70;
    totalTime = duration * 60;
    timeLeft = totalTime;
    const metaBox = document.getElementById("test-meta-info");

    if (metaBox) {
        metaBox.innerHTML = `
            📝 ${totalQuestions} Questions
            &nbsp;|&nbsp;
            ⏳ ${duration} Minutes
        `;
    }
    const rangeBox =
        document.getElementById("question-range");
    
    if (rangeBox) {
    
        rangeBox.innerHTML =
            `Question 01 to ${String(totalQuestions).padStart(2, '0')}`;
    }
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

    if (window.firebaseUser) {
        const nameInput = document.getElementById('student-name');
        const displayName = window.firebaseUser.displayName || window.firebaseUser.email;
        nameInput.value = displayName;
        nameInput.style.display = 'none';
        const nameBoxHeading = nameSection.querySelector('h3');
        if (nameBoxHeading) nameBoxHeading.textContent = `Welcome, ${displayName}!`;
        document.getElementById('student-name-required').style.display = 'none';
    }

    const MARKS = getMarkingScheme();

    note.innerHTML = `
        Note: Each correct answer carries
        <span style="color:green;font-weight:bold">
            +${MARKS.correct}
        </span>
        marks and each incorrect answer carries
        <span style="color:red;font-weight:bold">
            ${MARKS.wrong}
        </span>
        marks.
    `;

    // update title
    document.title = data.title;
    /*if (setName === "random"){
        document.querySelector("#test-heading span").innerHTML = `<a href="leaderboard.html?set=${window.TEST_SEED_DATE}" target="_blank" style="color:#0033cc; text-decoration:none;">${data.title}</a>`;
    }
    else{
        document.querySelector("#test-heading span").innerHTML = `<a href="leaderboard.html?set=${setName}" target="_blank" style="color:#0033cc; text-decoration:none;">${data.title}</a>`;
    }*/
    if (heading) {
        const category = getCategory();
        const topic = getTopic();
        
        let leaderboardUrl = "";
        
        if (setName === "random") {
            //if (category === 'topicwise')
            if(config.topics && topic)
            {
                leaderboardUrl =
                    `leaderboard.html?category=${category}&topic=${topic}&set=${window.TEST_SEED_DATE}`;
            }
            else{
                leaderboardUrl =
                    `leaderboard.html?category=${category}&set=${window.TEST_SEED_DATE}`;
            }
        }
        else {
        
            leaderboardUrl =
                `leaderboard.html?category=${category}&set=${setName}`;
        }
        
        if (
            //category === "topicwise"
            config.topics
            && topic
        ) {
        
            leaderboardUrl += `&topic=${topic}`;
        }
        
        heading.innerHTML = `
            <a id="leaderboard-link"
               href="${leaderboardUrl}"
               target="_blank"
               style="color:#0033cc; text-decoration:none;">
        
                ${data.title}
        
            </a>
        `;    
    }
    attachEvents();
    hideLoader();
}

function attachEvents() {
    startBtn.addEventListener('click', () => {
        const modal = document.getElementById('instructions-modal');
        if (modal) {
            modal.classList.remove('hidden');
            const pmCb = document.getElementById('practice-mode-cb');
            if (pmCb) pmCb.checked = false;
            const pNotice = document.getElementById('practice-mode-notice');
            const pRules = document.querySelector('#instructions-modal .modal-rules');
            if (pNotice) pNotice.classList.add('hidden');
            if (pRules)  pRules.classList.remove('hidden');
            const hidePM = sessionStorage.getItem('hidePracticeMode') === 'true';
            const pmToggle = document.getElementById('practice-mode-toggle');
            if (pmToggle) pmToggle.style.display = hidePM ? 'none' : '';
        } else {
            startQuiz();
        }
    });
    document.getElementById('instr-start-btn')?.addEventListener('click', () => {
        const pmCbStart = document.getElementById('practice-mode-cb');
        isPracticeMode = pmCbStart ? pmCbStart.checked : false;
        document.getElementById('instructions-modal').classList.add('hidden');
        startQuiz();
    });
    document.getElementById('instr-cancel-btn')?.addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.add('hidden');
    });
    document.getElementById('instructions-modal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('instructions-modal'))
            document.getElementById('instructions-modal').classList.add('hidden');
    });
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        submitQuiz();
    });
    quizForm.addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
            const match = e.target.name.match(/^q(\d+)$/);
            if (match) updateQNavBtn(parseInt(match[1]));
        }
    });
}

const startBtn = document.getElementById('start-btn');
const quizContent = document.getElementById('quiz-content');
const timerBox = document.getElementById('timer-box');
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score-display');

let totalTime = 0;
let timeLeft = totalTime;
let timerInterval;
let violationCount = 0;
let wakeLock = null;
let examSubmitted = false;
let examStarted = false;
let isPracticeMode = false;
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
        div.id = 'question-' + index;

        div.innerHTML = `
            <div class="question-text">
                <span class="q-num">${index + 1}.</span>
                <span class="q-body">${qObj.q}
                ${SHOW_SET_DEBUG ? `<span style="color:#888; font-size:12px;">
                                        (
                                            ${qObj._topic ? qObj._topic + " | " : ""}
                                            Set ${qObj._set}
                                        )
                                    </span>` : ""}
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
    updateQNavBtn(qIndex);
}

// ===============================
// FULLSCREEN
// ===============================

async function enterFullscreen() {
    const el = document.documentElement;
    try {
        if (el.requestFullscreen)            await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
        else if (el.mozRequestFullScreen)    await el.mozRequestFullScreen();
        else if (el.msRequestFullscreen)     await el.msRequestFullscreen();
        const p = document.getElementById('fs-return-prompt');
        if (p) p.style.display = 'none';
    } catch (err) {
        showFullscreenPrompt();
    }
}

function showFullscreenPrompt() {
    let p = document.getElementById('fs-return-prompt');
    if (!p) {
        p = document.createElement('div');
        p.id = 'fs-return-prompt';
        p.style.cssText = 'position:fixed;inset:0;z-index:9999998;background:rgba(13,36,97,0.96);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;color:#fff;text-align:center;padding:28px;';
        p.innerHTML = `
            <div style="font-size:28px;">&#9974;&#65039;</div>
            <div style="font-size:20px;font-weight:800;letter-spacing:0.5px;">Fullscreen Required</div>
            <div style="font-size:14px;opacity:0.85;max-width:320px;line-height:1.6;">You exited fullscreen mode. Please return to fullscreen to continue your test.</div>
            <button onclick="enterFullscreen()" style="background:#e8891a;border:none;color:#fff;font-size:16px;font-weight:700;padding:14px 36px;border-radius:10px;cursor:pointer;margin-top:6px;box-shadow:0 4px 16px rgba(232,137,26,.4);">&#8679; Return to Fullscreen</button>
        `;
        document.body.appendChild(p);
    }
    p.style.display = 'flex';
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
    if (isPracticeMode) return;
    if (!examStarted || examSubmitted) return;
    const now = Date.now();
    if (now - lastViolationTime < VIOLATION_COOLDOWN) return;
    lastViolationTime = now;
    violationCount++;
    const remaining = 3 - violationCount;
    if (violationCount > 3) {
        showViolationBanner('⚠️ Too many violations — test is being submitted…');
        setTimeout(() => submitQuiz(), 2000);
    } else if (remaining > 0) {
        showViolationBanner(`⚠️ Warning (${violationCount}/3): ${reason}. ${remaining} more violation${remaining === 1 ? '' : 's'} will auto-submit your test.`);
    } else {
        showViolationBanner(`⚠️ Final warning (3/3): ${reason}. One more violation will auto-submit your test!`);
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

    if (examStarted) return;

    const nameInput =
        document.getElementById('student-name');

    if (!nameInput.value.trim()) {

        document.getElementById("student-name-required")
            .style.display = "inline";

        return;
    }

    showLoader("Preparing your test...");

    const userInfoBar = document.getElementById('user-info-bar');
    if (userInfoBar) userInfoBar.classList.add('hidden');

    // 🔒 HARD LOCK before anything starts
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.5";
    submitBtn.style.pointerEvents = "none";

    setTimeout(() => {

        examStarted = true;

        disableNavigationLinks();

        // =========================
        // STEP 1: BUILD QUIZ FIRST
        // =========================
        initQuiz();
        MathJax.typeset();

        // =========================
        // STEP 2: WAIT FOR PAINT
        // =========================
        requestAnimationFrame(() => {

            // UI updates
            document.getElementById('name-section').style.display = 'none';

            const studentDisplay =
                document.getElementById('student-display');

            studentDisplay.textContent =
                `👤 Student: ${nameInput.value}`;

            studentDisplay.classList.remove('hidden');

            quizContent.classList.remove('hidden');
            timerBox.classList.remove('hidden');

            startBtn.classList.add('hidden');

            // Show question navigator
            buildQNav(questions.length);
            document.getElementById('q-nav-panel').classList.remove('hidden');
            document.getElementById('q-nav-fab').classList.remove('hidden');

            // =========================
            // STEP 3: SAFE ENABLE BUTTON
            // =========================
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            submitBtn.style.pointerEvents = "auto";

            hideLoader();

            // =========================
            // STEP 4: DEFER HEAVY OPS
            // =========================
            requestAnimationFrame(() => {

                enterFullscreen();
                enableWakeLock();

                timeLeft = totalTime;
                clearInterval(timerInterval);
                startTimer();
            });
        });

    }, 50);
}

function startTimer() {
    if (isPracticeMode) {
        timerBox.textContent = '📝 Practice Mode — No Timer';
        timerBox.className = 'timer-green';
        return;
    }
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

function showLoader(message = "Please wait...") {
    document.body.style.pointerEvents = "none";

    const loader = document.getElementById("loading-overlay");

    loader.querySelector(".loader-text").innerText = message;

    loader.classList.remove("hidden");
    loader.style.display = "flex";
}

function hideLoader() {
    document.body.style.pointerEvents = "auto";
    const loader = document.getElementById("loading-overlay");

    loader.classList.add("hidden");
    loader.style.display = "none";
}

function getMarkingScheme() {

    const category = getCategory();

    if (
        !category ||
        !TEST_CATEGORIES ||
        !TEST_CATEGORIES[category]
    ) {

        return {
            correct: 12,
            wrong: -3
        };
    }

    return TEST_CATEGORIES[category].marks || {
        correct: 12,
        wrong: -3
    };
}

function submitQuiz() {   
    if (!examStarted || examSubmitted) return;
    
    showLoader("Evaluating your answers…");
    setTimeout(() => {
        examSubmitted = true;
        enableNavigationLinks();
        // Exit fullscreen after submission
        if (document.fullscreenElement) {
        
            document.exitFullscreen()
                .catch(err => console.log(err));
        }
        clearInterval(timerInterval);
        timerBox.classList.add('hidden');

        // Hide question navigator
        document.getElementById('q-nav-panel')?.classList.add('hidden');
        document.getElementById('q-nav-fab')?.classList.add('hidden');
        closeQNavSheet();
    
        let timeTakenSeconds = isPracticeMode ? 0 : (totalTime - timeLeft);
        let timeTakenMinutes = Math.floor(timeTakenSeconds / 60);
        let timeTakenSecs = timeTakenSeconds % 60;
    
        let correctCount = 0;
        let wrongCount = 0;
        let notAttemptedCount = 0;
        let totalMarks = 0;
        let scoredMarks = 0;
    
        const studentName = document.getElementById('student-name').value;
        const labels = ["(A)", "(B)", "(C)", "(D)"];  
        const MARKS = getMarkingScheme();
        const CORRECT_MARKS = MARKS.correct;
        const WRONG_MARKS = MARKS.wrong;
        const params = new URLSearchParams(window.location.search);
        const setNo = params.get("set");
        const actualSetId =
            setNo === "random"
                ? window.TEST_SEED_DATE
                : setNo;
        const configure = TEST_CATEGORIES[categoryName];
        let currentTestName;
        if (setNo === "random") {
            currentTestName = `${configure.title} ${window.TEST_SEED_DATE}`;
        } else {
            currentTestName = `${configure.title} ${setNo}`;
        }
        questions.forEach((qObj, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            const feedback = document.getElementById(`feedback-${index}`);
            const options = document.querySelectorAll(`input[name="q${index}"]`);
    
            options.forEach(opt => (opt.disabled = true));
            feedback.style.display = 'block';
    
            let userAnswer = selected ? labels[parseInt(selected.value)] : null;
    
            totalMarks += CORRECT_MARKS;
    
            if (userAnswer === qObj.correct) {
                correctCount++;
                scoredMarks += CORRECT_MARKS;
    
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
                scoredMarks += WRONG_MARKS;
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
    
                ${isPracticeMode ? '' : ('🕒 Time Taken: ' + timeTakenMinutes + ' min ' + timeTakenSecs + ' sec <br><br>')}
    
                ✅ Correct: ${correctCount} <br>
                ❌ Wrong: ${wrongCount} <br>
                ⭕ Not Attempted: ${notAttemptedCount} <br>
    
                <hr>
    
                <span style="font-size:20px; font-weight:500; color:darkblue;">
                    🏆 You have scored: ${scoredMarks} / ${totalMarks}
                </span><br>
    
                <span style="font-size:14px; color:#555;">
                    Note: Each correct answer carries +${CORRECT_MARKS} marks and each incorrect answer carries ${WRONG_MARKS} marks.
                </span>
            </div>
        `;
    
        scoreDisplay.style.display = 'block';
        submitBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');

        const userInfoBar = document.getElementById('user-info-bar');
        if (userInfoBar) userInfoBar.classList.remove('hidden');
        
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
        
        const testId = `${getCategory()}:${getTopic() || "na"}:${actualSetId}`;
        console.log("TEST ID:", testId);
        console.log("SEED:", window.TEST_SEED_DATE);
        console.log("ACTUALSETID:", actualSetId);
        sendToLeaderboard(
          	studentName,
          	scoredMarks,
            totalMarks,
          	testId,
          	isPracticeMode ? 'PRACTICE' : `T-${timeTakenMinutes}:${timeTakenSecs.toString().padStart(2,'0')}`
        	);
        document.getElementById("leaderboard-btn").classList.remove("hidden");
        
        _pdfResultData = {
            studentName,
            correctCount,
            wrongCount,
            notAttemptedCount,
            scoredMarks,
            totalMarks,
            timeTakenMinutes,
            timeTakenSecs,
            correctMarks: CORRECT_MARKS,
            wrongMarks:   WRONG_MARKS,
            isPracticeMode,
            testName: currentTestName
        };
        document.getElementById("pdf-btn").classList.remove("hidden");
        hideLoader();
    }, 100);
}

function sendToLeaderboard(name, score, total, testName, timeTaken) {

  const url = "https://script.google.com/macros/s/AKfycbybHrxfFGve-yIBXsIwZkoiEUZ1UdhMOwhwRusd7UGjBuGrnTNuiBhQr2QasPyHY1Hz/exec";

  const payload = {
    name: name,
    score: score,
    total: total,
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

function loadSetFile(setNumber, customTopic = null) {

    return new Promise((resolve) => {

        const script =
            document.createElement("script");

        const config = TEST_CATEGORIES[getCategory()];

        let path = "";

        // =========================
        // TOPICWISE
        // =========================

        //if (categoryName === "topicwise") {
        if(config.topics) {
            const activeTopic = customTopic || topicName;
            path = `${config.folder}/${activeTopic}/${setNumber}.js`;
        }

        // =========================
        // NORMAL CATEGORY
        // =========================

        else {

            path =
`${config.folder}/${setNumber}.js`;
        }

        script.src = path;

        script.onload = () => {

            const dataCopy =
                JSON.parse(
                    JSON.stringify(window.SET_DATA)
                );

            resolve(dataCopy);
        };

        script.onerror = () => {

            console.error(
                "Failed loading:",
                path
            );

            resolve(null);
        };

        document.head.appendChild(script);
    });
}

async function generateRandomTestWithSeed(seedNum, seedStr) {
    showLoader("Generating your challenge...");
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

    const configQues = TEST_CATEGORIES[getCategory()];
    const TOTAL_QUESTIONS =
        configQues.totalQuestions || 50;
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
    const config = TEST_CATEGORIES[categoryName];
    const selectedTopic = getTopic();
    let availableSets = [];
    
    //if (categoryName === "topicwise") {
    if(config.topics) {
        if (selectedTopic) {
            // Only selected topic
            config.topics[selectedTopic].availableSets.forEach(setNo => {
                availableSets.push({
                    topic: selectedTopic,
                    set: setNo
                });
            });
    
        } else {
            // Load every topic
            availableSets = [];
            Object.entries(config.topics).forEach(([topicKey, topicObj]) => {
                topicObj.availableSets.forEach(setNo => {
        
                    availableSets.push({
                        topic: topicKey,
                        set: setNo
                    });
                });
            });
        }
    }
    else {
    
        availableSets = config.availableSets;
    }
    
    const promises = availableSets.map(item => {
    
            //if (categoryName === "topicwise") {
            if(config.topics) {    
                return loadSetFile(
                    item.set,
                    item.topic
                );
            }
    
            return loadSetFile(item);
        });
    const results = await Promise.all(promises);

    const validSets = results
        .map((data, i) => ({
            set: config.topics //categoryName === "topicwise"
                ? availableSets[i].set
                : availableSets[i],
        
            topic: config.topics //categoryName === "topicwise"
                ? availableSets[i].topic
                : null,
        
            questions: data?.questions || []
        }))
        .filter(d => d.questions.length > 0);

    let finalQuestions = [];
    //======================================================
    // NORMAL CATEGORY
    //======================================================
    
    if (!config.topics || selectedTopic) {
    
        const totalSets = validSets.length;
        // ================================
        // ✅ CASE A: sets >= 50
        // ================================
        if (totalSets >= TOTAL_QUESTIONS) {
    
            const mixedSeed1 = (numericSeed * 9301) % 233280;
            const shuffledSets = shuffleWithSeed([...validSets], mixedSeed1);
    
            const selectedSets = shuffledSets.slice(0, TOTAL_QUESTIONS);
    
            selectedSets.forEach(({ set, topic, questions }) => {
                const mixedSeed2 = (numericSeed * 9301 + set * 49297) % 233280;
                const shuffledQ = shuffleWithSeed([...questions], mixedSeed2);
                            //finalQuestions.push(shuffledQ[0]);
                finalQuestions.push({
                    ...shuffledQ[0],
                    _set: set,
                    _topic: setObj.topic || null
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
                const { set, topic, questions } = setObj;
                const count = baseCount + (index < remainder ? 1 : 0);
                const mixedSeed4 = (numericSeed * 9301 + set * 49297) % 233280;
                const shuffledQ = shuffleWithSeed([...questions], mixedSeed4);
                //finalQuestions.push(...shuffledQ.slice(0, count));
                finalQuestions.push(
                    ...shuffledQ.slice(0, count).map(q => ({
                        ...q,
                        _set: set,
                        _topic: topic || null
                    }))
                );
            });
        }
    }
    //======================================================
    // TOPICWISE + NO TOPIC SELECTED
    //======================================================
    else {
        const topicMap = {};
        validSets.forEach(v => {
            if (!topicMap[v.topic])
                topicMap[v.topic] = [];
            topicMap[v.topic].push(v);
        });
        const topicNames = Object.keys(topicMap);
        const topicCount = topicNames.length;
        const baseTopic =  Math.floor(TOTAL_QUESTIONS / topicCount);
        const remTopic = TOTAL_QUESTIONS % topicCount;
        const mixedSeed6 = (numericSeed * 9301) % 233280;
        const shuffledTopics = shuffleWithSeed([...topicNames], mixedSeed6);
    
        shuffledTopics.forEach((topicName, topicIndex) => {
            const questionsForTopic = baseTopic + (topicIndex < remTopic ? 1 : 0);
            const sets = topicMap[topicName];
            const setCount = sets.length;
            const baseSet = Math.floor(questionsForTopic / setCount);
            const remSet = questionsForTopic % setCount;
            const mixedSeed7 = (numericSeed * 9301 + topicIndex * 49297) % 233280;
            
            const shuffledSets = shuffleWithSeed([...sets], mixedSeed7 + topicIndex);
            shuffledSets.forEach((setObj, setIndex) => {
                const take = baseSet + (setIndex < remSet ? 1 : 0);
                const shuffledQuestions = shuffleWithSeed([...setObj.questions], mixedSeed7 + setObj.set);
                finalQuestions.push(
                    ...shuffledQuestions
                        .slice(0, take)
                        .map(q => ({
                            ...q,
                            _set: setObj.set,
                            _topic: topicName
                        }))
                );
            });
        });
    }
    // ✅ Final shuffle (very important)
    const mixedSeed5 = (numericSeed * 9301 + 9999 * 49297) % 233280;
    finalQuestions = shuffleWithSeed(finalQuestions, mixedSeed5);

    // ✅ Trim safety (edge-case protection)
    finalQuestions = finalQuestions.slice(0, TOTAL_QUESTIONS);
    const configure = TEST_CATEGORIES[categoryName];
    /*initApp({
        title: `🎯 Mathematics Mock Test 🎯<br>(${seedStr})`,
        questions: finalQuestions
    });*/
    
    let testTitle = configure.title;
    // If a topic is selected, use its title instead
    if (configure.topics && getTopic()) {
        testTitle = `${configure.topics[getTopic()].title} Mock Test`;
    }          
    initApp({
        title: `🎯 ${testTitle} 🎯<br>(${seedStr})`,
        questions: finalQuestions
    });
}

// ===============================
// ===============================
// FULLSCREEN EXIT DETECTION
// ===============================

document.addEventListener('fullscreenchange', () => {
    if (!examStarted || examSubmitted) return;
    if (!document.fullscreenElement) {
        registerViolation('Exited fullscreen');
        setTimeout(() => { if (examStarted && !examSubmitted) enterFullscreen(); }, 800);
    }
});
document.addEventListener('webkitfullscreenchange', () => {
    if (!examStarted || examSubmitted) return;
    if (!document.webkitFullscreenElement) {
        registerViolation('Exited fullscreen');
        setTimeout(() => { if (examStarted && !examSubmitted) enterFullscreen(); }, 800);
    }
});

window.addEventListener('blur', () => {
    if (!examStarted || examSubmitted || isPracticeMode) return;
    registerViolation('Application lost focus');
});


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

/*document.addEventListener(
    "contextmenu",
    e => e.preventDefault()
);*/

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
// ===============================
// TAB SWITCH DETECTION
// ===============================

document.addEventListener('visibilitychange', () => {
    if (!examStarted || examSubmitted) return;
    pageHidden = document.hidden;
    if (document.hidden) {
        registerViolation('Switched tab or minimised window');
    } else {
        if (!document.fullscreenElement) enterFullscreen();
        const banner = document.getElementById('violation-banner');
        if (banner && banner.style.display === 'block') {
            clearTimeout(violationBannerTimeout);
            violationBannerTimeout = setTimeout(() => { banner.style.display = 'none'; }, 5000);
        }
    }
});

// =============================================
// QUESTION NAVIGATOR
// =============================================

function buildQNav(count) {
    const grid      = document.getElementById('q-nav-grid');
    const sheetGrid = document.getElementById('q-nav-sheet-grid');
    if (grid) grid.innerHTML = '';
    if (sheetGrid) sheetGrid.innerHTML = '';

    for (let i = 0; i < count; i++) {
        if (grid)      grid.appendChild(makeQNavBtn(i, 'qnb'));
        if (sheetGrid) sheetGrid.appendChild(makeQNavBtn(i, 'qnbs'));
    }
    updateQNavFooter();
}

function makeQNavBtn(i, prefix) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'q-nav-btn';
    btn.id = prefix + '-' + i;
    btn.textContent = i + 1;
    btn.onclick = () => scrollToQuestion(i);
    return btn;
}

function updateQNavBtn(i) {
    const attempted = !!document.querySelector(`input[name="q${i}"]:checked`);
    const b1 = document.getElementById('qnb-' + i);
    const b2 = document.getElementById('qnbs-' + i);
    if (b1) b1.classList.toggle('attempted', attempted);
    if (b2) b2.classList.toggle('attempted', attempted);
    updateQNavFooter();
}

function updateQNavFooter() {
    const total = questions.length;
    let done = 0;
    for (let i = 0; i < total; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) done++;
    }
    const footer = document.getElementById('q-nav-footer');
    const info   = document.getElementById('q-nav-sheet-info');
    const badge  = document.getElementById('q-nav-badge');
    if (footer) footer.textContent = `${done} / ${total} answered`;
    if (info)   info.textContent   = `${done} / ${total} answered`;
    if (badge)  badge.textContent  = done;
}

function scrollToQuestion(i) {
    const el = document.getElementById('question-' + i);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeQNavSheet();
}

function toggleQNavSheet() {
    const overlay = document.getElementById('q-nav-overlay');
    const sheet   = document.getElementById('q-nav-sheet');
    if (!overlay || !sheet) return;
    const isOpen = sheet.classList.contains('open');
    overlay.classList.toggle('open', !isOpen);
    sheet.classList.toggle('open', !isOpen);
}

function closeQNavSheet() {
    document.getElementById('q-nav-overlay')?.classList.remove('open');
    document.getElementById('q-nav-sheet')?.classList.remove('open');
}


// ===============================
// PDF DOWNLOAD
// ===============================

function downloadResultPDF() {
    if (!_pdfResultData) { alert("Please complete the test first."); return; }
    const d = _pdfResultData;

    const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit", month: "long", year: "numeric"
    });

    // Clone all rendered question blocks from the live DOM
    const questionsHTML = Array.from(document.querySelectorAll(".question-block"))
        .map(b => b.outerHTML).join("");

    const timeLine = d.isPracticeMode ? "" :
        `<div class="po-time">&#9201; Time Taken: <b>${d.timeTakenMinutes} min ${d.timeTakenSecs} sec</b></div>`;

    document.getElementById("print-overlay").innerHTML = `
        <div class="po-header">
            <div>
                <div class="po-institute">RAMANUJAM ENTRANCE CLASSES</div>
                <div class="po-tagline">NIMCET &nbsp;&middot;&nbsp; IIT JEE (MAIN + ADVANCED) &nbsp;&middot;&nbsp; CUET &nbsp;&middot;&nbsp; VIT &nbsp;&middot;&nbsp; BITS &nbsp;&middot;&nbsp; ALL MCA ENTRANCE EXAMS</div>
            </div>
            <div class="po-header-right">
                <div><b>${d.testName}</b></div>
                <div>${today}</div>
                <div>Student: <b>${d.studentName}</b></div>
            </div>
        </div>

        <div class="po-score-box">
            ${timeLine}
            <div class="po-score-grid">
                <div class="po-score-cell">&#9989; Correct &nbsp;<b>${d.correctCount}</b></div>
                <div class="po-score-cell">&#10060; Wrong &nbsp;<b>${d.wrongCount}</b></div>
                <div class="po-score-cell">&#11093; Not Attempted &nbsp;<b>${d.notAttemptedCount}</b></div>
            </div>
            <div class="po-score-final">&#127942; Score: ${d.scoredMarks} / ${d.totalMarks}</div>
            <div class="po-score-note">Each correct: +${d.correctMarks} marks &nbsp;&middot;&nbsp; Each wrong: ${d.wrongMarks} marks</div>
        </div>

        <div class="po-questions">${questionsHTML}</div>
    `;

    // Use test name as the suggested PDF filename
    const prev = document.title;
    document.title = d.testName + " — " + d.studentName;
    window.print();
    document.title = prev;
}