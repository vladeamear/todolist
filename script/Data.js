import CreateNewElement from './CreateNewElement.js';

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
      let newElement = CreateNewElement('P', {
        innerText: `id: ${index}, title: ${element.title}, text: ${element.text}`
      });
      let xButton = CreateNewElement('BUTTON', {
        innerText: 'X',
        type: 'button',
        dataset: {
          delete: index
        }
      })
      newElement.append(xButton);
      dataContainer.append(newElement);
    });
  }
}

export {SetData, GetData, ClearData, DeleteData, PrintData};