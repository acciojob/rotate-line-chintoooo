//your JS code here. If required.
// Select the line element
const line = document.getElementById("line");

// Initialize rotation angle
let angle = 0;

// Continuously update rotation every 20ms
setInterval(() => {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
