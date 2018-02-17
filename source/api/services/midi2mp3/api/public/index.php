<?php 

// Définition APP_ROOT et autoloader
define('APP_ROOT',dirname(__DIR__));
require APP_ROOT . '/vendor/autoload.php';
require APP_ROOT . '/lib/lame.php';
require APP_ROOT . '/lib/fluidsynth.php';

// Instanciation de l'application
$app = new \Slim\App();

// ------------------------
// ROUTE INFO
// ------------------------
$app->get('/info', function ($request, $response, $args) {

    // Compose le message retour
	$infos = array(
		'apiName' => 'pg-midi2mp3',
		'version'=>'1',
		'description' => 'Convertion de fichier midi en mp3',
	);

	// retourne le message
    return $response->withJson($infos,200);

});

// ------------------------
// ROUTE INFO/BINARIES
// ------------------------
$app->get('/info/binaries', function ($request, $response, $args) {

    // Récupère l'info de version
    $lame = new Lame();
    $fs = new FluidSynth();

    // Compose le message retour
    $infos = array(
        //'lame' => $lame->getVersionInfo(),
        'fluidsynth' => $fs->getVersionInfo()
    );

    // retourne le message
    return $response->withJson($infos,200);

});

// ------------------------
// ROUTE CONVERT
// ------------------------
$app->post('/convert', function ($request, $response, $args) {

    // Recup cnbData via la request
    $midiData = $request->getParsedBody()['midiData'];

    // Compose le resultat
    $result = array(
    	'status' => 'OK ou ERROR', 
    	'message' => 'Message si erreur',
    	'source' => $midiData,
    	'result' => 'fichier mp3 en base 64',
    	'logs' => 'logs lilypond au format texte'
    	);

	// retour resultat
	
	return $response->withJson($result,200);

});

// Execution
$app->run();