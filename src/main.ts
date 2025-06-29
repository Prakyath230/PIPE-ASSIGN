import { bootstrapApplication } from '@angular/platform-browser';
import { StudentDashboardComponent } from './app/student-dashboard/student-dashboard.component';

bootstrapApplication(StudentDashboardComponent)
  .catch(err => console.error(err));
