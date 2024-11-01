const library=[];
const addBtn=document.querySelector(".addBtn");
const modal=document.querySelector(".modal");
const exitBtn=document.querySelector(".close");
const submitBtn=document.querySelector("#submitBtn");
const bookContainer=document.querySelector('#bookContainer');
let bookId=0;



function Book(title,author,page){
    this.title=title;
    this.author=author;
    this.page=page;
    this.read=false;
    this.setRead=function(){
        this.read=true;
    }

}
function addBookToLib(lib,book){
    lib.push(book);
}
function display(book){
    
        console.log(book);
        const ID=bookId++;
        const bookDiv=document.createElement("div");
        const title=document.createElement("h2");
        const author=document.createElement("h3");
        const pages=document.createElement("h3");
        const deleteBtn=document.createElement("button");

        bookDiv.setAttribute("id",`book-${ID}`);
        bookDiv.classList.add("book-div");

        title.textContent=book.title;
        author.textContent=`author: ${book.author}`;
        pages.textContent=`pages: ${book.pages}`;
        deleteBtn.textContent="Delete";
        deleteBtn.onclick=function(){         
            const i=library.indexOf(book);
            library.splice(i,1);
            bookDiv.remove();        
        }
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(deleteBtn);
        bookContainer.appendChild(bookDiv);   
}

addBtn.addEventListener('click',()=>modal.style.display="block");
exitBtn.addEventListener('click',()=>modal.style.display="none");
submitBtn.onclick=function(){
    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const pages=parseInt(document.querySelector("#pages").value);
    if(title&&author&&pages&&!isNaN(pages)){
        const b=new Book(title,author,pages);
        addBookToLib(library,b);
        modal.style.display="none";
        display(b);
    }else{
        alert("You need to fill in all fields")
    }   
}
