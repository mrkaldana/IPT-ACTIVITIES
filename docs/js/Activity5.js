// Dark mode toggle functionality
let darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
  }
});

// Add numbers
function add() {
  const input1 = parseFloat(document.getElementById('input1').value) || 0;
  const input2 = parseFloat(document.getElementById('input2').value) || 0;
  const result = input1 + input2;
  document.getElementById('result').innerText = `Result: ${result}`;
}

// Subtract numbers
function subtract() {
  const input1 = parseFloat(document.getElementById('input1').value) || 0;
  const input2 = parseFloat(document.getElementById('input2').value) || 0;
  const result = input1 - input2;
  document.getElementById('result').innerText = `Result: ${result}`;
}

