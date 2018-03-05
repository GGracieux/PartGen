# CornPart
Editeur de partitions pour cornemuse au format PDF et génération du MP3 associé.
Application conteneurisée (Docker, Nginx, Angular5 + Material + AceEditor + PDFjs) faisant appel aux api [lilypond](https://github.com/GGracieux/lilypond-api) et [midi2mp3](https://github.com/GGracieux/midi2mp3-api)


## Mise en route

#### Installation
```bash
cd client
npm install
```
	
#### Run (client)
```bash
cd client
npm start
```
- Compile, sert l'application sur http://localhost:4200 et l'ouvre dans le navigateur.
- Recompile et rafraichi le navigateur en cas de modification.
- Les API externes ne sont pas disponibles.


#### Build (docker)
```bash
cd client
npm run docker-build
```
- Compile dans dist.
- Crée l'image docker cornpart

#### Run (docker)
```bash
docker-compose up
```
- Le serveur apache est exposé sur le port 80 : http://[docker-machine]/
- Les API externes ne sont pas disponibles.

