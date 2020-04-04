class Show {
    showMessage(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        console.log(div);
    }
}