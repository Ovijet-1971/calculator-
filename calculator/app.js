function insertNumbar(numbar){
    var existingNumbars= $("#result").val();
     $("#result").val(existingNumbars + numbar)
}

function clear(){
    $("#result").val('')
}

function calculate(){
    
    var result= eval($("#result").val())
    $("#result").val(result)
}
function deleteNumbar(){
    var presentvalue = $("#result").val('');
    if(value!="")

        $("#result").val('').val($("#result").val('').slice(0,-1));
}