import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}



@Component({
  selector: 'lib-add-edit-sender',
  templateUrl: './add-edit-sender.component.html',
  styleUrls: ['./add-edit-sender.component.css']
})
export class AddEditSenderComponent implements OnInit {


  // ===============Declarations================
  senderForm: FormGroup;
  buttonText: any = "SUBMIT";
  header_name: any = "Add Sender"
  configData: any;
  successMessage: any = "Submitted Successfully!!!";
  dialogRef: any;
  // ===========================================
  constructor(private formBuilder: FormBuilder, private newsService: NewsTitleService
    , private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    //generating the form
    this.generateForm();


    // --------------------------------checking the cases------------------------ 
    switch (this.configData.action) {
      case 'add':
        /* Button text */

        break;
      case 'edit':
        /* Button text */
        this.buttonText = "UPDATE";
        this.successMessage = "One row updated!!!";
        this.setDefaultValue(this.configData.defaultData);
        this.header_name = "Edit Sender's Information";
        break;
    }
    // --------------------------------------------------------------------------
  }



  // ===============generate form====================
  generateForm() {
    this.senderForm = this.formBuilder.group({
      name: [],
      email: []
    });
  }
  // ================================================



  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal3, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================




  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.senderForm.patchValue({
      name: defaultValue.name,
      email: defaultValue.email
    });

  }
  // ==================================================================================================




  // =======================On SUBMIT======================
  onSubmit() {

    console.log("++++++++", this.senderForm.value);
    /* stop here if form is invalid */
    if (this.senderForm.invalid) {
      return;
    } else {

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.senderForm.value, this.configData.condition),
        "sourceobj": ["group"]
      };
      this.newsService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          console.log(response.status);
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    }
  }
  // ======================================================
}





// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal3.html',
})
export class Modal3 {

  constructor(
    public dialogRef: MatDialogRef<Modal3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================
