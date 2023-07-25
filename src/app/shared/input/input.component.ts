import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  @Input() label: any;
  @Input() control: any;
  @Input() inputType: any;

  constructor(){}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, error } = this.control;
    return dirty && touched && error;
  }
}
