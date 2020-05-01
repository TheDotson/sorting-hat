const newStudent = [];

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
        <label for="exampleInputName">What is the name of the First Year?</label>
        <input type="name" class="form-control form-control-sm" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name">
        <small id="nameHelp" class="form-text text-muted">Please only include your legal First and Last name.</small>
      </div>
      <button id="sortStudent" type="submit" class="btn btn-secondary btn-sm">Submit</button>
    </form>
    `;
  }
  printToDom('#form', domString);
  document.querySelector('#sortStudent').addEventListener('click', buildCard)
};

const buildCard = (event) => {
  const buttonId = event.target.id;
  let domString = '';

  if (buttonId === 'sortStudent') {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">this will be a student name</h5>
      <p class="card-text">This will be a house</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  }
  printToDom('#studentCards', domString);
};

const clickEvents = () => {
  document.querySelector('#createForm').addEventListener('click', buildForm)
}

const init = () => {
  clickEvents();
}

init();
