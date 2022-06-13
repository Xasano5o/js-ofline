// Data type
// primitiv data type
// number, string, boolean, undefined, null

// noprimitiv data type
// object -> (array, function)

/////// callstack //////// heap

// number -> son 2
// string -> text '' "" ``
// boolean -> true false
// undefined -> hech narsa yoq bolsa
// null -> hech qaysi data typega otmagan bolsa
// object -> {name:'', surname:''}

// console.log() -> terminalga malumot chiqarish uchun

// primativ   1 string 2 number 3 boolean 4 undifaind 5 null
//non prmativ   objeckt arrey reg-ex

// let one =123
//  one=one2 ='hello'
// console.log( one2);

// const one ='hello world'

// console.log(one);

// var one =1.2222
// console.log(Number.parseInt("4.666"));
// console.log(Number.isInteger(6767));
// console.log(one.toFixed(3));

// // 2 yuzasini topish
// let s ;
// let a =4
// s=a**2
// console.log(s);

// 3 yuzasi va parametri
// var s ;
// var a=5, b=10
// s=a*b
// console.log(s);
// var p ;
// p=2*(a+b)
// console.log(p);

// 4 masala
// var p =3.14
// var d = 10
// l=p*d
// console.log(l);

// // 5 masala
// var v;
// var s;
// var a=10
// v=a**3
// s=6*a**2
// console.log(s);
// console.log(v);

//  6 masla
// var a=10
// var b=10
// var c=10
// var v=a*b*c
// var s=2*(a*b+b*c+a*c)
// console.log(v);
// console.log(s);
// console.log(c);

// 7masala

// const pi =3.14
// var r= 5
// l=2*pi*r
// s=pi*r**2
// console.log(s);
// console.log(l);

// 8 masala
// var a=10
// var b=10
// s = (a+b)/2
// console.log(s);

// 9 masala
// var  a=10
// var b=10
// var s=a*b/2
// console.log(s);

// 10 masala
// var a=5
// var b=5
// s=a+b
// d=a*b
// c=a**b
// console.log(s);
// console.log(d);
// console.log(c);

// 11 masala
// var a=5
// var b=5
// var d=a+b
// var s=a*b
// var x=a-b
// console.log(d);
// console.log(s);
// console.log(x);

// 12 masala
// a=10
// b=10
// c = a**2+b**2
// p=a+b+c
// console.log(c);
// console.log(p);

// var start =100
// var end =200

// console.log(parseInt( Math.random()*(start-end))+start);

// juft tuq son
// var juft = 142;
// var toq = 5;
// toq % 2 === 1;
// juft % 2 === 0 && console.log('juft son');
// juft % 2 === 1 && console.log("tuq son");

// var a=100
// var b=83
// var c=60
// var faild=45

//  b<a&& console.log('A');
// c<b&&console.log('B');
// faild<c&& console.log('JS imhonidan o`ta olmadingiz');  /

// function test(num) {
// return (
// result =100 >= num && num >= 85 ? "A": 85 >= num && num >= 65? "B": 65 >= num && num >= 45? 'C' : 'faild')
// }
// console.log(test(56));

// var arr = [
//   {id: 1, name: "Fozil"},
//   {id: 1, name: "nodir"},
//   {id: 1, name: "xasan"},
//   {id: 1, name: "roziya"},
// ];

// function getsearch(text) {
//     return arr.filter((value)=>value.name.toLowerCase().includes(text.toLowerCase()))
// }

// console.log(getsearch("O"));

// class One {
//   constructor(prop){
//     this.name=prop.name;
//     this.surname = prop.surname;
//   }
//   getFullname(){
//     console.log(this.name,'',this.surname)
//   }
// }
// class Department extends One{
//   constructor (prop){
//     super(prop)
//     this.name=prop.name
//   }
//   getName(){
//     console.log(this.name);
//   }
// }

// const user = new Department({name: 'Xasan',surname:'Abdurazakov' })

// user.getFullname()

// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//    res = birds.filter((value) => value !== geese)
// return res.sort().flat(Infinity);
// }

// console.log(
//   gooseFilter(["Mallard","Hook Bill","African","Crested","Pilgrim","Toulouse","Blue Swedish",])
// );

// function fruit(num) {

//   return (result = 10000 <= num ?"Olma" : 12000 >= num  ? "Nok" : 8000 >= num ? "behi" : "bunday meva yoq");
// }
// console.log(fruit(10000));

