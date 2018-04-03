export class CnbEditorSamples {

	// tutorial samples
	private samples: string[] = [];

	constructor() {

		this.samples['exemple-scale'] = "% Gamme complète de la cornemuse du LA grave au si aigu \n" +
            "LA SI do re mi fa sol la si";

		this.samples['exemple-note-length'] = "% --------------- DUREE -----------------\n" +
            "% Les durées des notes sont indiquées par leur valeur fractionnaire \n" +
            "% par rapport à la durée d’une ronde. Une noire, par exemple, qui \n" +
            "% équivaut à un 1/4 de ronde s'écrit 4, une blanche (1/2 ronde) s'écrit 2\n" +
            "\n" +
            "% ronde\n" +
            "LA1\n" +
            "\n" +
            "% blanche\n" +
            "SI2\n" +
            "\n" +
            "% noire\n" +
            "do4\n" +
            "\n" +
            "%croche\n" +
            "re8\n" +
            "\n" +
            "% double croche\n" +
            "mi16\n" +
            "\n" +
            "% triple croche\n" +
            "fa32\n" +
            "\n" +
            "% quadrupes croches\n" +
            "sol64\n" +
            "la64\n" +
            "\n" +
            "% --------------- LIAISONS -----------------\n" +
            "% Pour créer une liaison de prolognation on utilise le trait d'union\n" +
            "do2 - do8\n" +
            "\n" +
            "% --------------- POINTEES -----------------\n" +
            "% Pour créer une note pointée on ajoute un point aprés la durée\n" +
            "do8. re16\n";

		this.samples['exemple-grace-notes'] = "% Les notes d'ornementations s'écrivent entre parenthése\n" +
            "% sans précision de durée et séparées par des virules\n" +
            "\n" +
            "% Détaché de la\n" +
            "(la) do2\n" +
            "\n" +
            "% Doublé de mi\n" +
            "(la,mi,la) mi2\n" +
            "\n" +
            "% Grip\n" +
            "(LA,mi,LA) fa2\n" +
            "\n" +
            "% Birl\n" +
            "(la,SI,LA,SI,LA) SI2 ";

		this.samples['exemple-titles'] = "#titre = Exemple : Titres & textes\n" +
            "#titre2 = Sous-titre\n" +
            "#titreGauche = Titre gauche\n" +
            "#titreDroite = Titre droite\n" +
            "#piedPage = Exemple : bas de page\n" +
            "\n" +
            "% --- Première ligne\n" +
            "LA SI do re\n" +
            "mi fa sol la\n" +
            "si la sol fa\n" +
            "mi re do SI |\n" +
            "\n" +
            "% --- Deuxième ligne\n" +
            "LA SI do re\n" +
            "mi fa sol la \"Commentaire_sur_la_partition\"\n" +
            "si la sol fa\n" +
            "mi re do SI";

		this.samples['exemple-rythm'] = "% Indication de tempo (90 est le tempo par defaut)\n" +
            "#tempo = 200\n" +
            "\n" +
            "% Métrique : 3/4\n" +
            "[3/4] \t\t\t\t\n" +
            "\n" +
            "% Première mesure\n" +
            "do4 re4 mi4 \n" +
            "\n" +
            "% Deuxième mesure\n" +
            "fa2 sol4\n" +
            "\n" +
            "% Métrique 4/4 (métrique par défaut si rien n'est précisé)\n" +
            "[4/4]   \t\t\t\n" +
            "\n" +
            "% Troisième mesure : Anacrouse de la durée d'une noire\n" +
            "@4 mi4\t\t\t\n" +
            "\n" +
            "% Quatrième mesure\n" +
            "sol2 si4 la4\n" +
            "\n" +
            "% Cinquième mesure avec un triolet noté N3/2 (3 notes pour une durée de 2)\n" +
            "sol2\t\t\t\t\n" +
            "N3/2{ do4 re4 mi4 }";

		this.samples['exemple-repeat'] = "% --- Mesures 1 et 2 : Répétition (x3)\n" +
            "R3{ \n" +
            "    do re mi fa\n" +
            "    sol fa mi re\n" +
            "}\n" +
            "\n" +
            "% --- Mesures 3 et 4 : répétition avec alternative\n" +
            "R2{ \n" +
            "    do re mi fa\n" +
            "    sol fa\n" +
            "} \n" +
            "A{ \n" +
            "\t{ mi re } \n" +
            "\t{ do do }\n" +
            "}";

		this.samples['exemple-paging'] = "% Défini l'orientation de la partition\n" +
            "% valeurs possibles : portrait (par defaut) / paysage\n" +
            "#orientation = paysage\n" +
            "\n" +
            "% Défini si la première ligne doit être indentée\n" +
            "% valeurs possibles : oui / non (par defaut)\n" +
            "#indenterPremiere = oui\n" +
            "\n" +
            "% Défini si la dernière ligne doit être étirée sur la largeur de la page\n" +
            "% valeurs possibles : oui (par defaut) / non\n" +
            "#etirerDerniere = non\n" +
            "\n" +
            "% Le symbol \"|\" permet de forcer un retour ligne\n" +
            "LA SI do re mi fa sol la | \n" +
            "si la sol fa mi re do SI | \n" +
            "LA SI do re";

		this.samples['exemple-pitch'] = "% Valeurs possibles : G (par défaut), C ou F\n" +
            "#clef = F\n" +
            "\n" +
            "% Pour faciliter l'écriture les notes sont toujours exprimées\n" +
            "% comme s'il n'y avait aucune altération a la clé.\n" +
            "\n" +
            "% Par exemple dans la tonalité par défaut (mi bémol Majeur)\n" +
            "% il n'est pas nécessaire de rajouter les bémols sur si, mi et la\n" +
            "% on peut écrire simplement \"do re mi fa sol la si\"\n" +
            "\n" +
            "% Valeurs possibles : Toutes les tonalités du do bémol majeur\n" +
            "% noté dobM au do dièse majeur noté dodM\n" +
            "\n" +
            "#tonalite = dodM\n" +
            "LA SI do re mi fa sol la si";

		this.samples['exemple-multi'] = "% Le changement de morceau se matérialise par 4\n" +
			"% traits d'union successifs (ou plus)\n" +
			"\n" +
			"% Attention : \n" + 
			"% - Lorsque l'editeur contient plusieurs morceau,\n" +
			"%   le rendu audio n'est pas disponible.\n" +
			"% - Si les variables piedPage et orientation sont définies\n" +
			"%   plusieurs fois, seul la dernière valeur est appliquée. \n" +
			"\n" +			
			"% Le symbole de saut de ligne \"|\" permet lorsqu\'il\n" +
			"% est doublé, de forcer un saut de page. Il est utilisé\n" +
			"% ici entre le morceau 5 et 6\n" +
			"\n" +
			"#titre = Morceau 1\n" +
            "LA SI do re mi fa sol la si LA SI do re mi fa sol\n" +			
			"\n" +
            "----\n" +
            "#titre = Morceau 2\n" +
            "si la sol fa mi re do SI LA si la sol fa mi re do\n" +
            "\n" +
            "----\n" +
            "#titre = Morceau 3\n" +
            "si sol la mi fa do re LA SI si sol la mi fa do re \n" +
            "\n" +
            "----\n" +
            "#titre = Morceau 4\n" +
            "si sol la mi fa do re LA SI si sol la mi fa do re\n" +
            "\n" +
            "----\n" +
            "#titre = Morceau 5\n" +
            "si sol la mi fa do re LA SI si sol la mi fa do re\n" +            
            "||\n" +
			"\n" +
            "----\n" +
            "#titre = Morceau 6\n" +
            "si sol la mi fa do re LA SI si sol la mi fa do re\n";

		this.samples['highland-cathedral'] = "#titre = Highland Cathedral\n" +
            "#piedPage = www.partitions-cornemuse.com\n" +
            "#tempo = 90\n" +
            "\n" +
            "[4/4] \n" +
            "R2{ \n" +
            "\t(LA,mi,re) mi4 - mi8 fa16 sol16 (la,fa,sol) fa8 mi8 (la) SI8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 sol8 (fa) sol2\n" +
            "\t(la) sol4 - sol8 la16 si16 (sol) la8 sol8 (la) fa8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 sol8 (SI,LA,SI,LA) SI2 |\n" +
            "\n" +
            "\t(LA,mi,LA) do4 - do8 re16 mi16 (re) mi8 SI8 (mi) re8 mi8 \n" +
            "\t(si,la) si4 -si8 si8 la8 (si) sol2\n" +
            "\t(la,fa,sol) fa4 - fa8 sol16 la16 (si) sol8 mi8 (la) SI8 mi8\n" +
            "\t(la,fa,sol) fa4 - fa8 mi8 (la,mi,re) mi2 |\n" +
            "\n" +
            "\t(la,re,mi) re4 - re8 SI8 (la,fa,sol) fa4 - fa8 re16 fa16\n" +
            "\t(la,sol,la) sol4 - sol8 re8 (LA,mi,LA) re4 - re8 do8\n" +
            "\t(LA) SI4 (la) SI16 do16 re8 (la,do,mi) do2\n" +
            "\t(la,re,mi) re4 (la) re16 mi16 fa8 (la,do,mi) do2 |\n" +
            "\n" +
            "\t(la,re,mi) re4 - re8 SI8 (la,fa,sol) fa4 - fa8 re16 fa16\n" +
            "\t(la,sol,la) sol4 - sol8 re8 (LA,mi,LA) re4 - re8 do8\n" +
            "\t(LA) SI4 (la) SI16 do16 re8 (la,do,mi) do4 - do8 SI8\n" +
            "\t(la,SI,LA,SI,LA) SI2 - SI2 |\n" +
            "}";

		this.samples['amazing-grace'] = "#titre = Amazing Grace\n" +
			"#piedPage = www.partitions-cornemuse.com\n" +
			"#tempo = 60\n" +
			"\n" +
			"[3/4] \n" +
			"(la) SI8 mi8 (la,mi,re) mi2\n" +
			"(la) sol8 fa16 mi16 (la) sol2\n" +
			"(la) sol8 fa8 (LA,mi,LA,re) mi2\n" +
			"(la) do4 (LA) SI2 |\n" +
			"\n" +
			"(la) SI8 mi8 (la,mi,re) mi2\n" +
			"(la) sol8 fa16 mi16 (la) sol2\n" +
			"(la) fa8 sol8 (si,la) si2\n" +
			"(la) si4 (la) si2 |\n" +
			"\n" +
			"sol8 si8 (la) si2\n" +
			"sol8 fa16 mi16 (la) sol2\n" +
			"(la) sol8 fa8 (LA,mi,LA,re) mi2\n" +
			"(la) do4 (LA) SI2 |\n" +
			"\n" +
			"(la) SI8 mi8 (la,mi,re) mi2\n" +
			"(la) sol8 fa16 mi16 (la) sol2\n" +
			"fa4 (LA,mi,LA,re) mi2\n" +
			"(re) mi4 (la,mi,re) mi2 |";

		this.samples['greenlands'] = "#titre = Greenlands\n" +
			"#piedPage = www.partitions-cornemuse.com\n" +
			"#tempo = 90\n" +
			"\n" +
			"@4 \n" +
			"R2{ \n" +
			"\t[4/4] (la) do8. (mi) re16\n" +
			"\t(la) SI8. do16 (la) re16 fa8. (LA) fa4 re8. fa16\n" +
			"\t(la) sol8. si16 (sol,la) sol16 fa8. (LA) fa4 (la) do8. (mi) re16 |\n" +
			"\n" +
			"\t(la) SI8. do16 (la) re16 fa8. (la,sol,la) sol16 fa8. (la,re,mi) re16 (fa) SI8.\n" +
			"\t(LA,mi,LA) do2. \n" +
			"}\n" +
			"\n" +
			"@4 \n" +
			"R2{ \n" +
			"\tsi4\n" +
			"\t(sol,la) sol8. fa16 (la) sol16 si8. (la) si4 (la) si4 |\n" +
			"\n" +
			"\t(sol,la) sol8. fa16 (la) sol16 re8. (LA,mi,LA) re4 si8. (sol,la) sol16\n" +
			"\tfa8. sol16 si8. do16 (la) re16 fa8. (la,re,mi) re16 (fa) SI8.\n" +
			"\t(LA,mi,LA) do2. |\n" +
			"}";

		this.samples['da-bourmen'] = "#titre = Da Bourmen\n" +
            "#titre2 = Marche\n" +
            "#piedPage = www.partitions-cornemuse.com\n" +
            "#tempo = 90\n" +
            "#tonalite = sibM\n" +
            "\n" +
            "R2{\n" +
            "\t@4. [3/4] re8 (la,re,mi) re8. do16\n" +
            "\t[2/4] (la) SI (la) re16 do16 re16 mi16\n" +
            "\t[3/4] (la) fa8 mi16 fa16 (la) sol8 fa8 (la) mi8 re8 |\n" +
            "\n" +
            "\t[2/4] (la,do,re) do8 SI8 (la) re8. do16 \n" +
            "\t(la) SI (la) re16 do16 re16 mi16 \n" +
            "\t[3/4] (la) fa8 mi16 fa16 si8 fa8 (la,mi,fa) mi8. re16 (fa) do4. |\n" +
            "} \n" +
            "@4. SI8 (la) re8 mi8 \n" +
            "R2{\n" +
            "\t(la) fa8 mi16 fa16 (la) sol8 fa8 (la,mi,fa) mi8 do8 \n" +
            "\t[2/4] mi4 (la,re,mi) re8. SI16 \n" +
            "\t[3/4] (la) do4. SI8 (la) re8 mi8 |\n" +
            "\n" +
            "\t(la) fa8 mi16 fa16 si8 fa8 (la,mi,fa) mi8 do8 \n" +
            "\t[2/4] mi4 (la) re8 do16 re16 \n" +
            "} \n" +
            "A{ \n" +
            "\t{ [3/4] (fa) SI4. (mi) SI8 (la) re8 mi8 }\n" +
            "\t{ (fa) SI4. }\n" +
            "}";

		this.samples['book'] = "#titre = An Hollaika\n" +
            "#titre2 = Appel de pâtre de Cornouaille\n" +
            "#tempo = 100\n" +
            "\n" +
            "[2/4] \n" +
            "R2{ \n" +
            "\t(la) re8. mi16 fa8 re8\n" +
            "\t(la) mi4 (fa) do4\n" +
            "\t(la) re4 SI4\n" +
            "\t(la) re8. mi16 fa8 re8\n" +
            "\t(la) mi4 (fa) do4\n" +
            "\t(LA) SI2 |\n" +
            "}\n" +
            "\n" +
            "(la) SI8. do16 re8 mi8\n" +
            "(la) fa4 (SI) fa4\n" +
            "(la) sol4 mi4\n" +
            "(la) re8. mi16 fa8 re8\n" +
            "(la) mi4 re4\n" +
            "(fa) do2 |\n" +
            "\n" +
            "(la) re8. mi16 fa8 re8\n" +
            "(la) mi4 (fa) do4\n" +
            "(la) re4 SI4\n" +
            "(la) re8. mi16 fa8 re8\n" +
            "(la) mi4 (fa) do4\n" +
            "(LA) SI2\n" +
            "\n" +
            "-----------------------------------------------\n" +
            "\n" +
            "#titre = An Dro\n" +
            "#titre2 = Danse Vannetaise\n" +
            "#tempo = 100\n" +
            "\n" +
            "[2/4] \n" +
            "R2{ \n" +
            "\t@16 (la) do16\n" +
            "\t(LA) do8 mi8 (la,re,mi) re8. do16\n" +
            "\t(la) re8 SI8 (la) do8 (LA) do8\n" +
            "\t(la) do8 mi8 (la,re,mi) re8. do16\n" +
            "\t(la) re8 SI8 (la) do8. \n" +
            "}\n" +
            "\n" +
            "R2{ \n" +
            "\t@16 (LA) do16\n" +
            "\t(la) mi8 fa8 (la,sol,la) sol8. (fa) sol16\n" +
            "\t(la) sol8 la8 (si) sol8. fa16\n" +
            "\t(la) mi8 do8 (la) mi8. re16\n" +
            "\t(la,do,mi) do8 SI8 (la) do8. \n" +
            "}\n" +
            "\n" +
            "-----------------------------------------------\n" +
            "\n" +
            "#titre = Hanter Dro\n" +
            "#titre = Dans Vannetaise\n" +
            "#etirerDerniere = non\n" +
            "#tempo = 100\n" +
            "\n" +
            "[3/4] \n" +
            "R2{ \n" +
            "\t(la) SI8 (mi) SI16 do16 (la) re8 do8 (LA,mi,LA) re8. do16\n" +
            "\t(la) SI8 (mi) SI16 do16 (la) re8 do8 (LA,mi,LA) re8. do16\n" +
            "\t(la) SI8 (mi) SI16 do16 (la) re8 do8 (LA,mi,LA) re4 |\n" +
            "}\n" +
            "\n" +
            "R2{ \n" +
            "\t(la) do8 re16 mi16 (la) fa8 (SI) fa8 (la,re,mi) re8. do16\n" +
            "\t(la) fa8 (SI) fa16 mi16 (la) re8 (LA) re16 SI16 (la) do4\n" +
            "\t(la) do8 re16 mi16 (la) fa8 (SI) fa8 (la,re,mi) re8. do16 |\n" +
            "\n" +
            "\t(la) re8 mi16 re16 (la) do8 (LA,mi,LA) do8 (LA) SI4 \n" +
            "}\n" +
            "\n" +
            "-----------------------------------------------\n" +
            "\n" +
            "#titre = An Teir Seienn\n" +
            "#titre2 = Les trois rubans de soie\n" +
            "#tempo = 66\n" +
            "\n" +
            "[6/8] \n" +
            "@8 \n" +
            "R3{ \n" +
            "\t(la) SI8\n" +
            "\t(LA,mi,LA,re) mi4 fa8 (la) sol8 fa8 si8\n" +
            "\t(sol,la) sol4. - sol4 \n" +
            "} \n" +
            "(la) sol8\n" +
            "(si,la) si4. la8 sol8 si8\n" +
            "(LA,mi,LA,re) mi4. - mi4 sol8\n" +
            "(la,fa,sol) fa4. (la) mi8 re8 mi8 |\n" +
            "\n" +
            "(la) N4/3{ fa8 sol8 la8 sol8 } (la,fa,sol) fa4 sol8\n" +
            "(si,la) si4. la8 sol8 si8\n" +
            "(LA,mi,LA,re) mi4. - mi4 sol8\n" +
            "(la,fa,sol) fa4. (la) SI8 re8 fa8\n" +
            "(LA,mi,LA,re) mi4. - mi4\n" +
            "\n" +
            "-----------------------------------------------\n" +
            "\n" +
            "#titre = Jezuz Kroedur\n" +
            "#titre2 = Cantique de Noël Vannetais\n" +
            "#tempo = 56\n" +
            "\n" +
            "[6/8] \n" +
            "(la) do8 (mi) do8 (fa) do8 (la) sol4.\n" +
            "(la) fa8 sol8 mi8 (la,re,mi) re4.\n" +
            "(la) fa8 (SI) fa8 mi8 (la,do,mi) do4 re8\n" +
            "(la) fa4 mi8 (la,re,mi) re4. |\n" +
            "\n" +
            "(la) mi8 re8 do8 (mi) re4 fa8\n" +
            "[9/8] (la) re4 mi8 (la,do,mi) do4. (LA) SI4.\n" +
            "[6/8] (la) do8 mi8 do8 (mi) re4 fa8\n" +
            "(la) re4 mi8 (la,do,mi) do4. |\n" +
            "\n" +
            "-----------------------------------------------\n" +
            "\n" +
            "#titre = Kantik Ar Baradoz\n" +
            "#titre2 = Cantique du Paradis\n" +
            "#etirerDerniere = non\n" +
            "#tempo = 60\n" +
            "\n" +
            "@8 \n" +
            "R2{ \n" +
            "\t[6/8] do8 \n" +
            "\t(la) mi4 re8 (la) do8 re8 mi8\n" +
            "\t(la,re,mi) re4. - re4 \n" +
            "} \n" +
            "(la) re8\n" +
            "do4 (la) do8 (mi) do8 re8 do8\n" +
            "(LA) SI4. (mi) do4. |\n" +
            "\n" +
            "(la) mi8 re8 do8 (LA) SI8 do8 re8\n" +
            "(la,do,mi) do4. - do4 (la) do8\n" +
            "(mi) do4 (la) do8 (mi) do8 re8 do8\n" +
            "(LA) SI4. (mi) do4.\n" +
            "(la) mi8 re8 do8 (LA) SI8 do8 re8 |\n" +
            "\n" +
            "(la,do,mi) do4. - do4\n";

    }

	// Retrurns a sample score by name
	public getSample(name: string): string {
		if (this.samples.hasOwnProperty(name)) {
			return this.samples[name];
		}
		return '';
	}
	
}