// Class incorporant les caracteristiques et talents d'un personnage
// Integre les fonctions de creation d'un personnage avec les limites lièes
class c_caracter{

	// Attributs
	// * power 			: la puissance relative voulue pour le personnage (pas encore utilisé)
	// * name 			: Le nom du personnage
	// * race			: le nom de la race pour le personnage
	// * classe 		: classe du personnage
	// * experience		: L'experience de depart

	// * attributs 		: La répartition des points d'attributs pour le personnage
	// * competences	: La répartition des points de compétence pour le personnage
	// * talents		: La liste des talentsdu personnage
	// * avantages		: La liste des avantages du personnage
	// * biotique
	// * omnitech
	// * armure
	// * armes

	// * is_biotique	: indique si le perso est un biotique
	// * is_female		: indique si le perso est une femme

	constructor(power, name, race=null, classe=null, exp=0){
		this.power = power;
		this.name = name;
		this.experience = exp;

		this.race = null;
		if(race != null && race != "rand"){
			this.race = race;
		}

		this.classe = null;
		if(classe != null){
			this.classe = classe;
		}

		this.attributs = null;
		this.competences = null;
		this.talents = null;
		this.avantages = null;
		this.biotique = false;
		this.omnitech = false;
		this.armure = null;
		this.armes = null;

		this.is_biotique = false;
		this.is_female = false;
	}

	create(){
		this.set_race();

		// Il n'existe pas de krogan faible
		if(this.race == "krogan" && this.power == "inf"){
			this.power = "com";
		}

		// Définition du sexe
		if(this.race == "asari"){
			this.is_female = true;
		}
		// On regarde si la race utilise les persos feminin
		else if(data.race[this.race].female){
			var rng = rand(1,10);
			if(rng > 5){
				this.is_female = true;
			}
		}

		// Définition de la caractèristique biotique
		if(this.race == "asari"){
			this.is_biotique = true;
		}
		// On regarde si la race autorise les persos biotiques
		else if(data.race[this.race].biotique){
			var rng = rand(1,10);
			if(rng > 7){
				this.is_biotique = true;
			}
		}

		// On choisi une classe pour l'archetype
		this.set_classe();

		// répartition des points d'attributs
		this.set_attributs();

		// répartition des points de competences
		this.set_competences();

		// Définition des avantages
		this.set_avantages();

		// Définition des talents
		this.set_talents();

		// gestion de l'omnitech et de ses modules
		this.set_omnitech();

		// Gestion de l'armure
		this.set_armure();

		// Choisi les armes utilisées
		this.set_armes();

		// Utilise les points d'exp alloué pour augmenté les stats
		this.evolution();
	}

	create_from_json(json){
		this.power = json.power;
		this.name = json.name;
		this.race = json.race;
		this.classe = json.classe;
		this.is_female = json.is_female;
		this.is_biotique = json.is_biotique;
		this.attributs = json.attributs;
		this.competences = json.competences;
		this.talents = json.talents;
		this.avantages = json.avantages;
		this.biotique = json.biotique;
		this.omnitech = json.omnitech;
		this.armure = json.armure;
		this.armes = json.armes;
	}

	// On relance un tirage en conservant la race, classe, sexe et niveau de puissance
	reload(){
		// répartition des points d'attributs
		this.set_attributs();

		// répartition des points de competences
		this.set_competences();

		// Définition des avantages
		this.set_avantages();

		// Définition des talents
		this.set_talents();

		// gestion de l'omnitech et de ses modules
		this.set_omnitech();

		// Gestion de l'armure
		this.set_armure();

		// Choisi les armes utilisées
		this.set_armes();

		// Utilise les points d'exp alloué pour augmenté les stats
		this.evolution();
	}

	update_secAttr(){
		// Calcul des attributs secondaires
		var sante = this.attributs.masse*1 + this.attributs.physiques.vitalite*1 + 2;
		var volonte = this.attributs.mentales.resolution*1 + this.attributs.sociales.sangfroid*1;
		var initiative = this.attributs.physiques.dexterite*1 + this.attributs.sociales.sangfroid*1;
		var defense = this.attributs.mentales.astuce*1;
		if(this.attributs.physiques.dexterite*1 < this.attributs.mentales.astuce*1){
			defense = this.attributs.physiques.dexterite*1;
		}
		var bonus_dgt = this.attributs.physiques.force*1 - 3;
		var vitesse = this.attributs.physiques.dexterite*1 + this.attributs.physiques.force*1;
		if(this.race == "krogan"){
			vitesse -= 2;
		}
		var perception = this.attributs.mentales.astuce*1 + this.attributs.sociales.sangfroid*1;


		this.attributs.sante = sante;
		this.attributs.volonte = volonte;
		this.attributs.initiative = initiative;
		this.attributs.defense = defense;
		this.attributs.bonus_dgt = bonus_dgt;
		this.attributs.vitesse = vitesse;
		this.attributs.perception = perception;
	}

