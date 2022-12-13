const NEWSCI = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const TPSC = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const JSC = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];

//const STAFF = ['buildingInput', 'roomInput', 'typeInput', 'dateInput', 'searchButton', 'clearButton'];
const STAFF = ['floorInput', 'faultIdInput'];
const STUDENT = ['floorInput', 'faultIdInput'];
const ENGINEER = [];
const ADMIN = [];
let actors = [STAFF, STUDENT, ENGINEER, ADMIN];
let currentActor = 0;


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Display functions
function swapDisplay() {
  if (currentActor !== 3) {
    currentActor++;
  }
  else {
    currentActor = 0;
  }
  searchDisplay(currentActor);
}

function searchDisplay(actorType) {
  const inputs = document.getElementsByTagName("input");
  const actor = actors.at(actorType);
  Array.from(inputs).forEach(input => {
    input.style.display = 'inline';
    document.getElementById(input.id+"Label").style.display = 'inline';
    document.getElementById(input.id+"Break").style.display = 'inline';
    actor.forEach(actorField => {
      if (actorField === input.id) {
        input.style.display = 'none';
        document.getElementById(input.id+"Label").style.display = 'none';
        document.getElementById(input.id+"Break").style.display = 'none';
      }
    })
  });
}

function dropDown() {
  const row = document.getElementById("firstDetails");
  if (row.style.display !== 'none') {
    row.style.display = 'none';
    row.style.width = '80%';
  }
  else {
    row.style.display = 'table-row';
  }
}
function assignForm(event) {
  const form = document.getElementById('assignPopup');

  var mainEvent = subEvent ? subEvent : window.event;

  alert("This button click occurred at: X(" +
  mainEvent.screenX + ") and Y(" + mainEvent.screenY + ")");

  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
}
function assignJob() {
  const input = document.getElementById('assignPopup');
  const output = document.getElementById('assigned1');
  output.innerHTML = "Assigned To: " + input.value;
}

function editJob() {

}

function updateForm() {
  const form = document.getElementById('updatePopup');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
}
function updateJob() {
  const input = document.getElementById('updateField');
  const output = document.getElementById('updates1');

  output.innerHTML = output.innerHTML + "<br>" + new Date().toLocaleDateString() + ": " + input.value;
}


//FaultSearch
function clearSearchForm() {
  document.getElementById("searchForm").reset();
}

function addRoom(room) {
  let roomList = document.getElementById("roomList");
  let option = document.createElement('option');
  option.value = room;
  roomList.append(option);
}

function clearRooms() {
  document.getElementById('roomList').innerHTML = '';
}

function roomSuggestion() {
  let building = document.getElementById("buildingInput").value;
  let file;
  switch (building) {
    case ("NEWSCI - New Science Building"):
      clearRooms();
      file = NEWSCI;
      break;
    case ("TPSC - Thomas Paine Study Centre"):
      clearRooms();
      file = TPSC;
      break;
    case ("JSC - Julian Study Centre"):
      clearRooms();
      file = JSC;
      break;
    default:
      break;
  }
  file.forEach(addRoom);
}