// --- Initial Data ---
let habits = JSON.parse(localStorage.getItem('habits')) || [
    { id: Date.now(), name: "Drink Water", completed: false },
    { id: Date.now() + 1, name: "Workout", completed: true }
];

// --- Selectors ---
const habitList = document.getElementById('habit-list');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const themeBtn = document.getElementById('theme-toggle');
const modal = document.getElementById('modal-overlay');

// --- Navigation Logic ---
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(item.dataset.target).classList.add('active');
    });
});

// --- Theme Logic ---
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeBtn.innerText = "☀️ Light Mode";
}

themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// --- Core Functions ---
function renderHabits() {
    habitList.innerHTML = habits.map(h => `
        <div class="habit-card ${h.completed ? 'completed' : ''}">
            <span>${h.name}</span>
            <input type="checkbox" ${h.completed ? 'checked' : ''} onchange="toggleHabit(${h.id})">
        </div>
    `).join('');
    updateProgress();
    save();
}

function toggleHabit(id) {
    habits = habits.map(h => h.id === id ? {...h, completed: !h.completed} : h);
    renderHabits();
}

function updateProgress() {
    const total = habits.length;
    const done = habits.filter(h => h.completed).length;
    const progress = total === 0 ? 0 : (done / total) * 100;
    
    progressText.innerText = `Today's Progress: ${done} / ${total} habits`;
    progressFill.style.width = `${progress}%`;
}

function save() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// --- Modal Logic ---
document.getElementById('open-modal').onclick = () => modal.classList.add('open');
document.getElementById('mobile-add').onclick = () => modal.classList.add('open');
document.getElementById('close-modal').onclick = () => modal.classList.remove('open');

document.getElementById('save-habit').onclick = () => {
    const input = document.getElementById('habit-input');
    if (input.value.trim()) {
        habits.push({ id: Date.now(), name: input.value, completed: false });
        input.value = '';
        modal.classList.remove('open');
        renderHabits();
    }
};

// --- Analytics Logic ---
function renderAnalytics() {
    const chart = document.getElementById('weekly-chart');
    const values = [40, 65, 30, 85, 90, 50, 70]; 
    chart.innerHTML = values.map(v => `<div class="bar" style="height: ${v}%"></div>`).join('');

    const heatmap = document.getElementById('heatmap');
    heatmap.innerHTML = Array.from({length: 28}).map(() => 
        `<div class="cell ${Math.random() > 0.4 ? 'active' : ''}"></div>`
    ).join('');
}

const loginBtn = document.getElementById('login-btn');
let isLoggedIn = false;

loginBtn.addEventListener('click', () => {
    isLoggedIn = !isLoggedIn;

    if (isLoggedIn) {
        // Simulate Login
        loginBtn.innerText = "Sign Out";
        loginBtn.classList.add('logged-in');
        alert("Welcome back, Alex! (Simulated Login)");
    } else {
        // Simulate Logout
        loginBtn.innerText = "Login";
        loginBtn.classList.remove('logged-in');
    }
});

// --- Init ---
renderHabits();
renderAnalytics();


