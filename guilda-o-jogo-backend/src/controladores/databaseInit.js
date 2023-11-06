import { database } from '../config.js';
import fs from 'fs';

export async function databaseInit() {

  const init = fs.readFileSync('schema.sql').toString();
  database().then(database => {
    database.exec(init);
  });

};

export async function inserirJogador(nome) {
  database().then(database => {
    database.run('INSERT INTO jogador (nome) VALUES(?);', nome);
  });
};

export async function listarJogadores() {
  return database().then(database => {
    return database.all('SELECT * FROM jogador;');
  });
};

export async function buscarJogador(id) {
  return database().then(database => {
    return database.all('SELECT * FROM jogador WHERE id=?', id);
  });
}