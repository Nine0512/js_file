function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
    //code here
    if(!allItems)return undefined
    if(allItems.length === 0)return []
    if(rowsPerPage <= 0 || currentPage <= 0)return allItems
    let startPage = (currentPage-1)*rowsPerPage
    let endPage = currentPage*rowsPerPage
    return allItems.slice(startPage,endPage)
  }
let greeting = (person) => {
  return `Hello, ${person}`
}
// module.exports = {getItemsOfCurrentPage,greeting}
export {getItemsOfCurrentPage,greeting}