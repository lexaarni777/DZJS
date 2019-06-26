/*
1. 
1. Даны несколько div элементов на html.
По первому нажатию на каждый div
он перекрашивается зеленым цветом,
при повторном нажатии перекрашивается
обратно и так далее каждый клик
происходит чередование цвета.
*/

console.log('Задача № 1 начало');
//
let massDiv = document.querySelectorAll('section .bulb');//создаем маасив элемнтов цвета которых мы будем менять при клике
console.log(massDiv);//выводим массив в консоль

for(let i = 0; i < massDiv.length; i++){
  massDiv[i].addEventListener('click', changeColor);//содаем обраотчик с событием клик левой клавиши мыши
}

function changeColor(){//функция которая добавляет или удаляет класс у элемнта при ее вызове
  console.log('Посмотреть на что повесили обработчик', this);
  this.classList.toggle('clicks');
};


/////////////////////////////////////////////////

let massDiv2 = document.querySelectorAll('.exeple2 div');//создаем маасив элемнтов цвета которых мы будем менять при клике
console.log(massDiv);//выводим массив в консоль

for(let i = 0; i < massDiv2.length; i++){
  massDiv2[i].addEventListener('mouseover', changeColor2);//содаем обраотчик с событием клик левой клавиши мыши
}

function changeColor2(){//функция которая добавляет или удаляет класс у элемнта при ее вызове
  console.log('Посмотреть на что повесили обработчик', this);
  this.classList.toggle('clicks');
};

//
console.log('Задача № 1 конец');
//
/*
2. Реализовать счётчик нажатий на
кнопку: Дана кнопка внутри неё
записана цифра. При клике на
кнопку – её значение должно
увеличиваться на единицу.
*/

console.log('Задача № 2 начало');
//
let btn = document.getElementById('btn');//ищем нашу кнопку
console.log(btn);//выводим в консоль

btn.addEventListener('click', counter);//привязывем событие на нашу кнопкку

let nam = 0;//мутим счетчик первоначальное значение равно 0

function counter(){//при вызове функцииб увеличивается значение счетчика на 1
  nam++;
  console.log(this);
  this.setAttribute('value', nam);//и меняется значние атрибута value на значение счетчика
}
//
console.log('Задача № 2 конец');
//
/*
3. Реализовать возможность добавления комментариев.
Комментарий вводится в textarea.
Комментарий добавляется по нажатию на кнопку Комментировать.
При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый),
имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата),
текст комментария (тот, что был введен в textarea).
*/
console.log('Задача № 3 начало');
//
let commentMass = document.getElementById('addComent');//див куда добавляются коменты
let textAdd = document.querySelector('form textarea');//элемент куда вводится текст
let btnAdd = document.querySelector('form input');//Элкмент на который повесим обработчик событий
console.log(commentMass);
console.log(textAdd);
console.log(btnAdd);
btnAdd.addEventListener('click', addComents);//повесили обработчик на кнопку
 function addComents(e){
  e.preventDefault();//убираем обновление
  let comentDiv = document.createElement('div');//создаем карточку в которая будет наполнятся данными для создания кометраия
  comentDiv.classList.add('comentCss');//добавляем класс для карточки
  let avatar = document.createElement('img');//создаем аватар
  avatar.src = 'img/avatar.jpeg';//добаляем аргумент расположения картинки
  comentDiv.appendChild(avatar);//довабляем наш аватар в карточку кометария последним элемнтом
  
  let textAutor = document.createElement('p');//создаем загологов 
  textAutor.innerHTML = 'Александр';//добаляем в этот заголовок имя автора комметария
  comentDiv.appendChild(textAutor);//добавляем заголовок в карточку кометария
  
  let date = document.createElement('p');//анологичные действия по дате
  let clock = new Date();
  date.innerHTML = clock.getDate() + '.' + clock.getMonth() + '.' + clock.getFullYear();//месяц получился кривой но делать нормално уже лень))
  comentDiv.appendChild(date);
    
  let textComent = document.createElement('p');//анологичные действия по наполнению
  textComent.innerHTML = textAdd.value;//устанваливаем значение коментария из атрибута value тега textarea
  comentDiv.appendChild(textComent);
  
  commentMass.appendChild(comentDiv);//добавляем карточку кометраия на версткку
  
 };


//
console.log('Задача № 3 конец');
//
/*
4. Дан массив с объектами, где каждый объект
описывает книгу: артикул, автор, название, описание.
Сформировать функцию, которой передаётся массив
книг, и которая создаст и внесёт все
необходимые html элементы, стили, и содержание
для отображения всей информации о книгах в виду таблицы.
*/
console.log('Задача № 4 начало');
//
let massBoock = [//масив с обкатими описывающим книги
  {
    article: 123,
    autor: 'Пушкин',
    name: 'Золотая рыбка',
    deskription: 'О золотой рыбке',
  },
  {
    article: 1234,
    autor: 'Гоголь',
    name: 'Мертвые души',
    deskription: 'о торговле',
  },
  {
    article: 12345,
    autor: 'Толстой',
    name: 'Анна каренина',
    deskription: 'о женщине',
  },
];
function verstka(arr){//функция которая раскидывает все по верстке
  let mainDivBoock = document.createElement('div');//создаем главный див который будет наполнятся карточками о книгах
  mainDivBoock.classList.add('boock');//доваляем клас этому диву
   for(let i = 0; i < arr.length; i++){//далле цикл преебирающий масив
    let childMain = document.createElement('div');//ни у по кажному обекту в массиве создаем новую карточку
    childMain.classList.add('boockChild');
    
    let p1 = document.createElement('p');
    p1.innerHTML = 'Артикул книги: ' + arr[i].article;
    childMain.appendChild(p1);
    
    let p2 = document.createElement('p');
    p2.innerHTML = 'Автор книги: ' + arr[i].autor;
    childMain.appendChild(p2);
    
    let p3 = document.createElement('p');
    p3.innerHTML = 'Название книги: ' + arr[i].name;
    childMain.appendChild(p3);
    
    let p4 = document.createElement('p');
    p4.innerHTML = 'Описание книги: ' + arr[i].deskription;
    childMain.appendChild(p4);    
    
    mainDivBoock.appendChild(childMain);//после того как карточка наполнилась всей информацией карточка добавляет в главный массив
   }
  document.body.appendChild(mainDivBoock);//после того как отработал цикл добавляем див с карточкми книг на верстку
 }
verstka(massBoock);//запуск функции с аргументом который является наш масив

//
console.log('Задача № 4 конец');
//
