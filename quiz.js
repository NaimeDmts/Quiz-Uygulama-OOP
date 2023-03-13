function Quiz(sorular){
    this.sorular = sorular;
    this.sorularIndex = 0;
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.sorularIndex];
}
