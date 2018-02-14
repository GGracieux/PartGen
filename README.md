# PartGen
Convertion de fichier CNB (Cornemuse notation bretonne) en PDF et MP3.
- 1 facade (NGINX en reverse proxy) qui expose
	- 1 NGINX pour téléchargement du front JS
	- 1 API de convertion CNB en LP (Lilypond) : NGINX + PHP + SLIM
	- 1 API de convertion LP en PDF et MIDI : NGINX + PHP + SLIM + LILYPOND
	- 1 API de convertion MIDI en MP3 : NGINX + PHP + SLIM + FLUIDSYNTH + LAME
