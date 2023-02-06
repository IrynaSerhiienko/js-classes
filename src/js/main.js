const myArray = [
  {
    name: "Sasha",
    birthYear: 1992,
  },
  {
    name: "Vova",
    birthYear: 1984,
  },
  {
    name: "Sveta",
    birthYear: 2000,
  },
  {
    name: "Vika",
    birthYear: 1998,
  },
  {
    name: "Iren",
    birthYear: 1988,
  },
  {
    name: "Oleg",
    birthYear: 1982,
  },
  {
    name: "Sergey",
    birthYear: 2003,
  },
  {
    name: "Kostja",
    birthYear: 1979,
  },
  {
    name: "Maria",
    birthYear: 1938,
  },
  {
    name: "Tanja",
    birthYear: 1971,
  },
];
let btn_Show = document.querySelector(".btn_Show");
let out = document.querySelector(".out");

class MyClass {
  constructor(myArray) {
    this.name = myArray.name;
    this.birthYear = myArray.birthYear;
  }

  showItem() {
    const parentDiv = document.createElement("div");
    const name = document.createElement("div");
    const birthYear = document.createElement("div");
    const btn_GetAge = document.createElement("button");
    const age = document.createElement("div");

    parentDiv.classList.add("parentDiv");
    name.classList.add("name");
    birthYear.classList.add("birthYear");
    btn_GetAge.classList.add("btn_GetAge");
    age.classList.add("age");

    name.innerHTML = this.name;
    birthYear.innerHTML = this.birthYear;
    btn_GetAge.innerHTML = "Get Age";
    age.innerHTML = "?";
    parentDiv.append(name, birthYear, btn_GetAge, age);

    btn_GetAge.addEventListener("click", () => {
      age.innerHTML = this.showFullAge();
    });
    return parentDiv;
  }

  showFullAge() {
    const agePerson = new Date().getFullYear() - this.birthYear;
    return `${this.name} is ${agePerson} years old`;
  }
}

btn_Show.addEventListener("click", () => {
  out.innerHTML = "";
  const instances = myArray.map(
    (name, birthYear) => new MyClass(name, birthYear)
  );

  instances.forEach((instance) => {
    out.append(instance.showItem());
  });
});
