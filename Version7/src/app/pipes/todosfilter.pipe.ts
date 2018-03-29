import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Pipe({
  name: 'todosfilter'
})

export class TodosfilterPipe implements PipeTransform {
  transform(todo: Todo[], navStatus?: string): Todo[] {
    return todo.filter(todos => {
      switch (navStatus) {
        case 'Active': return !todos.completed;
        case 'Completed': return todos.completed;
        default: return true;
      }
    });
  }

}
