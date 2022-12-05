class book {
    
    constructor(isbn,totalPages = 0){
        this.isbn = isbn
        this.totalPages = totalPages
        this.bookMark = []
    }

    getBookMark(){
        return this.bookMark
    }

    addBookMark(pageNumber){
        if(pageNumber >= 1 && pageNumber <= this.totalPages){
            this.bookMark.push(pageNumber)
            return this.bookMark.length
        }
        return undefined
    }

    removeBookMark(pageNumber){
        if(this.bookMark.includes(pageNumber)){
            this.bookMark = this.bookMark.filter(x => x != pageNumber)
            return this.bookMark.length
        }
        return undefined
    }

    goTofirstBookMark(){
        return this.bookMark[0]
    }
    goToLastBookMark(){
        return this.bookMark[this.bookMark.length-1]
    }
}


let a = new book('1111111111',300)

console.log(a.addBookMark(20))
console.log(a.addBookMark(33))
console.log(a.addBookMark(66))
console.log(a.addBookMark(290))
console.log(a.addBookMark(301))

console.log(a.getBookMark())

console.log(a.removeBookMark(33))
console.log(a.removeBookMark(11111))

console.log(a.getBookMark())

console.log(a.goTofirstBookMark())
console.log(a.goToLastBookMark())
