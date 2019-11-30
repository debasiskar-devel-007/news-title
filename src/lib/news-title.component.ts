import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from './api.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  formTitleValue: any;
  serverUrlValue: any;
  addEndpointValue: any;
  logoValue:any;
}



@Component({
  selector: 'lib-newsTitle',
  // templateUrl:'./news-title.component.html',
  template: ``,
  styleUrls: ['./news-title.component.css']
})
export class NewsTitleComponent implements OnInit {
  public formTitleValue: any = '';
  public serverUrlValue: any = '';
  public addEndpointValue: any = '';
  public logoValue: any='';

  @Input()
  set formTitle(formTitleVal: any) {
    this.formTitleValue = formTitleVal;
  }

  @Input()
  public set logo(v : string) {
    this.logoValue = v;
  }
  

  @Input()        // setting the server url from project
  set serverUrl(serverUrlVal: any) {
    this.serverUrlValue = (serverUrlVal) || '<no name set>';
    this.serverUrlValue = serverUrlVal;
    // console.log("======================",this.serverUrlValue);

  }
  @Input()        // set the endpoint And source
  public set addEndpoint(addEndpointVal: any) {
    this.addEndpointValue = addEndpointVal;
    // console.log(this.addEndpointValue)
  }
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;


  public durationInSeconds: any = 10;

  public newsLatterForm: FormGroup;
  constructor(public fb: FormBuilder, public apiService: ApiService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    // this.newsLatterForm = this.fb.group({
    //   fullname: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   company: ['', Validators.required],
    //   email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
    // });


    // setInterval(()=> {
    //   this.openSnackBar(); },4000); 
    
  }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(NewsTitleComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }


  ngOnInit() {
    
    setTimeout(() => {
      this.openDialog();      
    }, 500);
   
    
  }

  // newsLatterFormSubmit() {
  //   for (const key in this.newsLatterForm.controls) {
  //     this.newsLatterForm.controls[key].markAsTouched();
  //   }
  //   if (this.newsLatterForm.valid) {
  //     console.log(this.newsLatterForm.value);
  //     let data: any = {
  //       'data': this.newsLatterForm.value,
  //       "source": this.addEndpointValue.source
  //     };
  //     this.apiService.addData(data).subscribe((responce) => {
  //       console.log(responce);
  //       let result: any = {};
  //       result = responce;
  //       if (result.status == "success") {
  //         this.formDirective.resetForm();
  //       }
  //     })
  //   }

  // }

  // inputUntouched(val: any) {
  //   console.log('ok----');
  //   this.newsLatterForm.controls[val].markAsUntouched();
  // }


  openDialog(): void {
    const dialogRef = this.dialog.open(modalData, {
      // width: '250px',
      data: {

        addEndpointValue: this.addEndpointValue,
        serverUrlValue: this.serverUrlValue,
        formTitleValue:this.formTitleValue,
        logoValue:this.logoValue
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);
    });
  }




}


@Component({
  selector: 'modalData',
  templateUrl:'./news-title.component.html',
  // templateUrl: './modale.html',
  styleUrls: ['./news-title.component.css']
})
export class modalData implements OnInit {

  public newsLatterForm: FormGroup;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(
    public dialogRef: MatDialogRef<modalData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public apiService: ApiService, public fb: FormBuilder) {

      // console.log(data);
    this.newsLatterForm = this.fb.group({
      fullname: ['', Validators.required],
      group: [0,],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
    });
  }

  ngOnInit() {
    this.apiService.clearServerUrl();       //  Clear the server url
    setTimeout(() => {
      this.apiService.setServerUrl(this.data.serverUrlValue);        //  set the server url
    }, 50);
    // console.log("+++++++++++++++",this.data.serverUrlValue);


    this.apiService.clearaddEndpoint();       //  Clear the endpoint
    setTimeout(() => {
      this.apiService.setaddEndpoint(this.data.addEndpointValue.endpoint);   //  set the endpoint
    }, 50);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  newsLatterFormSubmit() {
    console.log(this.newsLatterForm.value);
    for (const key in this.newsLatterForm.controls) {
      this.newsLatterForm.controls[key].markAsTouched();
    }
    if (this.newsLatterForm.valid) {
      console.log(this.newsLatterForm.value);
      let data: any = {
        'data': this.newsLatterForm.value,
        "source": this.data.addEndpointValue.source
      };
      this.apiService.addData(data).subscribe((responce) => {
        console.log(responce);
        let result: any = {};
        result = responce;
        if (result.status == "success") {
          this.formDirective.resetForm();
        }
      })
    }
  }



  inputUntouched(val: any) {
    // console.log('ok---?-');
    this.newsLatterForm.controls[val].markAsUntouched();
  }

}