	set_race(){
		// détarmination de la race du personnage
		if(this.race==null){
			var rng = rand(1, 8);
			var race = null;
			var i = 0;

			for(var key in data.race){
				i++;
				if(i==rng){
					this.race = key;
				}
			}
		}
	}

	set_classe(){
		// détermination de la classe du personnage
		if(this.power == "inf"){
			this.classe="Civil";
			return;
		}

		if(this.is_biotique){
			var classes = ["Némésis", "Valkyrie", "Furie", "Foudre de guerre", "Sentinelle", "Destructeur"];
		}
		else{
			var classes = ["Commando","Sniper","Machiniste","Technologue","Infiltrateur","Franc-tireur"];
		}

		var rng = rand(0,5);
		this.classe = classes[rng];
	}

	set_attributs(){

		// on determine la masse selon la race et les differences male/femelle
		var masse = data.race[this.race].masse;
		// dans la cas ou les male et femelle n'ont pas la meme masse
		masse = masse.split('-');
		if(masse.length > 1){
			if(this.is_female){
				masse = masse[0];
			}
			else{
				masse = masse[1];
			}
		}
		else{
			masse = masse[0];
		}
		masse = masse*1;

		// Répartition des points de stats mental, physique ou social
		var total_mental = data.race[this.race][this.power].stats.mentales;
		var total_physique = data.race[this.race][this.power].stats.physiques;
		var total_sociales = data.race[this.race][this.power].stats.sociales;
		var total_biotique = data.race[this.race][this.power].stats.biotique;

		// Si la race n'impose pas de répartition entre mental, physique et social
		if(data.race[this.race][this.power].stats.globales > 0){
			// Definition des stats majeures en tenant compte de la classe
			var majeure = 7;
			if(this.classe != "Civil"){
				majeure = rand(1,7);
			}
			if(data.classes[this.classe].technik){
				majeure = rand(1,4);
			}
			if(data.classes[this.classe].militaire){
				majeure = rand(3,4);
			}

			var total_points = data.race[this.race][this.power].stats.globales*1;
			
			// Si le personnage est biotique, on garde une réserve de points pour les attributs biotiques
			if(this.is_biotique){
				var rng = rand(0, 7-total_biotique);
				total_biotique += rng;
				total_points -= rng;
			}

			switch(majeure){
				case 1:
					// Mental - physique - social
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_mental = rand(3, max);
					total_points -= total_mental;

					total_physique = rand(3, total_points-3);
					if(total_physique > 15){total_physique = 15;}
					total_points -= total_physique;

					if(total_points > 15){
						total_sociales = 15;
						total_points -= 15;
					}
					else{
						total_sociales = total_points;
						total_points = 0;
					}
					break;
				case 2:
					// Mental - social - physique
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_mental = rand(3, max);
					total_points -= total_mental;

					total_sociales = rand(3, total_points-3);
					if(total_sociales > 15){total_sociales = 15;}
					total_points -= total_sociales;

					if(total_points > 15){
						total_physique = 15;
						total_points -= 15;
					}
					else{
						total_physique = total_points;
						total_points = 0;
					}
					break;
				case 3:
					// Physique - social - mental
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_physique = rand(3, max);
					total_points -= total_physique;

					total_sociales = rand(3, total_points-3);
					if(total_sociales > 15){total_sociales = 15;}
					total_points -= total_sociales;

					if(total_points > 15){
						total_mental = 15;
						total_points -= 15;
					}
					else{
						total_mental = total_points;
						total_points = 0;
					}
					break;
				case 4:
					// Physique - mental - social
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_physique = rand(3, max);
					total_points -= total_physique;

					total_mental = rand(3, total_points-3);
					if(total_mental > 15){total_mental = 15;}
					total_points -= total_mental;

					if(total_points > 15){
						total_sociales = 15;
						total_points -= 15;
					}
					else{
						total_sociales = total_points;
						total_points = 0;
					}
					break;
				case 5:
					// Social - mental - physique
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_sociales = rand(3, max);
					total_points -= total_sociales;

					total_mental = rand(3, total_points-3);
					if(total_mental > 15){total_mental = 15;}
					total_points -= total_mental;

					if(total_points > 15){
						total_physique = 15;
						total_points -= 15;
					}
					else{
						total_physique = total_points;
						total_points = 0;
					}
					break;
				case 6:
					// Social - physique - mental
					var max = Math.floor(total_points-6);
					if(max > 15){max = 15;}
					total_sociales = rand(3, max);
					total_points -= total_sociales;

					total_physique = rand(3, total_points-3);
					if(total_physique > 15){total_physique = 15;}
					total_points -= total_physique;

					if(total_points > 15){
						total_mental = 15;
						total_points -= 15;
					}
					else{
						total_mental = total_points;
						total_points = 0;
					}
					break;
				default:
					// equitable
					total_mental = Math.floor(total_points / 3);
					if(total_mental > 15){total_mental = 15;}
					total_points -= total_mental;
					
					total_physique = Math.floor(total_points / 2);
					if(total_physique > 15){total_physique = 15;}
					total_points -= total_physique;

					if(total_points > 15){
						total_sociales = 15;
						total_points -= 15;
					}
					else{
						total_sociales = total_points;
						total_points = 0;
					}
			}

			// Si des points n'ont pas été distribués
			if(total_points > 0){
				while(total_points > 0){
					if(total_physique < 15 && total_points > 0){
						total_physique++;
						total_points--;
					}
					if(total_mental < 15 && total_points > 0){
						total_mental++;
						total_points--;
					}
					if(total_sociales < 15 && total_points > 0){
						total_sociales++;
						total_points--;
					}
				}
			}
		}

		// rapartition des attributs mentaux - intelligence / astuce / resolution
		var mentals = repartition(total_mental, 3);
		// rapartition des attributs physiques - force / dexterite / vitalite
		var physiques = repartition(total_physique, 3);
		// rapartition des attributs mentaux - presence / manipulation / sang froid
		var sociales = repartition(total_sociales, 3);

		var intelligence = mentals[0];
		var astuce = mentals[1];
		var resolution = mentals[2];

		var force = physiques[0];
		var dexterite = physiques[1];
		var vitalite = physiques[2];

		var presence = sociales[0];
		var manipulation = sociales[1];
		var sangfroid = sociales[2];

		// Calcul des attributs secondaires
		var sante = masse*1 + vitalite*1 + 2;
		var volonte = resolution*1 + sangfroid*1;
		var initiative = dexterite*1 + sangfroid*1;
		var defense = astuce*1;
		if(dexterite < astuce){
			defense = dexterite*1;
		}
		var bonus_dgt = force*1 - 3;
		var vitesse = dexterite*1 + force*1;
		if(this.race == "krogan"){
			vitesse -= 2;
		}
		var perception = astuce*1 + sangfroid*1;

		var alteration = 0;
		var integration = 0;
		var potence = 0;
		var charge_max = 0;
		var bio_portee = 0;
		var bio_ezo = 0;
		var bio_barriere = 0;
		if(this.is_biotique){
			var biotique = repartition(total_biotique, 2);
			alteration = biotique[0] + 2;
			integration = biotique[1] + 1;

			potence = Math.floor((alteration + integration) / 3);
			charge_max = Math.floor((masse + vitalite) / 3);
			bio_portee = 20 * resolution;
			bio_ezo = 3 * alteration;
		}

		// Structure fianle des attributs
		this.attributs = {
			"mentales":{
				"intelligence": intelligence,
				"astuce":astuce,
				"resolution":resolution
			},
			"physiques":{
				"force":force,
				"dexterite":dexterite,
				"vitalite":vitalite
			},
			"sociales":{
				"presence":presence,
				"manipulation":manipulation,
				"sangfroid":sangfroid
			},
			"biotique":{
				"alteration":alteration,
				"integration":integration,
				"potence":potence,
				"charge_max":charge_max,
				"portee":bio_portee,
				"ezo":bio_ezo,
				"barriere":bio_barriere
			},
			"masse":masse,
			"sante": sante,
			"volonte": volonte,
			"initiative": initiative,
			"defense": defense,
			"bonus_dgt": bonus_dgt,
			"vitesse": vitesse,
			"perception": perception
		};
	}

