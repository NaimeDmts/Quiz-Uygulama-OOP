function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?",{ a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget" },"c"),
    new Soru("2- Hangisi .net paket yönetim uygulamasıdır?",{ a:"Node.js", b:"Nuget", c:"Npm", d:"Typescript" },"b"),
    new Soru("3- Hangisi frontend kapsamında değerlendirilmez?",{ a:"CSS", b:"HTML", c:"Javascript", d:"Sql"  },"d"),
    new Soru("4- Hangisi backend kapsamında değerlendirilir?",{ a:"Node.js", b:"Typescript", c:"Angular", d:"React" },"a"),
    new Soru("5- Hangisi javascript programlama dilini kullanmaz?",{ a:"React", b:"Angular", c:"Vuejs",d:"asp.Net" },"d")
];