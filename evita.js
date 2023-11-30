var habbitItems = [];

var list = document.getElementById('list');

function addRoutineItem(){
    var RoutineTittle = document.getElementById('DailyRoutineTittle').ariaValueMax;
    var DailyRoutineType =
document.querySelectorAll('Input[name="RoutineType"]:checked').value

 RoutineItem.push({'id': 0, 'title' : RoutineTitle, 'Type' :
DailyRoutineType, 'count': 0}) 
 listItems();
}
{
document.getElementById("add").addEventListener("click",
addRoutineItem);
}

document.getElementById("add").addEventListener("click"),
addRoutineItem
listItems();

$(document).on("click", ".plus", function(e){
 RoutineItem.splice(e.target.id, 1);
 listItems();
});
