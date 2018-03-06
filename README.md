# CornPart
Textual score editor for bagpipe with PDF and MP3 generation.
Containerized application (Docker, Nginx, Angular5 + Material + AceEditor + PDFjs) using [lilypond](https://github.com/GGracieux/lilypond-api) and [midi2mp3](https://github.com/GGracieux/midi2mp3-api) APIs

### Installation
```bash
cd client
npm install
```
	
### Run (client)
```bash
cd client
npm start
```
- Compiles, serves application at http://localhost:4200 and opens it in browser.
- Recompiles and refresh browser on modification.
- External API are not available.


### Build (docker)
```bash
cd client
npm run docker-build
```
- Compiles into dist.
- Creates cornpart docker image


### Run (docker)
```bash
docker-compose up
```
- Apache server is listening on port 80
- Application is accessible at webroot : http://[docker-machine]/
- lilypond API endpoints are exposed at : http://[docker-machine]/api/v1/lilypond/*
- midi2mp3 API endpoints are exposed at : http://[docker-machine]/api/v1/midi2mp3/*

### Also read
- [How to contribute](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
