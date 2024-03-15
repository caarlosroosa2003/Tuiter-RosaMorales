import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuitUser',
  standalone: true
})
export class TuitUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '@Carlos';
  }

}
