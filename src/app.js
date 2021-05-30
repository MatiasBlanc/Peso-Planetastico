const calcWeight = (mass, gravity) => {
  return (mass * gravity) / 9.8;
};

const planet = {
  earth: [9.8, "Earth", "Tierra"],
  mars: [3.7, "Mars", "Marte"],
  jupiter: [24.8, "Jupiter", "Jupiter"],
  venus: [8.87, "Venus", "Venus"],
};

const app = () => {
  const planetForm = document.getElementById("planetForm");
  const weightInput = document.getElementById("weightInput");
  const planetInput = document.getElementById("planetInput");
  const resultWeight = document.getElementById("result");

  planetForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const weight = parseFloat(weightInput.value);
    const [gravity, , planetName] = planet[planetInput.value];
    const planetWeight = calcWeight(weight, gravity);

    resultWeight.innerHTML = `Tu peso en ${planetName} es ${planetWeight} kg `;
  });
};

app();
