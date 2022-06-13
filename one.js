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
