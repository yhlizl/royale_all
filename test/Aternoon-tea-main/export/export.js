$('#homePage').on('click', function (event) {
    event.preventDefault();
    window.location.href = '../main/main.html'; //換成操作頁面


});


var vm = new Vue({
    el: "#completedTable",
    delimiters: ['${', '}'],
    data: {
        rows: [],
        total: 0
    }
});

var id = $("input[name='id']").val();
var store = $("input[name='store']").val();
var type = $("input[name='type']").val();
var date = $("input[name='date']").val();

get_order();



function get_order(){
    $.ajax({
        type: "POST",
        crossDomain: true,
        cache: false,
        data: {
            id: id,
            store: store,
            type: type,
            date: date
        },
        url: '../detail/get_order.php',
        dataType: "json",
        success: function (result) {
            vm.rows = result['data'];
            vm.total = calculateMoney(vm);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
    
}

function calculateMoney(vm){
    let money = 0;
    vm.rows.forEach(element => {
        money += parseInt(element.price);
    });

    return money;
};


$(document).ready(function () {
    $('#completedTable').DataTable(
        {
            "paging": false,
            "ordering": false,
            paging: false,

            // "scrollX": true,
            "searching": false,
            info: false
        }
    );
    $(".dataTables_empty").empty();

});
