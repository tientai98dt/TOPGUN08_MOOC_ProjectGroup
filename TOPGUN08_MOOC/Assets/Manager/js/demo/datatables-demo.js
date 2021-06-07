// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable').DataTable({
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search..."
        },
        initComplete : function() {
            $('.dataTables_filter').prepend($('#searchList'));
            $('.dataTables_filter').append($('#searchButton'));
      } 
    });
    
});
