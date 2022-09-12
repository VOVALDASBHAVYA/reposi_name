function onFormSubmit() {
            if ($("#productname").val() != null && $("#productname").val() != '') {
                // Add product to Table
                productAddToTable();
        
                // Clear form fields
                formClear();
        
                // Focus to product name field
                $("#productname").focus();
            }
        }
        onFormSubmit() ;
        function productAddToTable() {
          // First check if a <tbody> tag exists, add one if not
          if ($("#productTable tbody").length == 0) {
              $("#productTable").append("<tbody></tbody>");
          }
      
          // Append product to the table
          $("#productTable tbody").append("<tr>" +
              "<td>" + $("#productname").val() + "</td>" +
              "<td>" + $("#introdate").val() + "</td>" +
              "<td>" + $("#url").val() + "</td>" +
              "</tr>");
      }
      productAddToTable();
      function formClear() {
          $("#productname").val("");
          $("#introdate").val("");
          $("#url").val("");
      }
      formClear();
      <table id="productTable" class="table table-bordered table-condensed table-striped">
          <thead>
              <tr>
                  <th>Product Name</th>
                  <th>Introduction Date</th>
                  <th>URL</th>
                  <th>Delete</th>
              </tr>
          </thead>
      </table>
      function productDelete(ctl) {
          $(ctl).parents("tr").remove();
      }
      productDelete(2);
      <table id="productTable" class="table table-bordered table-condensed table-striped">
          <thead>
              <tr>
                  <th>Edit</th>
                  <th>Product Name</th>
                  <th>Introduction Date</th>
                  <th>URL</th>
                  <th>Delete</th>
              </tr>
          </thead>
      </table>
      function productBuildTableRow() {
          var ret = "<tr>" +
              "<td>" +
              "<button type='button' onclick='productDisplay(this);' class='btn btn-default'>" +
              "<span class='glyphicon glyphicon-edit' />" +
              "</button>" +
              "</td>" +
              "<td>" + $("#productname").val() + "</td>" +
              "<td>" + $("#introdate").val() + "</td>" +
              "<td>" + $("#url").val() + "</td>" +
              "<td>" +
              "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
              "<span class='glyphicon glyphicon-remove' />" +
              "</button>" +
              "</td>" +
              "</tr>"
      
          return ret;
      }
      function productDisplay(ctl) {
          _row = $(ctl).parents("tr");
          var cols = _row.children("td");
          $("#productname").val($(cols[1]).text());
          $("#introdate").val($(cols[2]).text());
          $("#url").val($(cols[3]).text());
          
          // Change Update Button Text
          $("#updateButton").text("Update");
      }
      productDisplay(t);
      function onFormSubmit() {
          if ($("#updateButton").text() == "Update") {
              productUpdateInTable();
          }
          else {
              productAddToTable();
          }
          
          // Clear form fields
          formClear();
          
          // Focus to product name field
          $("#productname").focus();
      }
      onFormSubmit();
      function productUpdateInTable() {
          // Add changed product to table
          $(_row).after(productBuildTableRow());
          
          // Remove old product row
          $(_row).remove();
          
          // Clear form fields
          formClear();
          
          // Change Update Button Text
          $("#updateButton").text("Add");
      }
      productUpdateInTable();
      function productBuildTableRow(id) {
          var ret = "<tr>" +
              "<td>" +
              "<button type='button' onclick='productDisplay(this);' class='btn btn-default' data-id='" + id + "'>" +
              "<span class='glyphicon glyphicon-edit' />" +
              "</button>" +
              "</td>" +
              "<td>" + $("#productname").val() + "</td>" +
              "<td>" + $("#introdate").val() + "</td>" +
              "<td>" + $("#url").val() + "</td>" +
              "<td>" +
              "<button type='button' onclick='productDelete(this);' class='btn btn-default' data-id='" + id + "'>" +
              "<span class='glyphicon glyphicon-remove' />" +
              "</button>" +
              "</td>" +
              "</tr>"
      
          return ret;
      }
      function productDisplay(ctl) {
          var row = $(ctl).parents("tr");
          var cols = row.children("td");
          _activeId = $($(cols[0]).children("button")[0]).data("id");
          $("#productname").val($(cols[1]).text());
          $("#introdate").val($(cols[2]).text());
          $("#url").val($(cols[3]).text());
          
          // Change Update Button Text
          $("#updateButton").text("Update");
      }
      productDisplay(c);
      function productUpdate() {
          if ($("#updateButton").text() == "Update") {
              productUpdateInTable(_activeId);
          }
          else {
              productAddToTable();
          }
          
          // Clear form fields
          formClear();
          
          // Focus to product name field
          $("#productname").focus();
      }
      productUpdate();
      function productUpdateInTable(id) {
          // Find Product in <table>
          var row = $("#productTable button[data-id='" + id + "']")
              .parents("tr")[0];
          // Add changed product to table
          $(row).after(productBuildTableRow(id));
              // Remove original product
          $(row).remove();
      }
      function productUpdateInTable(e);
      function productAddToTable() {
          // Does tbody tag exist? add one if not
          if ($("#productTable tbody").length == 0) {
              $("#productTable").append("<tbody></tbody>");
          }
          
          // Append product to table
          $("#productTable tbody").append(productBuildTableRow(_nextId));
          
          // Increment next ID to use
          _nextId += 1;
      }
      
      productAddToTable();
          
     // Next ID for adding a new Product
      var _nextId = 1;
      
      // ID of Product currently editing
      var _activeId = 0;