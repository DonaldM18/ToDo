import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor ( private fb: FormBuilder){}

  taskForm: FormGroup = this.fb.group({
    taskName:['', Validators.required],
    taskTime:['', Validators.required],
    taskDescription:['', Validators.required]
  })

  /**
   * Method that evaluate if form's valid
   */
  saveTask(){
    
  }
}
