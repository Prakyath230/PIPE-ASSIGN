import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: true
})
export class WordCountPipe implements PipeTransform {
  transform(value: string): number {
    return value ? value.trim().split(/\s+/).length : 0;
  }
}
