export enum WorkFlowState {

    APP_INIT = 1,
	
	CNB2LP_RUN = 2,
	CNB2LP_ERR = 2.1,
    CNB2LP_OK = 2.2,
	
	LILYPOND_RUN = 3,
	LILYPOND_ERR = 3.1,
	LILYPOND_OK = 3.2,
	
	MIDI2MP3_RUN = 4,
	MIDI2MP3_ERR = 4.1,
	MIDI2MP3_OK = 4.2,
	
	SUCCESS = 5
	
}