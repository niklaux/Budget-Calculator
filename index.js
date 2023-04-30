$('#input-budget input').on('input', function(){
    var budget = '';
    $('#input-budget input').each(function() {
        var value = Number($(this).val());
        budget = Number(budget) + Number(value);
    });

    $('#final-budget').val(budget);

   compare();   
});

$('#input-expenses input').on('input', function(){
    var expense = '';
    $('#input-expenses input').each(function() {
        var value = Number($(this).val());
        expense = Number(expense) + Number(value);
    });

    $('#total-expenses').val(expense);

    compare();
});   

function compare() {
    var expense = Number($('#total-expenses').val());
    var budget = Number($('#final-budget').val());

    if (budget > expense) {
        console.log('green');
        $('#total-expenses').css('text-shadow', '5px 0px 8px green');
    } else if (budget < expense) {
        console.log('red');
        $('#total-expenses').css('text-shadow', '5px 0px 8px violet');
    } else {
        console.log('black');
        $('#total-expenses').css('text-shadow', '5px 0px 8px black');
    }
};