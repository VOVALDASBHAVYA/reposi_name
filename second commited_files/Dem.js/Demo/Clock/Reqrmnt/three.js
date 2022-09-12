// function productUpdate() {
//         if ($("#productname").val() != null && $("#productname").val() != '') {
//             // Add product to Table
//             productAddToTable();
    
//             // Clear form fields
//             formClear();
    
//             // Focus to product name field
//             $("#productname").focus();
//         }
//     }
//     productUpdate() ;
//     function productAddToTable() {
//       // First check if a <tbody> tag exists, add one if not
//       if ($("#productTable tbody").length == 0) {
//           $("#productTable").append("<tbody></tbody>");
//       }
  
//       // Append product to the table
//       $("#productTable tbody").append("<tr>" +
//           "<td>" + $("#productname").val() + "</td>" +
//           "<td>" + $("#introdate").val() + "</td>" +
//           "<td>" + $("#url").val() + "</td>" +
//           "</tr>");
//   }
//   productAddToTable();
//   function formClear() {
//       $("#productname").val("");
//       $("#introdate").val("");
//       $("#url").val("");
//   }
//   formClear();
//   <table id="productTable" class="table table-bordered table-condensed table-striped">
//       <thead>
//           <tr>
//               <th>Product Name</th>
//               <th>Introduction Date</th>
//               <th>URL</th>
//               <th>Delete</th>
//           </tr>
//       </thead>
//   </table>
//   function productDelete(ctl) {
//       $(ctl).parents("tr").remove();
//   }
//   productDelete(2);
//   <table id="productTable" class="table table-bordered table-condensed table-striped">
//       <thead>
//           <tr>
//               <th>Edit</th>
//               <th>Product Name</th>
//               <th>Introduction Date</th>
//               <th>URL</th>
//               <th>Delete</th>
//           </tr>
//       </thead>
//   </table>
//   function productBuildTableRow() {
//       var ret = "<tr>" +
//           "<td>" +
//           "<button type='button' onclick='productDisplay(this);' class='btn btn-default'>" +
//           "<span class='glyphicon glyphicon-edit' />" +
//           "</button>" +
//           "</td>" +
//           "<td>" + $("#productname").val() + "</td>" +
//           "<td>" + $("#introdate").val() + "</td>" +
//           "<td>" + $("#url").val() + "</td>" +
//           "<td>" +
//           "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
//           "<span class='glyphicon glyphicon-remove' />" +
//           "</button>" +
//           "</td>" +
//           "</tr>"
  
//       return ret;
//   }
//   function productDisplay(ctl) {
//       _row = $(ctl).parents("tr");
//       var cols = _row.children("td");
//       $("#productname").val($(cols[1]).text());
//       $("#introdate").val($(cols[2]).text());
//       $("#url").val($(cols[3]).text());
      
//       // Change Update Button Text
//       $("#updateButton").text("Update");
//   }
//   productDisplay(t);
//   function productUpdate() {
//       if ($("#updateButton").text() == "Update") {
//           productUpdateInTable();
//       }
//       else {
//           productAddToTable();
//       }
      
//       // Clear form fields
//       formClear();
      
//       // Focus to product name field
//       $("#productname").focus();
//   }
//   productUpdate();
//   function productUpdateInTable() {
//       // Add changed product to table
//       $(_row).after(productBuildTableRow());
      
//       // Remove old product row
//       $(_row).remove();
      
//       // Clear form fields
//       formClear();
      
//       // Change Update Button Text
//       $("#updateButton").text("Add");
//   }
//   productUpdateInTable();
//   function productBuildTableRow(id) {
//       var ret = "<tr>" +
//           "<td>" +
//           "<button type='button' onclick='productDisplay(this);' class='btn btn-default' data-id='" + id + "'>" +
//           "<span class='glyphicon glyphicon-edit' />" +
//           "</button>" +
//           "</td>" +
//           "<td>" + $("#productname").val() + "</td>" +
//           "<td>" + $("#introdate").val() + "</td>" +
//           "<td>" + $("#url").val() + "</td>" +
//           "<td>" +
//           "<button type='button' onclick='productDelete(this);' class='btn btn-default' data-id='" + id + "'>" +
//           "<span class='glyphicon glyphicon-remove' />" +
//           "</button>" +
//           "</td>" +
//           "</tr>"
  
//       return ret;
//   }
//   function productDisplay(ctl) {
//       var row = $(ctl).parents("tr");
//       var cols = row.children("td");
//       _activeId = $($(cols[0]).children("button")[0]).data("id");
//       $("#productname").val($(cols[1]).text());
//       $("#introdate").val($(cols[2]).text());
//       $("#url").val($(cols[3]).text());
      
//       // Change Update Button Text
//       $("#updateButton").text("Update");
//   }
//   productDisplay(c);
//   function productUpdate() {
//       if ($("#updateButton").text() == "Update") {
//           productUpdateInTable(_activeId);
//       }
//       else {
//           productAddToTable();
//       }
      
//       // Clear form fields
//       formClear();
      
//       // Focus to product name field
//       $("#productname").focus();
//   }
//   productUpdate();
//   function productUpdateInTable(id) {
//       // Find Product in <table>
//       var row = $("#productTable button[data-id='" + id + "']")
//           .parents("tr")[0];
//       // Add changed product to table
//       $(row).after(productBuildTableRow(id));
//           // Remove original product
//       $(row).remove();
//   }
//   function productUpdateInTable(e);
//   function productAddToTable() {
//       // Does tbody tag exist? add one if not
//       if ($("#productTable tbody").length == 0) {
//           $("#productTable").append("<tbody></tbody>");
//       }
      
//       // Append product to table
//       $("#productTable tbody").append(productBuildTableRow(_nextId));
      
//       // Increment next ID to use
//       _nextId += 1;
//   }
  
//   productAddToTable();
      
//  // Next ID for adding a new Product
//   var _nextId = 1;
  
//   // ID of Product currently editing
//   var _activeId = 0;
var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["fmail"] = document.getElementById("fmail").value;
    formData["fsal"] = document.getElementById("fsal").value;
    formData["fcity"] = document.getElementById("fcity").value;
    console.log(formData);
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    console.log(newRow);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fmail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fsal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fcity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)" style="cursor: pointer;" class="btn btn-primary">Edit</a>
                       <a onClick="onDelete(this)" style="cursor: pointer;" class="btn btn-danger">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("fmail").value = "";
    document.getElementById("fsal").value = "";
    document.getElementById("fcity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fmail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fsal").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fcity").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.fmail;
    selectedRow.cells[2].innerHTML = formData.fsal;
    selectedRow.cells[3].innerHTML = formData.ffcity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fname").value == "") {
        isValid = false;
        //document.getElementById("fnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        // if (!document.getElementById("fnameValidationError").classList.contains("hide")) {
        //     document.getElementById("fnameValidationError").classList.add("hide");
        // }
    }
    console.log("successfull");
    return isValid;
}