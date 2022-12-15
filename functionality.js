const NEWSCI = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const TPSC = ['0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09'];
const JSC = ['1.01', '1.02', '2.03', '2.06', '2.08'];

const STAFFSTUDENT = ['floorInput', 'faultIdInput', 'assignButton', 'editButton', 'updateButton'];
const ENGINEER = ['editButton', 'assignButton'];
const ADMIN = [];
let actors = [STAFFSTUDENT, ENGINEER, ADMIN];
let currentActor = 0;

let currentIndex = 0;

//Display functions

function swapToStudent() {
  currentActor = 0;
  searchDisplay(currentActor);
}

function swapToEngineer() {
  currentActor = 1;
  searchDisplay(currentActor);
}

function swapToAdmin() {
  currentActor = 2;
  searchDisplay(currentActor);
}

function searchDisplay(actorType) {
  const inputs = document.getElementsByClassName("searchFormInput");
  const buttons = document.getElementsByTagName("button");
  const actor = actors.at(actorType);
  Array.from(inputs).forEach(input => {
    input.style.display = 'block';
    document.getElementById(input.id+"Label").style.display = 'block';
    document.getElementById(input.id+"Break").style.display = 'block';
    actor.forEach(actorField => {
      if (input.id.includes(actorField)) {
        input.style.display = 'none';
        document.getElementById(input.id+"Label").style.display = 'none';
        document.getElementById(input.id+"Break").style.display = 'none';
      }
    })
  });
  Array.from(buttons).forEach(button => {
    button.style.display = 'inline-block';
    actor.forEach(actorButton => {
      if (button.id.includes(actorButton)) {
        button.style.display = 'none';
      }
    })
  });
}

function hideDropDowns() {
  const dropdowns = document.getElementsByClassName("dropdown");
  Array.from(dropdowns).forEach(function(dropdown) {
    dropdown.style.display = 'none';
  })
}

function closePopups(exclude) {
  const popups = Array.from(document.getElementsByClassName("popup")).concat(Array.from(document.getElementsByClassName("faultForm")));
  const buttons = document.getElementsByClassName("popupButton");

  Array.from(popups).forEach(function(popup) {
    if (!popup.id.includes(exclude)) {
      popup.style.display = 'none';
    }
  });
  Array.from(buttons).forEach(function(button) {
    if (button.id.includes("edit")) {
      button.innerHTML = "Edit Job";
    }
    else if (button.id.includes("assign")) {
      button.innerHTML = "Assign Job";
    }
    else if (button.id.includes("update")) {
      button.innerHTML = "Update Job";
    }
  })
}

function viewMyFaults() {
  hideDropDowns();
  const listings = document.getElementsByClassName("listing");

  Array.from(listings).forEach(function(listing) {
    if (listing.id.includes('4') || listing.id.includes('5')) {
      listing.style.display = 'table-row';
    }
    else {
      listing.style.display = 'none';
    }
  })
}

function dropDown(index) {
  currentIndex = index;
  const row = document.getElementById(currentIndex + "dropDown");
  if (row.style.display === 'none' || !row.style.display) {
    row.style.display = 'table-row';
  }
  else {
    row.style.display = 'none';
    row.style.width = '80%';
  }
}

function openSettings() {
  const form = document.getElementById('settings');

  if (form.style.display === 'none' || !form.style.display) {
    closePopups();
    form.style.display = 'block';
  }
  else {
    closePopups();
  }
}

function editForm(index) {
  currentIndex = index;
  const form = document.getElementById('editPopup');
  const button = document.getElementById(currentIndex + 'editButton')

  if (form.style.display === 'none' || !form.style.display) {
    closePopups('edit');
    const details = getJobDetails(index);
    displayEditDetails(details);
    form.style.display = 'block';
    button.innerHTML = "Dismiss pop-up";
  }
  else {
    closePopups();
  }
}
function editJob() {
  const inputArray = document.getElementsByClassName('editInput');
  const listing = Array.from(document.getElementById(currentIndex + 'listing').children);
  const dropdown = Array.from(document.getElementById(currentIndex + 'dropDown').children);
  const tableRows = listing.concat(dropdown);
  let inputs = [];

  Array.from(inputArray).forEach(function(input) {
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      inputs.push(input.value);
    }
  })

  let count = 0;
  Array.from(tableRows).forEach(function(td) {
    Array.from(td.children).forEach(function(element) {
      if (element.tagName === 'P') {
        element.innerHTML = inputs.at(count);
        count++;
      }
    })
  })
  closePopups();
}

