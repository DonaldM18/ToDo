import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  /**
   * array with tasks data
   */
  taskData:Task[] =[];


  ngOnInit(): void {
    
  }

  constructor ( private fb: FormBuilder){}

  taskForm: FormGroup = this.fb.group({
    id: this.taskData.length ,
    taskName:['', Validators.required],
    taskTime:['', Validators.required],
    taskDescription:['', Validators.required],
    taskDone: false,
  })


  /**
   * Method that evaluate if form's valid
   */
  saveTask(){
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskData.push(newTask);
      console.log('Estos son los datos del formulario',this.taskData);
      this.taskForm.reset(); 
    }
    this.taskForm.markAllAsTouched()
  }
  /**
   * Method that delete a task by id
   */
  deleteTask(){

  }
}
