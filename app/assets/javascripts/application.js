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
//= require datatables.js
//= require bootstrap
//= require js/shards.min.js
//= require js/demo.min.js
//= require_tree .

$(document).ready(function(){
  $('#exportables').DataTable({
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