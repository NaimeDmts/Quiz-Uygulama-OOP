const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener('click', function(){
    ui.quiz_box.classList.add('active');
    ui.soruGoster( quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.sorularIndex +1 ,quiz.sorular.length);
    ui.next_btn.classList.remove('show');
});

ui.next_btn.addEventListener('click', function(){
    if(quiz.sorular.length != quiz.sorularIndex + 1){
        quiz.sorularIndex += 1;
        ui.soruSayisiniGoster(quiz.sorularIndex +1 ,quiz.sorular.length);
        ui.next_btn.classList.remove('show');
        ui.soruGoster( quiz.soruGetir());

    }
    else{
        console.log("Quiz Bitti.")
    }
});

function optionSelected(option){
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add('correct');
        option.insertAdjacentHTML("beforeEnd", ui.correctIcon);
    }
    else{
        option.classList.add('incorrect');
        option.insertAdjacentHTML("beforeEnd", ui.incorrectIcon);
    } 

    for(let i=0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add('disabled');
    }

    ui.next_btn.classList.add('show');
}

