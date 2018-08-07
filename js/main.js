const close = document.getElementById('close');

let contactBtn = document.getElementById('contactBtn');
let wrapper = document.getElementById('contact_wrapper');

contactBtn.onclick = function() {
    wrapper.style.display = "grid";
}

close.onclick = function() {
    wrapper.style.display = "none";
}