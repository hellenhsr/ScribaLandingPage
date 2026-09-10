tema = 0

function darkmode(){
    if(tema == 0) {
        document.getElementById('icone-darkmode').classList.remove('fa-moon');
        document.getElementById('icone-darkmode').classList.add('fa-sun');
          document.getElementById('icone-darkmode').style.color = "#5b6cf2";
        document.getElementById('header').style.backgroundColor = "var(--cor-fundo-dark)";
        document.getElementById('branco').style.backgroundColor = "var(--botao-dark)";
       document.getElementsByClassName('descubra')[0].style.backgroundImage = "var(--cor-banner-dark)";
       document.getElementById('rodape').style.backgroundColor = "var(--rodape-dark)";
        document.getElementById('vantagens').style.backgroundColor = "var(--cor-fundo-dark)";
       document.getElementsByClassName('cadastre')[0].style.backgroundImage = "var(--cor-banner-dark)";
        document.getElementById('logo').style.color = "white";





        tema = 1
    }
    else {
        document.getElementById('icone-darkmode').classList.remove('fa-sun');
        document.getElementById('icone-darkmode').classList.add('fa-moon');
        document.getElementById('header').style.backgroundColor = "var(--cor-fundo)";
        document.getElementById('branco').style.backgroundColor = "var(--botao)";
        document.getElementsByClassName('descubra')[0].style.backgroundImage = "var(--cor-banner)";
        document.getElementById('rodape').style.backgroundColor = "var(--rodape)";
        document.getElementById('vantagens').style.backgroundColor = "var(--cor-fundo)";
         document.getElementsByClassName('cadastre')[0].style.backgroundImage = "var(--cor-banner)";
                 document.getElementById('logo').style.color = "black";
       



        tema = 0
    }
}