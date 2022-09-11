let inicio = "Olá, ";
let textoFinal = "João Paulo"

window.onload = function () {
    let time = 200;
    for (const element of inicio) {
        time += 50;
        setTimeout(function () {
            document.getElementById("textInic").textContent += element;
        }, time);
    }
    let textos = ["Me chamo João Paulo.", "Eu Sou Um Desenvolvedor Júnior.", "Acadêmico em Sistemas de Informação."];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < textos[i].length; j++) {

            time += 85;
            if (j == 3)
                time -= 80;
            setTimeout(function () {
                if (j == 0) {
                    document.getElementById("textDinamic").textContent = "";
                }
                if (i == 1) {
                    document.getElementById("textInic").textContent = "";
                    document.getElementById("textDinamic").style.textAlign = "center";
                }
                document.getElementById("textDinamic").textContent += textos[i][j];

            }, time);
        }
        time += 400;
    }
    for (let i = 0; i < textoFinal.length; i++) {
        time += 50;
        setTimeout(function () {
            if (i == 0) {
                document.getElementById("textInic").textContent = "";
                document.getElementById("textDinamic").textContent = "";
            }
            document.getElementById("textInic").textContent += textoFinal[i];
        }, time);
    }
    let textLing = "Linguagens de Programação Que Domino:";
    time += 70;
    for (const element of textLing) {
        time += 30;
        setTimeout(function () {
            document.getElementById("textoLing").textContent += element;
        }, time);
    }
    time += 70;
    setTimeout(function () { document.getElementById("linguagensID").innerHTML = "<img class='iconLing' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'/>"; }, time);
    time += 70;
    setTimeout(function () { document.getElementById("linguagensID").innerHTML += "<img class='iconLing' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'/>"; }, time);
    time += 70;
    setTimeout(function () { document.getElementById("linguagensID").innerHTML += "<img class='iconLing' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'/>"; }, time);
    time += 70;
    setTimeout(function () { document.getElementById("linguagensID").innerHTML += "<img class='iconLing' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>"; }, time);
    time += 70;
    setTimeout(function () { document.getElementById("botaoMaisID").style.visibility = "visible"; }, time);

};
