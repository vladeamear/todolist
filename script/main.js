import ToDoItem from './ToDoItem.js';
import { SetData, GetData, ClearData, PrintData, DeleteData } from './Data.js';

addItem.addEventListener('click', () => {
  if (title.value && text.value){
    const item = new ToDoItem(title.value, text.value);
    SetData(item);
    PrintData(GetData());
    title.value=''
    text.value=''
  }
})

clearAllData.addEventListener('click', () => {
  ClearData();
  PrintData(GetData());
})

PrintData(GetData());

dataContainer.addEventListener('click', event => {
  if (!event.target.matches('button[data-delete]')) {
    return
  }
  DeleteData(event.target.dataset.delete);
  PrintData(GetData());
})