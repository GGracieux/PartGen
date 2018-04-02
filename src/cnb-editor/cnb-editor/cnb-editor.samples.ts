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


		this.samples['highland-cathedral'] = "#titre = Highland Cathedral\n" +
            "#piedPage = www.bagpipe-scores.com\n" +
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
			"#piedPage = www.bagpipe-scores.com\n" +
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
			"#piedPage = www.bagpipe-scores.com\n" +
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

    }

	// Retrurns a sample score by name
	public getSample(name: string): string {
		if (this.samples.hasOwnProperty(name)) {
			return this.samples[name];
		}
		return '';
	}
	
}