function assignForm(index) {
  currentIndex = index;
  const form = document.getElementById('assignPopup');
  const button = document.getElementById(currentIndex + 'assignButton')
  if (form.style.display === 'none' || !form.style.display) {
    closePopups('assign');

    form.style.display = 'block';
    button.innerHTML = "Dismiss pop-up";
  }
  else {
    closePopups();
  }
}
function assignJob() {
  const input = document.getElementById('assignField');
  const output = document.getElementById(currentIndex + 'assigned');
  output.innerHTML = input.value;
  closePopups();
}

function updateForm(index) {
  currentIndex = index;
  const form = document.getElementById('updatePopup');
  const button = document.getElementById(currentIndex + 'updateButton')
  if (form.style.display === 'none' || !form.style.display) {
    closePopups('update');

    form.style.display = 'block';
    button.innerHTML = "Dismiss pop-up";
  }
  else {
    closePopups();
  }
}
function updateJob() {
  const input = document.getElementById('updateField');
  const output = document.getElementById(currentIndex + 'updates');
  output.innerHTML = output.innerHTML + "<br>" + new Date().toLocaleDateString() + ": " + input.value;
  closePopups();
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

function getJobDetails(index) {
  currentIndex = index;
  let details = [];
  let data;
  const listing = Array.from(document.getElementById(currentIndex + 'listing').children);
  const dropdown = Array.from(document.getElementById(currentIndex + 'dropDown').children);
  const tableRows = listing.concat(dropdown);

  Array.from(tableRows).forEach(function(td) {
    Array.from(td.children).forEach(function(element) {
      if (element.tagName !== 'BR') {
        if (element.tagName === 'P') {
          data = element.innerHTML;
          if (data.includes('<br>')) {
            data = data.replace(/<br>\s*/g, '\n')
          }
          details.push(data);
        }
        else if (element.tagName === 'IMG') {
          data = element.src;
          details.push(data);
        }
      }
    })
  })
  return details;
}

//details order:
// Index 0: image
// Index 1: fault id
// Index 2: building
// Index 3: room
// Index 4: type
// Index 5: date
// Index 6: assigned to
// Index 7: status
// Index 8: details
// Index 9: updates
function displayEditDetails(details) {
  let elementArray = document.getElementsByClassName('editInput');
  let count = 1; // CURRENTLY IGNORING IMAGE
  Array.from(elementArray).forEach(function(element) {
    if (element.type === "date") {
      date = new Date(details.at(count));
      element.value = date.toISOString().split('T')[0];
    }
    else {
      element.value = details.at(count);
    }
    count++;
  });
}

function openProfileChange() {
  document.getElementById("profileChange").style.display= "block";
}

function closeProfileChange() {
  document.getElementById("profileChange").style.display= "none";
}


function openFaultForm() {
    document.getElementById("faultForm").style.display="block";
}

function closeForm() {
  document.getElementById("faultForm").style.display = "none";
}

var todaysDate = new Date();
var date = todaysDate.getDate()+ '/' + (todaysDate.getMonth()+1) + '/' + todaysDate.getFullYear();
document.getElementById("todaysDate").innerHTML = date;

function previewImg(input) {
    var file = $("input[type=file]").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function (){
            $("#previewImg").attr("src", reader.result);
        }
        reader.readAsDataURL(file);
    }
}
function popUpHover(){
  const target = document.getElementById("PrevImg");
  const tip = document.getElementById("tip-text");

  target.addEventListener('mouseover', () => {
    tip.style.display = 'block';
    }, false);

  target.addEventListener('mouseleave', () => {
    tip.style.display = 'none';
    }, false);
}

function searchOpen() {
  var form = document.getElementById("searchForm");

  if (form.style.display === "none" || !form.style.display) {
    form.style.display="block";
  }
  else {
    form.style.display="none";
  }

}