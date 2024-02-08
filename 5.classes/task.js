class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set newState(state) { // как вписать fix() или this.state?? -- не дает такой аргумент -- надо чтоб принимал от функции fix
      if (state < 0){
        this._newState = 0;
      } if (state > 100) {
        this._newState = 100;
      } else {
        this._newState = state;
      }
    }

    get newState() {
      return this._newState;
    }
  }
  
  class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
  }
  
  class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = 'book';
  }
  }
  
  class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state, author);
    this.type = 'novel';
  }
  } 
  
  class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state, author);
    this.type = 'fantastic';
  }
  }
  
  class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state){
    super(author, name, releaseDate, pagesCount, state, author);
    this.type = 'detective';
  }
  }
  
  class Library {
    constructor (name, books){
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }
      return null;
    }
    
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          this.books.splice(i, 1);
          return this.books[i];
        }
      }
    }
  }