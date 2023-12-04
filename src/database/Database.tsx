import Text from './json/Text.json';
import Buttons from './json/Buttons.json';
import Pronouns from './json/Pronouns.json';

export function listAll(table: string) {
  if (table == "text")
    return Text.content;
  if (table == "buttons")
    return Buttons.content;
  if (table == "pronouns")
    return Pronouns.content;
}

export function getById(table: string, id: number) {
  if (table == "text")
    return Text.content[id];
  if (table == "buttons")
    return Buttons.content[id];
    if (table == "pronouns")
      return Pronouns.content[id];
}