document.querySelector("#generate").addEventListener("click", (event) => {
  const initPerson = personGenerator.getPerson();
  document.querySelector("#surnameOutput").innerText = initPerson.surname;
  document.querySelector("#firstNameOutput").innerText = initPerson.firstName;
  document.querySelector("#secondNameOutput").innerText = initPerson.secondName;
  document.querySelector("#genderOutput").innerText = initPerson.gender;
  document.querySelector("#birthDateOutput").innerText =
    initPerson.day + " " + initPerson.month + " " + initPerson.year;
  document.querySelector("#professionOutput").innerText = initPerson.profession;
});

document.querySelector("#restart").addEventListener("click", (event) => {
  document.querySelector("#surnameOutput").innerText = "-";
  document.querySelector("#firstNameOutput").innerText = "-";
  document.querySelector("#secondNameOutput").innerText = "-";
  document.querySelector("#genderOutput").innerText = "-";
  document.querySelector("#birthDateOutput").innerText = "-";
  document.querySelector("#professionOutput").innerText = "-";
});
