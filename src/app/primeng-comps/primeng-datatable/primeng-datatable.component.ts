import { Component, OnInit } from '@angular/core';
import { FamilyMember } from "../../entity/family-member";

@Component({
  selector: 'app-primeng-datatable',
  templateUrl: './primeng-datatable.component.html',
  styleUrls: ['./primeng-datatable.component.css']
})
export class PrimengDatatableComponent implements OnInit {

  family:  FamilyMember[] = [
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
      {relationship: 'Wife', name: 'Deanna', sex: 'F', age: 29},
      {relationship: 'Husband', name: 'Bill', sex: 'M', age: 52},
      {relationship: 'Son', name: 'Brian', sex: 'M', age: 15},
      {relationship: 'Son', name: 'Liam', sex: 'M', age: 12},
  ];

  selecltedFamilyMember: FamilyMember;

  constructor() { }

  ngOnInit() {
  }

  onRowSelect(event, data, type) {
      console.log(data);
  }


}
