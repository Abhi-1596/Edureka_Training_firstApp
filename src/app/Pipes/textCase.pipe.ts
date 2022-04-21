import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textCaseTransform'
})

export class TextCasePipe implements PipeTransform {
    transform(value: string, textCase: string) {
        textCase = textCase.toLowerCase();
        if (textCase === 'upper') {
            return value.toUpperCase();
        } else if (textCase === 'lower') {
            return value.toLowerCase();
        }
        else {
            return value.charAt(0).toUpperCase() + value.substring(1);
        }
    }
}