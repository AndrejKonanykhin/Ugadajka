let minValue;
let maxValue;

let answerNumber;
let answerNumberString;
let sign;
let answerNumberText;
let orderNumber;
let gameRun;

const orderNumberField = document.querySelector("#orderNumberField");
const answerField = document.querySelector("#answerField");

//Показываем окно для ввода минимума перед началом игры
document.querySelector("#showMinValue").classList.toggle("show");

let enterMinValue = document.querySelector("#enterMinValue");
let enterMaxValue = document.querySelector("#enterMaxValue");

//Контролируем ввод минимума
enterMinValue.addEventListener("input", (event) => {
  minValue = parseInt(enterMinValue.value);
  minValue < -999 || minValue > 997
    ? (enterMinValue.value = -999)
    : (minValue = minValue);
});

//Проверяем, число ли введено, если нет ставим -999
document.querySelector("#getMinValue").addEventListener("click", (event) => {
  minValue = parseInt(enterMinValue.value) || -999;
  document.querySelector("#showMinValue").classList.toggle("show");
  document.querySelector("#showMaxValue").classList.toggle("show");
});

//Контролируем ввод максимума
enterMaxValue.addEventListener("input", (event) => {
  maxValue = parseInt(enterMaxValue.value);
  maxValue > 999 || minValue < -999
    ? (enterMaxValue.value = 999)
    : (maxValue = maxValue);
});

