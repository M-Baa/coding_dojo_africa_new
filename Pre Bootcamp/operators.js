function howMuchLeftOverCake(){
    var numberOfPieces ="12";
    var numberOfPeople ="5";

}
const remainingPieces = numberOfPieces % numberOfPeople;

if (remainingPieces === 0) {
    return "No leftovers for you!";
 }
 const piecesPerPerson = Math.floor(numberOfPieces / numberOfPeople);

 if (remainingPieces <= 2) {
     return `Each person gets ${piecesPerPerson} pieces. You have some leftovers.`;
 } else if (remainingPieces <= 5) {
     return `Each person gets ${piecesPerPerson} pieces. You have leftovers to share.`;
 } else {
     return `Each person gets ${piecesPerPerson} pieces. Hold another party!`;
 }