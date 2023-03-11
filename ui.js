function UI(){
    this.btn_start = document.querySelector('.btn-start'),
    this.next_btn = document.querySelector('.next_btn'),
    this.quiz_box =document.querySelector('.quiz_box'),
    this.option_list = document.querySelector('.option_list'),
    this.correctIcon = '<div class="correct"><i class="fas fa-check"></i></div>',
    this.incorrectIcon =  '<div class="incorrect"><i class="fas fa-times"></i></div>',
    this.question_text = document.querySelector('.question_text')
}
UI.prototype.soruGoster =function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri){
        options +=`
        <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>`
    }
   
    this.question_text.innerHTML = question;
    this.option_list.innerHTML = options;
    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}
UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector('.quiz_box .question_index').innerHTML = tag;
}
