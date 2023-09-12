var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', additem);
itemList.addEventListener('click', removeitem);
filter.addEventListener('keyup', filterItem);
function additem(e){
    e.preventDefault();
   // console.log(1);
   var newItem = document.getElementById('item').value;
   var new2Item = document.getElementById('discription').value;
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem+''+new2Item));

   


   var dlt = document.createElement('button');
   dlt.className = 'btn btn-danger btn-sm float-right delete';
   dlt.appendChild(document.createTextNode('X'));
   li.append(dlt);
   itemList.appendChild(li);
}
function removeitem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are u sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
    }
   }
}

function filterItem(e){
   var text = e.target.value.toLowerCase();
   var items = itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)!=-1){
   item.style.display ='block';
}else{
   item.style.display ='none';
}
   })
}