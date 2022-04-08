function CreateNewElement(tag, options = {}) {
  const element = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value);
      return;
    }
    
    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      })
      return;
    }
    
    if (key === 'innerText') {
      element.innerText = value;
      return;
    }
    
    element.setAttribute(key, value);
  })
  return element;
}

const ReturnFullDate = moment => `${moment.getDate()}.${moment.getMonth() + 1}.${moment.getFullYear()}`;
const ReturnFullTime = moment => `${moment.getHours()}:${moment.getMinutes()}`;

export { ReturnFullDate, ReturnFullTime };
export default CreateNewElement;