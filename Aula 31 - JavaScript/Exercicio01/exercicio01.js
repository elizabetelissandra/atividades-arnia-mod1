function carregarEstilo(){

const body1 = document.getElementById('body')

    body1.style.fontFamily = "'Poppins', sans-serif";
    // body1.style.color = "black";

const title = document.getElementById('title')
    title.style.fontSize = '24px'
    title.style.fontWeight = 'bold'
    title.style.marginBottom = '20px'

const section = document.getElementById('section')
    section.style.display = 'flex'
    section.style.justifyContent= "center"

const fist = document.getElementById('firstParagraph')
    fist.style.display = 'flex'
    fist.style.textAlign = 'start'
    fist.style.fontSize = '14px'
    fist.style.fontWeight = '400'
    fist.style.marginLeft = '5px'

const second = document.getElementById('secondParagraph')
    second.style.display = 'flex'
    second.style.textAlign = 'start'
    second.style.fontSize = '14px'
    second.style.fontWeight = '400'
    second.style.marginright = '5px'

    const third = document.getElementById('thirdParagraph')
    third.style.fontSize = '14px'
    third.style.fontWeight = '400'
}


function darkMode(){
  
            if (document.getElementById('body').classList.contains('dark')) {
                document.body.classList.remove('dark');
            } else {
                document.body.classList.add('dark');
            }
        }
