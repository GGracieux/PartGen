# PartGen
Génération de partitions pour Cornemuse au format PDF et MP3.

Gateway (NGINX en reverse proxy) qui expose

	- lilypond-api : Convertion du format lilypond au format MIDI & PDF : NGINX + PHP + SLIM + LILYPOND

	- midi2mp3-api : Conversion MIDI en MP3 : NGINX + PHP + SLIM + FLUIDSYNTH + LAME

	- frontend : Convertion notation simplifiée au format lilypond et utilisation des 2 API : ANGULAR 5 + MATERIAL
		
