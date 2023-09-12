var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', additem);
itemList.addEventListener('click', removeitem);
function additem(e){
    e.preventDefault();
   // console.log(1);
   var newItem = document.getElementById('item').value;
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));

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