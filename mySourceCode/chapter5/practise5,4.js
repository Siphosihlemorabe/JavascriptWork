let myTable=[];//an empty array
let rows=3;//variable for number of rows
let columns=2;//variable for columns
let counter=0;//setting the counter to 0
for(let i=0;i<rows;i++){
  let tempTable=[];
  for(let j =0;j<columns;j++){
    counter++;
    tempTable.push(counter);
    myTable.push(tempTable);
  }
}
console.table(myTable);