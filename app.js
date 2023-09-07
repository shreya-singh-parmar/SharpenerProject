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

const heading = document.querySelector('.navbar-brand');
const header = document.querySelector('#main');
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

const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].style.fontWeight = 'bold';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

