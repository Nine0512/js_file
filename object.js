// const point1={
//     x : 2,
//     y : 3,
//     distance:function(anotherPoint){
//         return  `this.x: ${this.x}, this.y: ${this.y}`    }
// }
// const point2={
//     x : 4,
//     y : 5,
//     distance:function(anotherPoint){
//         console.log('distance function of point2 is working')
//         console.log(`this.x: ${this.x}, this.y: ${this.y}`)
//         return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
//     }
// }
// console.log(point1.distance(point2))
// console.log('-----------')
// console.log(point2.distance(point1))
// function distance(anotherPoint){
//     return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
// }
// const point1={
//     x : 2,
//     y : 3,
// }
// const point2={
//     x : 4,
//     y : 5,
// }
// point1.getDistance=distancepoint2.getDistance=distanceconsole.log(point1.getDistance(point2))
// console.log(point2.getDistance(point1))


// class Subject{
//     constructor(title='undifind'){
//         this.title = title
//     }
// }
// const int202 = new Subject('Client side I')
// console.log(int202)
// const int203 = Object.create(int202)
// console.log(int203.title)
// int203.lect = '2hrs'
// int202.lab = '2hrs'
// console.log(int203)
// console.log(int202)

// class Person{
//     constructor(firstName = 'N/A',lastName = 'N/A',dateOfBirth = new Date(Date.now())){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dateOfBirth = dateOfBirth
//     }
//     getFullName(){
//         return `${this.lastName}, ${this.firstName}`
//     }
//     getAge(){
//         let ageInMs = new Date() - new Date(this.dateOfBirth);
//         return Math.floor(ageInMs/1000/60/60/24/365)
//     }
//     isEqual(anotherPerson){
//         let name1 = (`${this.firstName} ${this.lastName}`).toLowerCase()
//         let name2 = (`${anotherPerson.firstName} ${anotherPerson.lastName}`).toLowerCase()
//         return name1 == name2
//     }
//     toString(){
//         let age = this.getAge(Person)
//         let fullname = this.getFullName(Person)
//         return `Name: ${fullname}\nAge: ${age}`
//     }
// }

// const nine = new Person('Thanwa','Plaengman','2002-12-05')
// const nine2 = new Person('thanwa','Plaengman','2002-12-05')
// const nine3 = new Person('Thanwe','Plaengman','2002-12-05')
// const nine4 = new Person('Thanwaaa','Plaengman','2002-12-05')
// console.log(nine.getFullName())
// console.log(nine.getAge())
// console.log(nine.isEqual(nine2))
// console.log(nine3.isEqual(nine2))
// console.log(nine2.isEqual(nine4))
// console.log(nine.isEqual(nine3))
// console.log(nine.toString())


// let empty = {}
// const isEmpty = (obj) => {
//     return Object.keys(obj).length === 0
// }

// const isEmpty2 = (obj) => {
//     return JSON.stringify(obj) === '{}'
// }

// console.log(isEmpty2(empty))

const book = {title : 'basic js',
            isbn : 12121212,}
const author = {fullName : {firstName : 'Samata', lastName : 'lunglang'}}
//spread operator for object
const ebook = {...book,isbn : 1111111}
// console.log(ebook)

const bookProfile = {...book,author : {...author}}
// console.log(bookProfile)

//destructoring
const {firstName,lastName} = bookProfile.author.fullName
// console.log(firstName)
// console.log(lastName)

//destructoring with rest operator
const {title, ...detail} = bookProfile
// console.log(title)
// console.log(detail)

const ebooks =[
    {
        isbn : 1,
        title : 'Basic Java'
    },
    {
        isbn : 2,
        title : 'Basic JS'
    }
]

const [,{isbn}] = ebooks
// console.log(isbn)

const add = (a,b) => {
    let sum = a + b
    return sum
}
const add2 = (a,b) => a + b

const getValue = (msg) => {
    return msg
}

const randomNumber = () => Math.random()

// console.log(add(1,2))
// console.log(add2(1,2))
// console.log(getValue('hi'))
// console.log(randomNumber())

