function add(){
    var name=document.getElementById("task").value;
    var table=document.getElementById("table").getElementsByTagName("tbody")[0];
    var row=table.insertRow();
    var cell=row.insertCell();
    cell.innerHTML=name;
}

