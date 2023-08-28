class Book {
    constructor(title, quantity, value) {
      this.title = title;
      this.quantity = quantity;
      this.value = value;
    }
  }
  
  class Store {
    constructor(name) {
      this.name = name;
      this.inventory = [];
      this.earnings = 0;
    }
  
    addBook(title, quantity, value) {
      const book = new Book(title, quantity, value);
      this.inventory.push(book);
    }
  
    restockBook(title, quantity) {
      const book = this.findBookByTitle(title);
      if (book) {
        book.quantity += quantity;
        console.log(`${quantity} ${book.title} added to inventory.`);
      } else {
        console.log(`Book "${title}" not found in inventory.`);
      }
    }
  
    sellBook(title, quantity) {
      const book = this.findBookByTitle(title);
  
      if (!book) {
        console.log(`Book "${title}" out of stock.`);
      } else if (book.quantity < quantity) {
        console.log(`Only ${book.quantity} ${book.title} left in stock.`);
      } else {
        book.quantity -= quantity;
        const earnings = book.value * quantity;
        this.earnings += earnings;
        console.log(`Successful transaction. Earnings: PHP ${earnings}`);
      }
    }
  
    totalEarnings() {
      console.log(`Total earnings for ${this.name}: PHP ${this.earnings}`);
    }
  
    listInventory() {
      console.log(`Inventory for ${this.name}:`);
      this.inventory.forEach(book => {
        console.log(`Title: ${book.title}, Quantity: ${book.quantity}, Value: PHP ${book.value}`);
      });
    }
  
    findBookByTitle(title) {
      return this.inventory.find(book => book.title === title);
    }
  }
  
  
  const bookStore = new Store('BookFully');
  
  bookStore.addBook('The Great Gatsby', 10, 950);
  bookStore.addBook('To Kill a Mockingbird', 15, 500);
  bookStore.addBook('1984', 20, 250);
  callFunctions();
  function callFunctions(){
    bookStore.totalEarnings();
    bookStore.listInventory();
  }
 
  