// function meva(test) {
//     return test =='olma' ? 10000 : test=='nok' ? 12000 : test=='behi' ? 8000 : 'bunday meva yoq'
// }
// console.log(meva('olma'));

// var name ='webbrain'
// console.log(name.slice(-1));

// var name ='webbrain'
// console.log(name['n']);

// let st1 ='webbrain'
// let st2='academy'
// let st3=''
//  st3=st1
//  st1=st2
//  st2=st3
// console.log(st1);

// var a= 'web'
// var b='brain'
// var c =''
// var c=a
// var a=b
// var b=c
// console.log(a);
// console.log(b);


// function kabis(year) {
// return year % 4==0 ? 'kabis yili' :'bu kabis yili emas'
// }
// console.log(kabis(2021));

// var one = "Fozil";
// var res = one.toLowerCase().includes("l");
// console.log(res);



// function foiz(num) {
// return num %6==0 ?'3 ga bo`linadi':num % 10== 0 ?'5 ga bo`linadi':num % 30==1 ? '10 ga bo`linadi':'faild'
// }
// console.log(foiz(6));




// function run(yur) {
// return yur % 2==1 ?'bob yutdi' :yur %2==0 ?'alice yutqazdi':'xato'
// }
// console.log(run(1));



//  let= hello=(one)=> { 
//      return 'hello world'
//     }
//     console.log(hello());

//     hello =(one)=> 'hello world'
// console.log(hello());
// arrow fuction retun uzi qaytaradi scobka qo`yilmasa va xoisted bo`lmaydi `ES6  kirib kelgan 


// -------------------------------------------
// declaration fuction xoisted bo`ladi va xarqancha marotaba chaqira olamiz va qancha marotaba chaqirgan bulsag shuncha chiqadi terminaldan javobi 1 ta fucsiyana k`op martoba chaqira olar ekanmiz declaration fucsiyada
// function one(name, age, status='hello guys') {
// console.log(`name ${ name}`);
// console.log(`age ${ age}`);
// console.log( `status ${status}`);
// console.log('---------------');

// } 
// one('xasan',20,);

// o4




// function day(soat) {
// if (soat=='10:15PM') {
//     console.log('22:15');
// }    
// else if( soat=='08:30AM') {
//     console.log('08:30');
// }
// else if(soat=='12:00PM'){
//     console.log('00:00');
// }
// else{'HECH BIR SOATGA TUGRI KELMADI '}
// }
// day('12:00PM');


// function number(one,too='guys') {
// console.log(    `hello,${one}`);
// console.log(    `hello,${too}`);

// }console.log(number());



// function cat(name) {
// return name
// }
// console.log(cat('hey'));

// exparation fuction
// let one  = function (one){
// return 'guys'
// }

//     hello =(one)=> {
//       return   'hello world'}
// console.log(one());
// console.log(hello());

// 1 declaration xoisted bo`ladi 
// 2 exparation xoisted bo`lmaydi yangi o`zgaruvchiga tenglab oliub fuction ochiladi 
// 3 arrrow yangi `ozgaruvchiga tenglab ketiladi parametr 1 ta bulsa va scobka qoyilmasa uzi return  qaytaradi va xoisted bo`lmaydi



// console.log(gradus());

// function gradus(num) {
//     if (num>=8) {
//  console.log('isiiqroq');   
// }
//    else if (num>=2) {
//  console.log('isiiq');   
// }
// else{
//     console.log('xech biriga tugri kelmadi');
// }
// }
// console.log(gradus(51));
// let obj=[
// 01234567,66666,'hello '
// ]
// one=obj
// console.log(one.splice(1,2,'hhuuuu'));

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0,  'Feb',444444,78437878783,true);
// console.log(months);
// const animals = ['elephant','elephant','elephant','elephant','elephant' ,'xasan','xaasd'];

// animals.map((valus,index)=>!valus.includes('x')? console.log(valus):console.log("x lik element"))
// // oy.slice(1,2)



// var one =['hello','guys','blabla','world']

// b=one.slice(1,-2)
// console.log(b);
// console.log(one);


// let one ='zuhr'
// b=one.split('')
// b.map((v,i)=>v)


// console.log(b);

// let str ='132346'
// b= str.split('')
// minmax.max= [...b]
// min = [...b]
// //    minmax.max = b[0];
// //     minmax.min = b[0]; 

// console.log(minmax);

