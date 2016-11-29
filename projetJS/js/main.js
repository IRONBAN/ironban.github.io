$(document).ready(function(){

	// Définir une variables globales
	var userChoice;
	var computerMemory = ["stone", "paper", "scissors","lizard","spock"];
	var newGame = true;




/*********************** Parti utilisateur ****************************/




			/*Capter le clique sur les petites images*/
	$("nav img").click(function(){

		// Vérifier la variable newGame
		if (newGame == true){

			// Récupérer la valeur de l'attribut data-value
			userChoice=$(this).attr('data-value')

			// Afficher la balise IMG avec le bon SRC dans la 1er figure
			$("figure:first").html('<img src="' + $(this).attr("src") + '" alt="Choix : Feuille ">');

			// Afficher le bouton pour lancer la partie
			$("button").fadeIn();

		}

	});




		/*********************** Parti ordinateur ****************************/

		// Capter le clique sur le bouton pour faire choisir l'ordinateur
	$("button").click(function(){

			var computerChoice = computerMemory[Math.floor(Math.random() * computerMemory.length)];
			console.log("le choix de l'\ordinateur est " + computerChoice);

			// Afficher la bonne image dans la 2e figure(celle de l'ordi) grace a computerChoice
			$("figure:last").html('<img src="img/' + computerChoice + '.svg" alt="Choix :' +computerChoice+'">')


			/*a- Si computerChoice = userChoice : exaequo*/
		if(userChoice == computerChoice){
			$("section p").addClass("exaequo").text("Exaequo").fadeIn();

		/*b- la pierre gagne face au ciseaux, sinon elle perd.*/	
		}else if(userChoice=="stone" && computerChoice == "scissors"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();

		/*c- la feuille gagne face a la pierre, sinon elle perd.*/
		}else if(userChoice == "paper" && computerChoice =="stone"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();

		/*d- les ciseaux gagnent face a la feuille, sinon ils perdent.*/
		}else if(userChoice=="scissors" && computerChoice == "paper"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();






		/********************* BIG BANG THEORY ***********************/


		}else if(userChoice=="scissors" && computerChoice == "lizard"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();


		}else if(userChoice=="lizard" && computerChoice == "spock"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();


		}else if(userChoice=="spock" && computerChoice == "scissors"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();


		}else if(userChoice=="spock" && computerChoice == "stone"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();


		}else if(userChoice=="paper" && computerChoice == "spock"){

				// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();

		}else if(userChoice=="stone" && computerChoice == "lizard"){

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();

		}else if(userChoice=="lizard" && computerChoice == "paper"){
			

			// Afficher le résultat dans le DOM
			$("section p").addClass("win").text("Partie gagnée").fadeIn();


		/*********************BIG BANG THEORY ***********************/




		}else{
			$("section p").addClass("lose").text("Partie perdue...").fadeIn();
		};


		// supprimer le bouton et afficher le bouton pour rejouer
		$(this).fadeOut(function(){
			$("a").fadeIn();
		});

		// Modifier la variable newGame
		newGame = false;

	});


	// Programmer le lien pour rejouer
	$("a").click(function(){

		// bloquer le comportement par defaut de la balise
		event.preventDefault();

		// Masquer le lien "rejouez"
		$(this).fadeOut();

		// vider les variables userChoice et computerChoice
		userChoice = computerChoice = "";

		// Supprimer les class et le text de section P
		$("section p").fadeOut(function(){
			$(this).removeClass().text("")
		});


		// Vider les balises figure
		$("figure").fadeOut(function(){
			$(this).html("").show();

		});

		// Verifier la var newGame
		newGame = true;

	});




});





