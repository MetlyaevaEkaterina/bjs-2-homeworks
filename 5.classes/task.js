class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.NamedNodeMap = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
  
    fix() {
      let state = this.state * 1.5;
      if (state > 100){
        this.state === 0;
      } if (state > 100) {
        this.state === 100;
      } else {
        this.state = state;
      }
    }
  
    set newState(state) {
        this.newState = state;
    }
  
    get newState() {
        return this.state;
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
    constructor (name, books = []){
      this.name = name;
      this.books = books;
    }
    
    addBook(book) {
      if (this.state > 30) {
        return this.books.push(book);
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
          let book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
    }
  }