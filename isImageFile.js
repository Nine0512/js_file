// function isImageFileExtension(fileName){
//     if(fileName == null || fileName == undefined){
//         return false
//     }else{
//         let fileExtension = ['.png','.jpg','.jpeg','.gif','.svg']
//         for(const i of fileExtension){
//         if(fileName.endsWith(i)){
//             return true
//         }
//     }
//     return false
//     }
// }

function isImageFileExtension(fileName){
    if(!fileName) return undefined;
    let fileExtension = ['.png','.jpg','.jpeg','.gif','.svg']
    return fileExtension.some(item=>fileName.endsWith(item))
}
console.log(isImageFileExtension('hello.png'))
console.log(isImageFileExtension('hello.jpg'))
console.log(isImageFileExtension('hello.jpeg'))
console.log(isImageFileExtension('hello.gif'))
console.log(isImageFileExtension('hello.svg'))
console.log(isImageFileExtension('hello.js'))
console.log(isImageFileExtension('hello.css'))
console.log(isImageFileExtension('hello.html'))
console.log(isImageFileExtension('hello'))
console.log(isImageFileExtension())
console.log(isImageFileExtension(null))