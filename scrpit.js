const library=[];
const addBtn=document.querySelector(".addBtn");
const modal=document.querySelector(".modal");
const exitBtn=document.querySelector(".close");
const submitBtn=document.querySelector("#submitBtn");
const bookContainer=document.querySelector('#bookContainer');
let bookId=0;



function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=false;
    this.toggleRead=function(){
        return this.read=!this.read;
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
        const btnDiv=document.createElement("div");
        const deleteBtn=document.createElement("button");
        const readBtn=document.createElement("button");

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

        readBtn.textContent=book.read?"Read":"Not Read";
        readBtn.addEventListener('click',e=>{
            let status=book.toggleRead();
            readBtn.textContent=status?"Read":"NotRead";
        })
        btnDiv.appendChild(deleteBtn)
        btnDiv.appendChild(readBtn)
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        // bookDiv.appendChild(deleteBtn);
        // bookDiv.appendChild(readBtn);
        bookDiv.appendChild(btnDiv);
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


display(new Book("Harry Potter and the Philosopher's Stone","J.K Rowling",223));
display(new Book("Harry Potter and the Order of the Phoenix","J.K Rowling",766));