	set_favs_competences(fav_skills, skills_tree){
		for(var i = 0 ; i < fav_skills.length ; i++){
			this.competences[skills_tree][fav_skills[i]] = 1;
		}
	}

	fetch_competences(repartition, skill_tree){
		var i = 0;
		for(var key in this.competences[skill_tree]){
			this.competences[skill_tree][key] += repartition[i];
			i++;
		}
	}

	set_competences(){
		// initialisation
		this.competences = {
			"mentales":{
				"bricolage":0,
				"connaissance":0,
				"interface":0,
				"investigation":0,
				"medecine":0,
				"politique":0,
				"science":0,
				"technologie":0
			},
			"physiques":{
				"Arme à feu":0,
				"Arme blanche":0,
				"Athlétisme":0,
				"Bagarre":0,
				"Discretion":0,
				"Larcin":0,
				"Pilotage":0,
				"Survie":0
			},
			"sociales":{
				"Animaux":0,
				"Baratin":0,
				"Commandement":0,
				"Empathie":0,
				"Expression":0,
				"Intimidation":0,
				"Persuasion":0,
				"Socialisation":0
			}
		};

		// Augmentation des skills favoris
		var fav_skills_physique = data.classes[this.classe]["fav_skills"]["physiques"];
		this.set_favs_competences(fav_skills_physique, "physiques");

		var fav_skills_mentals = data.classes[this.classe]["fav_skills"]["mentales"];
		this.set_favs_competences(fav_skills_mentals, "mentales");

		var fav_skills_socials = data.classes[this.classe]["fav_skills"]["sociales"];
		this.set_favs_competences(fav_skills_socials, "sociales");

		// Choix du mode principal
		var tab_repartition = [
			repartition(data.race[this.race][this.power].competence.fst, 8, 4, true),
			repartition(data.race[this.race][this.power].competence.sec, 8, 4, true),
			repartition(data.race[this.race][this.power].competence.ter, 8, 4, true)
		];

		if(data.classes[this.classe].technik && !data.classes[this.classe].militaire){
			this.fetch_competences(tab_repartition[0], "mentales");
			this.fetch_competences(tab_repartition[1], "physiques");
			this.fetch_competences(tab_repartition[2], "sociales");
		}
		else if(!data.classes[this.classe].technik && data.classes[this.classe].militaire){
			this.fetch_competences(tab_repartition[0], "physiques");
			this.fetch_competences(tab_repartition[1], "mentales");
			this.fetch_competences(tab_repartition[2], "sociales");
		}
		else if(data.classes[this.classe].technik && data.classes[this.classe].militaire){
			var rng = rand(1, 10);
			if(rng > 5){
				this.fetch_competences(tab_repartition[0], "mentales");
				this.fetch_competences(tab_repartition[1], "physiques");
			}
			else{
				this.fetch_competences(tab_repartition[1], "mentales");
				this.fetch_competences(tab_repartition[0], "physiques");
			}
			this.fetch_competences(tab_repartition[2], "sociales");
		}
		else{
			var rng = rand(1, 10);
			if(rng > 5){
				this.fetch_competences(tab_repartition[0], "mentales");
				this.fetch_competences(tab_repartition[1], "physiques");
			}
			else{
				this.fetch_competences(tab_repartition[1], "mentales");
				this.fetch_competences(tab_repartition[0], "physiques");
			}
			this.fetch_competences(tab_repartition[2], "sociales");
		}
	}

