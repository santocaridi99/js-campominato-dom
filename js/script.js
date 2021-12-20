/*
L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/
//funzione per creare i  quadratini (quando li clicco si colorano di azzurro)
function createBox(containerBox , numero , maxScore){
    const newBox = document.createElement('div')
    newBox.className = 'box';
    containerBox.append(newBox);
    newBox.addEventListener('click',function(){
        this.classList.add('azzurro');
        newBox.innerText=numero;
        score++;
        if(bombs.includes(numero)){
            this.classList.add('red');
            alert("GAME OVER ! il tuo score è di: "+score)
            alert("Resetta il gioco")
        }
        if (score === maxScore){
            alert("Complimenti hai vinto. il tuo score è di"+score);
            alert("Restart e inizia una nuova partita")
        }
    })
}
//funzione che genera numeri randomici
function randomNumber(min , max){
    let random = Math.floor(Math.random() * ((max + 1) - min) )+ min;
    return random;
}
//dichiaro variabile score come un contatore 
let score = 0;
//dichiaro array delle bombe
let bombs = [];
//dichiaro variabili dei bottoni per scelta del livello
const button1 = document.getElementById('lvl-1');
const button2 = document.getElementById('lvl-2');
const button3 = document.getElementById('lvl-3');
//dichiaro container
const container = document.querySelector('.container');
//se utente sceglierà livello 1
//genera numeri da 1 a 100
//aggiungi classe container in modo tale che entrano 100 quadratini
button1.addEventListener('click',function(){
    container.innerHTML='';
    //svuoto array ogni volta
    bombs = [];
    //dichiaro variabile maxScore per indicare punteggio massimo raggiungibile
    //100-16
    const maxScore = 84;
    container.classList.add('easy-container');
    container.classList.remove('medium-container');
    container.classList.remove('hard-container');
    for(let i=1 ; i <= 100 ; i++){
        createBox(container , i,maxScore)
    }
    while(bombs.length < 16){
        const randomBomb = randomNumber(1 , 100);
        if(!bombs.includes(randomBomb)){
            bombs.push(randomBomb);
        }
    }
    
})
//se utente sceglie livello 2 
//genera numeri  da 1 a 81
//aggiungi classe container in modo tale che entrano 81 quadratini
button2.addEventListener('click',function(){
    container.innerHTML='';
    //svuoto array ogni volta
    bombs = [];
    //dichiaro variabile maxScore per indicare punteggio massimo raggiungibile
    //81-16
    const maxScore = 65;
    container.classList.add('medium-container');
    container.classList.remove('hard-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 81 ; i++){
        createBox(container , i , maxScore)
    }
    while(bombs.length < 16){
        const randomBomb = randomNumber(1 , 81);
        if(!bombs.includes(randomBomb)){
            bombs.push(randomBomb);
        }
    }
})
//se utente sceglie livello 3
//genera numeri  da 1 a 49
//aggiungi classe container in modo tale che entrano 49 quadratini
button3.addEventListener('click',function(){
    container.innerHTML='';
    //svuoto array ogni volta
    bombs = [];
    //dichiaro variabile maxScore per indicare punteggio massimo raggiungibile
    //49-16
    const maxScore = 33;
    container.classList.add('hard-container');
    container.classList.remove('medium-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 49 ; i++){
        createBox(container , i , maxScore)
    }
    while(bombs.length < 16){
        const randomBomb = randomNumber(1 , 49);
        if(!bombs.includes(randomBomb)){
            bombs.push(randomBomb);
        }
    }
})


