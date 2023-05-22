document.querySelector('.timeline').addEventListener('click', (event) => {
    let element = event.target;
    let selector = element.className;
    if(selector=='date' || selector == 'event') {
        let parent = element.parentElement;
        selector = parent.className;
    }
    let index;
    switch(selector) {
        case 'first':
            index = 0;
            break;
        case 'second':
            index = 1;
            break;
        case 'third':
            index = 2;
            break;
        case 'fourth':
            index = 3;
            break;
        case 'fifth':
            index = 4;
            break;
        default:
    }

    console.log(index);
    let requestURL = './events.json'
    fetch(requestURL) //Request info
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let content = jsonObject;
        displayContent(content[index]);
    });

});


function displayContent(obj) {
    let div = document.querySelector('.content');
    div.innerHTML = `<h1>${obj.title}</h1><img src='${obj.img_url}' alt='Img'><p>${obj.descr}</p>`;
    div.style.display = 'block';
}