'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tr = document.querySelector('tr');
const allTr = table.querySelectorAll('tr');
const columns = tr.querySelectorAll('td');

appendRow.addEventListener('click', () => {
  const newTr = document.createElement('tr');

  for (let i = 0; i < columns.length; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }
  table.append(newTr);
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();
});

appendColumn.addEventListener('click', () => {
  allTr.forEach((t) => {
    const newTd = document.createElement('td');

    t.appendChild(newTd);
  });
});

removeColumn.addEventListener('click', () => {
  allTr.forEach((t) => {
    t.lastElementChild.remove();
  });
});
