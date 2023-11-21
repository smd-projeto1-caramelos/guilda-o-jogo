import table1 from './json/Table1.json';

export function listAll() {
  return table1.data;
}

export function getById(id: number) {
  return table1.data[id];
}