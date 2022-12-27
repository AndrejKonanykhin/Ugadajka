const personGenerator = {
  surnameJson: `{  
        "count": 17,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов",
            "id_17": "Ленин"
        }
    }`,
  firstNameMaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Сергей",
            "id_11": "Андрей",
            "id_12": "Владимир"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 12,
        "list": {     
            "id_1": "Елена",
            "id_2": "Наталья",
            "id_3": "Марина",
            "id_4": "Екатерина",
            "id_5": "Татьяна",
            "id_6": "Вероника",
            "id_7": "Светлана",
            "id_8": "Людмила",
            "id_9": "Ольга",
            "id_10": "Любовь",
            "id_11": "Анастасия",
            "id_12": "Мария"
        }
    }`,
  secondNameMaleJson: `{
      "count": 12,
      "list": {     
          "id_1": "Александрович",
          "id_2": "Максимович",
          "id_3": "Иванович",
          "id_4": "Николаевич",
          "id_5": "Владимирович",
          "id_6": "Ильич",
          "id_7": "Михайлович",
          "id_8": "Петрович",
          "id_9": "Евгеньевич",
          "id_10": "Сергеевич",
          "id_11": "Андреевич",
          "id_12": "Алексеевич"
      }
  }`,
  secondNameFemaleJson: `{
      "count": 12,
      "list": {     
          "id_1": "Станиславовна",
          "id_2": "Михайловна",
          "id_3": "Иннокентьевна",
          "id_4": "Сергеевна",
          "id_5": "Алексеевна",
          "id_6": "Николаевна",
          "id_7": "Григорьевна",
          "id_8": "Леонидовна",
          "id_9": "Владимировна",
          "id_10": "Ивановна",
          "id_11": "Валентиновна",
          "id_12": "Андреевна"
      }
  }`,
  professionMaleJson: `{
    "count": 10,
    "list": {     
        "id_1": "Водитель",
        "id_2": "Военнослужащий",
        "id_3": "Строитель",
        "id_4": "Электрогазосварщик",
        "id_5": "Автослесарь",
        "id_6": "Маляр",
        "id_7": "Охранник",
        "id_8": "Блогер",
        "id_9": "Брокер",
        "id_10": "Безработный"
    }
}`,
  professionFemaleJson: `{
    "count": 10,
    "list": {     
        "id_1": "Учительница",
        "id_2": "Медсестра",
        "id_3": "Кондитер",
        "id_4": "Врач-офтальмолог",
        "id_5": "Модель",
        "id_6": "Журналистка",
        "id_7": "Актриса",
        "id_8": "Риэлтор",
        "id_9": "Продавщица",
        "id_10": "Программист"
    }
}`,
  monthOfBirthJson: `{
  "count": 12,
  "list": {     
      "id_1": "января",
      "id_2": "февраля",
      "id_3": "марта",
      "id_4": "апреля",
      "id_5": "мая",
      "id_6": "июня",
      "id_7": "июля",
      "id_8": "августа",
      "id_9": "сентября",
      "id_10": "октября",
      "id_11": "ноября",
      "id_12": "декабря"
  }
}`,

  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomGender: function () {
    if (this.randomIntNumber() === 0) {
      return this.GENDER_FEMALE;
    } else {
      return this.GENDER_MALE;
    }
  },

  maxDay: function () {
    //Не работает, но условия выполняются, судя по кнопке "Месяц"
    if (this.person.month === "апреля") {
      return 30;
    } else if (this.person.month === "июня") {
      return 30;
    } else if (this.person.month === "сентября") {
      return 30;
    } else if (this.person.month === "ноября") {
      return 30;
    } else if (this.person.month === "февраля") {
      return 28;
    } else {
      return 31;
    }
  },

  randomDay: function () {
    return this.randomIntNumber((max = this.maxDay()), (min = 1));
  },

  randomMonth: function () {
    return this.randomValue(this.monthOfBirthJson);
  },

  randomYear: function () {
    return this.randomIntNumber((max = 2002), (min = 1982));
  },

  randomProfession: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.professionMaleJson);
    } else {
      return this.randomValue(this.professionFemaleJson);
    }
  },

  randomFirstName: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSecondName: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.secondNameMaleJson);
    } else {
      return this.randomValue(this.secondNameFemaleJson);
    }
  },

  randomSurname: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.surnameJson);
    } else {
      return this.randomValue(this.surnameJson) + "а";
    }
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.day = this.randomDay();
    this.person.month = this.randomMonth();
    this.person.year = this.randomYear();
    this.person.profession = this.randomProfession();
    this.person.surname = this.randomSurname();
    this.person.firstName = this.randomFirstName();
    this.person.secondName = this.randomSecondName();
    return this.person;
  },
};
document.querySelector("#viewMonth").addEventListener("click", (event) => {
  console.log(personGenerator.maxDay()); //выводит максимальное число дней в месяце
  console.log(personGenerator.person.month); //выводит месяц
  console.log(personGenerator.randomDay());
});