	set_avantages(){
		var arr = new Array();

		// Ajout des avantages gratuits
		for(var key in data.race[this.race].avantages_offerts){
			arr.push(data.race[this.race].avantages_offerts[key]);
		}

		// Ajout d'avantages par races
		var avantage_possibles = new Array();
		avantage_possibles.push("inspirateur");					// 4
		avantage_possibles.push("oeil de lynx");				// 3 - 5
		avantage_possibles.push("ambidextre");					// 3
		avantage_possibles.push("peau de fer");					// 2
		avantage_possibles.push("volonte de fer");				// 2
		avantage_possibles.push("sens du danger");				// 2
		avantage_possibles.push("reputation");					// 1 - 4
		avantage_possibles.push("reflexes rapides");			// 1 - 3
		avantage_possibles.push("reflexes rapides");			// 1 - 3
		avantage_possibles.push("concentration");				// 1 - 3
		avantage_possibles.push("concentration");				// 1 - 3
		avantage_possibles.push("sprinteur");					// 1 - 3
		avantage_possibles.push("sprinteur");					// 1 - 3
		avantage_possibles.push("charmeur");					// 1 - 3
		avantage_possibles.push("savoir des anciens");			// 1 - 3
		avantage_possibles.push("resistance aux radiations");	// 1 - 2
		avantage_possibles.push("resistance aux radiations");	// 1 - 2
		avantage_possibles.push("PNJ doué");					// 1
		avantage_possibles.push("PNJ doué");					// 1
		avantage_possibles.push("PNJ doué");					// 1
		avantage_possibles.push("PNJ doué");					// 1

		switch(this.race){
			case "asari":
				break;
			case "butarien":
				break;
			case "drell":
				break;
			case "galarien":
				break;
			case "humain":
				break;
			case "krogan":
				avantage_possibles.push("geant");
				break;
			case "quarien":
				break;
			case "turien":
				break;
		}

		// Ajout aleatoire d'avantages
		var total_pts_avantages = data.race[this.race][this.power].avantages*1;
		var total_avantages = avantage_possibles.length-1;

		// Si le perso est un biotique, on ajout l'avantage correspondant
		if(this.is_biotique && not_in_array(arr, "biotique:5")){
			arr.push("biotique:5");
			total_pts_avantages -= 5;
		}

		// On ajoute d'autres talents dans la limite ds points disponibles
		while(total_pts_avantages > 0){
			var rng = rand(0, total_avantages);
			var av = data.avantages[avantage_possibles[rng]];
			var cout = av.cout_min;
			
			if(av.cout_min <= total_pts_avantages){
				if(av.cout_min != av.cout_max){
					
					var max = av.cout_max*1;
					if(max > total_pts_avantages){
						max = total_pts_avantages*1;
					}
					if(max < av.cout_min){
						max = av.cout_min*1;
					}

					cout = rand(av.cout_min*1, max*1);
				}

				if(cout <= total_pts_avantages && !this.has_avantage(avantage_possibles[rng], arr)){
					arr.push(avantage_possibles[rng] + ":" + cout);
					total_pts_avantages -= cout;
				}
			}

		}

		this.avantages = {0:arr};

		this.apply_avantages();
	}

