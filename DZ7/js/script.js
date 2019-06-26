/*
1. 
Создать функцию которая выводит время
в html и обновляет значения каждую секунду.
Время выводить в формате чч:мм:cc, при этом
часы, минуты и секунды отобразить разными цветами.
*/
console.log('Задача № 1 начало');
//

let clock = [];//создаем масив в корый будет сохраятятся время
let hours = document.getElementById('clockHead');//значение строки таблицы котороая стотоит из 3 дочерних элемнтов в которые будут передаваться значения времени
function func(){ //обявлем функцию которая наполняет масив clock данными о текущем времени
  let time = new Date();//обявляем переменную и присваем ей значение текущего времени
  let clocks = '';//переменная в которую будет передаваться значение времени для проверки количества знаков см 19 строку
  clock[0] = time.getHours();//наполняем масив clock тремя занчениями часы
  clock[1] = time.getMinutes();//минуты
  clock[2] = time.getSeconds();//секунды
  for ( let i = 0; i < 3; i++){// запускаем цикл который добавляеи 0 перед значением времени если там одно число
    clocks = clock[i] + ''; //превращаем занчение в строку
    if(clocks.length != 2){//если переменная не из 2 знаков тогда добавляем 0 спереди
      clock[i] = '0' + clocks;
    }
  }
  hours.children[0].innerHTML = clock[0];//возвращаем значения на верстку из массива clock
  hours.children[1].innerHTML = clock[1];//возвращаем значения на верстку из массива clock
  hours.children[2].innerHTML = clock[2];//возвращаем значения на верстку из массива clock
}
func();
setInterval(func, 1000);//запускаем функцию каждую секунду
document.body.children[0].style.borderCollapse = 'collapse';//мутим со тилями таблицы схлопывая внутринние отступы
let styleTable = document.getElementsByTagName('td');//мутим переменную которая хранит массив элемнтов td из таблицы чтобы им в цикле присвить стили
for(let i = 0; i < styleTable.length; i++){
  styleTable[i].style.border = '1px solid black'; //делаем границу
  styleTable[i].style.textAlign = 'center'; //цетрируем текст 
}
/////////?????Вопросики: можно ли сетинтервал запустить сразу а потом с интервалом?
console.log('Задача № 1 конец');
/*
2. 
Дан массив с объектами, где каждый объект
описывает товар: фото, артикул, описание и т.п.
Сформировать функцию, которой передаётся массив
товаров, и которая создаст и внесёт все
необходимые html элементы, стили, и содержание
для отображения всей информации о товарах..
*/
console.log('Задача № 1 начало');
//
let goods = [
  {
  name:'Кроссовки',
  foto:'img/0.jpg',
  article:'123456',
  options:'Чтото какоето описание о товаре 0',
  prise:'320',
  },
  {
  name:'Штаны',
  foto:'img/1.jpg',
  article:'123445',
  options:'Чтото какоето описание о товаре 1',
  prise:'3450',
  },
  {
  name:'Iапка',
  foto:'img/2.jpg',
  article:'123423445',
  options:'Чтото какоето описание о товаре 2',
  prise:'3443',
  },
];


function dist(mass){
  let elementDiv = document.getElementById('content');//обявляем перемнную которая содержит Div с верстки в которую будем вставлять карточки с товарами
  for(let i = 0; i < mass.length; i++){//мутим цикл который будет бегать по нашему масиву с товарами
  let cardInner = document.createElement('div');//создаем див в который ,о каждом товаре
  cardInner.classList = 'cards';//создаем класс для карточки товара чтобы обернут ее в рамку
  
  let cardInnerName = document.createElement('p');//создаем элемнт с тегом p
  cardInnerName.innerHTML = mass[i].name;//Добавляем значение в элемнт p из передаваемого массива
  cardInner.appendChild(cardInnerName);//добавляем назание товара в карточку товара
  
  
  let cardInnerImg = document.createElement('img');//создаем элемнт img
  cardInnerImg.src = mass[i].foto; //Добавляем аргумент для ссылки на изображение, значение которого равен значению из передаваемого в функцию массива
  cardInnerImg.classList = 'img';//добавляем класс для тега img и в CSS применим необходимые свойства размеров
  cardInner.appendChild(cardInnerImg);//добавляем картинку в каточку с товаром
  
  
  let cardInnerArticle = document.createElement('p');//создаем элемнт с тегом p
  cardInnerArticle.innerHTML = 'Артикул товара: ' + mass[i].article;//Добавляем значение в элемнт p из передаваемого массива
  cardInner.appendChild(cardInnerArticle);//добавляем назание товара в карточку товара
  
  
  let cardInnerOptions = document.createElement('p')//создаем элемент p для описания товара
  cardInnerOptions.innerHTML = 'Описание товара: ' + mass[i].options;// добавляем в P описание товара из массива
  cardInner.appendChild(cardInnerOptions);//добавляем p в карточку товара
  
  let cardInnerPrise = document.createElement('p')//создаем элемент p для описания товара
  cardInnerPrise.innerHTML = 'Цена: ' + mass[i].prise + '.руб';// добавляем в P описание товара из массива
  cardInner.appendChild(cardInnerPrise);//добавляем p в карточку товара
  
  elementDiv.appendChild(cardInner);//добавляем на верстку карточку товара со всеми элементами
  }
}
dist(goods); //запускаем функцию передавая ей массив с инфой о товарах

////////
console.log('Задача № 2 конец');
/*
3. Создать светофор (красный, желтый,
зелёный). Переключать цвет у светофора
через кждые 2 сек сверху вниз и снизу вверх.
*/
console.log('Задача № 3 начало');
//

let massLing = document.getElementById('lights').getElementsByTagName('div');//получаем массив из 3-х дивов светофора
//по умолчанию для каждого элемнта светофора установлен необходимый цвет фона и 0 прозрачность
//в стилях есть дополнительный стиль active который перезаписывает прозрачность на 1
let i = 0;//счетчик для функции
setInterval(funcLing, 2000);//каждые 2 секунды
function funcLing(){
  if(i == 0){//если идем по первому элементу применяем ему клас активв
  massLing[i].classList.add("active");
  massLing[2].classList.remove("active");
  }else if(i == 1){
    massLing[0].classList.remove("active");//если идем по второму элементу применяем ему клас активв, а у первого убираем
    massLing[i].classList.add("active");
  }else{
    massLing[1].classList.remove("active");//если идем по третему элементу применяем ему клас активв, а у второго убираем
    massLing[i].classList.add("active");
  };
  if(i == 2){//если доходим до последнего элемента обнуляем счетчик
    i = 0;
  }else{i++;//мутим счетчик который считает по какому элементу в масиве идем
  }
  return i;//возвращаем значение счетчика
}
////////
console.log('Задача № 3 конец');