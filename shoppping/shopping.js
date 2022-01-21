const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = []

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value
    if (!name) return;
    const item = { name, id: Date.now(), complete: false, };
    items.push(item);
    shoppingForm.reset();
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

function displayItems() {
    const html = items.map(item =>
    `
        <li class="shopping-item">
            <input value="${item.id}"  type="checkbox" ${item.complete && 'checked'}>
            <span class="itemName">${item.name}</span>
            <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
        </li>
    `).join('');
    list.innerHTML = html;
};

function mirrorToLocalStorage() {
    const ls = localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    console.log(lsItems.length);
    if (lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
};

function deleteItem(id) {
    console.log('DELETIENG ITEM', id);
    items = items.filter(item => item.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  };

  function markAsComplete(id) {
    console.log('Marking as complete', id);
    const itemRef = items.find(item => item.id === id);
    console.log(itemRef);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
  

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});
restoreFromLocalStorage();