//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 'website';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[35]);
//document.all[35].textContent = 'hello
//console.log(document.links);
//console.log(document.forms[0]);
//console.log(document.images);

//const heading = document.querySelector('.navbar-brand');
//const header = document.querySelector('#main');
//console.log(heading);
//heading.textContent ="hello";
//heading.innerText="Goodbye";
//console.log(heading.innertext);
//console.log(heading.innerHTML = '<h3> Hello </h3>'
//.style.border = 'solid 3px #000'
//.style.border = 'solid 3px #000'
//title = document.querySelector('.item');
//style.fontWeight = 'bold';
//style.color='green'
//
//style.color='green';
//item = document.getElementsByClassName('list-group-item');
//consolee.log(item);
//consolee.log(item[1]);
//item[1].style.backgroundColor = 'yellow';
//for(var i=0;i<item.length;i++){
//item[i].style.fontWeight ='bold';
//}

// const li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[2]);
//li[2].style.fontWeight = 'bold';
//for(var i=0;i<li.length;i++){
//li[i].style.backgroundColor = '#f4f4f4';
//}

//const item = document.querySelectorAll('.list-group-item');
//item[1].style.backgroundColor = 'green';
//item[2].style.visibility = 'hidden';
//var i=1; i<item.length ; i+=2){
//item[i].style.backgroundColor = 'green';

//Traversing the DOM
//ParentNode
//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.parentNode.style.backgroundColor = "#f4f4f4";

//parentElement

//var itemList = document.querySelector('#items');
//console.log(itemList.parentElement);
//console.log(itemList.parentNode.parentNode);
//itemList.parentElement.parentElement.style.backgroundColor = "#f4f4f4";

//childNode
//var itemList = document.querySelector('#items');
//console.log(itemList.childNodes);
//itemList.childNodes[1].style.backgroundColor = 'yellow';

//children
//console.log(itemList.children);
//itemList.children[2].style.backgroundColor = 'yellow';

//firstchild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor = 'pink';

//lastChild
//console.log(itemList.lastChild);

//firstElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'hellow 5';

//nextsibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previoussibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);

//createElement

var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id ='hello';
newDiv.setAttribute('Title', 'Hello div');
//create textNode
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.append(newDivText);
//console.log(newDiv);
var container = document.querySelector('nav .container');
var h2 = document.querySelector('nav h2');
container.insertBefore(newDiv, h2);
console.log(container);

// Find the element with id 'item11'
var item1 = document.getElementById('item11');

// Create a new text node with the text "Hello World"
var textNode = document.createTextNode("Hello World");

// Get the parent element of 'item11'
var parent = item1.parentNode;

// Insert the text node before 'item11'
parent.insertBefore(textNode, item1);



