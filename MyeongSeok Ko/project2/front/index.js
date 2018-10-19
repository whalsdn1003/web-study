const $document = document

function clickedButton(id) {
    $document.getElementById(id).addEventListener('click', () => {
        fetch('http://localhost:4000/api/members').then((res) => {
            if (res.status === 200 || res.status === 201) {
                res.json().then(x => {
                    let result = ""

                    x.members.forEach((value) => {
                        result += "이름 : " + value.name + "   번호 : " + value.phone + '\n'
                    })

                    alert(result)
                })
            }
        })
    })
}

window.onload = () => {
    clickedButton('member-button')
}

