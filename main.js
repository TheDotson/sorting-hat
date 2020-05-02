const students = [];
const deathEaters = [];

const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

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
    expelled: false,
  }

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
};

const studentCardBuilder = (arr) => {
  domString = '';

  for (let i = 0; i < arr.length; i++) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body" id="${arr[i].house}">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">${arr[i].house}</p>
      <a href="#" class="btn btn-primary" id="expel">Expel Student</a>
      </div>
    </div>
    `;
  }
  printToDom('#studentCards', domString)
  // document.querySelector('#expel').addEventListener('click', expelEvent)
}

// const expelStudent = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].expelled === false) {
//       arr[i].expelled = true;
//     }
//     if (arr[i].expelled === true) {
//       deathEaters.push(arr[i])
//     }
//   }
//   console.log(deathEaters)
// }

const clickEvents = () => {
  document.querySelector('#createForm').addEventListener('click', buildForm)
}

const enrollmentEvent = (event) => {
  studentObjectMaker()
  studentCardBuilder(students)
}

// const expelEvent = (event) => {
//   expelStudent(students)
// }

const init = () => {
  clickEvents();
}

init();
