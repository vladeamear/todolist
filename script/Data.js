import CreateNewElement from './miscFunctions.js';

const SetData = (obj) => {
  let todolist = JSON.parse(localStorage.getItem('todolist'));
  if (todolist) {
    todolist.push(obj);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    return;
  }
  localStorage.setItem('todolist', JSON.stringify([obj]));
  return;
}

const GetData = () => JSON.parse(localStorage.getItem('todolist'));

const ClearData = () => localStorage.removeItem('todolist');

const DeleteData = index => {
  let data = GetData();
  data.splice(index, 1);
  localStorage.setItem('todolist', JSON.stringify(data));
  return;
}

const PrintData = data => {
  dataContainer.innerHTML = '';
  if (data) { 
    data.forEach((element, index) => {
      const newElement = CreateNewElement('DIV', {
        class: 'data-item'
      });
      const title = CreateNewElement('P', {
        innerText: element.title,
        class: 'data-item__title'
      });
      const date = CreateNewElement('SPAN', {
        innerText: element.date,
        class: 'data-item__date'
      });
      const time = CreateNewElement('SPAN', {
        innerText: element.time,
        class: 'data-item__time'
      });
      title.append(date, time);
      const text = CreateNewElement('P', {
        innerText: element.text,
        class: 'data-item__text'
      });
      const xButton = CreateNewElement('BUTTON', {
        innerText: 'X',
        type: 'button',
        class: 'data-item__remove',
        dataset: {
          delete: index
        }
      });
      newElement.append(xButton, title, text);
      dataContainer.append(newElement);
    });
  }
}

export {SetData, GetData, ClearData, DeleteData, PrintData};