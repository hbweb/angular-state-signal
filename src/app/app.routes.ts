import { Routes } from '@angular/router';
import { ToDoSignalComponent } from './to-do-signal/to-do-signal.component';
import { NgrxSignalStoreComponent } from './ngrx-signal-store/ngrx-signal-store.component';

export const routes: Routes = [
  {
    path: 'ngrx-signal',
    component: NgrxSignalStoreComponent,
  },
  {
    path: 'signal',
    component: ToDoSignalComponent,
  },
  {
    path: '',
    component: ToDoSignalComponent,
  }
];
