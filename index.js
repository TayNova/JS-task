import { catalog } from './catalog.js';

const century = 20;
const search = 'История';



//Фильтр по годам издания ИЗМЕНЕНО
let firstYear = century * 100 - 100
let lastYear = century * 100
const newCent = catalog.filter(book=>book.year > firstYear && book.year < lastYear);
    console.log(newCent);


//Фильтр по слову 
    function filterBySearch(books, search) {
    let result = [];
    for (const book of books) {
        if ((book.title.startsWith(search)) || (book.title.endsWith(search)) || (book.author.startsWith(search))) {
            result.push(book)
        }
        
    }
    return result;
}
let filteredCatalog1 = filterBySearch(catalog,search)
console.log(filteredCatalog1)



//Фильтр по языкам
const filter = (array) => {
    const arrayMap = array.reduce((lang, book) => {
      let result = []
      if (!lang.has(book.language) || lang.get(book.language) > book.language) {

        result.push
        lang.set(book.language);
      
      }
      
      return lang;
      
    }, new Map());
    
    return [...arrayMap].map(book => ({language: book[0]}));
  }
  console.log(filter(catalog))



