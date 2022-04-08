import ToDoItem from './ToDoItem.js';
import { SetData, GetData, ClearData, PrintData, DeleteData } from './Data.js';
import { ReturnFullDate, ReturnFullTime } from './miscFunctions.js'

addItem.addEventListener('click', () => {
  if (title.value && text.value){
    const moment = new Date();
    console.log(ReturnFullTime(moment))
    const item = new ToDoItem(title.value, text.value, ReturnFullTime(moment), ReturnFullDate(moment));
    SetData(item);
    PrintData(GetData());
    title.value=''
    text.value=''
    if (errorMsg.classList.contains('error--show'))
      errorMsg.classList.remove('error--show')
    return
  }
  errorMsg.classList.add('error--show')
})

clearAllData.addEventListener('click', () => {
  if (errorMsg.classList.contains('error--show'))
    errorMsg.classList.remove('error--show')
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