//1,2
const bigNumber: (num: number, num2: number) => number = (num, num2) => {
  const max = Math.max(num, num2);
  console.log(max);
  return max;
};
// bigNumber(39, 9); //39

//3
const evenOrOdd: (num: number) => string = (num) => {
  if (num % 2 === 0) return `${num} is even`;
  return `${num} isn't odd`;
};
// console.log(evenOrOdd(12345678)); //12345678 is even

//4
const len: (str: string) => number = (str) => {
  return str.length;
};
// console.log(len("Good luck with your project")); //27

//5
const arr_len_num: (num: number) => number[] = (num) => {
  let end = 0;
  const myArray = [];
  while (num >= end) {
    myArray.push(end);
    end++;
  }
  return myArray;
};
// console.log(arr_len_num(8)); //[0, 1, 2, 3, 4, 5, 6, 7, 8]

//6
const bigNumberInArr: (arr: number[]) => number = (arr) => {
  const max = Math.max(...arr);
  return max;
};
// console.log(bigNumberInArr([1, 5, 3, 9, 34, 6, 23])); //34

//7
type Person = {
  Name: string;
  Age: number;
  isStudent: boolean;
};
const person1: Person = {
  Name: "yaakov",
  Age: 27,
  isStudent: true,
};
const person2: Person = {
  Name: "david",
  Age: 13,
  isStudent: false,
};

//8
const printPerson: (person: Person) => void = (obj_person) => {
  Object.values(obj_person).forEach((element) => {
    const value = String(element);
    console.log(value);
  });
};
// printPerson(person1); //'yaakov', '27', 'true'

//9
const isMinor: (person: Person) => boolean = (person) => {
  if (person.Age < 18) return true;
  return false;
};
// console.log(isMinor(person1));

//10
interface Book {
  Title: string;
  Author: string;
  Year: number;
}

const book1: Book = {
  Title: "hello typescript",
  Author: "yaakov m",
  Year: 2023,
};
const book2: Book = {
  Title: "hello javascript",
  Author: "yaakov m",
  Year: 2022,
};

//11
type Reader = {
  person: Person;
  favoriteBook: Book;
};

const reader1: Reader = {
  person: person1,
  favoriteBook: book1,
};
const reader2: Reader = {
  person: person2,
  favoriteBook: book2,
};
const arrReader = [reader1, reader2];

//12
const oldReader: (arr: Reader[]) => string = (arr) => {
  let nameOldReader = arr[0].person.Name;
  let ageOldReader = arr[0].person.Age;
  arr.forEach((reader) => {
    if (reader.person.Age > ageOldReader) nameOldReader = reader.person.Name;
    ageOldReader = reader.person.Age;
  });
  return nameOldReader;
};
console.log(oldReader(arrReader));

//13
const oldBook: (arr: Reader[]) => number = (arr) => {
  let nameOldBook = arr[0].favoriteBook.Title;
  let yearOldBook = arr[0].favoriteBook.Year;
  arr.forEach((book) => {
    if (book.favoriteBook.Year < yearOldBook)
      nameOldBook = book.favoriteBook.Title;
    yearOldBook = book.favoriteBook.Year;
  });
  return yearOldBook;
};
console.log(oldBook(arrReader));
