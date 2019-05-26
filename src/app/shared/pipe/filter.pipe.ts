import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FilterPipe' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }
    // searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.bookName.toLowerCase().includes(searchText);
    });
   }
}

