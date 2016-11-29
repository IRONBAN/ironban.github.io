$(document).ready(function(){

/*
	Faire un jeu chifoumi :
	1- choisir entre pierre/feuille ou ciseaux.
	2- Une fois que j'ai fais mon choix, je peux commencer la partie.
	3- Quand la partie est lancée, l'ordinateur fait son choix entre pierre/feuille ou ciseaux.
	4- Selon mon choix et celui de l'ordi j'ai gagné ou perdu ou exeaquo.
	5- Une fois la partie terminée, je peux recommencer.
*/ 

// 1- choisir entre pierre/feuille ou ciseaux.
var userChoice = prompt("Choisir entre pierre, feuille et ciseaux")


// 2- Une fois que j'ai fais mon choix, je peux commencer la partie.
console.log("le choix de l\'utilisateur est " + userChoice);


/*3- Quand la partie est lancée, l'ordinateur fait son choix entre pierre/feuille ou ciseaux.
	a-Créer un tableau contenant pierre, feuille, ciseaux.
	b- Céer une fonction random sur le tableau

*/ 
var computerMemory = ["pierre", "feuille", "ciseaux","lizard","spock"];
var computerChoice = computerMemory[Math.floor(Math.random()*computerMemory.length)];
console.log("le choix de l'\ordinateur est " + computerChoice);


/*4- Selon mon choix et celui de l'ordi j'ai gagné ou perdu ou exeaquo.
	a- Si userChoice = computerChoice  : exaequo
	b- la pierre gagne face au ciseaux, sinon elle perd.
	c- la feuille gagne face a la pierre, sinon elle perd.
	d- les ciseaux gagnent face a la feuille, sinon ils perdent.
*/
/*a- Si computerChoice = userChoice : exaequo*/
if(userChoice == computerChoice){
	console.log("exaequo");

/*b- la pierre gagne face au ciseaux, sinon elle perd.*/	
}else if(userChoice=="pierre" && computerChoice == "ciseaux"){
	console.log("Partie Gagnée");

/*c- la feuille gagne face a la pierre, sinon elle perd.*/
}else if(userChoice == "feuille" && computerChoice =="pierre"){
	console.log("Partie Gagnée");

/*d- les ciseaux gagnent face a la feuille, sinon ils perdent.*/
}else if(userChoice=="ciseaux" && computerChoice == "feuille"){
	console.log("Partie Gagnée");

}else{
	console.log("Partie Perdue...");
};

});