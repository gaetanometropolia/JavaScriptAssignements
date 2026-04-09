"use strict";

// Write a voting program as described below for small-scale meeting use. (8p)
// The program asks for the number of candidates.
// Then the program asks for the names of the candidates: Name for candidate 1
// Store the candidates names and initial vote count in objects like this:
// [
//     {
//         name: 'ellie',
//         votes: 0,
//     },
//     {
//         name: 'frank',
//         votes: 0,
//     },
//     {
//         name: 'pamela',
//         votes: 0,
//     },
// ]
// The program asks for the number of voters.
// The program asks each voter in turn who they will vote for. Voter should enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
// The program announces the name of the winner and the results by printing it to the console:
// The winner is pamela with 3 votes.
// results:
// pamela: 3 votes
// frank: 1 votes
// ellie: 1 votes
// Some help:
// // You need to compare votes so console log a and b to see how to get the correct property.
// someArray.sort((a, b) => {
//    console.log(a, b);
//    return b - a;
// });

const numCandidates =parseInt(prompt("Write how many candidates"));
const candidates=[];

for (let i = 0; i< numCandidates; i++){
    const name = prompt(`Name of Candidate ${i+1}:`);
    candidates.push({
        name: name,
        votes: 0
    })
}

const numVoters = parseInt(prompt("Write how many voters"));

for(let i=0; i<numVoters; i++){
    const vote = prompt(`Voter ${i+1}, who do you vote for?`)
    if (vote !== ""){
        const adding=candidates.push(vote[i])
    }
    else{alert("invalid vote")}
}

