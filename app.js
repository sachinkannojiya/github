// console.log("abhishek")

// setTimeout(()=>{
//     console.log("kumar")
// },3000)


// console.log("singh")
// console.log('sachin')
// console.log('sachin')
// // hello everyone my name is abhishek

// console.log("hello world");

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
// const newarray=array.map((key)=>{
//     if(key == ' '){
//         return key= 'empty string'
//     }
//     else{
//         return key
//     }
  
// })
// console.log(newarray)

// const newArray=array.slice();
// const newArray=[...array]

// console.log(newArray);

// const toArray=(...args)=>{
//     return args
// }
// console.log(toArray(1,2,3,4))




// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

//}

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)


// const person = {
//     name: 'abhishek',
//     age: 20,
//     greet(){
//         console.log(`hello ${this.name}`)
//     }

    
// };

// const printName=(personData)=>{
//     console.log(personData.name)
// }

// const printName=({name,age})=>{
//     console.log(name,age)
// }

// printName(person);

// const array=['sachin','abhishek','satyam'];
// const [array1,array2]=array;

// console.log(array1,array2);
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1



console.log(val1)

console.log(val2)



const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)
