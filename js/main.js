// const welcomebBg = document.getElementsByClassName('welcome')[0];

// XP button
const xpClose = document.getElementsByClassName('close')[0];
const xpBtn = document.getElementById('xpBtn');
const xpWrapper = document.getElementById('xp_wrapper');

xpBtn.onclick = function() {
    xpWrapper.style.display = "grid";
    // welcomebBg.style.filter = "blur(2.5px)";
}

xpClose.onclick = function() {
    xpWrapper.style.display = "none";
    // welcomebBg.style.filter = "blur(0)";
}

// Contact button
const contactClose = document.getElementsByClassName('close')[1];
const contactBtn = document.getElementById('contactBtn');
const contactWrapper = document.getElementById('contact_wrapper');

contactBtn.onclick = function() {
    contactWrapper.style.display = "grid";
}

contactClose.onclick = function() {
    contactWrapper.style.display = "none";
}