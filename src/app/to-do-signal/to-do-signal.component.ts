import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { ToDo, TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do-signal',
  standalone: true,
  imports: [],
  templateUrl: './to-do-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoSignalComponent {

  // Services
  userService = inject(UserService);
  todoService = inject(TodoService);

  // Signals
  users = this.userService.members;
  isLoading = this.todoService.isLoading;
  currentMember = this.todoService.currentMember;
  todosForMember = this.todoService.filteredToDos;
  errorMessage = this.todoService.errorMessage;

  // Actions
  onFilter(ele: EventTarget | null) {
    this.todoService.filterToDos((ele as HTMLInputElement).checked);
  }

  onSelected(ele: EventTarget | null) {
    this.todoService.getToDosForMember(
      Number((ele as HTMLSelectElement).value)
    );
  }

  onChangeStatus(task: ToDo, ele: EventTarget | null) {
    this.todoService.changeStatus(task, (ele as HTMLInputElement).checked);
  }
}
