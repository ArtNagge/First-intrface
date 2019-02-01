 // Писал с использованием babel, дабы сравнить то, что он мне выдаст.
 // Для того, чтобы знать, написал ли я кроссбрауерный код или нет.

// записываю в переменную меню
let nav = document.querySelector('#nav');
function Menu () {
    return {
        // определяю авторизацию
        logged: false,
        // Список пунктов меню
        menuList: [
            {name: 'Главная', link: '/', mainClass: 'main'},
            {name: 'Помощь', link: '/1', mainClass: 'main'},
            {name: 'Игра', link: '/2', mainClass: 'main'},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open', 'names2']}
        ],
        // функция добавления класса
        setAddClass: function (value) {
            // Если класс value возвращает true при сравнении с массивом
            if (value.mainClass instanceof Array) {
                // мы возвращаем массив, который функцией join() превращаем в строку
                return value.mainClass.join(' ');
            } else {
                // иначе просто возвращаем значение
                return value.mainClass;
            }
        },
        // Функция, которая создаст визуализацию входа
        auth: function(nick, pass) {
            let login = 'nagge';
            let password = 123;
            // если значения nick и pass равны значениям переменных
            if (nick === login && pass === password) {
                // Изменяем авторизацию на  true
                this.logged = true;
                // и вызываем функцию рендера
                this.render(nav);
            }
        },
        // Функция рендера. Принимает в аргументы элемент, в который будем рендерить
        render: function (addPoint) {
            // Если авторизация true
            if (this.logged === true) {
                // массивом создаем элемемнт a и присваиваем ему текст и ссылку.
                for (let i = 0; i < this.menuList.length; i++) {
                    var tmp = document.createElement('a');
                    tmp.innerText = this.menuList[i].name;
                    tmp.href = this.menuList[i].link;
                    tmp.className = this.setAddClass(this.menuList[i]);
                    addPoint.appendChild(tmp);
                }
            } else {
                // иначе ошибка
                console.error('Вы не авторизированы');
            }
        },
    }
}
// Инициируем все, что написали =)
Menu().auth('nagge', 123);
