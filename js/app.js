let score = 0;
let scoreAffiche = document.getElementById('affichage');
let btnPlay = document.getElementById('cookie');
let btnMulti = document.getElementById('multi');
let btnAuto = document.getElementById('auto');
let compteur = 1;
let price = 50;
let priceOne = 200;
let auto;

/**
 * Gérer l'affichage
 */
function affichage(){
    scoreAffiche.innerHTML = score;
}

/**
 * point par click
 */
function click(){
    score++;
    affichage();
}

function cliquer(){
    score = score + compteur; // on ajoute au score plus le compteur
    affichage();  // on appelle la fonction affichage 
    if(score > priceOne){
        btnAuto.style.display = "block"; // efface le bouton
    } else {
        btnAuto.style.display = "none";   // efface le bouton
    } 
    
    if(score > price){
        btnMulti.style.display = "block";  // efface le bouton
	}else{
        btnMulti.style.display = "none";   // efface le bouton
    }    
}

function seul(){  // on cree une fonction cliquer
    if(score<priceOne){    // condition d'utilisation du bouton
        alert('on ne fait pas credit');  // alert si pas de credit
    }else{ 
        auto = setInterval(click,1000); // on utilise le autoclick
        score=score-priceOne;  // on deduit le prix au score
        priceOne=priceOne*2;   
        btnAuto.innerHTML=("AutoClick prix:"+(priceOne));
        affichage(); // on appelle la fonction affichage
    }
}

function incrementer(){    // fonction compteur
    if(score<price){     // condition pour utiliser le multiplicateur       
        alert('on ne fait pas credit');   // alert pour pas assez score 
    }else{
        compteur++    //  on incremente le compteur  
        score= score-price; // suppression du score moins le prix
        price=price*2;           //sinon le prix est multiplie par 2 a chaque click dessus
        btnMulti.innerHTML=("multiplie *"+ (compteur+1)+ " prix:"+(price)); // ecrit sur le bouton s'actualise
        affichage(); // affichage du score
    }
}