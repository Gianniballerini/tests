class Exam {
  constructor() {
    this.t = null
  }

  updateTableHTML(myArray) {
    var tableBody = document.getElementsByClassName('table')[0].tBodies[0]
    // Reset the table
    tableBody.innerHTML = "";

    // Build the new table
    myArray.forEach(row => {
      var newRow = document.createElement("tr");
      tableBody.appendChild(newRow);
      //id
      var newCell = document.createElement("td");
      newCell.textContent = row.id;
      newRow.appendChild(newCell);
      //image
      var newCell = document.createElement("td");
      var img = document.createElement('img');
      img.src = row.thumbnailUrl;
      newCell.appendChild(img);
      newRow.appendChild(newCell);
      //name
      var newCell = document.createElement("td");
      newCell.textContent = row.name;
      newRow.appendChild(newCell);
      //price
      var newCell = document.createElement("td");
      newCell.textContent = row.price;
      newRow.appendChild(newCell);
    });
  }

  randomize(myArray){
    this.updateTableHTML(myArray.sort(() => Math.random() - 0.5))
  }
  start(myArray){
    if (this.t !== null ) { clearInterval(this.t) }
    this.t = setInterval(() => this.randomize(myArray),1000);
  }
  stop(){
    clearInterval(this.t)
  }
  sort(myArray){
    let sortedArray = myArray.sort((a, b) => {
      return b.price - a.price || a.id - b.id;
    })
    this.updateTableHTML(sortedArray)
  }
}

const exam = new Exam()
exam.updateTableHTML(TABLE_DATA)
document.getElementById('start').addEventListener("click", () => exam.start(TABLE_DATA))
document.getElementById('stop').addEventListener("click", () => exam.stop()) 
document.getElementById('sort').addEventListener("click", () => exam.sort(TABLE_DATA)) 