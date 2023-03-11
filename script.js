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
        soruGoster( quiz.soruGetir())
});
document.querySelector('.next_btn').addEventListener('click', function(){
    if(quiz.sorular.length != quiz.sorularIndex + 1){
        quiz.sorularIndex += 1;
        soruGoster( quiz.soruGetir())
    }
    else{
        console.log("Quiz Bitti.")
    }
})

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
    document.querySelector('.option_list').innerHTML = options;
}