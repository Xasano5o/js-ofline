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

// function squareDigits(num){

//     var str = num + ''
//     var res = ''

//     }

//   console.log(squareDigits(9119));

// var one ='9998#$%'

// console.log(one.match(/[0-9]/g));
// 1 Symbol va BigInt data type xaqida yozib bering
// 2 ES 6 metodlarda 5 ta yozib bering
// 3 string metodlardan 7 ta yozing
// 4 math xammasini yozib nma vazifada ishlashini yozing
// 5 arrow fuction blna experation fuction  qanday farqlar va qanday yaxwi taraflar
// 6 arreydan string o`taqazing var one =['hello world ']
// 7 eval() fucsiya nma vazifa bajaradi
// 8 slice b-n splice nma farqlari bor
// 9 object arrey haqida tuliq gpirib bering
// 10 forEach() B-N filter vazifasi
// 11 if else switch case trunary xaiqda yozib  bering
// 12 default  qanday xolad
// 13 cllas nma  va this nma vazifa bajaradi  va cllasni qanday tutib olamiz cllasga bergan ma`lumotlarimzni
// 14 crud xaqida gprib bering crud nech turda malumotlarni o`zgartira oladi
// 15 collbek fuction promise
// 16 var one ='hel145l5o string ichidagi numberlarni yi`gindisi
// 17 100 soni ichidagi faqad juft sonlar 0,2,4,6,8,10,
// 18 var one 'HEllo WOrld' katta xarfga teng bo`lgan xarflar chiqsin
// 19Array ichidagi eng katta qiymatdan keyingi sonni chiqarib beruvchi funksiya yozing
// Var arr = [3,9,22,1,8,123,4,77];
//  Output = 77;
// 20 var one 'web brain academy abdurazakov xasan o`qiydi' string ichida berilgan sozlarni har birini length aniqlang

// if(one<100){
//     console.log(true);
// }
// else{console.log(too<100,false);  }

// const obj = {
//     name: 'WebBrian',
//     surname: 'Academy',
//     status: 'IT',
//    };
//    const status = 'name'
//    console.log(obj.status);

// for (let i of obj) {
//     console.log(i);
//    }

// const obj = {
//     name: 'WebBrian',
//     surname: 'Academy',
//     status: 'IT',
//    };
//    Object.values(obj).map(([value, key], index) => {
//     console.log(value);
//    });

// const students = [
//   { name: "Eshmat", surname: "Eshmatov", status: "student" },
//   { name: "Toshmat", surname: "Toshmatov", status: "student" },
//   { name: "Gulmat", surname: "Gulmatov", status: "student" },
//   { name: "Holmat", surname: "Holmatov", status: "student" },
// ];
// const search = (input) => {
//   return students.filter((value) => value.name.toLowerCase().includes(input));
// };
// console.log(search("esh"));

// // esh so'zi faqat name: Eshmat da bor holos
// //
// // [
// //   { name: 'Eshmat', surname: 'Eshmatov', status: 'student' },
// // ]
// search("ov"); // ov so'zi hamma surname da bor
// //
// // [
// //   { name: 'Eshmat', surname: 'Eshmatov', status: 'student' },
// //   { name: 'Toshmat', surname: 'Toshmatov', status: 'student'
// //   { name: 'Gulmat', surname: 'Gulmatov', status: 'student' },
// //   { name: 'Holmat', surname: 'Holmatov', status: 'student' },
// // ]

// const maxNum = (num) => num.sort((a, b) => a - b)[num.length - 2];
// console.log(maxNum([3,9,22,1,8,123,4,77,784,7645, 7645]));
// one ='12+2 -2 * 2 / 2'
// console.log(eval(one));

// function getNumber(a = 0, b = 1) {
//     console.log(a + b);
//    }
//    console.log(getNumber(3));
// function getNumber(a = 0, b = 1) {
//     return b;
//    }
//    console.log(getNumber(3) * 3);

