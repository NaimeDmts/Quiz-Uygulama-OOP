function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm" },"c"),
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
    if(quiz.sorular.length != quiz.sorularIndex){
        console.log(quiz.soruGetir());
        quiz.sorularIndex +=1;
    }
    else{
        console.log("Quiz Bitti.")
    }
})