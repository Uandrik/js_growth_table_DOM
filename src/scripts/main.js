'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
let tbody = table.querySelector('tbody');

if (!tbody) {
  tbody = document.createElement('tbody');

  table.appendChild(tbody);
}

appendRow.addEventListener('click', () => {
  const tr = tbody.querySelector('tr');
  const columns = tr.querySelectorAll('td');
  const newTr = document.createElement('tr');

  for (let i = 0; i < columns.length; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }
  tbody.append(newTr);

  const updatedRows = tbody.querySelectorAll('tr');

  appendRow.disabled = updatedRows.length >= 10;
  removeRow.disabled = updatedRows.length <= 2;
});

removeRow.addEventListener('click', () => {
  const updatedRows = tbody.querySelectorAll('tr');

  if (updatedRows.length > 2) {
    tbody.lastElementChild.remove();
  }

  const newUpdatedRows = tbody.querySelectorAll('tr');

  removeRow.disabled = newUpdatedRows.length <= 2;
  appendRow.disabled = newUpdatedRows.length >= 10;
});

appendColumn.addEventListener('click', () => {
  const allTr = tbody.querySelectorAll('tr');

  allTr.forEach((t) => {
    const newTd = document.createElement('td');

    t.appendChild(newTd);
  });

  const updatedTr = tbody.querySelector('tr');
  const updatedColumns = updatedTr.querySelectorAll('td');

  removeColumn.disabled = updatedColumns.length <= 2;
  appendColumn.disabled = updatedColumns.length >= 10;
});

removeColumn.addEventListener('click', () => {
  const allTr = table.querySelectorAll('tr');

  allTr.forEach((t) => {
    t.lastElementChild.remove();
  });

  const updatedTr = tbody.querySelector('tr');
  const updatedColumns = updatedTr.querySelectorAll('td');

  removeColumn.disabled = updatedColumns.length <= 2;
  appendColumn.disabled = updatedColumns.length >= 10;
});
