function collectParticipants() {
    // Ask the user for the number of participants
    let numParticipants = parseInt(prompt("Enter the number of participants:"));

    if (isNaN(numParticipants) || numParticipants <= 0) {
      alert("Please enter a valid number of participants.");
      return;
    }

    let participants = [];

    for (let i = 0; i < numParticipants; i++) {
      let name = prompt(`Enter the name of participant ${i + 1}:`);
      participants.push(name);
    }

    participants.sort();

    let ol = document.createElement("ol");

    for (let name of participants) {
      let li = document.createElement("li");
      li.textContent = name;
      ol.appendChild(li);
    }

    const participantsListDiv = document.getElementById("participantsList");
    if (participantsListDiv) {
      participantsListDiv.innerHTML = ""; //clear last log
      participantsListDiv.appendChild(ol);
    } else {
      console.log("Error: 'participantsList' div not found."); // Debugging log
    }
  }