	// Aplique les modifications aux attributs des avantages
	apply_avantages(){
		// Gestion des avantages qui modifies les competences ou attributs
		// Evasion donne +1 a la defense
		if(this.has_avantage('evasion')){
			this.attributs.defense += 1;
		}

		// Reflexe rapide Donne +X au score d'initiative
		var set = this.has_avantage('reflexes rapides');
		if(set){
			this.attributs.initiative += set*1;
		}

		// Geant Donne +1 en masse et donc +1 sante
		if(this.has_avantage('geant')){
			this.attributs.masse += 1;
			this.attributs.sante += 1;
		}
	}

	set_talents(){
		this.talents = {};
		// Total des points de talent à distribuer
		var total_talents_pts = data.race[this.race][this.power].talents*1;

		// Si l'avantage PNJ doué est présent
		if(this.has_avantage('PNJ doué')){
			total_talents_pts += 2;
		}

		// Ajout des talents gratuits
		// Asari ont psychokinesie 3 gratuit.
		if(this.race == "asari"){
			this.talents["psychokinesie"] = 3;
		}

		// Quarien ont pilotage spatial 2 gratuit
		if(this.race == "quarien"){
			this.talents["pilotage spatial"] = 2;
		}
		// Turien ont infanterie 2 gratuit
		if(this.race == "turien"){
			this.talents["infanterie"] = 2;
		}

		// Ajout des talents de classe
		var tal = data.classes[this.classe].fav_talents;
		for(var key in tal){
			if(total_talents_pts > 0){
				this.talents[tal[key]] = 1;
				total_talents_pts -= 1;
			}
		}

		if(total_talents_pts > 0){
			var count = 0;
			for(var key in this.talents){
				count++;
			}
			// Répartition des points restants
			var total_talents = repartition(total_talents_pts, count, 4, true);

			var index = 0;
			for(var key in this.talents){
				this.talents[key] += total_talents[index];
				index++;
			}
		}
	}

	set_omnitech(){
		// Gestion du modele et des modules omnitech

		// selection des omnitech éligibles
		// total d'emplacement necessaires pour la classe
		var lst_modules_classe = data.classes[this.classe].omnitech;
		var total_emplacement = 0;
		for(var key in lst_modules_classe){
			var test = data.get_omni_module(lst_modules_classe[key]);
			if(test){
				total_emplacement += test.grade_min*1;
			}
		}

		var omnitech_ok = new Array();
		for(var key in data.omnitech){
			if(data.omnitech[key].Emplacements > total_emplacement){
				omnitech_ok.push(key);
			}
		}

		var rng_omnitech = rand(0, omnitech_ok.length-1);
		this.omnitech = {
			"name": omnitech_ok[rng_omnitech],
			"modules": lst_modules_classe
		};
	}

	set_armure(){
		// Definiquelle armure est portée
		var lst_armor_ok = new Array();

		for(var key in data.armure){
			var is_ok = true;

			if(data.armure[key].race != "all" && data.armure[key].race != this.race){
				//console.log(key + " eccartée car race incompatible : " + this.race);
				is_ok = false;
			}

			if(data.classes[this.classe].armor.indexOf(data.armure[key].type) < 0){
				//console.log(key + " eccartée car classe incompatible : " + this.classe);
				is_ok = false;
			}

			if(this.is_biotique && (data.armure[key].cat == "technique" || data.armure[key].cat == "mixte" || data.armure[key].cat == "machiniste")){
				//console.log(key + " eccartée car biotique");
				is_ok = false;
			}

			if(data.armure[key].force > this.attributs.physiques.force){
				//console.log(key + " eccartée car force insuffisante : " + this.attributs.physiques.force);
				is_ok = false;
			}

			if(is_ok){
				lst_armor_ok.push(key);
			}

		}

		var rng = rand(0, lst_armor_ok.length-1);
		this.armure = {
			"name":lst_armor_ok[rng],
			"stats":{
				"armure":data.armure[lst_armor_ok[rng]].armure,
				"cellule":data.armure[lst_armor_ok[rng]].cellules,
				"energie":data.armure[lst_armor_ok[rng]].cellules * 3,
				"bouclier":data.armure[lst_armor_ok[rng]].cellules * 5,
			}
		};

		// modification aux attributs
	}