// let array1 = "1 2 3 4 9 0";
// b = array1.split(' ')
 

// console.log(Math.max(...array1),Math.min(...array1))

// let arr=[1,2,3,4,5]
// let one=0
// a=arr.map((v,)=>one+=v)
// console.log(one);

// let str ='Assallomu allekum jumma muborak'.split(' ').map((value) => {
//     return value[0].toUpperCase() + value.slice(1)
// })
// console.log(str.join(' '));


// let str= '12345'
// a= str.split('')
// console.log(a);


// function getPow (numbers){
//     const result =`${numbers}`.split("").map((value)=>{
//         return Math.pow(+value, 2)
//     })
//     return +result.join("")
// }

// console.log(getPow(9119))








// let one =['hello','guys',13345]
// let on2 =['world','hey',45]
// result=one.forEach((i,v,a)=>{
//     return i 
// } 
// )

// console.log(result);

// console.log( one.concat(on2));





// const one=13244

// console.log(one);



// 7 kyu
// V A P O R C O D E
// JavaScript:
// function vaporcode(string) {
//     return string.toUpperCase().split('').filter(v=> v !== ' ').join('  ')
//   } 
// 28 days agoRefactorDiscuss
// 8 kyu
// Reversed Strings
// JavaScript:
// function solution(str){
//    b= str.split('')
// return b.reverse().join('')   

// }
// last monthRefactor
// function solution(str){
//  b= str.split('')
// return b.reverse().join('')
// }
// last monthRefactorDiscuss

// function solution(str){
//     var one = str.split('').reverse().join('')
//    return one
//     }
// last monthRefactorDiscuss
// 7 kyu
// Find the capitals
// JavaScript:
//    var capitals = function (word) {
//         var b = []
//   for (let i = 0; i < word.length; i++) {
//       if (word[i]==word[i].toUpperCase()) {
//           b.push(i)
//       }
      
//     }
//     return b
//     }
// last monthRefactorDiscuss
// 8 kyu
// Double Char
// JavaScript:
// function doubleChar(str){
//         var one  = ''
//         for (let i = 0; i < str.length; i++) {
           
//                one+=str[i]+str[i]+""
//            }
            
        
      
//           return one
      
      
//           }
// last monthRefactorDiscuss
// 7 kyu
// Sort Numbers
// JavaScript:
// function solution(nums){
    
// if(nums==null) {
//     return []

// }
// return nums.sort((a,b)=> a-b)
//    }
// last monthRefactor
// const solution = nums => nums == null ? [] : nums.sort((a, b) => a - b)
// 2 months agoRefactorDiscuss
// 8 kyu
// Convert a String to a Number!
// JavaScript:
// var stringToNumber = function(str){

//   return +str
// }
// last monthRefactorDiscuss
// var stringToNumber = function(str){
//   return +str;
// }
// 2 months agoRefactor
// 7 kyu
// Sort array by string length
// JavaScript:
// function sortByLength (array) {
//    var b = array.sort((a,b)=>a.length-b.length)
//     return b
//     }
// last monthRefactorDiscuss
// 7 kyu
// Shortest Word
// JavaScript:
// function findShort(s){
//     var res=[]
//     var a= s.split(' ')
//     var b=a.map((i)=>{
//         res.push(i.length)
//     })
//     return res.sort((a,b)=>a-b)[0]
     
//    }
// last monthRefactorDiscuss
// 7 kyu
// Highest and Lowest
// JavaScript:
// function highAndLow(numbers){
//      var num=numbers.split(" ")
//      console.log(num);

//     var res=[]
//     for (let i = 0; i < num.length; i++) {
//         res.push(+num[i])
        
//     }
//     var l=res.sort((as,b)=>as-b)
//     return `${l[res.length-1]} ${l[0]}`
    
    
//     }
// last monthRefactorDiscuss
// 7 kyu
// Remove the minimum
// JavaScript:
// function removeSmallest(numbers) {
//     var a= Math.min(...numbers)
//     var b=numbers.indexOf(a)

//     var res=[]
//     for (let i = 0; i < numbers.length; i++) {
//         if(i!==b){
//             res.push(numbers[i])
//         }
        
        
//     }
//     return res

// }
// last monthRefactor
// 8 kyu
// Reversing Words in a String
// JavaScript:

