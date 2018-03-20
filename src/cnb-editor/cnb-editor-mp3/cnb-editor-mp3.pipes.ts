import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        let minutes: number = Math.floor(value / 60);
        let seconds: number = Math.round(value - minutes * 60);
        if (Number.isNaN(minutes)) minutes = 0;
        if (Number.isNaN(seconds)) seconds = 0;
        return String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2);
    }

}