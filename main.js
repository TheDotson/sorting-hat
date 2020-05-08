const students = [];
const deathEaters = [];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildForm = (event) => {
  const buttonId = event.target.id;
  let domString = '';

  if (buttonId === 'createForm') {
    domString += `
    <form>
      <div class="form-group">
        <label for="exampleInputName" class="label">What is the name of the First Year?</label>
        <input type="name" class="form-control form-control-sm" id="name" aria-describedby="nameHelp" placeholder="Enter Name">
        <small id="nameHelp" class="form-text">Please only include your legal First and Last name.</small>
      </div>
      <button id="sortStudent" type="submit" class="btn btn-primary btn-sm">Submit</button>
    </form>
    `;
  }
  printToDom('#form', domString);
  document.querySelector('#sortStudent').addEventListener('click', enrollmentEvent)
};

const studentObjectMaker = () => {
  let tempStudent = {
    name: '',
    house: '',
    id: Math.floor(Math.random() * 100),
    expelled: false,
  }

  if (document.getElementById('name').value === "") {
    alert("Don't be shy, fill out your name.")
  } else {
    tempStudent.name = document.getElementById('name').value

  const houseSorting = () => {
    let house = 0;
    house = Math.floor(Math.random() * 4) + 1;

    if (house === 1) {
      console.log('Gryffindor')
      tempStudent.house = 'Gryffindor'
    } else if (house === 2) {
      console.log('Hufflepuff')
      tempStudent.house = 'Hufflepuff'
    } else if (house === 3) {
      console.log('Ravenclaw')
      tempStudent.house = 'Ravenclaw'
    } else {
      console.log('Slytherin')
      tempStudent.house = 'Slytherin'
    }
  }
  houseSorting();
  students.push(tempStudent);
  }
};

const studentCardBuilder = (arr) => {
  domString = '';

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].expelled === false) {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body" id="${arr[i].house}">
        <h5 class="card-title">${arr[i].name}</h5>
        <p class="card-text">${arr[i].house}</p>
        <a href="#" class="btn btn-primary" id="${arr[i].id}">Expel Student</a>
      </div>
    </div>
    `;
    }   
  }
  printToDom('#studentCards', domString)
  document.querySelector(`#${arr[i].id}`).addEventListener('click', expellStudentEvent)
  document.getElementById("name").value = "";
}


const filterStudentEvent = (event) => {
  const buttonId = event.target.id;
  const tempStudentCollection = [];

  if (buttonId === 'all') {
    studentCardBuilder(students);
    return;
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === buttonId) {
      tempStudentCollection.push(students[i]);
    }
  }
  studentCardBuilder(tempStudentCollection);
}

const clickEvents = () => {
  document.querySelector('#createForm').addEventListener('click', buildForm)
  document.querySelector('#Gryffindor').addEventListener('click', filterStudentEvent)
  document.querySelector('#Hufflepuff').addEventListener('click', filterStudentEvent)
  document.querySelector('#Ravenclaw').addEventListener('click', filterStudentEvent)
  document.querySelector('#Slytherin').addEventListener('click', filterStudentEvent)
  document.querySelector('#all').addEventListener('click', filterStudentEvent)
}

const enrollmentEvent = (event) => {
  studentObjectMaker()
  studentCardBuilder(students)
}

const expellStudent = (arr) => {  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id > 0) {
      arr[i].expelled = true
  };
  }    
  studentCardBuilder(students)
}

const expellStudentEvent = (event) => { 
  const buttonId = event.target.id;
    if (buttonId === 'expel') {
      expellStudent(students);
  }
}

const init = () => {
  clickEvents();
}

init();