// function reverse(string){
// b = string.split(' ').reverse().join(` `)
// return b
// }
// last monthRefactorDiscuss
// 8 kyu
// Convert a string to an array
// JavaScript:
// function stringToArray(string){
// return string.split(' ')

// }
// last monthRefactor
// function stringToArray(string){
// return string.split(' ')
//   // code code code

// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Remove exclamation marks
// JavaScript:
// function removeExclamationMarks(s) {
//   return s.replace(/!/g,'' )
// }
// last monthRefactorDiscuss
// 8 kyu
// Array plus array
// JavaScript:
// function arrayPlusArray(arr1, arr2) {
//   b= arr1.concat(arr2) 
//   return  b.reduce((a,b)=> a+b)
//    }
// last monthRefactorDiscuss
// 8 kyu
// Sentence Smash
// JavaScript:
// function smash (words) {
//    return words.join(' ')
// };
// last monthRefactorDiscuss
// 4 kyu
// Sum Strings as Numbers
// JavaScript:
// function sumStrings(a,b) { 
//   if ( b.length > a.length ){
//     var temp = a ;
//     a = b ;
//     b = temp ;
//   }
//   while ( b.length < a.length ){
//     b = '0' + b ;
//   }
//   a = a.split('').reverse().join('');
//   b = b.split('').reverse().join('');
//   var c = '' , i = 0 ;
//   var carry = 0 ;
//   for ( var i = 0 ; i < a.length ; i ++ ) {
//     var result = parseInt(a[i]) + parseInt(b[i]) + carry ;
//     carry = 0 ;
//     if ( result >= 10 ){
//       result -= 10 ;
//       carry ++ ;
//     }
//     c = c + result;
//   }
//   if ( carry !== 0 ){
//     c = c + '1' ;
//   }
//   while ( c[c.length-1] === '0' ){
//     c = c.slice(0,c.length-1) ;
//   }
//   c = c.split('').reverse().join('') ;
//   return c ;
// }
// last monthRefactorDiscuss
// 8 kyu
// Jenny's secret message
// JavaScript:
// function greet(name){
//   var one = name.padStart(9,'hello ')
//     one=    name.padStart(10,'hello ')
//       one = name.padStart(12,'hello ')
//      one = "Hello, " + name + "!";
//      if(name === "Johnny")
//        one = "Hello, my love!";
//   return one
//     }
// last monthRefactorDiscuss
// 8 kyu
// Count of positives / sum of negatives
// JavaScript:
// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return []

//   const positives = input
//     .filter(number => Math.sign(number) === 1)
//     .reduce(a => a + 1, 0)

//   const negatives = input
//     .filter(number => Math.sign(number) === -1)
//     .reduce((a, b) => a + b, 0)

//   return [positives, negatives]
// }
// last monthRefactorDiscuss
// 8 kyu
// Remove String Spaces
// JavaScript:
// function noSpace(x){
//  return x.split(' ').join('')
// }
// last monthRefactorDiscuss
// 8 kyu
// Reversed Words
// JavaScript:
// function reverseWords(str){
//      return str.split(' ').reverse( ).join(` `)
//   }
// last monthRefactorDiscuss
// 8 kyu
// Grasshopper - Summation
// JavaScript:

// var summation = function (num) {

// var str =0
//     for (let i = 0; i <= num; i++) {
// str+=i
        
// }
// return str

// }
// last monthRefactor
// 7 kyu
// Isograms
// JavaScript:
// function isIsogram(str){
//   var one  = ''
//   for (let i = 0; i < str.length; i++) {
//      if (!one.includes(str[i].toLowerCase())) {
//          one+=str[i].toLowerCase()
    
//         }
//   }
// if (one=='' ) {
//     return true
// }

//     return str.length==one.length


//     }
// last monthRefactorDiscuss
// 8 kyu
// Sum Mixed Array
// JavaScript:
// function sumMix(x){
//   return x.reduce((x, y) => Number(x) + Number(y), 0);
// }
// last monthRefactorDiscuss
// 8 kyu
// Count by X
// JavaScript:
// function countBy(x, n) {

// arr= []

// for(i=x; i<=x*n; i+=x ){
// arr.push(i)
 
// }
// return arr


// }
// last monthRefactor
// 8 kyu
// Is it even?
// JavaScript:
// function testEven(n) {
//    return (n%2 == 0)? true : false
// }
// testEven(1)
// last monthRefactorDiscuss
// 8 kyu
// Difference of Volumes of Cuboids
// JavaScript:
// function findDifference(a, b) {

