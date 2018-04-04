# Bagpipe Scores
Bagpipe-scores is a textual score editor for bagpipe with PDF and MP3 generation.  
Live demo is accessible at [www.partitions-cornemuse.com](http://www.partitions-cornemuse.com).  
![screenshot](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/screenshot.jpg)

## Project structure
Project is composed of 5 repositories :
- [bagpipe-scores](https://github.com/GGracieux/bagpipe-scores) : This repo. Bagpipe scores frontend, it converts simplified score notation to Lilypond format. 
- [codemirror-bps](https://github.com/GGracieux/codemirror-bps) : Code mirror mode for simplified score notation syntaxic coloration. 
- [lilypond-api](https://github.com/GGracieux/lilypond-api) : A REST API used to convert Lilypond format to PDF and MIDI.
- [midi2mp3-api](https://github.com/GGracieux/midi2mp3-api) : A REST API used to convert MIDI files to MP3.
- [bps-orchestration](https://github.com/GGracieux/bps-orchestration) : Project orchestration & deployment files.

## Container infrastructure
Project is composed of 3 containers, docker images are available at dockerhub.com :
- [bagpipe-scores image](https://hub.docker.com/r/teuki/bagpipe-scores/) : nginx server delivering front and routing API calls. 
- [lilypond-api image](https://hub.docker.com/r/teuki/lilypond-api/) : REST API.
- [midi2mp3-api image](https://hub.docker.com/r/teuki/midi2mp3-api/) : REST API.

## Tech & Tools

#### Frontend
![frontend](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-front.png)

#### Backend
![backend](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-back.png)

#### Deployment
![deployment](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-infra.png)

#### Tools
![tools](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-tools.png)

#### Third party
![third party](https://raw.githubusercontent.com/GGracieux/bagpipe-scores/master/src/assets/tech-thirdparty.png)


## Prerequisite
- Install [nodejs](https://nodejs.org/en/) 
- Install [docker](https://www.docker.com/)

## Start

#### Installation
```bash
npm install
```

#### Build
```bash
npm run docker-build
```

#### Run 
```bash
docker-compose up
```

## Development tools
	
#### Run with nodejs
```bash
npm start
```
- Compiles, serves application at http://localhost:4200 and opens it in browser.
- Recompiles and refresh page on modification.
- External APIs are not available.

#### Compiles
```bash
npm run build
```
- Compiles into dist.

#### Compiles & Build
```bash
npm run docker-build
```
- Compiles into dist.
- Creates bagpipe-scores docker image

#### Compiles, Build & Run
```bash
npm run docker-build-up
```
- Compiles into dist.
- Creates bagpipe-scores docker image
- Launches containers from images bagpipe-scores, lilypond-api and midi2mp3-api
- App is accessible at webroot : http://[docker-machine]/
- lilypond API endpoints are exposed at : http://[docker-machine]/api/v1/lilypond/*
- midi2mp3 API endpoints are exposed at : http://[docker-machine]/api/v1/midi2mp3/*


#### Stop all running containers
```bash
npm run docker-stop
```

## Also read
- [How to contribute](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
