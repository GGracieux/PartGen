// Imports core
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cnb-editor-mp3',
    styleUrls: ['./cnb-editor-mp3.component.css'],
    templateUrl: './cnb-editor-mp3.component.html'
})

export class CnbEditorMp3Component {

	// Contenu base64 du MP3 
	@Input() content;

	private audio;

	private load() {
        this.audio = new Audio();
        this.audio.src = "data:audio/mp3;base64," + this.content;
    }

    playPause(){
	    if (this.audio.paused) {
            this.audio.play();
        } else {
	        this.audio.pause();
        }
    }

    backward(){
        this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
    }

    forward() {
        this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 5);
    }
	
}
