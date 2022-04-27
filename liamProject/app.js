

function style() {
  const local = document.querySelectorAll('.location');
  const sport = document.querySelectorAll('.name');
  Array.from(local).forEach(function(local){
    if (local.innerHTML == "Home") {
       local.style.fontWeight = 700;
    } else {
     local.style.fontStyle = "italic";
    }
  });

  Array.from(sport).forEach(function(sport){
    if (sport.innerHTML == "Soccer") {
       sport.style.color = "blue";
    } else if (sport.innerHTML == "Baseball") {
     sport.style.color = "red";
    } else if (sport.innerHTML == "Softball") {
     sport.style.color = "green";
    }
  });
}

style();

const list = document.querySelector('#athletic-list ul');

list.addEventListener('click', (e) => {
  if(e.target.className == 'button'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
const forms = document.forms;
const addForm = forms['add-event'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  
// create elements
  const newEvent = addForm.querySelector('#addEvent').value;
  const newTime = addForm.querySelector('#addTime').value;
  const newPlace = addForm.querySelector('#addLocation').value;
  const li = document.createElement('li');
  const eventName = document.createElement('span');
  const timeName = document.createElement('span');
  const placeName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  const myBreak = document.createElement('br');

  // add text content
  eventName.textContent = newEvent;
  timeName.textContent = " " + newTime;
  placeName.textContent = newPlace;
  deleteBtn.textContent = 'delete';
  
  eventName.classList.add("name");
  timeName.classList.add("time");
  placeName.classList.add("location");
  deleteBtn.classList.add("button");

  // append to DOM
  li.appendChild(eventName);
  li.appendChild(myBreak);
  li.appendChild(placeName);
  li.appendChild(timeName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  style();
  //list.insertBefore(li, list.querySelector('li:first-child'));
});
