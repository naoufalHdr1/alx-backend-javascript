// main.ts

/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

// Insert a new row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updateRow with an age
const updateRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Update the row
CRUD.updateRow(newRowID, updateRow);

// Delete the row
CRUD.deleteRow(newRowID);
