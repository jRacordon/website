// Fonction serant a initialiser les stats de base de la fiche en fonction de l'espece choisie
function generate_stats(){
	
	// Valeur de base des stats
	var min_value = 3;

	// Valeur représentant la difficulté moyenne du pnj
	var difficulty_index = Math.floor((Math.random()*10)/3);

	var espece = $('label[rel="espece"] select').val();

	// Définition de valeurs spécifiques par especes
	switch(espece){
		// Asari
		case "asari" :
			var masse = 3;
			var stats = {0:2, 1:1, 2:3};
			var biotique = true;
			break;

		//Butarien Butarienne
		case "butarien" :
			var masse = 3;
			var stats = {0:2, 1:1, 2:3};
			var biotique = true;
			break;

		case "butarienne" :
			var masse = 3;
			var stats = {0:2, 1:1, 2:3};
			var biotique = true;
			break;
		//Drell / Drelle
		//Galarien
		//Humain / Humaine
		//Krogan
		//Quarien / Quarienne
		// Turien / Turienne
		default :
			var masse = 3;
			var stats = {0:2, 1:1, 2:3};
			var biotique = true;
			break;
	}
	
	$.each($('input[type="text"].stats.mental'), function(index, e){
		var obj = $(e);

		// Genere une valeur entre -1 et 2 qui modifiera les stats de base
		var offset = Math.floor((Math.random()*10)/3)-1;
		var result = stats[0] + offset;
		obj.val(result);
	});

	$.each($('input[type="text"].stats.physique'), function(index, e){
		var obj = $(e);

		// Genere une valeur entre -1 et 2 qui modifiera les stats de base
		var offset = Math.floor((Math.random()*10)/3)-1;
		var result = stats[1] + offset;
		obj.val(result);
	});

	$.each($('input[type="text"].stats.social'), function(index, e){
		var obj = $(e);

		// Genere une valeur entre -1 et 2 qui modifiera les stats de base
		var offset = Math.floor((Math.random()*10)/3)-1;
		var result = stats[2] + offset;
		obj.val(result);
	});
}

function generate_sheets(arr_caracters){
	$('#onglets').html("");
	$('#fiches').html("");
					
	for(var key in arr_caracters){
		var fiche_perso = new c_fiche_perso(key);
		var caracter = arr_caracters[key];
		fiche_perso.add_caracter(caracter);
		fiche_perso.create($('#fiches'));

		// Creation des onglets pour naviguer d'une fiche à l'autre
		inactive_onglets();
		active_onglets('fiche_0');

		var onglet_fiche = $('<a></a>').attr({"href":"javascript:","class":"fiche_onglet","rel":"fiche_"+key});
		onglet_fiche.text(caracter.name + " - " + caracter.race + " " + caracter.classe);
		if(caracter.is_female){
			onglet_fiche.addClass('icon-female-symbol');
		}
		else{
			onglet_fiche.addClass('icon-male-symbol');
		}

		onglet_fiche.click(function(){
			var obj = $(this);
			var target = obj.attr('rel');

			inactive_onglets();
			active_onglets(target);
		});

		$('#onglets').append(onglet_fiche);
	}

	// Ajout des evenements sur les fiches de persos
	$('.btn-recycle').click(function(){
		var num = $(this).attr('rel');

		arr_caracters[num].reload();
		generate_sheets(arr_caracters);

		inactive_onglets();
		active_onglets('fiche_'+num);
	});
}

function not_in_array(array, key){
	for(var i = 0 ; i < array.length ; i++){
		if(array[i] == key){return false;}
	}

	return true;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function repartition(total, slots, max=5, empty=false){
	var valeurs = new Array(slots);
	
	if(!empty){
		for(var d = 0; d < slots ; d++){
			valeurs[d] = 1;
		}

		total -= slots;
	}
	else{
		for(var d = 0; d < slots ; d++){
			valeurs[d] = 0;
		}
	}

	if(total > (slots * max)){
		total = slots * max;
	}

	for(var i = total ; i > 0 ; i--){
		var done = false;
		
		while(!done){
			var k = rand(0, slots-1);
			if(valeurs[k] < max){
				valeurs[k]++;
				done = true;
			}
		}
	}

	return valeurs;
}

function inactive_onglets(){
	$('.fiche_perso').each(function(index, o){
		var obj = $(o);
		obj.hide();
	});

	$('#onglets a').each(function(index, o){
		var obj = $(o);
		obj.removeClass('active');
	});
}

function active_onglets(target){
	var target_s = target.split('_');
	$('.fiche_perso.'+target).show();

	$('#onglets a[rel="'+target+'"]').addClass('active');
}

function rng_initiative(){
	console.log('lancement du tour d\'init');
	var arr_init_pnj = new Array();

	$('#liste_init').html('');
	for(var key in arr_caracters){
		var init_rng = rand(1, 10);
		var init_score = init_rng + arr_caracters[key].attributs.initiative;
		console.log(arr_caracters[key].name + " a un score d'init de " + arr_caracters[key].attributs.initiative + " + " + init_rng + " = " + init_score);

		arr_init_pnj.push(init_score);

		var init_onglet = $('<a></a>').attr({'class':'round', 'rel':'fiche_'+key});
		init_onglet.text(init_score);
		init_onglet.click(function(){
			var i = $(this);

			inactive_onglets();
			active_onglets(i.attr('rel'));
		});
		$('#liste_init').append(init_onglet);
	}
}