// Quyidagi arraydan duplicate(bir turdagi) elementlarni chiqarib yuboruvchi funksiya tuzing. New Sets dan foydalanilmasin!
//  array = [0,1,2,2,3,4,5,5]
//  array.map((value)=>i)

// console.log(`${2}+${2}`)
// // console.log(`${2}+${2}` * 3);
//  var one =  [1, 30, 39, 29, 10, 4]
// var too= [1, 30, 39, 101, 10, 4]
// if(one) {one>100 ,true
//     console.log(one);

// }
// else {
//  too<100,false
//  console.log(too);
// }

// const obj = {
//     name: 'WebBrian',
//     surname: 'Academy',
//     status: 'IT',
//    };
//    const status = 'xaasas'
//    console.log(obj.status);

// for (let i of obj) {
//     console.log(i);
//    }

// var str = 'true';
// switch (str) {
// case 'true':
// console.log('Web');
// case true:
// console.log('Brain');}
// getName = (a=1) => (
//     a+1
//  )
//  console.log(getName(2));
// let array = [0, 1, 2, 2, 3, 4, 5, 5];

// let newArr = [];
// array.map((item) => {
//   if (!newArr.includes(item)) {
//     newArr.push(item);
//   }
// } )
// console.log(newArr);

// arr = [1, 2, 3];

// const [bir, ikki, uch] = arr

// const user = { name: "hasan", surname: "Abdurazakov" };

// const {name  } = user

// function kabisa (year){
//     return year % 4 === 0 ? true: false;
// }
// console.log(kabisa(2024));

// function assembleString(array){
//     var res ='*'
//      for (let index = 0; index < array.length; index++) {
//   if( array ) {

//   }

//      }
//   }
//   assembleString( [
//     "a*cde",
//     "*bcde",
//     "abc*e"]

// function binToDec(bin){
//     return bin.split(" ").toString(bin)
//   }
//   console.log(bin);

// Number.parseInt(x, base);  // base 2, 10 16
// Number.parseInt(string)
// console.log(Number);log

// function solve(n) {
//   let character = 0;
//   let upper = 0;
//   let lower = 0;
//   let num = 0;
//   let arr = n.split("");
//   let test = arr.map((value) => {
//     if (value.match(/[A-Z]/g)) {
//       upper++;
//     } else if (value.match(/[a-z]/g)) {
//       lower++;
//     } else if (value.match(/\W/g)) {
//       character++;
//     } else if (value.match(/[0-9]/g)) {
//       num++;
//     }
//   });
//   let result = [upper, lower, num, character];
//   return result;
// }
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));

// const solve = (str) => (
//   [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
//   );

// ------------------------------------------------------------------------------------------------------------------------------------

// 0larni olib tashlaydigan funksiya yarating

// // •  removeLeadingTrailing("230.000") ➞ "230"
// // •
// // •  removeLeadingTrailing("00402") ➞ "402"
// // •
// // •  removeLeadingTrailing("03.1400") ➞ "3.14"
// // •
// // •  removeLeadingTrailing("30") ➞ "30"

// 2;
// Stringdagi qiymatlarni bir biriga solishtiradigan funksiya yarating.
// bir birga teng bulsa true yuqsa false qaytarsin

// // testJackpot("@@@@@@") ➞ true

// // testJackpot('aaa') ➞ true

// // testJackpot("SSSSS"]) ➞ true

// // testJackpot("asdf"]) ➞ false

// // testJackpot("asdeffef") ➞ false

// 3;
// // Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// Berilgan parametrni teskarisiga urgirib uzini teskarigi qyimati bilan birga qaytarib beradigan funksiya yarating
// // To illustrate:
// // 123
// // We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// // reverseAndNot(123) ➞ 321123

// // reverseAndNot(152) ➞ 251152

// // reverseAndNot(123456789) ➞ 987654321123456789

// 4;
// Katta harf bilan harf boshlansa undan oldin probel kriitib beradigan funksiya yarating

// // insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// // insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

// function string(a){
// var res=""

// for (let i = 0; i < a.length; i++) {
//   if(!(res.includes(a[i]))){
//     res+=a[i]

