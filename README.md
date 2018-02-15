# PartGen
Convertion de fichier CNB (Cornemuse notation bretonne) en PDF et MP3.

- 1 gateway (NGINX en R.P.) qui expose 

	- 1 api-facade qui echange avec 3 API 
		- cnb2lp : convertion CNB en LP (Lilypond) : NGINX + PHP + SLIM
		- lilypond : convertion LP en MIDI & PDF (Lilypond) : NGINX + PHP + SLIM + LILYPOND
		- midi2mp3 : conversion MIDI en MP3 : NGINX + PHP + SLIM + FLUIDSYNTH + LAME
		
	- 1 serveur qui expose le front (NGINX)
