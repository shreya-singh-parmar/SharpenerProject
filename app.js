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
//console.log(heading.innerHTML = '<h3> Hello </h3>')
 header.style.border = 'solid 3px #000'
 const title = document.querySelector('.item');
 title.style.fontWeight = 'bold';
 title.style.color='green';
 const item = document.getElementsByClassName('list-group-item');
 console.log(item);
 console.log(item[1]);
 item[1].style.backgroundColor = 'yellow';
 for(var i=0;i<item.length;i++){
    item[i].style.fontWeight ='bold';
 }
  



