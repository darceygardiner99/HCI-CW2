const NEWSCI = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const TPSC = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const JSC = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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