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

var a= 'web'
var b='brain'
var c =''
var c=a
var a=b
var b=c
console.log(a);

// function kabis(year) {
// return year % 4==0 ? 'kabis yili' :'bu kabis yili emas'
// }
// console.log(kabis(2020));

// var one = "Fozil";
// var res = one.toLowerCase().includes("l");
// console.log(res);

// function run(yur) {
// return yur % 2==0 ?'bob' :yur %2==1 ?'alice':'xato'
// }
// console.log(run(0));

// function foiz(num) {
// return num %6==0 ?'3 ga bo`linadi':num % 10== 0 ?'5 ga bo`linadi':num % 30==1 ? '10 ga bo`linadi':'faild'
// }
// console.log(foiz(6));
