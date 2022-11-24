export function firstCursiveLetter(word: string): string {
  const firstLetterToUpperCase: string = word.split('')[0].toUpperCase();
  const restPartOfTheWord: string = word.slice(1);
  return firstLetterToUpperCase + restPartOfTheWord;
}
