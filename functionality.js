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
    actor.forEach(actorField => {
      if (actorField === input.id) {
        input.style.display = 'none';
        document.getElementById(input.id+"Label").style.display = 'none';
      }
    })
  });
}

function dropDown() {
  const row = document.getElementById("firstDetails");
  if (row.style.display !== 'none') {
    row.style.display = 'none';
  }
  else {
    row.style.display = 'inline-block';
  }
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