//   let getA = a.reduce((a,b)=> a*b)
//   let getB = b.reduce((a,b)=> a*b)

//   return Math.abs(getA - getB)

// }
// last monthRefactorDiscuss
// 6 kyu
// IP Validation
// JavaScript:
// function isValidIP(str) {
//   var arr = str.split('.')
//   arr=arr.filter((i)=> { 
//     return  !! (i >= 0 && i <=255 && i==String(+i))
// })
//   return arr.length==4
// }
// last monthRefactorDiscuss
// 6 kyu
// Detect Pangram
// JavaScript:
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("").every(function(x){
//       return string.indexOf(x) !== -1;
//   });
// }
// last monthRefactorDiscuss
// 8 kyu
// Cat years, Dog years
// JavaScript:
// var humanYearsCatYearsDogYears = function(humanYears) {

//   if (humanYears === 1) {return [1, 15, 15];}
//   if (humanYears === 2) {return [2, 24, 24];}
  
//   return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)];
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Opposite number
// JavaScript:
//  const opposite = n => n-n-n
// 2 months agoRefactorDiscuss
// 7 kyu
// Vowel Count
// JavaScript:
// function getCount(str) {
//   let strStr = 'aeuio'
//   return str.split('').filter((v)=> strStr.includes(v)).length;
// }
// 2 months agoRefactorDiscuss
// 6 kyu
// Assemble string
// JavaScript:
// function assembleString(arr){
//   let r = []
//   for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//       if(i==0) r.push(arr[i][j])
//       if(r[j] == '*' || arr[i][j] !== '*') r[j] = arr[i][j]
//     }
//   }
//   return r.map(x=>x=='*' ? '#' : x).join('')
// }
// 2 months agoRefactorDiscuss
// 6 kyu
// Who likes it?
// JavaScript:
// function likes(names) {
//     if (names.length == 0) return `no one likes this`
//     if (names.length == 1) return  `${names[0]} likes this`
//     if (names.length == 2) return `${names[0]} and ${names[1]} like this`
//     if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// };
// 2 months agoRefactorDiscuss
// 8 kyu
// String repeat
// JavaScript:
// function repeatStr (n, s) {
//     return s.repeat(n)
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Remove First and Last Character
// JavaScript:
// function removeChar(str){
// return str.slice(1,-1)

// };



// 2 months agoRefactorDiscuss
// 8 kyu
// Return Negative
// JavaScript:
// function makeNegative(num) {
//   if(num === 0) {
//     return 0
//   }
//   return -Math.abs(num)
// } 
// 2 months agoRefactorDiscuss
// 5 kyu
// Simple Pig Latin
// JavaScript:
// function pigIt(str){
//  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Basic Mathematical Operations
// JavaScript:
// function basicOp(operation, value1, value2)
// {
//   return eval(`${value1} ${operation} ${value2}`)
// }
// 2 months agoRefactor
// function basicOp(operation, value1, value2){
//   if(operation == '+') return value1 + value2
//   if(operation == '-') return value1 - value2
//   if(operation == '*') return value1 * value2
//   if(operation == '/') return value1 / value2
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Sum of positive
// JavaScript:
// function positiveSum(arr) {
//   let result = 0;
//   arr = arr.filter((v) => v > 0);
//   arr.length > 0 ? arr.map((v) => (result += v)) : result = 0
//   return result;
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// String cleaning
// JavaScript:
// function stringClean(s){
//   return s.replace(/[0-9]/g, "");
// }
// 2 months agoRefactor
// 8 kyu
// Convert number to reversed array of digits
// JavaScript:
// function digitize(n) {
//   var b = n
//     .toString()
//     .split("")
//     .map((v) => +v)
//     .reverse();

//   return b;
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.
// JavaScript:
// function boolToWord( bool ){
//   return bool ?   'Yes':'No'
// }
// 2 months agoRefactorDiscuss
// 6 kyu
// Counting Duplicates
// JavaScript:
// function duplicateCount(text){

//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
// 2 months agoRefactorDiscuss
// 8 kyu
// Simple multiplication
// JavaScript:
// function simpleMultiplication(number) {
// return number % 2 == 0 ? number * 8 : number * 9;
// }
// 2 months agoRefactor
// 6 kyu
// Your order, please
// JavaScript:
// function order(words){
//  return words.split(' ').sort(function (a, b) {
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' ');
// }