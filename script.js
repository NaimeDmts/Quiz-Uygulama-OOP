function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget" },"c"),
    new Soru("2- Hangisi .net paket yönetim uygulamasıdır",{ a:"Node.js", b:"Nuget", c:"Npm" },"b"),
    new Soru("3- Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm" },"c"),
    new Soru("4- Hangisi .net paket yönetim uygulamasıdır",{ a:"Node.js", b:"Nuget", c:"Npm" },"b"),
];

function Quiz(sorular){
    this.sorular = sorular;
    this.sorularIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.sorularIndex];
}

const quiz = new Quiz(sorular);

let btn = document.querySelector('.btn-start');
btn.addEventListener('click', function(){
    document.querySelector('.quiz_box').classList.add('active');
    soruGoster( quiz.soruGetir());
    document.querySelector('.next_btn').classList.remove('show');
});

document.querySelector('.next_btn').addEventListener('click', function(){
    if(quiz.sorular.length != quiz.sorularIndex + 1){
        quiz.sorularIndex += 1;
        document.querySelector('.next_btn').classList.remove('show');
        soruGoster( quiz.soruGetir())
    }
    else{
        console.log("Quiz Bitti.")
    }
});

const option_list = document.querySelector('.option_list');
const correctIcon = '<div class="correct"><i class="fas fa-check"></i></div>';
const incorrectIcon =  '<div class="incorrect"><i class="fas fa-times"></i></div>';

function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri){
        options +=`
        <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>`
    }
   
    document.querySelector('.question_text').innerHTML = question;
    option_list.innerHTML = options;
    const option = option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option){
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add('correct');
        option.insertAdjacentHTML("beforeEnd", correctIcon);
    }
    else{
        option.classList.add('incorrect');
        option.insertAdjacentHTML("beforeEnd", incorrectIcon);
    } 

    for(let i=0; i < option_list.children.length; i++){
        option_list.children[i].classList.add('disabled');
    }
    
    document.querySelector('.next_btn').classList.add('show');
}