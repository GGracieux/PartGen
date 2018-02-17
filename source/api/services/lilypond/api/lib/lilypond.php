<?php 

class LilyPond {

    private function execute($cmd) {
        $result = exec($cmd, $output, $retVal);
        return array(
            'result' => $result,
            'output' => $output,
            'retVal' => $retVal
        );
    }

    public function getVersionInfo() {
        $cmd = 'lilypond -v';
        $res = $this->execute($cmd);
        return $res['output'][0];
    }

}