	set_armes(){
		// Choisi les armes portées par le personnage
		var lst_armes = new Array();

		var done = false;
		var i = 0;
		var min_add_wep = 5;
		while(!done){
			var arme = this.get_random_weapon(data.classes[this.classe].armes[i]);
			if(!arme){
				done = true;
			}
			else{
				lst_armes.push(arme);
			}

			i++;

			// On test au hasard si le personnage a une seconde arme
			min_add_wep += 2;
			var add_wep = rand(1, 10);
			if(add_wep < min_add_wep){
				done = true;
			}

			if(i>=data.classes[this.classe].armes.length){
				done = true;
			}
		}

		this.armes = {"liste":lst_armes};
	}

	get_random_weapon(cat){
		var lst_armes_ok = new Array();

		for(var key in data.armes[cat]){
			//console.log("armes considérée : " + key);
			
			var arme = data.armes[cat][key];
			var is_ok = true;

			if(arme.race != "all" && arme.race != this.race){
				//console.log('race incompatible : ' + arme.race);
				is_ok = false;
			}

			if(arme.force > this.attributs.physiques.force){
				//console.log('force trop faible : ' + arme.force);
				is_ok = false;
			}

			if(is_ok){
				lst_armes_ok.push(key);
			}
		}

		if(lst_armes_ok.length == 0){
			console.log("pas d'arme dans la liste !!!!!!");
			return false;
		}

		var rng = rand(1, lst_armes_ok.length-1);
		return lst_armes_ok[rng];
	}

	// Check si le personnage dispose d'un avantage et retourne son niveau
	has_avantage(search, arr=null){

		if(arr == null){
			arr = this.avantages[0];
		}

		for(var key in arr){
			var obj = arr[key].split(":");

			// Si le string contenait bien 2 parties
			if(obj.length == 2){
				var niveau = obj[1];
				var talent = obj[0];

				if(talent == search){
					return niveau;
				}
			}	
		}

		return false;
	}

	has_talents(search){
		if(this.talents == null){
			return false;
		}

		for(var key in this.talents){
			if(key == search){
				return this.talents[key];
			}
		}

		return false;
	}

	// Fait évoluer le parsonnage en fonction du nombre de pts d'exp disponibles
	evolution(){
		// Si on a pas de point d'exp on ne fait rien
		if(this.experience < 1){
			console.log("pas assez de points");
			return;
		}

		// Achats possibles
			// Attributs 5x lvl à atteindre
			// Competences 3 x lvl a atteindre
			// Talents 4x lvl a atteindre

		var total_exp = this.experience;
		// On determine aléatoirement un type d'augmentation
		var max = ["attributs", "competence", "talent"];
		var choix = rand(0,max.length-1);
		var done = false;
		var count_done = 5;
		while(!done){
			switch(max[choix]){
				case "attributs": // Augmentation d'attribut
					total_exp -= this.evol_attributs(total_exp);
					break;
				case "competence": // Augmentation de competence
					total_exp -= this.evol_competence(total_exp);
					break;
				case "talent": // Augmentation de talent
					total_exp -= this.evol_talent(total_exp);
					break;
				default:
					// On suggère une autre augmentation
					console.log("autre augmentation suggérée");
					count_done--;
			}
			choix = rand(0,max.length-1);

			// Calcul du cout minimum d'une augmentation
			var cout_min = this.evol_cout_min();
			console.log("il faut minimum " + cout_min + "xp pour une evolution ("+total_exp+" disponible)");

			if(total_exp < cout_min || count_done < 0){
				console.log("fin d'augment car exp insuffisante " + total_exp + " " + count_done);
				done = true;
			}
		}

		// Mise à jour des attributs secondaires en fonction des stats modifiées
		this.update_secAttr();
		this.apply_avantages();
	}

	evol_cout_min(){
		var cout_min = 0;

		// Le cout minimum d'une augmentation d'attribut
		var cout_attribut = 6;
		for(var att in this.attributs.mentales){
			if(this.attributs.mentales[att] < cout_attribut){
				cout_attribut = this.attributs.mentales[att];
			}
		}
		for(var att in this.attributs.physiques){
			if(this.attributs.physiques[att] < cout_attribut){
				cout_attribut = this.attributs.physiques[att];
			}
		}
		for(var att in this.attributs.sociales){
			if(this.attributs.sociales[att] < cout_attribut){
				cout_attribut = this.attributs.sociales[att];
			}
		}
		cout_attribut = (cout_attribut+1) * 5;

		// Le cout minimum d'une augmentation de competence
		var cout_competence = 6;
		for(var att in this.competences.mentales){
			if(this.competences.mentales[att] < cout_competence){
				cout_competence = this.competences.mentales[att];
			}
		}
		for(var att in this.competences.physiques){
			if(this.competences.physiques[att] < cout_competence){
				cout_competence = this.competences.physiques[att];
			}
		}
		for(var att in this.competences.sociales){
			if(this.competences.sociales[att] < cout_competence){
				cout_competence = this.competences.sociales[att];
			}
		}
		cout_competence = (cout_competence+1) * 3;

		// Le cou minimum d'une augmentation de talent
		var cout_talent = 6;
		cout_talent = cout_talent * 4;

		cout_min = Math.min(cout_attribut, cout_competence, cout_talent);

		return cout_min;
	}

