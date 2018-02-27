<?php 

// Définition APP_ROOT et autoloader
define('APP_ROOT',dirname(__DIR__));
require APP_ROOT . '/vendor/autoload.php';
require APP_ROOT . '/lib/cnb2lp.php';

// Instanciation de l'application
$app = new \Slim\App();

// ------------------------
// ROUTE INFO
// ------------------------
$app->get('/info', function ($request, $response, $args) {

    // Compose le message retour
	$infos = array(
		'apiName' => 'pg-cnb2lp',
		'version'=>'1',
		'description' => 'Convertion de fichier cnb (Cornemuse notation bretonne) en lp (LilyPond)',
	);

	// retourne le message
    return $response->withJson($infos,200);

});

// ------------------------
// ROUTE CONVERT
// ------------------------
$app->post('/convert', function ($request, $response, $args) {

    // Recup cnbData via la request
    $cnbData = $request->getParsedBody()['data'];

	// Convertion cnb -> lp
	$converter = new Cnb2lp();
	$lpData = $converter->convert($cnbData);

	// retour resultat
	$result = array('lpData' => $lpData);
	return $response->withJson($result,200);

});

// Execution
$app->run();