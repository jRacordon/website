class c_fiche_perso{
	
	constructor(number=0){
		// initialisation de la fiche de perso
		this.number = number;
		this.fiche = $('<div></div>').attr('class', 'fiche_perso fiche_' + number);

		// $('#form_actions').append($('<div></div>').attr('rel','yolo').text('yolo'));
		this.condition_title = 'Conditions';
		this.attribute_title = 'Attributs';
		this.competences_title = 'Competences';
		this.avantages_title = 'Avantages';
		this.talents_title = 'Talents';
		this.armure_title = 'Armure';
		this.biotique_title = 'Biotique';
		this.omnitech_title = 'Omnitech';
		this.armes_title = "Armes";
	}

	// Ajoute une classe de personnage avec les statistiques à afficher
	add_caracter(caracter){
		this.caracter = caracter;
	}

	create(doc){
		// Creation des elements constituants de la fiche de persos

		// Pave conditions
		var pave_conditions = $('<div></div>').attr({'class':'wide'});
		var pave_conditions_inner = $('<fieldset></fieldset>');

		pave_conditions_inner.append('<legend>'+this.condition_title+'</legend>');
		this.txtName = this.create_name(this.caracter.name);
		pave_conditions_inner.append(this.txtName);
		pave_conditions_inner.append(this.create_select());
		pave_conditions_inner.append(this.create_stat('sante', this.caracter.attributs.sante));
		pave_conditions_inner.append(this.create_stat('defense', this.caracter.attributs.defense));
		pave_conditions_inner.append(this.create_stat('initiative', this.caracter.attributs.initiative));
		pave_conditions_inner.append(this.create_stat('perception', this.caracter.attributs.perception));
		pave_conditions_inner.append(this.create_stat('masse', this.caracter.attributs.masse));
		pave_conditions_inner.append(this.create_stat('vitesse', this.caracter.attributs.vitesse));
		pave_conditions_inner.append(this.create_stat('volonte', this.caracter.attributs.volonte));
		pave_conditions_inner.append(this.create_stat('Bonus dgt', this.caracter.attributs.bonus_dgt));

		pave_conditions.append(pave_conditions_inner);
		this.fiche.append(pave_conditions);

		// Pave attributs
		var pave_attributes = $('<div></div>').attr({'class':'wide'});
		var pave_attributes_inner = $('<fieldset></fieldset>');
		
		pave_attributes_inner.append('<legend>'+this.attribute_title+'</legend>');

		pave_attributes_inner.append(this.create_stat('intelligence', this.caracter.attributs.mentales.intelligence));
		pave_attributes_inner.append(this.create_stat('force', this.caracter.attributs.physiques.force));
		pave_attributes_inner.append(this.create_stat('presence', this.caracter.attributs.sociales.presence));

		pave_attributes_inner.append(this.create_stat('astuce', this.caracter.attributs.mentales.astuce));
		pave_attributes_inner.append(this.create_stat('dexterite', this.caracter.attributs.physiques.dexterite));
		pave_attributes_inner.append(this.create_stat('manipulation', this.caracter.attributs.sociales.manipulation));
		
		pave_attributes_inner.append(this.create_stat('resolution', this.caracter.attributs.mentales.resolution));
		pave_attributes_inner.append(this.create_stat('vitalite', this.caracter.attributs.physiques.vitalite));
		pave_attributes_inner.append(this.create_stat('sangfroid', this.caracter.attributs.sociales.sangfroid));

		pave_attributes.append(pave_attributes_inner);
		this.fiche.append(pave_attributes);

		// Pave competences
		var pave_competences = $('<div></div>').attr({'class':'wide'});
		var pave_competences_inner = $('<fieldset></fieldset>');

		pave_competences_inner.append('<legend>'+this.competences_title+'</legend>');

		for(var key in this.caracter.competences.mentales){
			pave_competences_inner.append(this.create_stat(key, this.caracter.competences.mentales[key]));
		}

		for(var key in this.caracter.competences.physiques){
			pave_competences_inner.append(this.create_stat(key, this.caracter.competences.physiques[key]));
		}

		for(var key in this.caracter.competences.sociales){
			pave_competences_inner.append(this.create_stat(key, this.caracter.competences.sociales[key]));
		}

		pave_competences.append(pave_competences_inner);
		this.fiche.append(pave_competences);

		// Pave avantages
		var pave_avantages = $('<div></div>').attr({'class':'col2 left'});
		var pave_avantages_inner = $('<fieldset></fieldset>');
		
		pave_avantages_inner.append('<legend>'+this.avantages_title+'</legend>');

		for(var key in this.caracter.avantages[0]){
			console.log(this.caracter.avantages[0][key]);
			var ava = this.caracter.avantages[0][key].split(':');
			var ava_titre = ava[0];
			var ava_lvl = ava[1];
			console.log(ava_titre);

			// Test s'il s'agit de l'avantage doue pour ...
			if(ava_titre.substr(0,9) == "doue pour"){
				var tooltip = data.avantages["doue pour"].description;
			}
			else{
				var tooltip = data.avantages[ava_titre].description;
			}
			pave_avantages_inner.append(this.create_stat_tooltip(ava_titre, tooltip, ava_lvl));
		}

		pave_avantages.append(pave_avantages_inner);
		this.fiche.append(pave_avantages);

		// Pave talents
		var pave_talents = $('<div></div>').attr({'class':'col2 right'});
		var pave_talents_inner = $('<fieldset></fieldset>');
		
		pave_talents_inner.append('<legend>'+this.talents_title+'</legend>');

		for(var key in this.caracter.talents){
			pave_talents_inner.append(this.create_stat(key, this.caracter.talents[key]));
		}

		pave_talents.append(pave_talents_inner);
		this.fiche.append(pave_talents);

		// Pave armure
		var pave_armure = $('<div></div>').attr({'class':'col3 left'});
		var pave_armure_inner = $('<fieldset></fieldset>');
		
		pave_armure_inner.append("<legend>"+this.armure_title+" : "+this.caracter.armure.name+"</legend>");
		pave_armure_inner.append(this.create_stat('armure', this.caracter.armure.stats.armure));
		pave_armure_inner.append(this.create_stat('cellule', this.caracter.armure.stats.cellule));
		pave_armure_inner.append(this.create_stat('energie', this.caracter.armure.stats.energie));
		pave_armure_inner.append(this.create_stat('bouclier', this.caracter.armure.stats.bouclier));

		pave_armure.append(pave_armure_inner);
		this.fiche.append(pave_armure);

		// Pave omnitech
		var pave_omnitech = $('<div></div>').attr({'class':'col3'});
		var pave_omnitech_inner = $('<fieldset></fieldset>');
		
		pave_omnitech_inner.append('<legend>'+this.omnitech_title+":"+this.caracter.omnitech.name+'</legend>');
		pave_omnitech_inner.append(this.create_stat('protocole', data.omnitech[this.caracter.omnitech.name].Protocole));
		pave_omnitech_inner.append(this.create_stat('integrite', data.omnitech[this.caracter.omnitech.name].Integrite));
		pave_omnitech_inner.append(this.create_stat('detection', data.omnitech[this.caracter.omnitech.name].Detection));

		for(var key in this.caracter.omnitech.modules){
			pave_omnitech_inner.append(this.create_stat(this.caracter.omnitech.modules[key], data.get_omni_module(this.caracter.omnitech.modules[key]).grade_min));
		}

		pave_omnitech.append(pave_omnitech_inner);
		this.fiche.append(pave_omnitech);

		// Pave biotique
		var pave_biotique = $('<div></div>').attr({'class':'col3 right'});
		var pave_biotique_inner = $('<fieldset></fieldset>');
		
		pave_biotique_inner.append('<legend>'+this.biotique_title+'</legend>');
		pave_biotique_inner.append(this.create_stat('alteration', this.caracter.attributs.biotique.alteration));
		pave_biotique_inner.append(this.create_stat('integration', this.caracter.attributs.biotique.integration));
		pave_biotique_inner.append(this.create_stat('potence', this.caracter.attributs.biotique.potence));
		pave_biotique_inner.append(this.create_stat('chargemax', this.caracter.attributs.biotique.charge_max));
		pave_biotique_inner.append(this.create_stat('portee', this.caracter.attributs.biotique.portee));
		pave_biotique_inner.append(this.create_stat('ezo', this.caracter.attributs.biotique.ezo));
		pave_biotique_inner.append(this.create_stat('barriere', this.caracter.attributs.biotique.barriere));

		pave_biotique.append(pave_biotique_inner);
		this.fiche.append(pave_biotique);

		// Pave des armes
		var pave_armes = $('<div></div>').attr({'class':'wide'});
		var pave_armes_inner = $('<fieldset></fieldset>');
		
		pave_armes_inner.append('<legend>'+this.armes_title+'</legend>');

		var bloc = $("<div class='wep_line'></div>");
		bloc.append("<span>Nom</span>");
		bloc.append("<span class='small'>Cap</span>");
		bloc.append("<span class='small'>Arm</span>");
		bloc.append("<span class='large'>Auto</span>");
		bloc.append("<span class='large'>Dégats</span>");
		bloc.append("<span class='small'>Recharge</span>");
		bloc.append("<span>Portee</span>");
		bloc.append("<span>Attenuation</span>");
		pave_armes_inner.append(bloc);

		for(var index in this.caracter.armes.liste){
			pave_armes_inner.append(this.create_wep_line(this.caracter.armes.liste[index]));
		}

		pave_armes.append(pave_armes_inner);
		this.fiche.append(pave_armes);

		doc.append(this.fiche);
	}

	// Creation du champ de texte pour le nom
	create_name(value=""){
		var bloc = $('<label></label>').attr({'rel':'nom'}).text('Nom');
		bloc.append($('<input />').attr({'type':'text', 'class':'text','maxlength':'10','value':value}));
		bloc.append($('<a></a>').attr({'class':'picto btn btn-recycle icon-recycle', 'rel':this.number}));

		return bloc;
	}

	// Creation du champ select pour l'espece
	create_select(){
		var bloc = $('<label></label>').attr({'rel':'espece'}).text('Espece');

		var select = $('<select></select>').attr({'class':'text'});
		for(var key in data.race){
			select.append($('<option></option>').attr({'val': key}).text(key));
		}

		// positionnement sur la race du personnage
		select.val(this.caracter.race);


		bloc.append(select);

		return bloc;
	}

	// Creation des champs de stats generiques
	create_stat(name, value=0){
		var bloc = $('<label></label>').attr({'rel':name}).text(name);
		bloc.append($('<input />').attr({'type':'text', 'class':'stat '+name,'maxlength':'2', 'value':value}));

		return bloc;
	}

	create_stat_tooltip(name, tooltip, value=0){
		var bloc = $('<label></label>').attr({'rel':name}).text(name);
		bloc.append($('<input />').attr({'type':'text', 'class':'stat '+name,'maxlength':'2', 'value':value}));
		bloc.append('<div class="tooltip">'+tooltip+'</div');

		return bloc;
	}

	create_wep_line(wep_name){
		var bloc = $("<div class='wep_line'></div>");
		var wep = data.get_weapon(wep_name);
		if(wep){
			bloc.append("<span>"+wep_name+"</span>");
			bloc.append("<span class='small'>"+wep.capacite+"</span>");
			bloc.append("<span class='small'>"+wep.armure+"</span>");
			bloc.append("<span class='large'>"+wep.auto+"</span>");
			bloc.append("<span class='large'>"+wep.dgt+"</span>");
			bloc.append("<span class='small'>"+wep.recharge+"</span>");
			bloc.append("<span>"+wep.portee.courte+" / "+wep.portee.moyenne+" / "+wep.portee.longue+"</span>");
			if(wep.attenuation != undefined){
				bloc.append("<span>" + wep.attenuation.val + " / " + wep.attenuation.dist + "</span>");
			}else{
				bloc.append("<span> - </span>");
			}
		}

		return bloc;
	}
}