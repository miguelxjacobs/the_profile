const caption = document.getElementById('caption');
const cvWrapper = document.getElementById('cv');

// XP button
const xpClose = document.getElementsByClassName('close')[0];
const xpBtn = document.getElementById('xpBtn');
const xpWrapper = document.getElementById('xp_wrapper');

xpBtn.onclick = function() {
    xpWrapper.style.display = "grid";
    cvWrapper.style.filter = "none";
    caption.style.filter = "blur(5px)";
}

xpClose.onclick = function() {
    xpWrapper.style.display = "none";
    caption.style.filter = "none";
}

// Contact button
const contactClose = document.getElementsByClassName('close')[1];
const contactBtn = document.getElementById('contactBtn');
const contactWrapper = document.getElementById('contact_wrapper');

contactBtn.onclick = function() {
    contactWrapper.style.display = "grid";
    cvWrapper.style.filter = "none";
    caption.style.filter = "blur(5px)";
}

contactClose.onclick = function() {
    contactWrapper.style.display = "none";
    caption.style.filter = "none";
}