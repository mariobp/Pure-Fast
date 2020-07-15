import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from '../utils/purify'; 

const fibonacci = memoize((num: number): number => {  
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}).bind(this);


@Pipe({
  name: 'calculate',
})
export class CalculatePipe implements PipeTransform {
  
  transform(value: number,): number {
    return fibonacci(value);
  }

}
