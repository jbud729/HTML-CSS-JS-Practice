let form = document.getElementById('addForm');

let itemList = document.getElementById('items');

let filter = document.getElementById('filter');

//Add submit event
form.addEventListener('submit', addItem);

//Delete event 
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
  e.preventDefault();


  //Get Input Value 
  let newItem = document.getElementById('item');
  
  //Create new Li element
  let li = document.createElement('li');
  li.className = 'list-group-item';
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  //Create delete button element
  let deleteBtn = document.createElement('button');

  //Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  //Append button to li
  li.appendChild(deleteBtn);
  //Append li to list
  itemList.appendChild(li);

}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}

function filterItems(e) {
  // covert text to lowercase 
  let text = e.target.value.toLowerCase();
  console.log(text);
  let items = itemList.getElementsByTagName('li');
  //Convert HTML Collection to array
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
