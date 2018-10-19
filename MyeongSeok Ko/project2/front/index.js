const $document = document

function clickedButton(id) {
    $document.getElementById(id).addEventListener('click', () => {
        alert('helloworld')
    })
}

window.onload = () => {
    console.log("hello")
    clickedButton('button')
}

