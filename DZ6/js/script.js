/*
1. 
Реализовать функцию foo:
let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10); /* В консоль выведет: [{name:'static', count:0},
{name:'static', count:1}, ..., {name:'static', count:9}] 
*/
console.log('Задача № 1 начало');
//
let a = {//Обявляем исходный обект который будет this в формуле foo
name: 'static',
count: 0
}
function foo(key, repet){//принимает 2 значения. key принимает значение необходимого ключя чъе значение необходимо изменять
  for(let i = 0; i <= repet; i++){
  this[key] = i;
    console.log(this);
  }
}

foo.call(a, 'count', 3);//вызываем функцию с помощию метода call
//
console.log('Задача № 1 конец');

/* не решено
2.
Сделайте функцию, каждый вызов который будет генерировать одно случайное число
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
хранится массив чисел, которые уже были сгенерированы функцией.
*/
/*
console.log('Задача № 2 начало');
//
function generation(){
  function gener(){
    let nam = Math.floor(Math.random()*100);
    let nams = '';
    let strReg = new RegExp(nam);
    nams = nams + nam + " ";
    
    
    
    for (let i = 0; i < nums.length; i++){
      if(let nam == [i]){
        
      }
    }
    nams.join(nam);
  }
  return gener();
}
generation();

//
console.log('Задача № 2 конец');
*/

/*
3. Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например:
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
*/
console.log('Задача № 3 начало');
//
let student = { //Обект со своствами студента
  name: 'Alexey',
  lastname: 'Golovchenko',
  age: 26,
  intresting: ['футбол','диван','JS'],
  uneversyty: 'itmo',
  info: function(){//метод объекта student который выводит информацию о студенте
    console.log(
    `«${this.name} ${this.lastname}. ${this.age} лет. Интересы: ${this.intresting[0]}, ${this.intresting[1]}, ${this.intresting[2]}. Учится в ${this.uneversyty}.`
    )
  }
}
student.info();//вызов метода
console.log('Задача № 3 конец');

/*
4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1
*/
console.log('Задача № 4 начало');
//

let numFac = 4; //обявляем переменную которая хрнит в себе чило факториал которого надо найти
function factorial(num){
  if(num != 1){
    return num * factorial(num - 1); //функция фызывает сама себя пока num не станет равным 1
  }else{
    return 1;//при num равном 1 factorial(1 - 1) = 1
  }
}
console.log(factorial(numFac));//фызываем функцию факториала

//
console.log('Задача № 4 конец');

/*
5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию,
определяющую порядок сортировки. Массив для тестирования:
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
*/
console.log('Задача № 5 начало');
//
let arr = [{
  price: 10,
  count: 2},
  {
  price: 5,
  count: 5},
  {
  price: 8,
  count: 5},
  {
  price: 12,
  count: 4},
  {
  price: 8,
  count: 4},]
  
function sorting(a,b){
  if (a.price > b.price) return 1;
  if (a.price < b.price) return -1;
  return 0;
}
arr.sort(sorting);
console.log(arr);
  
//
console.log('Задача № 5 конец');
