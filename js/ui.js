//const show = new Show();

class Show {

    showMessage(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        //console.log(div);

        //select messages
        const divMessage = document.querySelector('.messages');
        divMessage.appendChild(div);
    }
}