//   }
// }
// console.log(res);
// return res==a[0]

// }
// console.log(string('sssssssduiahduyawdyaugd'));

// function rew (num){
//   var a=num+""
// var c=a.split("").reverse().join("")
// return a+c
// }
// console.log(rew(123));

// one ='2874'

// console.log(one.split(" "));

// Katta harf bilan harf boshlansa undan oldin probel kriitib beradigan funksiya
// // insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// function All(str) {
//   var res = "";
//   var c = str.split("");
//   for (let i = 0; i < c.length; i++) {
//     if (c[i] == c[i].toUpperCase()) {
//       res += " " + c[i];
//     } else {
//       res += c[i];
//     }
//   }
//   return res.trim();
// }
// console.log(All("MarvinTalksTooMuch"));

// 1. str1 va str2 stringlar berilgan agar str1 va str2 uzunligi bir biriga teng bolsa str1 ni aks holda str2 ni qaytaruvchi funksiya tuzing

// function str (a,b){
//   return a==b ? a:b;
// }
// console.log(str('xasan','sardor'));

// function str (num ){
//  let b;
//   num==' ' ? b = true: b = false
//  return b
//   }
// console.log((' '));

// const binaryArrayToNumber = arr => {
//   let b =arr.join('')

//   };
//   console.log(binaryArrayToNumber([0, 0, 0, 1]))

// function makeUpperCase(str) {
//   let a=str.toString().toUpperCase()
// return a
// }
// console.log(makeUpperCase('xasan ccxx'));

// function abbrevName(name){
//   name = name.trim()

// }
// console.log(abbrevName('RIQEERku OHNzwUpa'));

// let a = 'RIQEERku OHNzwUpa';

// a = a.trim().split(' ');
// let result = '';
// for (let i = 0; i < a.length; i++) result = result + a[i][0] + '.';
// result = result.slice(0, -1)

// console.log(result);

// rldese

// doTest('C', 'B', 1);
//   doTest('b', 'a', 1);
//   doTest('d', 'd', 1);
//   doTest('A', 's', 0);
//   doTest('c', 'B', 0);
//   doTest('b', 'Z', 0);
//   doTest('\t', 'Z', -1);
//   doTest('H', ':', -1);

//  / }
// console.log(digitize(348597,) );

// function name(a,b) {
// return   !name   % 2 === 0 ? 'juft' : 'tuq'
// }
// console.log(name(66,));

//   348597 => [7,9,5,8,4,3]

// function digitize(n) {
//   var b = n
//     .toString()
//     .split("")
//     .map((v) => +v)
//     .reverse();

//   return b;
// }
// console.log(digitize(348597));

// 348507  => [7,9,5,8,4,3]

// function one(test) {
//   if ((test) => 100 <= 85) {
//     ("siz o`tiz");
//   } else if ((test) => 85 <= 50) {
//     ("yaxshi");
//   } else (test) => 50 <= 0;
//   return one;
// }
// console.log(one(100));

// function string(str) {
//   return str.replace(/[0-9]/g, "");
// }
// console.log(string("This looks5 grea8t!"));

//  -> 'This looks great!'

// function name(o) {
//   return o.toLowerCase().includes("l");
// }
// console.log(name("Fozil"));

// function sumTwoSmallestNumbers(numbers) {
//   let min1 = numbers.sort((a, b) => b - a).length - 1;
//   let min2 = numbers.Math.min.apply(null, );
//   return min2;
// }
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// var st1 = "one";
// var st2 = "Too";
// var st3;
// st3 = st1;
// st1 = st2;
// st2 = st3;

// console.log(st1,st2);

// function sumTwoSmallestNumbers(numbers) {
//   let min1 = numbers.sort((a, b) => b - a);
//   let min2 = numbers.Math.min.apply(null, );
//   return min2;
// }
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// juft tuq so chiqarish

// function Number(num) {
//    return  num % 2==0 ? 'juft' : 'tuq'

// }

// console.log(Number(3));

