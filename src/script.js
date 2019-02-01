let nav = document.querySelector('#nav');
function Menu () {
    return {
        logged: false,
        menuList: [
            {name: 'Главная', link: '/', mainClass: 'main'},
            {name: 'Помощь', link: '/1', mainClass: 'main'},
            {name: 'Игра', link: '/2', mainClass: 'main'},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open']},
            {name: 'Заработок', link: '/3', mainClass: ['main', 'open', 'names2']}
        ],
        setAddClass: function (value) {
            if (value.mainClass instanceof Array) {
                return value.mainClass.join(' ');
            } else {
                return value.mainClass;
            }
        },
        auth: function(nick, pass) {
            let login = 'nagge';
            let password = 123;
            if (nick === login && pass === password) {
                this.logged = true;
                this.render(nav);
            }
        },
        render: function (addPoint) {
            if (this.logged === true) {
                for (let i = 0; i < this.menuList.length; i++) {
                    var tmp = document.createElement('a');
                    tmp.innerText = this.menuList[i].name;
                    tmp.href = this.menuList[i].link;
                    tmp.className = this.setAddClass(this.menuList[i]);
                    addPoint.appendChild(tmp);
                }
            } else {
                console.error('Вы не авторизированы');
            }
        },
    }
}
Menu().auth('nagge', 123);
