// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require dataTables/jquery.dataTables
//= require bootstrap
//= require_tree .

$(document).ready(function(){
	
	$('.show').click(function() {
		$('.slideout').addClass('on');
	  });
	
	  $('.hide').click(function() {
		$('.slideout').removeClass('on');
	  });
	  $('#profiles').DataTable({
		dom: '<"html5buttons"B>lTfgtip',
		buttons: [
			{extend: 'excel', title: 'Bantug Customers'},
	
			{extend: 'print',
			title: 'Bantug Customers',
				customize: function (win){
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');
	
					$(win.document.body).find('table')
							.addClass('compact')
							.css('font-size', 'inherit');
				}
			}
		],
	
		responsive: true  
	  });
	$('#exportables').DataTable({
		dom: 'Blfrtip',
		"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
		buttons: [
			{extend: 'excel'		
			  
			},
			{extend: 'print',
			  orientation: 'landscape',
			  pageSize: 'LEGAL',
			  customize: function (win){
				$(win.document.body).addClass('white-bg');
				$(win.document.body).css('font-size', '10px');
				$(win.document.body).find('.actions').css('display', 'none');
				
			  }
			}
		],
	  });
	  $(".buttons-print").addClass("btn-dt");
	  $(".buttons-html5").addClass("btn-dt");
	
	  $('#exportables1').DataTable({
		dom: 'Blfrtip',
		"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
		buttons: [
			{extend: 'excel',	
			exportOptions: {
				columns: 'th:not(:last-child)'
			}
			},
			{extend: 'print',
			  orientation: 'landscape',
			  pageSize: 'LEGAL',
			  exportOptions: {
				columns: 'th:not(:last-child)'
			},
			  customize: function (win){
				$(win.document.body).addClass('white-bg');
				$(win.document.body).css('font-size', '10px');
				$(win.document.body).find('.actions').css('display', 'none');
				
			  }
			}
		],
	  });
	  $(".buttons-print").addClass("btn-dt");
	  $(".buttons-html5").addClass("btn-dt");
	  
  $("table[role='datatable']").each(function(){
    $(this).DataTable({
      processing: true,
      responsive: true       
    });
  });

})

$('.alert').hide();
$(function () {
	TriggerAlertClose();
	});

	function TriggerAlertClose() {
	  window.setTimeout(function () {
	      $(".alert").fadeTo(1000, 0).slideUp(1000, function () {
	          $(this).remove();
	      });
	  }, 3000);
	}