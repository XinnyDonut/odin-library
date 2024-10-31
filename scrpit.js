const library=[];


function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

}
function addBookToLib(lib,book){
    lib.push(book);
}

function display(){
    library.forEach(book=>console.log(book));
}





const b1 =new Book("hello","Jk",1988);
const b2 =new Book("harry","harvard",1908);
addBookToLib(library,b1);
addBookToLib(library,b2);
display();