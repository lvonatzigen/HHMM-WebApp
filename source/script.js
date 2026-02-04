const timeInput = document.getElementById("timeInput");
const decimalInput = document.getElementById("decimalInput");

let isUpdating = false;

// HH:MM -> decimal hours
timeInput.addEventListener("input", () => {
  if (isUpdating || !timeInput.value) return;

  isUpdating = true;

  const [hours, minutes] = timeInput.value.split(":").map(Number);
  const decimal = hours + minutes / 60;

  decimalInput.value = decimal.toFixed(2);

  isUpdating = false;
});

// decimal hours -> HH:MM
decimalInput.addEventListener("input", () => {
  if (isUpdating || decimalInput.value === "") return;

  const decimal = parseFloat(decimalInput.value);
  if (isNaN(decimal)) return;

  isUpdating = true;

  const hours = Math.floor(decimal);
  const minutes = Math.round((decimal - hours) * 60);

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");

  timeInput.value = `${hh}:${mm}`;

  isUpdating = false;
});
