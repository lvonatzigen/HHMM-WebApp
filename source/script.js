const input = document.getElementById("timeInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  if (!input.value) {
    output.textContent = "–";
    return;
  }

  const [hours, minutes] = input.value.split(":").map(Number);
  const decimal = hours + minutes / 60;

  output.textContent = decimal.toFixed(2);
});
