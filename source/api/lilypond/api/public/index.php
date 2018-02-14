<?php 

// Définition APP_ROOT et autoloader
define('APP_ROOT',dirname(__DIR__));
require APP_ROOT . '/vendor/autoload.php';

// Instanciation de l'application
$app = new \Slim\App();

// ------------------------
// ROUTE INFO
// ------------------------
$app->get('/info', function ($request, $response, $args) {

    // Compose le message retour
	$infos = array(
		'apiName' => 'pg-lilypond',
		'version'=>'1',
		'description' => 'Convertion de fichier lp en midi et pdf',
	);

	// retourne le message
    return $response->withJson($infos,200);

});

// ------------------------
// ROUTE CONVERT
// ------------------------
$app->post('/convert', function ($request, $response, $args) {

    // Recup cnbData via la request
    $lpData = $request->getParsedBody()['lpData'];

    // Compose le resultat
    $result = array(
    	'status' => 'OK ou ERROR', 
    	'message' => 'Message si erreur',
    	'source' => $lpData,
    	'result' => array(
    		'midi' => 'fichier midi en base 64',
    		'pdf' => 'fichier pdf en base 64'
    		),
    	'logs' => 'logs lilypond au format texte'
    	);

	// retour resultat
	
	return $response->withJson($result,200);

});

// Execution
$app->run();