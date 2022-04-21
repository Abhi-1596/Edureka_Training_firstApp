import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'discountPrice'
})

export class discountPipe implements PipeTransform {
    transform(value: number, discountPercent: number) {
        return value - (value * (discountPercent / 100));
    }
}