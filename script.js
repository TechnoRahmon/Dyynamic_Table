/** Make a Dynamic table */

    var tableItSelf = document.getElementById("myTable");
    var tableRow = document.createElement("tr");
    var tableTd = document.createElement("td");
    var btn = document.getElementById("btn");




function addStars(row, colmn) {

    console.log(tableItSelf.lastChild.innerHTML);

    if (tableItSelf.lastChild.innerHTML== undefined) {
        for(var i=0; i<row; i++) {


        tableRow = tableItSelf.insertRow(i);
        

        for(var j=0; j<colmn;j++) {

            tableTd =tableRow.insertCell(j);

            tableTd.innerHTML=(i)*colmn+(j+1);
        }
              
    }  
  }  

   else {
console.log(tableItSelf.lastChild.lastChild.lastChild.innerHTML);

        let z = Number(tableItSelf.lastChild.lastChild.lastChild.innerHTML);

        for(var i=z; i<row+z; i++) {

             tableRow= tableItSelf.insertRow();

            for(var j=0; j<colmn; j++) {
            
            tableTd = tableRow.insertCell(j);

            tableTd.innerHTML= z+j+1;
            }
            
        }
   } 
 
 

 }
var addMore = (func) => {
    func(1, 5);
}


addStars(5,5); 






