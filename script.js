const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener('click', function(){
    ui.quiz_box.classList.add('active');
    startTimer(10);
    startTimeLine();
    ui.soruGoster( quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.sorularIndex +1 ,quiz.sorular.length);
    ui.next_btn.classList.remove('show');
});

ui.next_btn.addEventListener('click', function(){
    if(quiz.sorular.length != quiz.sorularIndex + 1){
        quiz.sorularIndex += 1;
        clearInterval(counter);
        clearInterval(counter_line);
        startTimer(10);
        startTimeLine();
        ui.soruSayisiniGoster(quiz.sorularIndex +1 ,quiz.sorular.length);
        ui.next_btn.classList.remove('show');
        ui.soruGoster( quiz.soruGetir());
    }
    else{
        clearInterval(counter);
        clearInterval(counter_line);
        ui.score_box.classList.add('active');
        ui.quiz_box.classList.remove('active');
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener('click', function(){
    window.location.reload();
});

ui.btn_replay.addEventListener('click', function(){
    quiz.sorularIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove('active');
});

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counter_line);
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
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

let counter;
function startTimer(time){
    counter = setInterval(timer, 1000)

    function timer(){
        ui.time_second.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children){

                if(option.querySelector('span b').textContent == cevap){
                    option.classList.add('correct');
                    option.insertAdjacentHTML("beforeEnd", ui.correctIcon);
                }
                option.classList.add('disabled');
            }
            ui.next_btn.classList.add('show');
        }
    }
}

let counter_line;
function startTimeLine(){
    let line_width = 0;
    counter_line = setInterval(timer, 20);

    function timer(){
        line_width +=1;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 548){
            clearInterval(counter_line);
        }
    }
}