// function String(str) {
//     if (str >= 100) return 'full'
//     else if (str >= 80 && str < 100) return 'alo'
//     else if (str <= 50) return 'filed'
// }
// console.log(String(100));

// function string(str) {
//   let splitted = str.split(" ");
//   const result = splitted.map(
//     (value) => value[0].toUpperCase() + value.slice(1)
//   );
//   return result.join(" ");
// }
// console.log(string('hello world'));

// console.log(string("hello world"));
// // /////////////// "2 5 7 22 4 6" string berilgan, sort qilish kerak = va natija "2 22" chiqadi

// function deleteItem(name) {
//   let arr = ["olma", "nok", "anor", "anor", "olma", "banan", "kiwi"];
//   const result = arr.filter((value) => value !== name);
//   return result;
// }

// console.log(deleteItem("olma"));

// function number(daraja) {
//   let result = `${daraja}`
//     .split("")
//     .map((value) => Math.pow(+value, 2))
//     .join("");
//   return +result;
// }

// console.log(number(1234));
// // 212 4114

// let str = "Web"
// let str2 = "Brain"

// // Ikkita stringni o'rnini almashtir
// let str1 = "Web";
// let str2 = "Brain";
// str1 = str1 + str2; // webbrain
// str2 = str1.slice( 0, str1.length - str2.length); //brain
// str1 = str1.slice(str2.length); // web
// console.log(str1, str2);

// function getCount(str) {
//   let result = str.match(/[a,e,u,i,o]/g).length;
//   if () {
//     return null;
//   }
//   return result
// }
// console.log(getCount("sssss"));

// function positiveSum(arr) {
//   let result = 0;
//   arr = arr.filter((v) => v > 0);
//   arr.length > 0 ? arr.map((v) => (result += v)) : result = 0
//   return result;
// }

// console.log(positiveSum([-1, -2, 3, -4, -5]));

// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum(),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

// function string (str) {
//   b = str.replace('webBrain' ,'itbrain' )
//   return  b.repeat( 10)
// }
// console.log(string('webBrain '));

// function string(str) {
//  return    str % 2==0 ? 'juft' : 'tuq'
// }
// console.log(string());

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }

// function countSheeps(str) {
//  return  -arrayOfSheep
// }
// // console.log(countSheeps(-9));

// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ]));

// function string (str) {
//   return  str.parseInt()
// }

// function removeChar(str){
//     return str.slice(1,-1)

//     };

//     console.log(removeChar('eloquent'));

// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ooopsss'), 'oopss');

// let str = "315633";
// let res = str.length / 2;
// let newResult = str.slice(res - 1, res + 1).split("").reduce((value,item)=>+value+ +item,0)
// let a = newResult/2
// console.log(a);

// var str = "22:00AM";
// var newData = "";
// if (str.includes("P")) {
//   newData += +str.match(/[1-9]/g).join("") + 12 + ":00";
// } else {
//     console.log(str);
// }
// // console.log(newData);

// CLLLVLVLVLD;SLNUFPJIG

// function repeatStr (n, s) {
//     return s.repeat(n)
//   }
// console.log(repeatStr(5, '*'));

//   repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function likes(names) {
//     if (names.length == 0) return `no one likes this`
//     if (names.length == 1) return  `${names[0]} likes this`
//     if (names.length == 2) return `${names[0]} and ${names[1]} like this`
//     if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// };

// console.log(likes(["Jacob", "Alex"] ));
// []                                -->  "no one likes this"
// ["Peter"]                        -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, Joh and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//     if (names.length == 0) return no one likes this
//     if (names.length == 1) return ${names[0]} likes this
//     if (names.length == 2) return ${names[0]} and ${names[1]} like this
//     if (names.length == 3) return ${names[0]}, ${names[1]} and ${names[2]} like this
//     if (names.length >= 4) return ${names[0]}, ${names[1]} and ${names.length - 2} others like this
// };


// function solution(str){
//     var one = str.split('').reverse().join('')
//    return one
//     }
// console.log(solution('hello'));


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

// console.log(isIsogram("Dermatoglyphics"));


// var summation = function (num) {

