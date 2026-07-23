const themes = [
    "人外",
    "天使",
    "悪魔",
    "機械生命体",
    "竜人",
    "獣人"
];
const motifs = [
    "蝶",
    "深海生物",
    "花",
    "時計",
    "機械"
];

const moods = [
    "雨の夜",
    "夕暮れ",
    "静寂",
    "雪景色",
    "廃墟"
];

const randomTheme =
themes [Math.floor(Math.random() *
themes.length)];

const randomMotif =
motifs [Math.floor(Math.random() *
motifs.length)];

const randomMood =
moods [Math.floor(Math.random() *
moods.length)];

const button =
document.getElementById("button");

const theme =
document.getElementById("theme");

const motif =
document.getElementById("motif");

const mood =
document.getElementById("mood");

button.addEventListener("click",
function() {
    const randomTheme =
themes[Math.floor(Math.random() *
themes.length)];

const randomMotif =
motifs [Math.floor(Math.random() *
motifs.length)];

const randomMood =
moods [Math.floor(Math.random() *
moods.length)];

   theme.textContent =
randomTheme;
   motif.textContent =
randomMotif;
   mood.textContent =
randomMood;
} );