<!doctype html>
<html lang="en">
  <head>
    <title>資料</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- jquery -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>

	<!-- ====dataTable======== -->
    <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
    <!-- datatableButton(export) -->
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.colVis.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.1/css/buttons.dataTables.min.css">

  </head>
  <script type="text/javascript">
  	$(document).ready(function(){
  		datatableServer = $("#datatable").DataTable({
			"lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
			"responsive": true,
			"pagingType": "full_numbers",
	        "dom": 'lBfrtip',
	        "buttons": [
	            {
	                "extend": 'copyHtml5',
	                "exportOptions": {
	                    "columns": [ 0, ':visible' ]
	                }
	            },
	            {
	                "extend": 'excelHtml5',
	                "exportOptions": {
	                    "columns": ':visible'
	                }
	            },
	            'colvis'	          
	        ]   , 
	        "order": [[ 0, "desc" ]],
	        "serverSide": true,
	        "ajax": "datatableSever.php",
	        "columns": [
	            { "data": "guest_no" },
	            { "data": "guest_name"},
	            { "data": "guest_age"},
	            { "data": "guest_mail"},
	            { "data": function(source, type, val){
	                var lang = source.lang;
	                var laguage = "";
	                switch (lang) {
	                	case "ch" :
	                		laguage = "繁體中文";
	                	break;
	                	case "chs" :
	                		laguage = "簡體中文";
	                	break;
	                	case "jp" :
	                		laguage = "日文";
	                	break;
	                	case "en" :
	                		laguage = "英文";
	                	break;
	                	default:
	                		laguage = "其他";
	                	break; 
	                }
	                return laguage;
	            }},
	           
	        ],
	        "fnDrawCallback" : function(oSettings){
	           
	        }  
		});

		$("#lang").change(function(){
			var lang =   $(this).val() ;
			if( lang == 0 ){
				datatableServer.column(3).search('').draw();
			}else{
				datatableServer.column(3).search(lang).draw();
			}
		});

  	});
  </script>
<body>
<div class="col-12">
	<div class="d-flex justify-content-end row my-2">
		<select name="status" id="lang">
	  		<option value="0">所有語系</option>
			<option value="ch">繁體中文</option>
			<option value="chs">簡體中文</option>
			<option value="jp">日文</option>
			<option value="en">英文</option>
		</select>	
	</div>
</div>

<table id="datatable" class="table table-striped table-bordered" cellspacing="0" width="100%">
	<thead>
		<tr>
			<th>編號</th>
			<th>姓名</th>
			<th>年齡</th>
			<th>E-Mail</th>
			<th>語系</th>						               
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>
	
</body>  
</html>