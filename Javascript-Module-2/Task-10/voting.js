function startVoting() {

    const numCandidates = parseInt(prompt("Enter the number of candidates:"));

    const candidates = [];
    for (let i = 0; i < numCandidates; i++) {
      const name = prompt(`Enter the name for candidate ${i + 1}:`);
      candidates.push({ name: name, votes: 0 });
    }

    // Step 3: Ask for the number of voters
    const numVoters = parseInt(prompt("Enter the number of voters:"));

    // Step 4: Ask each voter who they want to vote for
    for (let i = 0; i < numVoters; i++) {
      const vote = prompt(`Voter ${i + 1}: Who do you vote for? (Enter the candidate's name or leave empty for no vote):`);

      if (vote === "") {
        continue; // If the voter doesn't enter a name, it is counted as an empty vote
      }

      // Find the candidate by name and increase their vote count
      const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
      if (candidate) {
        candidate.votes++;
      } else {
        alert("Invalid candidate name. Please try again.");
        i--; // Decrease the counter to repeat the current voter's turn
      }
    }

    // Step 5: Sort the candidates by vote count in descending order
    candidates.sort((a, b) => b.votes - a.votes);

    // Step 6: Announce the winner and print the results
    const winner = candidates[0];
    const resultText = `The winner is ${winner.name} with ${winner.votes} votes.\n\nResults:\n`;

    let resultsList = resultText;
    candidates.forEach(candidate => {
      resultsList += `${candidate.name}: ${candidate.votes} votes\n`;
    });

    // Display the results on the webpage
    document.getElementById("result").innerText = resultsList;
  }

  // Call the voting function to start the program
  startVoting();
