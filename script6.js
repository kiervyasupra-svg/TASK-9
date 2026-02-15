const correctDoor = 2;
const resultDiv = document.getElementById('result');

document.getElementById('door1').onclick = () => showResult(1);
document.getElementById('door2').onclick = () => showResult(2);
document.getElementById('door3').onclick = () => showResult(3);

document.getElementById('restart').onclick = () => {
  window.location.href = 'level1.html';
};

function showResult(selected) {
  if (selected === correctDoor) {
    resultDiv.textContent = 'Success! You picked the correct door.';
    resultDiv.classList.remove('text-danger');
    resultDiv.classList.add('text-success');
  } else {
    resultDiv.textContent = 'Wrong door. Try again!';
    resultDiv.classList.remove('text-success');
    resultDiv.classList.add('text-danger');
  }
}
