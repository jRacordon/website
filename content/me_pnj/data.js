// Class regroupant les données du jeu utile pour les autres éléments
class c_data{
		constructor(){
			
			// Liste des races disponibles pour la création de personnages
			this.race ={
				"asari":{
					"female":false,
					"biotique":true,
					"arm_specific":false,
					"masse":"3",
					"avantages_offerts":["biotique:5","ezo-mentalisme:2","charmeur:3","fusion de l esprit:1"],
					"inf":{
						"stats":{
							"globales":0,
							"mentales":6,
							"physiques":5,
							"sociales":7,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":0,
							"mentales":8,
							"physiques":7,
							"sociales":9,
							"biotique":2
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":0,
							"mentales":9,
							"physiques":9,
							"sociales":11,
							"biotique":4
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":0,
							"mentales":10,
							"physiques":10,
							"sociales":13,
							"biotique":6
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				},
				"butarien":{
					"female":true,
					"biotique":true,
					"arm_specific":false,
					"masse":"3-4",
					"avantages_offerts":["oeil de lynx:5"],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"3",
						"avantages":"7"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"7",
						"avantages":"9"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"11",
						"avantages":"11"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"15",
						"avantages":"13"
					}
				},
				"drell":{
					"female":true,
					"biotique":true,
					"arm_specific":false,
					"masse":"3-4",
					"avantages_offerts":["biotique:5", "memoire eidethique:4", "assimilation:3", "concentration:2", "reflexes rapides:1"],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"1",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"5",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"9",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"13",
						"avantages":"8"
					}
				},
				"galarien":{
					"female":false,
					"biotique":true,
					"arm_specific":false,
					"masse":"3",
					"avantages_offerts":["reflexes rapides:5", "memoire eidethique:2", "oeil de lynx:3", "sens commun:4", "evasion:3"],
					"inf":{
						"stats":{
							"globales":0,
							"mentales":7,
							"physiques":5,
							"sociales":6,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":0,
							"mentales":9,
							"physiques":7,
							"sociales":8,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":0,
							"mentales":11,
							"physiques":9,
							"sociales":9,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":0,
							"mentales":13,
							"physiques":10,
							"sociales":10,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				},
				"humain":{
					"female":true,
					"biotique":true,
					"arm_specific":false,
					"masse":"3-4",
					"avantages_offerts":[],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"3",
						"avantages":"12"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"7",
						"avantages":"14"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"11",
						"avantages":"16"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"15",
						"avantages":"18"
					}
				},
				"krogan":{
					"female":false,
					"biotique":true,
					"arm_specific":true,
					"masse":"5",
					"avantages_offerts":["oeil de lynx:3", "resistance aux radiations:2", "resistance aux toxines:2", "armure naturelle:4", "vitalite krogane:5", "guerison krogane:5", "rage du sang:1"],
					"inf":{
						"stats":{
							"globales":0,
							"mentales":6,
							"physiques":8,
							"sociales":4,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"0"
					},
					"com":{
						"stats":{
							"globales":0,
							"mentales":8,
							"physiques":11,
							"sociales":7,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"0"
					},
					"sup":{
						"stats":{
							"globales":0,
							"mentales":9,
							"physiques":12,
							"sociales":9,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"1"
					},
					"elite":{
						"stats":{
							"globales":0,
							"mentales":10,
							"physiques":15,
							"sociales":10,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"3"
					}
				},
				"quarien":{
					"female":true,
					"biotique":false,
					"arm_specific":false,
					"masse":"3-4",
					"avantages_offerts":["touche a tout:4", "doue pour technologie:1", "doue pour bricolage:1"],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"6"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"8"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"10"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"12"
					}
				},
				"turien":{
					"female":true,
					"biotique":true,
					"arm_specific":false,
					"masse":"4",
					"avantages_offerts":["oeil de lynx:5", "code d honneur:3", "resistance aux radiations:1", "sprinteur:2"],
					"inf":{
						"stats":{
							"globales":0,
							"mentales":6,
							"physiques":7,
							"sociales":5,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":0,
							"mentales":8,
							"physiques":9,
							"sociales":7,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":0,
							"mentales":9,
							"physiques":11,
							"sociales":9,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":0,
							"mentales":10,
							"physiques":13,
							"sociales":10,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				},
				"Cerberus":{
					"female":false,
					"biotique":true,
					"arm_specific":false,
					"masse":"3-4",
					"avantages_offerts":[],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				},
				"Geth":{
					"female":false,
					"biotique":false,
					"arm_specific":true,
					"masse":"5",
					"avantages_offerts":[],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				},
				"Vortchas":{
					"female":false,
					"biotique":false,
					"arm_specific":false,
					"masse":"4",
					"avantages_offerts":["oeil de lynx:3", "resistance aux radiations:2", "resistance aux toxines:2", "armure naturelle:4", "vitalite krogane:5", "guerison krogane:5"],
					"inf":{
						"stats":{
							"globales":18,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":8,
							"sec":5,
							"ter":3
						},
						"talents":"0",
						"avantages":"2"
					},
					"com":{
						"stats":{
							"globales":24,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":11,
							"sec":7,
							"ter":4
						},
						"talents":"4",
						"avantages":"4"
					},
					"sup":{
						"stats":{
							"globales":29,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":14,
							"sec":9,
							"ter":5
						},
						"talents":"8",
						"avantages":"6"
					},
					"elite":{
						"stats":{
							"globales":33,
							"mentales":0,
							"physiques":0,
							"sociales":0,
							"biotique":0
						},
						"competence":{
							"fst":17,
							"sec":11,
							"ter":7
						},
						"talents":"12",
						"avantages":"8"
					}
				}
			};
			
			// Liste des classes utilisée pour la création de persos
			this.classes = {
				"Commando":{
					"technik": false,
					"militaire": true,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["astuce","resolution"],
						"physiques":["force","vitalite"],
						"sociales":["sangfroid", "presence"]
					},
					"fav_skills":{
						"physiques": ["Arme à feu", "Bagarre", "Athlétisme"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["infanterie", "corps à corps", "vétéran"],
					"armes":["assault", "pompe"],
					"armor":["civil", "lourde", "titan"],
					"omnitech":["detection de presence", "lame insta-forgee"]
				},
				"Némésis":{
					"technik": false,
					"militaire": false,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["resolution", "intelligence"],
						"physiques":["force", "dexterite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["destruction", "fortification", "psychokinesie", "magister"],
					"armes":["pistolets", "mitra"],
					"armor":["civil", "legere", "moyenne"],
					"omnitech":["lame insta-forgee"]
				},
				"Valkyrie":{
					"technik": false,
					"militaire": false,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["resolution", "intelligence"],
						"physiques":["dexterite", "force"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme blanche", "Bagarre", "Athlétisme"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["amplification", "tachyokinesie", "psychokinesie", "magister"],
					"armes":["pistolets", "melee"],
					"armor":["civil", "legere", "moyenne"],
					"omnitech":["lame insta-forgee"]
				},
				"Sniper":{
					"technik": false,
					"militaire": true,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["astuce", "intelligence"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu", "Discretion"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["tir de precision", "tueur de l ombre", "veteran"],
					"armes":["precision", "assault"],
					"armor":["civil", "legere", "moyenne"],
					"omnitech":["vision nocturne", "detection de presence", "camouflage"]
				},
				"Machiniste":{
					"technik": true,
					"militaire": false,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": [],
						"mentales": ["interface", "technologie"],
						"sociales": []
					},
					"fav_talents":["expert mecas", "piratage", "sabotage", "specialiste"],
					"armes":["pistolets", "mitra"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["devkit", "craqueur", "brouilleur", "generateur"]
				},
				"Technologue":{
					"technik": true,
					"militaire": false,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": [],
						"mentales": ["interface", "technologie"],
						"sociales": []
					},
					"fav_talents":["expert mecas", "ravage", "blindage", "specialiste"],
					"armes":["pistolets", "mitra"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["devkit", "centrale a plasma", "generateur"]
				},
				"Furie":{
					"technik": false,
					"militaire": true,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "force"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme blanche", "Bagarre", "Athlétisme"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["corps a corps", "amplification", "tachyokinesie"],
					"armes":["pistolets", "melee"],
					"armor":["civil", "legere", "moyenne"],
					"omnitech":["lame insta-forgee"]
				},
				"Foudre de guerre":{
					"technik": false,
					"militaire": true,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "force"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu", "Bagarre", "Athlétisme"],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["infanterie", "psychokinesie", "fortification", "tachyokinesie"],
					"armes":["assault", "pompe"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["lame insta-forgee", "detection de presence"]
				},
				"Infiltrateur":{
					"technik": true,
					"militaire": true,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "force"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme blanche", "Discretion"],
						"mentales": ["interface"],
						"sociales": []
					},
					"fav_talents":["corps a corps", "tueur de l ombre", "piratage", "sabotage"],
					"armes":["pistolets", "melee"],
					"armor":["civil", "legere"],
					"omnitech":["craqueur", "camouflage", "brouilleur", "generateur"]
				},
				"Franc-tireur":{
					"technik": true,
					"militaire": true,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "force"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu", "Discretion"],
						"mentales": ["technologie"],
						"sociales": []
					},
					"fav_talents":["infanterie", "ravage", "tueur de l ombre", "blindage"],
					"armes":["assault", "pompe"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["centrale a plasma", "camouflage", "devkit", "generateur"]
				},
				"Sentinelle":{
					"technik": true,
					"militaire": false,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu"],
						"mentales": ["interface", "technologie"],
						"sociales": []
					},
					"fav_talents":["fortification", "psychokinesie", "sabotage", "blindage"],
					"armes":["pistolets", "mitra"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["detection de presence", "brouilleur", "generateur", "devkit"]
				},
				"Destructeur":{
					"technik": true,
					"militaire": false,
					"biotique": true,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["sangfroid", "manipulation"],
					},
					"fav_skills":{
						"physiques": ["Arme à feu"],
						"mentales": ["technologie"],
						"sociales": []
					},
					"fav_talents":["Destruction", "tachyokinesie", "ravage", "puissance"],
					"armes":["assault", "pompe"],
					"armor":["civil", "moyenne", "lourde"],
					"omnitech":["detection de presence", "centrale a plasma", "generateur"]
				},
				"Civil":{
					"technik": false,
					"militaire": false,
					"biotique": false,
					"difficulte": 1,
					"fav_stats":{
						"mentales":["intelligence", "astuce"],
						"physiques":["dexterite", "vitalite"],
						"sociales":["presence", "manipulation"]
					},
					"fav_skills":{
						"physiques": [],
						"mentales": [],
						"sociales": []
					},
					"fav_talents":["pilotage spatial", "infanterie"],
					"armes":["pistolets", "mitra"],
					"armor":["civil", "legere"],
					"omnitech":["centrale a plasma", "generateur"]
				},
			};
			
			// Liste des competences disponible pour créer un perso
			this.competences = {
				"mentales":{
					0:"bricolage",
					1:"connaissance",
					2:"interface",
					3:"investigation",
					4:"medecine",
					5:"politique",
					6:"science",
					7:"technologie"
				},
				"physiques":{
					0:"Arme à feu",
					1:"Arme blanche",
					2:"Athlétisme",
					3:"Bagarre",
					4:"Discretion",
					5:"Larcin",
					6:"Pilotage",
					7:"Survie"
				},
				"sociales":{
					0:"Animaux",
					1:"Baratin",
					2:"Commandement",
					3:"Empathie",
					4:"Expression",
					5:"Intimidation",
					6:"Persuasion",
					7:"Socialisation"
				}
			};

			// Liste des talents disponible pour créer un perso
			this.talents = {
				"Biotiques":{
					"psychokinesie":{
						1:"Elévation",
						2:"Télékinésie",
						3:"Lévitation",
						4:"Manipulation",
						5:"Singularité"
					},
					"tachyokinesie":{
						1:"Saut biotique",
						2:"Projection",
						3:"Chute biotique",
						4:"Lasso",
						5:"Déflagration"
					},
					"amplification":{
						1:"Puissance",
						2:"Structure biotique",
						3:"Charge biotique",
						4:"Célérité",
						5:"Nova"
					},
					"fortification":{
						1:"Bastion",
						2:"Barrière",
						3:"Stase",
						4:"Vortex",
						5:"Dome"
					},
					"Destruction":{
						1:"Ecrasement",
						2:"Détonation",
						3:"Déchirure",
						4:"Tempête",
						5:"Orbe"
					},
					"magister":{
						1:"Portée étendue",
						2:"Résistance à la charge",
						3:"Potence accrue",
						4:"Maitrise des charges",
						5:"Maitre biotique"
					},
				},
				"militaires":{
					"infanterie":{
						1:"Vigilence",
						2:"Tir réflexe",
						3:"Course tactique",
						4:"Tir percussif",
						5:"Seconde peau"
					},
					"corps a corps":{
						1:"Désarmement",
						2:"Défense multiple",
						3:"Attaque défensive",
						4:"Pluie de coups",
						5:"Intouchable"
					},
					"tueur de l ombre":{
						1:"Fantome",
						2:"Camouflage étendu",
						3:"Attaque vicieuse",
						4:"Meurtre silencieux",
						5:"Tueur fantome"
					},
					"tir de precision":{
						1:"Entrainement",
						2:"Précision accrue",
						3:"Tir en rafale",
						4:"Recherche rapide",
						5:"Vidée rapide"
					},
					"veteran":{
						1:"Rechargement rapide",
						2:"Aisance",
						3:"Perce-armure",
						4:"Toujours pret",
						5:"Double tir"
					}
				},
				"techniques":{
					"piratage":{
						1:"Piratage 1",
						2:"Piratage 2",
						3:"Piratage 3",
						4:"Piratage 4",
						5:"Piratage 5"
					},
					"puissance":{
						1:"Frappe choc",
						2:"Armure renforcée",
						3:"Lasso",
						4:"Foudre",
						5:"Black-out"
					},
					"ravage":{
						1:"Tir à impulsion",
						2:"Cryo-blast",
						3:"Incinération",
						4:"Choc neural",
						5:"Brasier"
					},
					"blindage":{
						1:"Rempart",
						2:"Bouclier amplifié",
						3:"Armure électrifiée",
						4:"Régénération",
						5:"Régénération de groupe"
					},
					"sabotage":{
						1:"Brouillage des communications",
						2:"Camouflage des signatures",
						3:"Surcharge",
						4:"Interferences électroniques",
						5:"Interférences biotiques"
					},
					"expert mecas":{
						1:"Pilotage de mécas",
						2:"Programmation basique",
						3:"Maitrise des drones",
						4:"Pilotage à distance",
						5:"Programmation avancée"
					},
					"specialiste":{
						1:"Portée étendue",
						2:"Rechargement rapide",
						3:"Omnitech optimisée",
						4:"co d'énergie",
						5:"Maitre ingénieur"
					}
				},
				"autres":{
					"intelligence artificielle":{
						1:"Connaissance théorique",
						2:"Formatage et enseignement",
						3:"Processus secondaires",
						4:"Architecte",
						5:"Processus primaire"
					},
					"pilotage spatial":{
						1:"Pilotage spatial",
						2:"Rentrée atmosphérique",
						3:"Vitesse lumière",
						4:"Vaisseaux lourds",
						5:"Titans"
					}
				}
			};

			// Liste des avantages disponible pour créer un perso
			this.avantages = {
				"assimilation":{
					"type":"general",
					"cout_min":"3",
					"cout_max":"3",
					"description":"Offre un niveau 3 dans la langue d'une espece choisie.\nDe plus, tout les malus xeno de cette espèce sont ignorés (suaf les malus incontournables)"
				},
				"code d honneur":{
					"type":"general",
					"cout_min":"3",
					"cout_max":"3",
					"description":"1 point de volonté gratuit pour aider directement un ami, allié ou client. Pas plus de 2 fois par scène"
				},
				"concentration":{
					"type":"general",
					"cout_min":"1",
					"cout_max":"3",
					"description":"Malus liés à une distraction sont diminué du niveau de concentration"
				},
				"polyglotte":{
					"type":"general",
					"cout_min":"2",
					"cout_max":"2",
					"description":"L'achat du premier niveau dans une langue offre automatiquement le second"
				},
				"touche a tout":{
					"type":"general",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Diminue de 1 le malus d'incompétence sur les compétences physiques et mantales"
				},
				"doue pour":{
					"type":"general",
					"cout_min":"1",
					"cout_max":"1",
					"description":"Lié à une compétence, permet de relancer les 9 comme des 10"
				},
				"competence seculaire":{
					"type":"general",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Developpe au niveau 6 une competence déjà au niveau 5"
				},
				"competence millenaire":{
					"type":"general",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Developpe au niveau 7 une competence déjà au niveau 6"
				},
				"memoire eidethique":{
					"type":"mental",
					"cout_min":"2",
					"cout_max":"4",
					"description":"2 : Se souvient vaguement de tout (jet intelligence + resolution pour un souvenir plus précis)\n4 : Se souvient du moindre détail sans aucun jet"
				},
				"savoir encyclopedique":{
					"type":"mental",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Après un jet de connaissance raté, autorise un jet intelligence + astuce pour avoir des connaissances vagues"
				},
				"savoir des anciens":{
					"type":"mental",
					"cout_min":"1",
					"cout_max":"3",
					"description":"ajoute le niveau de l'avantage sur les jets de connaissance"
				},
				"sens commun":{
					"type":"mental",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Le meneur peut faire faire un jet de astuce + sang froid pour donner une indication"
				},
				"sens du danger":{
					"type":"mental",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Bonus de 2 sur les jets d'embuscade"
				},
				"sens de l orientation":{
					"type":"mental",
					"cout_min":"1",
					"cout_max":"1",
					"description":"Ne se perd jamais, trouve facilement les points cardinaux"
				},
				"ambidextre":{
					"type":"physique",
					"cout_min":"3",
					"cout_max":"3",
					"description":"Pas de malus à l'utilisation de la maucaise main."
				},
				"armure naturelle":{
					"type":"physique",
					"cout_min":"4",
					"cout_max":"4",
					"description":"4 : Armure de niveau 1\n8 : Armure de niveau 3"
				},
				"cascadeur":{
					"type":"physique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Bonus de 2 sur les jets de pilotage pour effectuer une manoeuvre risquée ou difficile"
				},
				"casse cou":{
					"type":"physique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Bonus de 1 sur des action dangereuse. ne se cumule pas avec cascadeur"
				},
				"deux armes":{
					"type":"physique",
					"cout_min":"3",
					"cout_max":"3",
					"description":"Peut viser 2 cibles dans le meme round avec une arme dans chaque main.\nDefense tombe ) 0 et malus de 1 sur le jet d'attaque du second tir et -5 à l'initiative"
				},
				"equilibriste":{
					"type":"physique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Bonus de 3 sur les jets pour éviter de tomber"
				},
				"evasion":{
					"type":"physique",
					"cout_min":"3",
					"cout_max":"3",
					"description":"Score de defense augmente de 1"
				},
				"geant":{
					"type":"physique",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Donne un point de masse supplémentaire (et donc 1 point de santé)"
				},
				"oeil de lynx":{
					"type":"physique",
					"cout_min":"3",
					"cout_max":"5",
					"description":"3 : Bonus de 1 aux jets de perception liés à la vue\n5 : Bonus de 2 aux jets de perception liés à la vue"
				},
				"reflexes rapides":{
					"type":"physique",
					"cout_min":"1",
					"cout_max":"3",
					"description":"Ajoute le niveau de l'avantage au score d'initiative"
				},
				"peau de fer":{
					"type":"physique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Armure de 1 contre les dégâts légers"
				},
				"resistance aux radiations":{
					"type":"physique",
					"cout_min":"1",
					"cout_max":"2",
					"description":"Les jets de resistance aux radiations bénéficient d'un bonus égal à 2 fois le niveau de l'avantage"
				},
				"resistance aux toxines":{
					"type":"physique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Les jets de resistance aux poisons et toxines bénéficient d'un bonus de 4"
				},
				"guerison rapide":{
					"type":"physique",
					"cout_min":"3",
					"cout_max":"3",
					"description":"Peut réaliser 2 jets de vitalité par jour pour la guérison naturelle"
				},
				"guerison krogane":{
					"type":"physique",
					"cout_min":"5",
					"cout_max":"5",
					"description":"Effectue un jet de soin toute les 4 heures.\nDe plus les blessures aggravées se soignent naturellement"
				},
				"rage du sang":{
					"type":"physique",
					"cout_min":"1",
					"cout_max":"5",
					"description":"Voir livre de regles"
				},
				"sprinteur":{
					"type":"physique",
					"cout_min":"1",
					"cout_max":"3",
					"description":"Pour une course ou un sprint, la vitesse est augmentée du niveau de l'avantage"
				},
				"vitalite krogane":{
					"type":"physique",
					"cout_min":"5",
					"cout_max":"5",
					"description":"Si le personnage n'a plus de PV, il tombe KO pour 2 rounds. Ensuite le personnage peut se relevé sans aucun malus. Les dégâts sont ensuite retranchés de sa barre de vitalité krogane"
				},
				"charmeur":{
					"type":"social",
					"cout_min":"1",
					"cout_max":"3",
					"description":"1 : Bonus de 1 aux jets sociaux dans lesquels la seduction peut jouer\n3 : Bonus de 2"
				},
				"inspirateur":{
					"type":"social",
					"cout_min":"4",
					"cout_max":"4",
					"description":"Une fois par session, un jet de presence + commandement réussis redonne 1 point de volonté à tous les alliés à portée de voix"
				},
				"reputation":{
					"type":"social",
					"cout_min":"1",
					"cout_max":"4",
					"description":"Dans un sphere d'influence choisie, les jets sociaux bénéficient d'un bonus équivalent au iveau de cet avantage"
				},
				"spectre":{
					"type":"social",
					"cout_min":"5",
					"cout_max":"5",
					"description":"Bonus de 1 à 3 aux jets sociaux si le perso decline son identité.\nSe transforme en malus face à des personnes hostiles aux spectres"
				},
				"fusion de l esprit":{
					"type":"social",
					"cout_min":"1",
					"cout_max":"5",
					"description":"Voir livre de règles"
				},
				"volonte de fer":{
					"type":"social",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Les jets sociaux visant à faire changer d'avis le personnage souffrent d'un malus de 3"
				},
				"biotique":{
					"type":"biotique",
					"cout_min":"5",
					"cout_max":"5",
					"description":"Le personnage est un biotique"
				},
				"ezo-mentalisme":{
					"type":"biotique",
					"cout_min":"2",
					"cout_max":"2",
					"description":"Permet de lancer un pouvoir biotique sans mouvements avec un malus de 2 au jet et de 8 à l'initiative"
				},
				"PNJ doué":{
					"type":"general",
					"cout_min":"1",
					"cout_max":"1",
					"description":"Ce PNJ est particulièrement doué, ajoute 2 point de talents"
				}
			};

			// Liste des omnitech disponibles dans le jeu
			this.omnitech = {
				"Fusion":{
					"Emplacements":"1",
					"Protocole":"4",
					"Integrite":"4",
					"Detection":"0",
					"Prix":"100"
				},
				"Galaxy":{
					"Emplacements":"4",
					"Protocole":"6",
					"Integrite":"5",
					"Detection":"1",
					"Prix":"300"
				},
				"Cipher":{
					"Emplacements":"8",
					"Protocole":"8",
					"Integrite":"10",
					"Detection":"2",
					"Prix":"700"
				},
				"Bluewire":{
					"Emplacements":"10",
					"Protocole":"6",
					"Integrite":"8",
					"Detection":"1",
					"Prix":"700"
				},
				"Logic Arrest":{
					"Emplacements":"10",
					"Protocole":"10",
					"Integrite":"16",
					"Detection":"2",
					"Prix":"1500"
				},
				"Polaris":{
					"Emplacements":"12",
					"Protocole":"9",
					"Integrite":"14",
					"Detection":"2",
					"Prix":"1500"
				},
				"Nexus":{
					"Emplacements":"14",
					"Protocole":"8",
					"Integrite":"12",
					"Detection":"2",
					"Prix":"1800"
				},
				"Savant":{
					"Emplacements":"16",
					"Protocole":"8",
					"Integrite":"10",
					"Detection":"1",
					"Prix":"1800"
				}
			};
			
			// Liste des modules d"omnitech disponibles dans le jeu
			this.omni_module = {
				"interface":{
					"devkit":{
						"grade_min":"1",
						"grade_max":"1",
						"description":"A venir"
					},
					"communicateur":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					},
					"craqueur":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					},
					"brouilleur":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					},
					"bio-verouillage":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					}
				},
				"environnement":{
					"metrie":{
						"grade_min":"1",
						"grade_max":"1",
						"description":"A venir"
					},
					"atmosphere":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					},
					"laboratoire":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					}
				},
				"medical":{
					"medipack":{
						"grade_min":"1",
						"grade_max":"1",
						"description":"A venir"
					},
					"mediscan":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					},
					"genoscan":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					}
				},
				"vision":{
					"vision nocturne":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					},
					"detection de presence":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					}
				},
				"distortion":{
					"levage":{
						"grade_min":"1",
						"grade_max":"2",
						"description":"A venir"
					},
					"silence":{
						"grade_min":"3",
						"grade_max":"5",
						"description":"A venir"
					},
					"pavois":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					},
					"amplificateur":{
						"grade_min":"1",
						"grade_max":"5",
						"description":"A venir"
					},
					"camouflage":{
						"grade_min":"3",
						"grade_max":"5",
						"description":"A venir"
					},
					"generateur":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					}
				},
				"atelier":{
					"recyclage":{
						"grade_min":"1",
						"grade_max":"1",
						"description":"A venir"
					},
					"forge":{
						"grade_min":"2",
						"grade_max":"2",
						"description":"A venir"
					},
					"lame insta-forgee":{
						"grade_min":"3",
						"grade_max":"3",
						"description":"A venir"
					}
				},
				"plasma":{
					"torche plasma":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					},
					"centrale a plasma":{
						"grade_min":"2",
						"grade_max":"5",
						"description":"A venir"
					}
				}
			};
			
			// Liste des armures disponibles dans le jeu
			this.armure = {
				"Combinaison tactique":{
					"cat":"civil",
					"type":"civil",
					"race":"all",
					"rare":"1",
					"armure":"1",
					"cellules":"0",
					"force":"0",
					"emplacements":"-",
					"malus":{
						"dexterite":"-",
						"discretion":"-",
						"biotique":"-"
					},
					"prix":"1500"
				},
				"Armure tactique légère":{
					"cat":"civil",
					"type":"legere",
					"race":"all",
					"rare":"1",
					"armure":"2",
					"cellules":"3",
					"force":"2",
					"emplacements":"1 arme longue",
					"malus":{
						"dexterite":"",
						"discretion":"-1",
						"biotique":""
					},
					"prix":"3000"
				},
				"Armure tactique moyenne":{
					"cat":"civil",
					"type":"moyenne",
					"race":"all",
					"rare":"1",
					"armure":"3",
					"cellules":"3",
					"force":"3",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-1",
						"discretion":"-1",
						"biotique":"-1"
					},
					"prix":"8000"
				},
				"Armure tactique lourde":{
					"cat":"civil",
					"type":"lourde",
					"race":"all",
					"rare":"1",
					"armure":"4",
					"cellules":"4",
					"force":"4",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-2",
						"discretion":"-1",
						"biotique":"-3"
					},
					"prix":"12000"
				},
				"Armure tactique titan":{
					"cat":"civil",
					"type":"titan",
					"race":"all",
					"rare":"1",
					"armure":"5",
					"cellules":"5",
					"force":"5",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-3",
						"discretion":"-2",
						"biotique":"-5"
					},
					"prix":"16000"
				},
				"Armure technique moyenne":{
					"cat":"technique",
					"type":"moyenne",
					"race":"all",
					"rare":"1",
					"armure":"2",
					"cellules":"6",
					"force":"3",
					"emplacements":"-",
					"malus":{
						"dexterite":"0",
						"discretion":"-1",
						"biotique":"-3"
					},
					"prix":"11000"
				},
				"Armure technique lourde":{
					"cat":"technique",
					"type":"lourde",
					"race":"all",
					"rare":"1",
					"armure":"3",
					"cellules":"7",
					"force":"4",
					"emplacements":"-",
					"malus":{
						"dexterite":"-1",
						"discretion":"-1",
						"biotique":"-5"
					},
					"prix":"16000"
				},
				"Armure mixte moyenne":{
					"cat":"mixte",
					"type":"moyenne",
					"race":"all",
					"rare":"1",
					"armure":"3",
					"cellules":"4",
					"force":"3",
					"emplacements":"1 arme longue",
					"malus":{
						"dexterite":"0",
						"discretion":"-1",
						"biotique":"-2"
					},
					"prix":"11000"
				},
				"Armure mixte lourde":{
					"cat":"mixte",
					"type":"lourde",
					"race":"all",
					"rare":"1",
					"armure":"4",
					"cellules":"5",
					"force":"4",
					"emplacements":"1 arme longue",
					"malus":{
						"dexterite":"-1",
						"discretion":"-1",
						"biotique":"-4"
					},
					"prix":"16000"
				},
				"Armure de machiniste moyenne":{
					"cat":"machiniste",
					"type":"moyenne",
					"race":"all",
					"rare":"1",
					"armure":"2",
					"cellules":"4",
					"force":"3",
					"emplacements":"2 drones légers",
					"malus":{
						"dexterite":"0",
						"discretion":"-1",
						"biotique":"-1"
					},
					"prix":"10000"
				},
				"Armure de machiniste lourde":{
					"cat":"machiniste",
					"type":"lourde",
					"race":"all",
					"rare":"1",
					"armure":"3",
					"cellules":"4",
					"force":"4",
					"emplacements":"2 drones légers + 1 tourelle",
					"malus":{
						"dexterite":"-1",
						"discretion":"-1",
						"biotique":"-2"
					},
					"prix":"15000"
				},
				"Armure krogane moyenne":{
					"cat":"civil",
					"type":"moyenne",
					"race":"krogan",
					"rare":"1",
					"armure":"3",
					"cellules":"4",
					"force":"5",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-1",
						"discretion":"-1",
						"biotique":"-2"
					},
					"prix":"9000"
				},
				"Armure krogane lourde":{
					"cat":"civil",
					"type":"lourde",
					"race":"krogan",
					"rare":"1",
					"armure":"4",
					"cellules":"5",
					"force":"6",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-2",
						"discretion":"-2",
						"biotique":"-4"
					},
					"prix":"14000"
				},
				"Armure krogane titan":{
					"cat":"civil",
					"type":"titan",
					"race":"krogan",
					"rare":"1",
					"armure":"5",
					"cellules":"6",
					"force":"7",
					"emplacements":"2 armes longues",
					"malus":{
						"dexterite":"-3",
						"discretion":"-2",
						"biotique":"-6"
					},
					"prix":"20000"
				}
			};
			
			// Liste des armes disponibles dans le jeu
			this.armes = {
				"assault":{
					"M-96 Mattock":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6+1",
						"portee":{
							"courte":"20",
							"moyenne":"40",
							"longue":"80"
						},
						"auto":"-",
						"armure":"-1",
						"force":"2",
						"capacite":"16",
						"recharge":"2",
						"prix":"5000"
					},
					"M-8 Avenger":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D4",
						"portee":{
							"courte":"12",
							"moyenne":"24",
							"longue":"48"
						},
						"auto":"3 / -3 / -6",
						"armure":"0",
						"force":"1",
						"capacite":"10",
						"recharge":"2",
						"prix":"3000"
					},
					"M-99 Sabre":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D10",
						"portee":{
							"courte":"30",
							"moyenne":"60",
							"longue":"120"
						},
						"auto":"-",
						"armure":"-1",
						"force":"4",
						"capacite":"8",
						"recharge":"2",
						"prix":"10000"
					},
					"M-76 Revenant":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D5",
						"portee":{
							"courte":"12",
							"moyenne":"24",
							"longue":"48"
						},
						"auto":"3 / -4 / -8",
						"armure":"0",
						"force":"4",
						"capacite":"10",
						"recharge":"3",
						"prix":"7000"
					},
					"N7 Valkyrie":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"20",
							"moyenne":"40",
							"longue":"80"
						},
						"auto":"2 / 0 / -2",
						"armure":"0",
						"force":"4",
						"capacite":"4",
						"recharge":"2",
						"prix":"6000"
					},
					"M-55 Argus":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"10",
							"moyenne":"20",
							"longue":"40"
						},
						"auto":"2 / -1 / -4",
						"armure":"0",
						"force":"4",
						"capacite":"3",
						"recharge":"2",
						"prix":"6000"
					},
					"M-15 Vindicator":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D5",
						"portee":{
							"courte":"20",
							"moyenne":"40",
							"longue":"80"
						},
						"auto":"3 / 1 / -2",
						"armure":"0",
						"force":"4",
						"capacite":"3",
						"recharge":"2",
						"prix":"7000"
					},
					"Fusil a pompe":{
						"race":"Geth",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"1D4",
						"portee":{
							"courte":"20",
							"moyenne":"40",
							"longue":"80"
						},
						"auto":"4 / 1 / -1",
						"armure":"0",
						"force":"3",
						"capacite":"20",
						"recharge":"4",
						"prix":"-"
					},
					"Chasseur":{
						"race":"Cerberus",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"1D6",
						"portee":{
							"courte":"20",
							"moyenne":"40",
							"longue":"80"
						},
						"auto":"3 / 1 / 0",
						"armure":"0",
						"force":"5",
						"capacite":"6",
						"recharge":"2",
						"prix":"-"
					},
					"Dragon":{
						"race":"Geth",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D8",
						"portee":{
							"courte":"15",
							"moyenne":"30",
							"longue":"60"
						},
						"auto":"3 / 0 / -3",
						"armure":"0",
						"force":"6",
						"capacite":"20",
						"recharge":"4",
						"prix":"-"
					}
				},
				"pistolets":{
					"M-5 Phalanx":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"4",
							"moyenne":"8",
							"longue":"16"
						},
						"auto":"-",
						"armure":"-2",
						"force":"2",
						"capacite":"12",
						"recharge":"1",
						"prix":"4000"
					},
					"M-3 Predateur":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"-",
						"armure":"-2",
						"force":"1",
						"capacite":"15",
						"recharge":"1",
						"prix":"7000"
					},
					"M-6 carnifex":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D8",
						"portee":{
							"courte":"8",
							"moyenne":"16",
							"longue":"32"
						},
						"auto":"-",
						"armure":"-2",
						"force":"3",
						"capacite":"6",
						"recharge":"2",
						"prix":"10000"
					},
					"M-358 Serre":{
						"race":"Cerberus",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"1D8+1",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"-",
						"armure":"-1",
						"force":"4",
						"capacite":"4",
						"recharge":"2",
						"prix":"-"
					},
					"M-77 Paladin":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D8+1",
						"portee":{
							"courte":"8",
							"moyenne":"16",
							"longue":"32"
						},
						"auto":"-",
						"armure":"-1",
						"force":"3",
						"capacite":"3",
						"recharge":"2",
						"prix":"15000"
					},
					"Executeur":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D10+1",
						"portee":{
							"courte":"5",
							"moyenne":"10",
							"longue":"20"
						},
						"auto":"-",
						"armure":"-3",
						"force":"4",
						"capacite":"1",
						"recharge":"3",
						"prix":"15000"
					}
				},
				"mitra_leg":{
					"M-4 Shuriken":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D3",
						"portee":{
							"courte":"4",
							"moyenne":"8",
							"longue":"16"
						},
						"auto":"5 / 0 / -5",
						"armure":"0",
						"force":"2",
						"capacite":"5",
						"recharge":"1",
						"prix":"3000"
					},
					"M-9 Tempete":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D3",
						"portee":{
							"courte":"4",
							"moyenne":"8",
							"longue":"16"
						},
						"auto":"4 / -2 / -5",
						"armure":"0",
						"force":"3",
						"capacite":"10",
						"recharge":"2",
						"prix":"4000"
					},
					"N7 Aigle":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D4",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"3 / -1 / -3",
						"armure":"0",
						"force":"3",
						"capacite":"6",
						"recharge":"2",
						"prix":"6000"
					},
					"Pistolet plasma":{
						"race":"Geth",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"1D3",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"4 / 3 / 2",
						"armure":"0",
						"force":"2",
						"capacite":"20",
						"recharge":"2",
						"prix":"-"
					}
				},
				"mitra":{
					"M-12 Locust":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D4",
						"portee":{
							"courte":"10",
							"moyenne":"20",
							"longue":"40"
						},
						"auto":"4 / 2 / 1",
						"armure":"0",
						"force":"3",
						"capacite":"5",
						"recharge":"2",
						"prix":"7000"
					},
					"M-25 Frelon":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D4",
						"portee":{
							"courte":"10",
							"moyenne":"20",
							"longue":"40"
						},
						"auto":"3 / -2 / -5",
						"armure":"0",
						"force":"3",
						"capacite":"6",
						"recharge":"1",
						"prix":"7000"
					},
					"N7 Hurricane":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"5",
							"moyenne":"10",
							"longue":"20"
						},
						"auto":"5 / 0 / -4",
						"armure":"0",
						"force":"3",
						"capacite":"6",
						"recharge":"2",
						"prix":"10000"
					},
					"Bourreau":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"3 / -1 / -4",
						"armure":"0",
						"force":"3",
						"capacite":"8",
						"recharge":"2",
						"prix":"15000"
					}
				},
				"pompe":{
					"M-27 Cimeterre":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6+2 / 1D4+1 / 1D3",
						"portee":{
							"courte":"2",
							"moyenne":"4",
							"longue":"8"
						},
						"auto":"-",
						"armure":"+2",
						"force":"3",
						"capacite":"8",
						"recharge":"2",
						"prix":"4000"
					},
					"M-23 Katana":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D6+3 / 1D4+2 / 1D4",
						"portee":{
							"courte":"2",
							"moyenne":"4",
							"longue":"8"
						},
						"auto":"-",
						"armure":"+2",
						"force":"3",
						"capacite":"5",
						"recharge":"2",
						"prix":"5000"
					},
					"N7 Piranha":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D4+2 / 1D4+1 / 1D4",
						"portee":{
							"courte":"2",
							"moyenne":"4",
							"longue":"8"
						},
						"auto":"-",
						"armure":"+1",
						"force":"4",
						"capacite":"6",
						"recharge":"2",
						"prix":"6000"
					},
					"AT-12 Pirate":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D4+3 / 1D4+2 / 1D4",
						"portee":{
							"courte":"2",
							"moyenne":"4",
							"longue":"8"
						},
						"auto":"-",
						"armure":"+1",
						"force":"4",
						"capacite":"2",
						"recharge":"3",
						"prix":"7000"
					},
					"M-22 Ecorcheur":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D4+2 / 1D4+2 / 1D6",
						"portee":{
							"courte":"3",
							"moyenne":"6",
							"longue":"12"
						},
						"auto":"-",
						"armure":"0",
						"force":"4",
						"capacite":"3",
						"recharge":"1",
						"prix":"7000"
					},
					"N7 Crusader":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D4+3 / 1D4+4 / 1D8",
						"portee":{
							"courte":"5",
							"moyenne":"10",
							"longue":"20"
						},
						"auto":"-",
						"armure":"+2",
						"force":"4",
						"capacite":"4",
						"recharge":"2",
						"prix":"8000"
					},
					"Lance-pic graal":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D6 / 2D4 / 1D4+1",
						"portee":{
							"courte":"8",
							"moyenne":"16",
							"longue":"32"
						},
						"auto":"-",
						"armure":"0",
						"force":"5",
						"capacite":"5",
						"recharge":"2",
						"prix":"10000"
					},
					"M-300 Claymore":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D4+5 / 1D4+4 / 1D6",
						"portee":{
							"courte":"3",
							"moyenne":"6",
							"longue":"12"
						},
						"auto":"-",
						"armure":"+2",
						"force":"5",
						"capacite":"1",
						"recharge":"2",
						"prix":"10000"
					},
					"Fusil plasma":{
						"race":"Geth",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"2D4+4 / 1D4+4 / 1D6",
						"portee":{
							"courte":"6",
							"moyenne":"12",
							"longue":"24"
						},
						"auto":"-",
						"armure":"+2",
						"force":"4",
						"capacite":"5",
						"recharge":"2",
						"prix":"-"
					}
				},
				"precision":{
					"M-97 Viper":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D8",
						"portee":{
							"courte":"60",
							"moyenne":"120",
							"longue":"240"
						},
						"auto":"-",
						"armure":"-2",
						"force":"3",
						"capacite":"6",
						"recharge":"2",
						"prix":"4000"
					},
					"N7 Valiant":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D10",
						"portee":{
							"courte":"30",
							"moyenne":"60",
							"longue":"120"
						},
						"auto":"-",
						"armure":"-2",
						"force":"3",
						"capacite":"3",
						"recharge":"2",
						"prix":"6000"
					},
					"Krysae":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D8+2",
						"portee":{
							"courte":"30",
							"moyenne":"60",
							"longue":"120"
						},
						"auto":"-",
						"armure":"-3",
						"force":"4",
						"capacite":"3",
						"recharge":"3",
						"prix":"10000"
					},
					"M-92 Mantis":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D10+1",
						"portee":{
							"courte":"50",
							"moyenne":"100",
							"longue":"200"
						},
						"auto":"-",
						"armure":"-2",
						"force":"4",
						"capacite":"1",
						"recharge":"3",
						"prix":"12000"
					},
					"Veuve noire":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"1D10+1",
						"portee":{
							"courte":"40",
							"moyenne":"80",
							"longue":"160"
						},
						"auto":"-",
						"armure":"-3",
						"force":"5",
						"capacite":"3",
						"recharge":"4",
						"prix":"20000"
					},
					"M-98 Veuve":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D6",
						"portee":{
							"courte":"40",
							"moyenne":"80",
							"longue":"160"
						},
						"auto":"-",
						"armure":"-3",
						"force":"5",
						"capacite":"1",
						"recharge":"4",
						"prix":"15000"
					},
					"Javelot":{
						"race":"Geth",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D6",
						"portee":{
							"courte":"50",
							"moyenne":"100",
							"longue":"200"
						},
						"auto":"-",
						"armure":"-4",
						"force":"5",
						"capacite":"1",
						"recharge":"3",
						"prix":"-"
					},
					"Harppon Kishock":{
						"race":"butarien",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"2D6+1",
						"portee":{
							"courte":"25",
							"moyenne":"50",
							"longue":"100"
						},
						"auto":"-",
						"armure":"-4",
						"force":"4",
						"capacite":"1",
						"recharge":"2",
						"prix":"-"
					}
				},
				"lourdes":{
					"ML-77 Lance-missile":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"3D4+4",
						"portée": {
							"courte":"30",
							"moyenne":"60",
							"longue":"120"
						},
						"attenuation":{
							"val":"1D4",
							"dist":"2m"
						},
						"armure":"x2",
						"force":"4",
						"capacite":"1",
						"recharge":"4",
						"prix":"7000"
					},
					"M-100 Lance grenade":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"dgt":"variable",
						"portée": {
							"courte":"15",
							"moyenne":"30",
							"longue":"60"
						},
						"attenuation":"variable",
						"armure":"variable",
						"force":"3",
						"capacite":"6",
						"recharge":"8",
						"prix":"5000"
					},
					"M-920 Cain":{
						"race":"all",
						"indice_pui":"0",
						"rare":"0",
						"dgt":"30D10+30",
						"portée": {
							"courte":"100",
							"moyenne":"200",
							"longue":"400"
						},
						"attenuation":{
							"val":"1D10+1",
							"dist":"m"
						},
						"armure":"x0",
						"force":"4",
						"capacite":"1",
						"recharge":"-",
						"prix":"40000"
					}
				},
				"grenades":{
					"fragmentation":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "5D4",
						"attenuation":{"val":"1D4","dist":"2m"},
						"arm":"x3",
						"duree":"-"
					},
					"supression":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "2D6+4",
						"attenuation":{"val":"1D6","dist":"2m"},
						"arm":"x2",
						"duree":"-"
					},
					"levitation":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "5",
						"attenuation":{"val":"5","dist":"2m"},
						"arm":"-",
						"duree":"3 rounds"
					},
					"flash":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "8",
						"attenuation":{"val":"1","dist":"2m"},
						"arm":"-",
						"duree":"malus -2 / round"
					},
					"cryo":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "5",
						"attenuation":{"val":"1","dist":"m"},
						"arm":"-",
						"duree":"3 rounds"
					},
					"inferno":{
						"race":"all",
						"indice_pui":"0",
						"rare":"1",
						"puissance": "4",
						"attenuation":{"val":"1","dist":"m"},
						"arm":"-2",
						"duree":"3 rounds"
					}
				},
				"melee":{}
			};
		}

		// Fonction de parcours
		get_omni_module(name){
			for(var cat in this.omni_module){
				for(var key in this.omni_module[cat]){
					if(key == name){
						return this.omni_module[cat][key];
					}
				}
			}

			console.log("Module omnitech : " + name + " pas trouvé");
			return false;
		}

		get_weapon(name){
			for(var cat in this.armes){
				for(var key in this.armes[cat]){
					if(key == name){
						return this.armes[cat][key];
					}
				}
			}

			console.log("Arme : " + name + " pas trouvé");
			return false;
		}

		// Fonction mecanique des talents
}