	evol_attribut_add(attribut, arr_attributs, arr_poids){
		var poid = 1;
		var classe = data.classes[this.classe];
		
		if(classe.fav_stats.mentales[0] == attribut
			|| classe.fav_stats.physiques[0] == attribut
			|| classe.fav_stats.sociales[0] == attribut){
			poid += 2;
		}

		if(classe.fav_stats.mentales[1] == attribut
			|| classe.fav_stats.physiques[1] == attribut
			|| classe.fav_stats.sociales[1] == attribut){
			poid += 1;
		}

		if(this.attributs.mentales[attribut] != undefined){
			if(this.attributs.mentales[attribut] == 1){ poid = poid * 4;}
			if(this.attributs.mentales[attribut] == 2){ poid = poid * 2;}
			if(this.attributs.mentales[attribut] == 5){ poid = 0;}
		}
		else if(this.attributs.physiques[attribut] != undefined){
			if(this.attributs.physiques[attribut] == 1){ poid = poid * 4;}	
			if(this.attributs.physiques[attribut] == 2){ poid = poid * 2;}	
			if(this.attributs.physiques[attribut] == 5){ poid = 0;}
		}
		else if(this.attributs.sociales[attribut] != undefined){
			if(this.attributs.sociales[attribut] == 1){ poid = poid * 4;}
			if(this.attributs.sociales[attribut] == 2){ poid = poid * 2;}
			if(this.attributs.sociales[attribut] == 5){ poid = 0;}
		}

		if(poid != 0){
			arr_attributs.push(attribut);
			arr_poids.push(poid);
		}
	}

	evol_attributs(max_exp){

		var arr_attributs = new Array();
		var arr_poids = new Array();

		// mental
			// intelligence
			this.evol_attribut_add("intelligence", arr_attributs, arr_poids);

			// Astuce
			this.evol_attribut_add("astuce", arr_attributs, arr_poids);

			// Resolution
			this.evol_attribut_add("resolution", arr_attributs, arr_poids);

		// Physique
			// Force
			this.evol_attribut_add("force", arr_attributs, arr_poids);

			// Dexterite
			this.evol_attribut_add("dexterite", arr_attributs, arr_poids);

			// Vitalite
			this.evol_attribut_add("vitalite", arr_attributs, arr_poids);

		// Social
			// Presence
			this.evol_attribut_add("presence", arr_attributs, arr_poids);

			// Manipulation
			this.evol_attribut_add("manipulation", arr_attributs, arr_poids);

			// Sang-froid
			this.evol_attribut_add("sangfroid", arr_attributs, arr_poids);

			// On prepare la liste des attribut possibles et leur utilité au build
			console.log(arr_attributs);
			console.log(arr_poids);

			var arr_poid_cumule = new Array();
			var cumule = 0;
			// Calcul des valeurs cumulées
			for(var key in arr_attributs){
				cumule += arr_poids[key];
				arr_poid_cumule.push(cumule);
			}

			console.log(arr_poid_cumule);
			// Tirage au sort
			var rng = rand(1, cumule);
			var index = arr_poid_cumule.length-1;
			var trouve = false;
			console.log("on cherche : " + rng);
			if(rng <=  arr_poid_cumule[0]){
				index = 0;
			}
			else{
				while(!trouve && index >=0){
					if(rng >= arr_poid_cumule[index]){
						trouve = true;
						index++;
					}
					else{
						index--;
					}
				}
			}

			// on augente
			console.log('on augmente : ' + arr_attributs[index]);
			var cout = 0;
			if(this.attributs.mentales[arr_attributs[index]] != undefined){
				console.log("old value : " + this.attributs.mentales[arr_attributs[index]]);
				cout = ((this.attributs.mentales[arr_attributs[index]]*1)+1) * 5;
				if(cout <= max_exp){
					this.attributs.mentales[arr_attributs[index]]++;
				}
				else{
					cout = 0;
				}
				console.log("new value : " + this.attributs.mentales[arr_attributs[index]]);
			}
			if(this.attributs.physiques[arr_attributs[index]] != undefined){
				console.log("old value : " + this.attributs.physiques[arr_attributs[index]]);
				cout = ((this.attributs.physiques[arr_attributs[index]]*1)+1) * 5;
				if(cout <= max_exp){
					this.attributs.physiques[arr_attributs[index]]++;
				}
				else{
					cout = 0;
				}
				console.log("new value : " + this.attributs.physiques[arr_attributs[index]]);
			}
			if(this.attributs.sociales[arr_attributs[index]] != undefined){
				console.log("old value : " + this.attributs.sociales[arr_attributs[index]]);
				cout = ((this.attributs.sociales[arr_attributs[index]]*1)+1) * 5;
				if(cout <= max_exp){
					this.attributs.sociales[arr_attributs[index]]++;
				}
				else{
					cout = 0;
				}
				console.log("new value : " + this.attributs.sociales[arr_attributs[index]]);
			}

		console.log("total exp : " + cout);
		return cout;
	}

