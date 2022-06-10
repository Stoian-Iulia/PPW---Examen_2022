document.addEventListener("DOMContentLoaded", () => {
    let list = document.createElement('ol');
    const addElement = () => {
        let elementOfList = [];
        let i = 0;
        let timer = setInterval(() => {
            
            i++;
            elementOfList = document.createElement('li');
            elementOfList.innerHTML = `Element Nr ${i}`;
            list.append(elementOfList);
        }, 2000);

        setTimeout(() => {
            clearInterval(timer);
        }, 40000);
    }
    document.body.append(list);
    addElement();
});
