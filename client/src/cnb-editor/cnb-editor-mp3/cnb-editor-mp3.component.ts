// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-mp3',
    styleUrls: ['./cnb-editor-mp3.component.css'],
    templateUrl: './cnb-editor-mp3.component.html'
})

export class CnbEditorMp3Component {

    // instance du player
    public audioPlayer;

    @Input() set b64Mp3(b64Mp3: string) {
        if (b64Mp3 == '') {
            this.audioPlayer = false;
        } else {
            this.audioPlayer = new Audio();
            this.audioPlayer.src = "data:audio/mp3;base64," + b64Mp3;
        }
    }

    playPause(){
	    if (this.audioPlayer.paused) {
            this.audioPlayer.play();
        } else {
	        this.audioPlayer.pause();
        }
    }

    backward(){
        this.audioPlayer.currentTime = Math.max(0, this.audioPlayer.currentTime - 5);
    }

    forward() {
        this.audioPlayer.currentTime = Math.min(this.audioPlayer.duration, this.audioPlayer.currentTime + 5);
    }
	
}