// var str =0
//     for (let i = 0; i <= num; i++) {
// str+=i
        
// }
// return str

// }

// console.log(summation(8));


// class SmallestIntegerFinder {
//     constructor(args){
//         this.args = args
//     }
//     findSmallestInt() {
//         return this.args.sort((a,b)=>a-b)[0]
//     }
//   }
// let resalt = new SmallestIntegerFinder([78,56,232,-12,8]);
// console.log(resalt.findSmallestInt());

// function greet(name){
//  return name.padstart()

//   }


// "Hello, <name> how are you doing today?"

// function reverseWords(str){
//     return str.split(' ').reverse( ).join(` `)
//   }

//  console.log( reverseWords("hello world!"));

// function noSpace(x){
//     return x.split(' ').join('')
//    }

//    console.log(noSpace('hf cg'));

// function greet(name){
//   var one = name.padStart(9,'hello ')
//     one=    name.padStart(10,'hello ')
//       one = name.padStart(12,'hello ')
//      one = "Hello, " + name + "!";
//      if(name === "Johnny")
//        one = "Hello, my love!";
//   return one
//     }

// console.log(greet('jim '));


// function squareOrSquareRoot(array) { 
  
//     // var one = Math.sqrt(array)
//    return   typeof array.join('').Number
//     }

//     console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1]));

// function arrayPlusArray(arr1, arr2) {
//   b= arr1.concat(arr2) 
//   return  b.reduce((a,b)=> a+b)
//    }

//    console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

// function correct(string)
// {
//  for (let i = 0; i <= string.length; i++) {
//      if (string[i]==string[i] && 'I') {
         
//      }
//      return string
//  }
// }
// console.log(correct("51NGAP0RE")); 

// function repeatStr (n, s) {
      
//     return b.repeat(3)
//   }
//   console.log(  repeatStr('hello'))

// function reverse(string){
// b= string.split(' ').reverse().join()
// return b
// }

// console.log(reverse('hello world'));

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
// console.log(removeSmallest([5, 3, 2, 1, 1, 4]));



// function solution(str){
//  b= str.split('')
// return b.reverse().join('')
// }


//  console.log(solution('world'));



// function highAndLow(numbers){
//      var num=numbers.split(" ")
//      console.log(num);

//     var res=[]
//     for (let i = 0; i < num.length; i++) {
//         res.push(+num[i])
        
//     }
//     var l=res.sort((as,b)=>as-b)
//     return `${l[res.length-1]}${l[0]}`
    
    
//     }
//     console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


// function findShort(s){
//     var res=[]
//     var a= s.split(' ')
//     var b=a.map((i)=>{
//         res.push(i.length)
//     })
//     return res.sort((a,b)=>a-b)[0]
     
//    }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// function sortByLength (array) {
//    var b = array.sort((a,b)=>a.length-b.length)
//     return b
//     }


// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// function solution(nums){
//     b = nums.sort((a,b)=> a-b)
// if(b==null) {
//     return []

// }
// return b
//    }

//    console.log(solution([1,2,3,10,5]));

// function squareOrSquareRoot(array) { 
//     res = []
//     for (let i = 0; i < array.length; i++) {
//         const ele = array[i];
//         if(Math.sqrt(ele) == Math.floor(Math.sqrt(ele))){
//               ele = Math.sqrt(ele)
//         }else{
//            ele =   Math.pow(ele, 2)
//         }
//         return ele
//     }
//     // return res
//     }

//     console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));

// var arr=['olme','nok','behi','nok']

// function furits(meva) {
//   return  one=meva.filter((v)=>([...v]!==[...v]))
// }
// furits('nok')
// console.log(furits(['olme','nok','behi','nok']));


// function code(b) {
//     a =  b.replace('AAABBCCC', 'A3B2C3',)
//     return a
// } 

// console.log(code("AAABBCCCA"))

// function arrey(b) {
//  var  a=Math.max(...b)
//   var d =Math.min(...b)
// ''
// return   a, d

// }
// console.log(arrey([10,78,100,500,980]));


