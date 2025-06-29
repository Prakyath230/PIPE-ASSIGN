import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../capitalize.pipe';
import { FilterPipe } from '../filter.pipe';
import { GradePipe } from '../grade.pipe';
import { WordCountPipe } from '../word-count.pipe';


@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CapitalizePipe,
    GradePipe,
    FilterPipe,
    WordCountPipe
  ],
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent {
  searchText = '';

  students = [
    { name: 'sunil rathod', age: 22, course: 'angular development', joiningDate: '2024-08-01', fee: 25000, score: 85 },
    { name: 'meena verma', age: 21, course: 'web design basics', joiningDate: '2024-09-15', fee: 20000, score: 67 },
    { name: 'ajay singh', age: 23, course: 'fullstack dev', joiningDate: '2024-07-25', fee: 30000, score: 95 }
  ];
}
