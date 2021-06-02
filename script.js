const rootElement = document.getElementById('root');
/*
  Добавить необходимые методы в класс ItemsContainer:
    1. Кнопка активна только если в поле ввода есть текст без цифр (нужно регулярное выражение)
    2. При нажатии на кнопку, добавляется в список значение поля ввода и очищается поле ввода
*/
class ItemsContainer {
  get htmlElement() {
    return rootElement.getElementById('itemsContainer');
  }
}

const itemsContainer = new ItemsContainer();