// var number = [10,78,100,500,980]
// var  a=Math.max(...number)
// var d =Math.min(...number)
// console.log(a,d);

// var arr = [1, 2, 3];
// var max = Math.max(...arr);

// console.log(max);

// var arr = ['olma', 'nok','olma' ,'banan','qovun']
// function delet(name) {
//   b = arr.filter((v)=>v!==name)
// return b
// }

// console.log(delet('banan'));


// var f='#fozil#web#brain#'

// console.log( f.replace(/#fozil#web#brain#/g, "(fozil)web(brain)"));
// function name(str) {
//     var resalat = ' '
//     for (let i = 0; i < str.length; i++) {
// if (!resalat.includes(str[i].toLowerCase()) ){
//     resalat += str[i].toLowerCase()
// }
        
// }  
// return resalat

// }

// console.log(name('SsssSARdddddrrRDddoOOOOoR'));


// function number(num) {
//     if(num.length%2==1){
//         return num[Math.floor(num.length/2)]
//     }else{
//         return num[(num.length/2)-1]+num[(num.length/2)]
//     }
 
// }
// console.log(number([1,2,9,4,5,9,7,7,8,8,3,4]));


//7** odd bolsa toq urindagi indexli harflarni chiqarib beradi.even bolsa type juf urindagi hadlaridan soz hosil qiberadi


// function text(str, type) {
//  if () {
     
//  }
// }
// text('SSAURGDDOIRYBOENKA', 'even');

// var obj = {
//     tile: "N", score: 1 ,
//     tile: "K", score: 5 ,
//     tile: "Z", score: 10 ,
//     tile: "X", score: 8 ,
//     tile: "D", score: 2 ,
//     tile: "A", score: 1 ,
//     tile: "E", score: 1 
// }
  
  
//   for (let i = 0; i < one.length; i++) {
     
      
//   }
   
//   console.log(obj.tile);

//   function maximumScore(tileHand) {
//   let output = [];

//   for (let i = 0; i < tileHand.length; i++) {
//     output.push(tileHand[i].score);
//   }
//   return output.reduce((prev, curr) => prev + curr);
// }

// console.log(maximumScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
//   ]));


// function test(str) {
//     var res = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() == str[i]) {
//             res += str[i].toUpperCase()
//         }
//         if (str[i].toUpperCase() == str[i]) {
//             res += str[i].toLowerCase()  
//         }
//     }
//     return res
// }
// console.log(test('wEbBrAiN'));

    //  var num = 6 

    //  function name(num) {
    //      return num 
    //  }

    //  console.log(num);
    // function parseF(s) {
    //   b=s.parseFloat()
    // return b  
    // }
    //   console.log(parseF('1'));


    // function isIsogram(str){
    //     var one  = ''
    //     for (let i = 0; i < str.length; i++) {
           
    //            one+=str[i]+str[i]+""
    //        }
            
        
      
    //       return one
      
      
    //       }

    //       console.log(isIsogram("illuminati"));


//     var capitals = function (word) {
//         var b = []
//   for (let i = 0; i < word.length; i++) {
//       if (word[i]==word[i].toUpperCase()) {
//           b.push(i)
//       }
      
//     }
//     return b
//     }

// console.log(capitals('CodEWaRs'));


// function stringMerge(string1, string2, letter){
// letter=string1
//     return string1,string2,letter
// }
// console.log(stringMerge("person","here", "e"));



// function dropCap(n) {
//     n = n.split(' ')
//     var res = ''
// for (let i = 0; i < n.length; i++) {
//   if (n[i].length > 2) {
//       var all = n[i][0].toUpperCase() + n[i].slice(1,n[i].length);
//     res+=all
//   }
// }
// return res
// }
// console.log(dropCap('apple bagunuaunarumar niam fgdggnffgdhggggggggggggggggggnana'));

// let str1 = [1,2,3]

// function number(str1) {

//   b=str1.join('')  
// +bgg
// ++b.split('')

//  a= b.map((v)=> +v)
// return a
// }

// console.log( number([1,2,3]));