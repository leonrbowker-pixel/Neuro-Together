// ==========================================
// 1. PERSISTENT AUDIO SINGLETON (ANDROID & IOS FIX)
// ==========================================
let persistentAudioCtx = null;

function getSafeAudioContext() {
    if (!persistentAudioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            persistentAudioCtx = new AudioContextClass();
        }
    }
    if (persistentAudioCtx && persistentAudioCtx.state === 'suspended') {
        persistentAudioCtx.resume();
    }
    return persistentAudioCtx;
}

// Global wake-up listener on first screen touch
window.addEventListener('touchstart', () => getSafeAudioContext(), { passive: true, once: true });
window.addEventListener('click', () => getSafeAudioContext(), { passive: true, once: true });

// Audio Synthesizer Functions
window.playSafePop = function(isPopped = true) {
    try {
        const ctx = getSafeAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(isPopped ? 380 : 220, now);
        osc.frequency.exponentialRampToValueAtTime(isPopped ? 80 : 360, now + 0.04);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
    } catch(e) {}
};

window.playSafeClick = function() {
    try {
        const ctx = getSafeAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(3200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.01);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.01);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.01);
    } catch(e) {}
};

window.playSafeReward = function(freq = 523.25) {
    try {
        const ctx = getSafeAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
    } catch(e) {}
};

// ==========================================
// 2. HERO BUDDIES (UPDATED NAMES)
// ==========================================
window.HERO_BUDDIES_DATA = [
    { id: 'dog', name: 'Bella', icon: '🐶' },
    { id: 'cat', name: 'Ava', icon: '🐱' },
    { id: 'otter', name: 'Leon', icon: '🦦' },
    { id: 'horse', name: 'Emma', icon: '🐴' },
    { id: 'bird', name: 'Xanthia', icon: '🦜' },
    { id: 'donkey', name: 'Bramble', icon: '🫏' }
];

// ==========================================
// 3. ADAPTIVE BATTERY ASSESSMENT ENGINE
// ==========================================
window.getBatteryAdvice = function(level) {
    switch(Number(level)) {
        case 100:
            return {
                headline: '100% Full Power (Green Flow)',
                stateTag: 'Optimal Stamina',
                bgClass: 'bg-emerald-50 border-emerald-200',
                textClass: 'text-emerald-900',
                advice: 'Sensory reserves are full. This is the ideal window for non-preferred tasks, homework, shopping trips, or practicing new social skills.',
                suggestions: [
                    { icon: '📚', name: 'Homework / Reading', essential: false },
                    { icon: '🧹', name: 'Tidy Up Toys', essential: false }
                ]
            };
        case 75:
            return {
                headline: '75% Steady Energy (Yellow Baseline)',
                stateTag: 'Standard Baseline',
                bgClass: 'bg-teal-50 border-teal-200',
                textClass: 'text-teal-900',
                advice: 'Coping well, but stamina has limits. Keep verbal instructions to 1 or 2 steps and add 5-minute transition countdowns.',
                suggestions: [
                    { icon: '🍎', name: 'Snack Time', essential: true },
                    { icon: '🧸', name: 'Free Play Time', essential: false }
                ]
            };
        case 50:
            return {
                headline: '50% Draining (Orange Paced Mode)',
                stateTag: 'Sensory Bucket Full',
                bgClass: 'bg-amber-50 border-amber-200',
                textClass: 'text-amber-900',
                advice: 'Masking fatigue is setting in. Drop the battles: postpone heavy homework or room tidying. Prioritise sensory decompression.',
                suggestions: [
                    { icon: '🛋️', name: 'Chill Out in Room', essential: true },
                    { icon: '🥪', name: 'Comfort Meal', essential: true }
                ]
            };
        case 25:
        default:
            return {
                headline: '25% Critical Low (Red Survival Mode)',
                stateTag: 'Crisis Prevention',
                bgClass: 'bg-rose-50 border-rose-200',
                textClass: 'text-rose-900',
                advice: 'Fight-or-flight threshold reached. Non-essential tasks are hidden automatically. Only focus on physical safety, pyjamas, safe food, and sleep.',
                suggestions: [
                    { icon: '🩳', name: 'Soft Pyjamas', essential: true },
                    { icon: '🌙', name: 'Bedtime Story', essential: true }
                ]
            };
    }
};

// ==========================================
// 4. VERIFIED CURATED VIDEO LIBRARY
// ==========================================
window.PARENT_VIDEOS_DATA = [
    { id: 1, categoryLabel: 'Meltdowns & OT', title: 'Sensory Meltdown De-escalation Strategies', youtubeId: '2bZ5J1h-B5Y', desc: 'Understanding fight-or-flight nervous system states.' },
    { id: 2, categoryLabel: 'Demand Avoidance', title: 'The PDA PANDA Collaborative Approach', youtubeId: 'n1o3e7gOyo0', desc: 'Lowering demands and promoting nervous system trust.' },
    { id: 3, categoryLabel: 'Advocacy & DLA', title: 'Completing Disability Living Allowance for Children', youtubeId: 'VgXwBZ0o5Bg', desc: 'Step-by-step guidance on evidencing higher care needs.' }
];