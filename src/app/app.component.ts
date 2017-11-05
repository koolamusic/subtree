import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {StudentService} from './services/student.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  resourceFormGroup: FormGroup;
  resources: any = <any>[];
  title = 'app';
  selectedItem: any = {};


  constructor(
    public toastr: ToastsManager, 
    private _fb: FormBuilder,
    private _studentService: StudentService,
    vcr: ViewContainerRef
  ) {
      this.toastr.setRootViewContainerRef(vcr);
  }


  ngOnInit() {
    console.log('Init');
    this.resourceFormGroup = this._fb.group({
      firstName: ['', [<any>Validators.required]],
      lastName: ['', [<any>Validators.required]],
      faculty: ['', [<any>Validators.required]],
      department: ['', [<any>Validators.required]],
      level: ['', [<any>Validators.required]],
      session:['' [<any>Validators.required]],
      email:['' [<any>Validators.required]],
      address: ['', [<any>Validators.required]]
    });

    this.getStudents();
  }

  onClickCreate(valid: boolean, value: any) {
    if (valid) {
      console.log(value);
      if (this.selectedItem._id === undefined){
        // SAve into the DB
          this._studentService.createStudent(value).subscribe((res: any) => {
          console.log(res);
          this.toastr.success('Registration is Successfull', 'Registered Successfully!');
          this.resourceFormGroup.reset();
          this.getStudents();
        }); 
      } else {
         // SAve into the DB
        value._id = this.selectedItem._id;
        console.log(value);
        this._studentService.updateStudent(value).subscribe((res: any) => {
          console.log(res);
          this.resourceFormGroup.reset();
          this.selectedItem = {};
          this.getStudents();
        });
      }
     
    } else {
      console.log('Form not valid');
    }
  }
   
  getStudents() {
    this._studentService.getStudent().subscribe((res: any) => {
      console.log(res);
      if (res.statusCode === 200) {
        this.resources = res.data;
      }
    });
  }

  onClickEdit(resource: any) {
    console.log(resource);
    this.selectedItem = resource;
    this.resourceFormGroup.controls['firstName'].setValue(resource.firstName);
    this.resourceFormGroup.controls['lastName'].setValue(resource.lastName);
    this.resourceFormGroup.controls['faculty'].setValue(resource.faculty);
    this.resourceFormGroup.controls['department'].setValue(resource.department);
    this.resourceFormGroup.controls['level'].setValue(resource.level);
    this.resourceFormGroup.controls['session'].setValue(resource.session);
    this.resourceFormGroup.controls['email'].setValue(resource.email);
    this.resourceFormGroup.controls['address'].setValue(resource.address)
  }
  onClickDelete(resource: any) {
    console.log(resource);
    this._studentService.deleteStudent(resource._id).subscribe( (res: any ) =>{
      this.toastr.success('Item deleted Successfully', 'Deleted!');
      console.log(res);
      this.getStudents();
    });
  }
}






