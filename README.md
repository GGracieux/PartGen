# Bagpipe Scores
Textual score editor for bagpipe with PDF and MP3 generation.
Containerized application (Docker, Nginx, Angular5 + Material + AceEditor + PDFjs) using [lilypond](https://github.com/GGracieux/lilypond-api) and [midi2mp3](https://github.com/GGracieux/midi2mp3-api) APIs

### Installation
```bash
npm install
```
	
### Run (node)
```bash
npm start
```
- Compiles, serves application at http://localhost:4200 and opens it in browser.
- Recompiles and refresh browser on modification.
- External API are not available.

### Run (docker)
```bash
npm run docker-build-up
```
- Compiles into dist.
- Creates bagpipe-scores docker image
- Application is accessible at webroot : http://[docker-machine]/
- lilypond API endpoints are exposed at : http://[docker-machine]/api/v1/lilypond/*
- midi2mp3 API endpoints are exposed at : http://[docker-machine]/api/v1/midi2mp3/*


### Stop (docker)
```bash
npm run docker-stop
```

### Also read
- [How to contribute](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