	evol_competence_add(skill_tree, arr_competences, arr_poids){
		for(var n in data.competences[skill_tree]){
			var key = data.competences[skill_tree][n];

			var poid = 1;
			if(data.classes[this.classe].fav_skills[skill_tree].indexOf(key) >= 0){
				// C'est une competence favorite poid +2
				poid = 10;
			}
			
			if(data.classes[this.classe].technik && skill_tree == "mentales"){
				// C'est une competences utile poid +1
				poid += 5;
			}
			else if(data.classes[this.classe].militaire && skill_tree == "physiques"){
				// C'est une competences utile poid +1
				poid += 5;
			}

			if(this.competences[skill_tree][key] == 1){
				poid = poid * 8;
			}

			if(this.competences[skill_tree][key] == 2){
				poid = poid * 4;
			}

			if(this.competences[skill_tree][key] < 5){
				arr_competences.push(key);
				arr_poids.push(poid);
			}
		}
	}

	evol_competence_augment(skill_tree, competence, cout, max_exp){
		if(this.competences[skill_tree][competence] != undefined){
			console.log("old value : " + this.competences[skill_tree][competence]);
			cout = ((this.competences[skill_tree][competence]*1)+1) * 3;
			console.log("evolution pour " + cout + " ("+max_exp+" disponible)");
			if(cout <= max_exp){
				this.competences[skill_tree][competence]++;
				max_exp -= cout;
			}
			else{
				console.log("pour le type " + skill_tree + " on annule le cout");
				cout = 0;
			}
			console.log("new value : " + this.competences[skill_tree][competence]);
		}

		return cout;
	}

	evol_competence(max_exp){
		var arr_competences = new Array();
		var arr_poids = new Array();
		var arr_poids_cumule = new Array();

		this.evol_competence_add("mentales", arr_competences, arr_poids);
		this.evol_competence_add("physiques", arr_competences, arr_poids);
		this.evol_competence_add("sociales", arr_competences, arr_poids);

		var cumule = 0;
		// Calcul des valeurs cumulées
		for(var key in arr_competences){
			cumule += arr_poids[key];
			arr_poids_cumule.push(cumule);
		}

		console.log(' -- Preparation des données competences');
		console.log(arr_competences);
		console.log(arr_poids);
		console.log(arr_poids_cumule);

		var rng = rand(1, cumule);
		var index = arr_poids_cumule.length-1;
		var trouve = false;
		console.log("on cherche : " + rng);
		if(rng <=  arr_poids_cumule[0]){
			index = 0;
		}
		else{
			while(!trouve && index >=0){
				if(rng >= arr_poids_cumule[index]){
					trouve = true;
					index++;
				}
				else{
					index--;
				}
			}
		}

		// on augente
		console.log('on augmente : ' + arr_competences[index]);

		// Calcul du cout en exp de l'augmentation
		var cout = 0;
		cout = this.evol_competence_augment("mentales", arr_competences[index], cout, max_exp);
		cout = this.evol_competence_augment("physiques", arr_competences[index], cout, max_exp);
		cout = this.evol_competence_augment("sociales", arr_competences[index], cout, max_exp);

		console.log("total exp : " + cout);
		return cout;
	}

	evol_talent(max_exp){
		// Test des talents a augmenter.
		// Un talent existant ou un nouveau talent.
		
		var cout = 0;
		if(max_exp < 10){
			cout = max_exp;
		}
		return cout;
	}

	// Retourne un json de l'ensemble des stats du perso pour sauvegarde
	get_json(){
		var json = {
			power:this.power,
			name:this.name,
			race:this.race,
			classe:this.classe,
			is_female:this.is_female,
			is_biotique:this.is_biotique,
			attributs:this.attributs,
			competences:this.competences,
			talents:this.talents,
			avantages:this.avantages,
			biotique:this.biotique,
			omnitech:this.omnitech,
			armure:this.armure,
			armes:this.armes
		};

		try{
			json = JSON.stringify(json);
			return json;
		} catch (e) {
  			console.error("Parsing error:", e); 
		}
	}
}