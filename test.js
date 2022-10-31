// const { getItemsOfCurrentPage, greeting } = require('./lib/getItemsOfCurrentPage.js')
// const BookMark = require('./lib/bookmark.js')
import { getItemsOfCurrentPage, greeting } from './lib/getItemsOfCurrentPage.js'
import { BookMark } from './lib/bookmark.js'
const item = [1, 2, 3, 4, 5, 6, 7, 7, 9, 9, 9, 9]
const ItemsOfCurrentPage = getItemsOfCurrentPage(item, 1, 5)
console.log(ItemsOfCurrentPage)
console.log(greeting('nine'))
const a = new BookMark('1-12-11-434-33', 100)
console.log(a.addBookMark(19))
console.log(a.addBookMark(22))
console.log(a.addBookMark(44))
console.log(a.getBookMarks())