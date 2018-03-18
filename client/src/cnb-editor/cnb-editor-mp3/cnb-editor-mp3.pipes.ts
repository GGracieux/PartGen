import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        const minutes: number = Math.floor(value / 60);
        const seconds: number = Math.round(value - minutes * 60);
        return String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2);
    }

}