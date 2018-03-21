export class CnbEditorSamples {

	// tutorial samples
	private samples: string[] = [];

	constructor() {

		this.samples['exemple-scale'] = "#titre = Exemple : Gamme\n" +
            "[9/4] LA SI do re mi fa sol la si";

            this.samples['exemple-note-length'] = "#titre = Exemple : Durée des notes\n" +
            "[4/4] sol64 la32 sol16 la8 sol4 la2 sol1";

		this.samples['exemple-grace-notes'] = "#titre = Exemple : Ornementations\n" +
            "\n" +
            "% --- Sans ornementation\n" +
            "mi4 - mi8 fa16 sol16 fa8 mi8 SI8 mi8\n" +
            "fa4 - fa8 sol8 sol2\n" +
            "sol4 - sol8 la16 si16 la8 sol8 fa8 mi8\n" +
            "fa4 - fa8 sol8 SI2 |\n" +
            "\n" +
            "% --- Avec ornementation\n" +
            "(LA,mi,re) mi4 - mi8 fa16 sol16 (la,fa,sol) fa8 mi8 (la) SI8 mi8\n" +
            "(la,fa,sol) fa4 - fa8 sol8 (fa) sol2\n" +
            "(la) sol4 - sol8 la16 si16 (sol) la8 sol8 (la) fa8 mi8\n" +
            "(la,fa,sol) fa4 - fa8 sol8 (SI,LA,SI,LA) SI2 |";

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

		this.samples['exemple-triolets'] = "#titre = Exemple : Triolets\n" +
            "\n" +
            "% ---- Première mesure\n" +
            "do re mi fa \n" +
            "\n" +
            "% ---- Triolet noté N3/2 (3 notes pour une durée de 1/2 de la mesure)\n" +
            "N3/2{ do re mi } fa sol \n" +
            "\n" +
            "% ---- Troisième mesure \n" +
            "do re mi fa ";

		this.samples['exemple-anacrouse'] = "#titre = Exemple : Anacrouse\n" +
            "\n" +
            "% --- Anacrouse de durée 4 (noir)\n" +
            "[4/4] \n" +
            "@4 mi\n" +
            "SI do re mi\n" +
            "fa sol la si\n" +
            "la sol fa mi\n" +
            "re do SI LA |\n" +
            "\n" +
            "% --- Anacrouse de durée 2 (blanche)\n" +
            "@2 mi re\n" +
            "SI do re mi\n" +
            "fa sol la si\n" +
            "la sol fa mi\n" +
            "re do SI LA |";

		this.samples['exemple-repeat'] = "#titre = Exemple : Répétitions\n" +
            "\n" +
            "% --- Première ligne : Répétition (x3)\n" +
            "R3{ \n" +
            "    do re mi fa\n" +
            "    sol fa mi re\n" +
            "} |\n" +
            "\n" +
            "% --- Deuxième linge : répétition avec alternative\n" +
            "R2{ \n" +
            "    do re mi fa\n" +
            "    sol fa\n" +
            "}\n" +
            "A{ \n" +
            "    % --- Première fin\n" +
            "\t{ mi re }\n" +
            "\t\n" +
            "\t% --- Fin alternative\n" +
            "\t{ do do }\n" +
            "}\n";

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

    }

	// Retrurns a sample score by name
	public getSample(name: string): string {
		if (this.samples.hasOwnProperty(name)) {
			return this.samples[name];
		}
		return '';
	}
	
}