import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'lib-add-edit-subcategory',
  templateUrl: './add-edit-subcategory.component.html',
  styleUrls: ['./add-edit-subcategory.component.css']
})
export class AddEditSubcategoryComponent implements OnInit {

  // ====================declarations==================
  buttonText: any = "SUBMIT";
  header_name: any = "Add Subscription Category"
  subscriptionCatForm: FormGroup;
  configData: any;
  successMessage: any = "Submitted Successfully!!!"
  dialogRef: any;
  // ==================================================



  @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }


  constructor(private formBuilder: FormBuilder, private newsletterService: NewsTitleService,
    private router: Router ,  public dialog: MatDialog) { }

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
        this.header_name = "EDIT";
        break;
    }
    // --------------------------------------------------------------------------
  }


  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================

  // ================================================Default value======================================
  setDefaultValue(defaultValue) {
    this.subscriptionCatForm.patchValue({
      name: defaultValue.name,
      priority: defaultValue.priority,
      status: defaultValue.status,

    });

  }
  // ==================================================================================================


  // ======================form generation=====================
  generateForm() {
    this.subscriptionCatForm = this.formBuilder.group({
      name: [],
      priority: [],
      status: []
    });
  }
  // ==========================================================


  // =========================SUBMIT FUNCTION======================
  onSubmit() {

    /* stop here if form is invalid */
    if (this.subscriptionCatForm.invalid) {
      return;
    } else {
      if (this.subscriptionCatForm.value.status) {
        this.subscriptionCatForm.value.status = parseInt("1");
      } else {
        this.subscriptionCatForm.value.status = parseInt("0");;
      }

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.subscriptionCatForm.value, this.configData.condition)
      };
      this.newsletterService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          
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
  // ==============================================================
}



// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
// ======================================================================================================