//Проверяем, число ли введено, если нет ставим 999
let getMaxValue = document.querySelector("#getMaxValue");
getMaxValue.addEventListener("click", (event) => {
  maxValue = parseInt(enterMaxValue.value) || 999;

  //Минимальное число не может быть больше максимального, выводится предупреждение
  let warning = document.querySelector("#warning");
  if (minValue >= maxValue) {
    warning.classList.toggle("show");
    //Меняем текст на кнопке "Вперед" на "Исправить" и наоборот, в зависимости от наличия предупреждения
    if (warning.classList.contains("show")) {
      getMaxValue.textContent = "Исправить";
    } else {
      getMaxValue.textContent = "Вперед";
    }
  } else {
    document.querySelector("#showMaxValue").classList.toggle("show");
    document.querySelector("#takeNumber").classList.add("show");
    document.querySelector(
      "#takeNumberText"
    ).textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю!`;
  }
});

document.querySelector("#toGame").addEventListener("click", (event) => {
  document.querySelector("#takeNumber").classList.remove("show");
  startGame();
});

//Старт игры
function startGame() {
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;
  gameRun = true;

  answerNumber >= 0 ? (sign = "") : (sign = "минус ");

  //Текстовая запись ответа
  if (Math.abs(answerNumber) >= 0 && Math.abs(answerNumber) < 20) {
    answerNumberString = sign + findNumber();
  } else if (Math.abs(answerNumber) >= 20 && Math.abs(answerNumber) < 100) {
    answerNumberString = sign + findNumberDecades() + " " + findNumberUnits();
  } else if (Math.abs(answerNumber) >= 100 && Math.abs(answerNumber) < 999) {
    answerNumberString =
      sign + findNumberHundreds() + " " + findNumberDecadesUnits();
  } else {
    answerNumberString = answerNumber;
  }

  if (answerNumberString.length > 20) {
    answerNumberString = answerNumber;
  } else {
    answerNumberString = answerNumberString;
  }

  const answerFieldRandom = Math.round(Math.random() * 3);
  if (answerFieldRandom === 0) {
    answerField.innerText = `Вы загадали число ${answerNumberString}?`;
  } else if (answerFieldRandom === 1) {
    answerField.innerText = `Может это число ${answerNumberString}?`;
  } else if (answerFieldRandom === 2) {
    answerField.innerText = `Я думаю, это число ${answerNumberString}?`;
  } else {
    answerField.innerText = `Возможно это число ${answerNumberString}?`;
  }

  orderNumberField.innerText = orderNumber;
}

//Кнопка "Заново"
document.querySelector("#btnRetry").addEventListener("click", (event) => {
  document.querySelector("#showMinValue").classList.toggle("show");
  document.querySelector("#takeNumber").classList.remove("show");
  warning.classList.remove("show");
  getMaxValue.textContent = "Вперед";
});

//Кнопка "Больше"
document.querySelector("#btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы меня дурачите!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);

      //Текстовая запись ответа
      answerNumber >= 0 ? (sign = "") : (sign = "минус ");

      if (Math.abs(answerNumber) >= 0 && Math.abs(answerNumber) < 20) {
        answerNumberString = sign + findNumber();
      } else if (Math.abs(answerNumber) >= 20 && Math.abs(answerNumber) < 100) {
        answerNumberString =
          sign + findNumberDecades() + " " + findNumberUnits();
      } else if (
        Math.abs(answerNumber) >= 100 &&
        Math.abs(answerNumber) <= 999
      ) {
        answerNumberString =
          sign + findNumberHundreds() + " " + findNumberDecadesUnits();
      } else {
        answerNumberString = answerNumber;
      }

      if (answerNumberString.length > 20) {
        answerNumberString = answerNumber;
      } else {
        answerNumberString = answerNumberString;
      }

      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerFieldRandom = Math.round(Math.random() * 3);
      if (answerFieldRandom === 0) {
        answerField.innerText = `Вы загадали число ${answerNumberString}?`;
      } else if (answerFieldRandom === 1) {
        answerField.innerText = `Может это число ${answerNumberString}?`;
      } else if (answerFieldRandom === 2) {
        answerField.innerText = `Я думаю, это число ${answerNumberString}?`;
      } else {
        answerField.innerText = `Возможно это число ${answerNumberString}?`;
      }
    }
  }
});

//Кнопка "Меньше"
document.querySelector("#btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue || answerNumber === minValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Не может быть!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);

      //Текстовая запись ответа
      answerNumber >= 0 ? (sign = "") : (sign = "минус ");
      if (Math.abs(answerNumber) >= 0 && Math.abs(answerNumber) < 20) {
        answerNumberString = sign + findNumber();
      } else if (Math.abs(answerNumber) >= 20 && Math.abs(answerNumber) < 100) {
        answerNumberString =
          sign + findNumberDecades() + " " + findNumberUnits();
      } else if (
        Math.abs(answerNumber) >= 100 &&
        Math.abs(answerNumber) <= 999
      ) {
        answerNumberString =
          sign + findNumberHundreds() + " " + findNumberDecadesUnits();
      } else {
        answerNumberString = answerNumber;
      }

      if (answerNumberString.length > 20) {
        answerNumberString = answerNumber;
      } else {
        answerNumberString = answerNumberString;
      }

      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerFieldRandom = Math.round(Math.random() * 3);
      if (answerFieldRandom === 0) {
        answerField.innerText = `Вы загадали число ${answerNumberString}?`;
      } else if (answerFieldRandom === 1) {
        answerField.innerText = `Может это число ${answerNumberString}?`;
      } else if (answerFieldRandom === 2) {
        answerField.innerText = `Я думаю, это число ${answerNumberString}?`;
      } else {
        answerField.innerText = `Возможно это число ${answerNumberString}?`;
      }
    }
  }
});

//Кнопка "Верно"
document.querySelector("#btnEqual").addEventListener("click", function () {
  !gameRun
    ? document.querySelector("#showMinValue").classList.toggle("show")
    : youWon();
});

document
  .querySelector("#btnEqual")
  .addEventListener("click", function youWon() {
    if (gameRun) {
      const answerFieldRandom = Math.round(Math.random() * 3);
      if (answerFieldRandom === 0) {
        answerField.innerText = `Я всегда на коне!\n\u{1F920}`;
      } else if (answerFieldRandom === 1) {
        answerField.innerText = `Это было просто\n\u{1F609}`;
      } else if (answerFieldRandom === 2) {
        answerField.innerText = `Я выиграл!\n\u{1F61C}`;
      } else {
        answerField.innerText = `Я крут!\n\u{1F60E}`;
      }

      gameRun = false;
    }
  });

//Подбор текстового ответа от 0 до 20
function findNumber() {
  switch (Math.abs(answerNumber)) {
    case 0:
      answerNumberText = "0";
      break;
    case 1:
      answerNumberText = "один";
      break;
    case 2:
      answerNumberText = "два";
      break;
    case 3:
      answerNumberText = "три";
      break;
    case 4:
      answerNumberText = "четыре";
      break;
    case 5:
      answerNumberText = "пять";
      break;
    case 6:
      answerNumberText = "шесть";
      break;
    case 7:
      answerNumberText = "семь";
      break;
    case 8:
      answerNumberText = "восемь";
      break;
    case 9:
      answerNumberText = "девять";
      break;
    case 10:
      answerNumberText = "десять";
      break;
    case 11:
      answerNumberText = "одиннадцать";
      break;
    case 12:
      answerNumberText = "двенадцать";
      break;
    case 13:
      answerNumberText = "тринадцать";
      break;
    case 14:
      answerNumberText = "четырнадцать";
      break;
    case 15:
      answerNumberText = "пятнадцать";
      break;
    case 16:
      answerNumberText = "шестнадцать";
      break;
    case 17:
      answerNumberText = "семнадцать";
      break;
    case 18:
      answerNumberText = "восемнадцать";
      break;
    case 19:
      answerNumberText = "девятнадцать";
      break;
    default:
      answerNumberText = "";
  }
  return answerNumberText;
}

//Подбор текстового ответа сотен
function findNumberHundreds() {
  switch (Math.floor(Math.abs(answerNumber) / 100)) {
    case 1:
      answerNumberText = "сто";
      break;
    case 2:
      answerNumberText = "двести";
      break;
    case 3:
      answerNumberText = "триста";
      break;
    case 4:
      answerNumberText = "четыреста";
      break;
    case 5:
      answerNumberText = "пятьсот";
      break;
    case 6:
      answerNumberText = "шестьсот";
      break;
    case 7:
      answerNumberText = "семьсот";
      break;
    case 8:
      answerNumberText = "восемьсот";
      break;
    case 9:
      answerNumberText = "девятьсот";
      break;
    default:
      answerNumberText = "";
  }
  return answerNumberText;
}

//Подбор текстового ответа десятков
function findNumberDecades() {
  switch (Math.floor(Math.abs(answerNumber) / 10)) {
    case 2:
      answerNumberText = "двадцать";
      break;
    case 3:
      answerNumberText = "тридцать";
      break;
    case 4:
      answerNumberText = "сорок";
      break;
    case 5:
      answerNumberText = "пятьдесят";
      break;
    case 6:
      answerNumberText = "шестьдесят";
      break;
    case 7:
      answerNumberText = "семьдесят";
      break;
    case 8:
      answerNumberText = "восемьдесят";
      break;
    case 9:
      answerNumberText = "девяносто";
      break;
    default:
      answerNumberText = "";
  }
  return answerNumberText;
}

//Подбор текстового ответа единиц к десяткам от 20 до 100
function findNumberUnits() {
  switch (Math.abs(answerNumber) % 10) {
    case 1:
      answerNumberText = "один";
      break;
    case 2:
      answerNumberText = "два";
      break;
    case 3:
      answerNumberText = "три";
      break;
    case 4:
      answerNumberText = "четыре";
      break;
    case 5:
      answerNumberText = "пять";
      break;
    case 6:
      answerNumberText = "шесть";
      break;
    case 7:
      answerNumberText = "семь";
      break;
    case 8:
      answerNumberText = "восемь";
      break;
    case 9:
      answerNumberText = "девять";
      break;
    default:
      answerNumberText = "";
  }
  return answerNumberText;
}

//Подбор текстового ответа единиц и десятков к сотням
function findNumberDecadesUnits() {
  switch (Math.abs(answerNumber) % 100) {
    case 1:
      answerNumberText = "один";
      break;
    case 2:
      answerNumberText = "два";
      break;
    case 3:
      answerNumberText = "три";
      break;
    case 4:
      answerNumberText = "четыре";
      break;
    case 5:
      answerNumberText = "пять";
      break;
    case 6:
      answerNumberText = "шесть";
      break;
    case 7:
      answerNumberText = "семь";
      break;
    case 8:
      answerNumberText = "восемь";
      break;
    case 9:
      answerNumberText = "девять";
      break;
    case 10:
      answerNumberText = "деcять";
      break;
    case 11:
      answerNumberText = "одинннадцать";
      break;
    case 12:
      answerNumberText = "двенадцать";
      break;
    case 13:
      answerNumberText = "тринадцать";
      break;
    case 14:
      answerNumberText = "четырнадцать";
      break;
    case 15:
      answerNumberText = "пятнадцать";
      break;
    case 16:
      answerNumberText = "шестнадцать";
      break;
    case 17:
      answerNumberText = "семнадцать";
      break;
    case 18:
      answerNumberText = "восемнадцать";
      break;
    case 19:
      answerNumberText = "девятнадцать";
      break;
    case 20:
      answerNumberText = "двадцать";
      break;
    case 21:
      answerNumberText = "двадцать один";
      break;
    case 22:
      answerNumberText = "двадцать два";
      break;
    case 23:
      answerNumberText = "двадцать три";
      break;
    case 24:
      answerNumberText = "двадцать четыре";
      break;
    case 25:
      answerNumberText = "двадцать пять";
      break;
    case 26:
      answerNumberText = "двадцать шесть";
      break;
    case 27:
      answerNumberText = "двадцать семь";
      break;
    case 28:
      answerNumberText = "двадцать восемь";
      break;
    case 29:
      answerNumberText = "двадцать девять";
      break;
    case 30:
      answerNumberText = "трицать";
      break;
    case 31:
      answerNumberText = "трицать один";
      break;
    case 32:
      answerNumberText = "трицать два";
      break;
    case 33:
      answerNumberText = "трицать три";
      break;
    case 34:
      answerNumberText = "трицать четыре";
      break;
    case 35:
      answerNumberText = "трицать пять";
      break;
    case 36:
      answerNumberText = "трицать шесть";
      break;
    case 37:
      answerNumberText = "трицать семь";
      break;
    case 38:
      answerNumberText = "трицать восемь";
      break;
    case 39:
      answerNumberText = "трицать девять";
      break;
    case 40:
      answerNumberText = "сорок";
      break;
    case 41:
      answerNumberText = "сорок один";
      break;
    case 42:
      answerNumberText = "сорок два";
      break;
    case 43:
      answerNumberText = "сорок три";
      break;
    case 44:
      answerNumberText = "сорок четыре";
      break;
    case 45:
      answerNumberText = "сорок пять";
      break;
    case 46:
      answerNumberText = "сорок шесть";
      break;
    case 47:
      answerNumberText = "сорок семь";
      break;
    case 48:
      answerNumberText = "сорок восемь";
      break;
    case 49:
      answerNumberText = "сорок девять";
      break;
    case 50:
      answerNumberText = "пятьдесят";
      break;
    case 51:
      answerNumberText = "пятьдесят один";
      break;
    case 52:
      answerNumberText = "пятьдесят два";
      break;
    case 53:
      answerNumberText = "пятьдесят три";
      break;
    case 54:
      answerNumberText = "пятьдесят четыре";
      break;
    case 55:
      answerNumberText = "пятьдесят пять";
      break;
    case 56:
      answerNumberText = "пятьдесят шесть";
      break;
    case 57:
      answerNumberText = "пятьдесят семь";
      break;
    case 58:
      answerNumberText = "пятьдесят восемь";
      break;
    case 59:
      answerNumberText = "пятьдесят девять";
      break;
    case 60:
      answerNumberText = "шестьдесят";
      break;
    case 61:
      answerNumberText = "шестьдесят один";
      break;
    case 62:
      answerNumberText = "шестьдесят два";
      break;
    case 63:
      answerNumberText = "шестьдесят три";
      break;
    case 64:
      answerNumberText = "шестьдесят четыре";
      break;
    case 65:
      answerNumberText = "шестьдесят пять";
      break;
    case 66:
      answerNumberText = "шестьдесят шесть";
      break;
    case 67:
      answerNumberText = "шестьдесят семь";
      break;
    case 68:
      answerNumberText = "шестьдесят восемь";
      break;
    case 69:
      answerNumberText = "шестьдесят девять";
      break;
    case 70:
      answerNumberText = "семьдесят";
      break;
    case 71:
      answerNumberText = "семьдесят один";
      break;
    case 72:
      answerNumberText = "семьдесят два";
      break;
    case 73:
      answerNumberText = "семьдесят три";
      break;
    case 74:
      answerNumberText = "семьдесят четыре";
      break;
    case 75:
      answerNumberText = "семьдесят пять";
      break;
    case 76:
      answerNumberText = "семьдесят шесть";
      break;
    case 77:
      answerNumberText = "семьдесят семь";
      break;
    case 78:
      answerNumberText = "семьдесят восемь";
      break;
    case 79:
      answerNumberText = "семьдесят девять";
      break;
    case 80:
      answerNumberText = "восемьдесят";
      break;
    case 81:
      answerNumberText = "восемьдесят один";
      break;
    case 82:
      answerNumberText = "восемьдесят два";
      break;
    case 83:
      answerNumberText = "восемьдесят три";
      break;
    case 84:
      answerNumberText = "восемьдесят четыре";
      break;
    case 85:
      answerNumberText = "восемьдесят пять";
      break;
    case 86:
      answerNumberText = "восемьдесят шесть";
      break;
    case 87:
      answerNumberText = "восемьдесят семь";
      break;
    case 88:
      answerNumberText = "восемьдесят восемь";
      break;
    case 89:
      answerNumberText = "восемьдесят девять";
      break;
    case 90:
      answerNumberText = "девяносто";
      break;
    case 91:
      answerNumberText = "девяносто один";
      break;
    case 92:
      answerNumberText = "девяносто два";
      break;
    case 93:
      answerNumberText = "девяносто три";
      break;
    case 94:
      answerNumberText = "девяносто четыре";
      break;
    case 95:
      answerNumberText = "девяносто пять";
      break;
    case 96:
      answerNumberText = "девяносто шесть";
      break;
    case 97:
      answerNumberText = "девяносто семь";
      break;
    case 98:
      answerNumberText = "девяносто восемь";
      break;
    case 99:
      answerNumberText = "девяносто девять";
      break;
    default:
      answerNumberText = "";
  }
  return answerNumberText;
}
