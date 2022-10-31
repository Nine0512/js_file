// const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
class BookMark {
  //code here
  constructor(isbn,totalPage = 0){
    this.isbn = isbn
    this.totalPages = totalPage
    this.bookMarks = []
  }
  addBookMark(pageNumber){
    if(pageNumber>=1 && pageNumber<=this.totalPages)
      this.bookMarks.push(pageNumber)
    return this.bookMarks.length  
  }
  removeBookMark(pageNumber){
    if(this.bookMarks.includes(pageNumber)){
      let a = this.bookMarks.filter(x => x == pageNumber)
      this.bookMarks = this.bookMarks.filter(x => x != pageNumber)
      return a[0]
    }else{
      return undefined
    }
  }
  goToFirstBookMark(){
    return this.bookMarks[0]
  }
  goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]
  }
  getBookMarks(){
    return this.bookMarks
  }
}
// module.exports = BookMark
export {BookMark}