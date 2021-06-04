const campos = [
    document.getElementById("data"),
    document.getElementById("quantidade"),
    document.getElementById("valor"),
    
]
console.log(campos)

const tabela = document.querySelector("tbody")

document.querySelector(".form").addEventListener("submit", (event)=>{

    event.preventDefault()

    const tr = document.createElement("tr")
    tabela.appendChild(tr);

    campos.forEach(campo => {

        const td = document.createElement("td")
        tr.appendChild(td)
        td.innerText = campo.value

    });

    const td = document.createElement("td")
        tr.appendChild(td)
        td.innerText = campos[1].value *campos[2].value
})