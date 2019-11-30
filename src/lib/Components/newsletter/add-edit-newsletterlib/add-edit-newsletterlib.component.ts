import { Component, OnInit,Input,Inject } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsTitleService } from '../../../news-title.service';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-add-edit-newsletterlib',
  templateUrl: './add-edit-newsletterlib.component.html',
  styleUrls: ['./add-edit-newsletterlib.component.css'],
})
export class AddEditNewsletterlibComponent implements OnInit {


  // =================declaration==================
  header_name:any="Newsletter"
  buttonText:any="SAVE";
  group_name_array:any = [];
  sender_name_array:any = [];
  configData:any;
  time:any ;
  cookieValue:any;
  newsForm : FormGroup;
  // ==============================================

    /**ckeditor start here*/
    public Editor = ClassicEditor;  //for ckeditor
    editorConfig = {
      placeholder: 'Content:',
    };
    public model = {
      editorData: ''
    };
    /**ckeditor end here*/


    @Input()
  set config(getConfig: any) {
    this.configData = getConfig;
  }

  constructor( private atp : AmazingTimePickerService, private newsService : NewsTitleService,
    public datepipe: DatePipe , public cookieService : CookieService , private formBuilder : FormBuilder,
    public router : Router) { 

     
  }


  ngOnInit() {

    if(this.configData.action=='add')
    this.time = this.datepipe.transform(new Date(),'h:mm a');  

       //Calling the group name
       this.getGroupName();

       //Get sender's getGroupName
       this.getSenderAddress();
      
       //Getting the cookie value
       this.cookieValue = this.cookieService.getAll();

      //  calling the form generation 
      this.generateForm();

       this.newsForm.value.cookiemail = this.cookieService.get('get_email');

       /*Switch case*/
       switch (this.configData.action) {
        case 'add':
          /* Button text */
          this.buttonText = "SUBMIT";
          this.header_name = "Add a Newsletter";
          break;
        case 'edit':
          /* Button text */
          this.buttonText = "UPDATE";  
          this.time="";
          this.setDefaultValue(this.configData.defaultData);        
          break;
      }
      

       
  }

  open()
  {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time=>{
    });
  }


  /*getting the group name*/
  getGroupName()
  {
    var data:any = { 'source':this.configData.group_table };
    this.newsService.getData(this.configData.endpoint2+'datalist',data).subscribe(response=>{
       let result:any;
       result = response;
       this.group_name_array = result.res;
    });
  }

  /*getting the sender's email*/
  getSenderAddress()
  {
    var data:any={ 'source':this.configData.sender_table};
    this.newsService.getData(this.configData.endpoint2+'datalist',data).subscribe(response=>{
      let result:any;
      result = response;
      this.sender_name_array = result.res;
   });
  }


  //generate form
  generateForm(){
    this.newsForm = this.formBuilder.group({
      newstitle:[],
      newssubject:[],
      share_news:[],
      senderaddress:[],
      publishdate:[],
      settime:[this.time],
      content:[],
      sendnews:[],
      newsfrequency:[],
      timeofday:[this.time],
      timezone:[],
      startdate:[],
      enddate:[],
      reply:[],
      status:[1]
    });
  }



  //setting the default value
  setDefaultValue(defaultValue) {
    this.newsForm.patchValue({
      newstitle:defaultValue.newstitle,
      newssubject:defaultValue.newssubject,
      share_news:defaultValue.share_news,
      senderaddress:defaultValue.senderaddress,
      publishdate:defaultValue.publishdate,
      settime:defaultValue.settime,
      content:defaultValue.content,
      sendnews:defaultValue.sendnews,
      newsfrequency:defaultValue.newsfrequency,
      timeofday:defaultValue.timeofday,
      timezone:defaultValue.timezone,
      startdate:defaultValue.startdate,
      enddate:defaultValue.enddate,
      reply:defaultValue.reply
      
    });

  }

  //submit function
  onSubmit() {

    /* stop here if form is invalid */
    if (this.newsForm.invalid) {
      console.log("Invalid Form");return;
    } else {

      /* start process to submited data */
      let postData: any = {
        source: this.configData.source,
        data: Object.assign(this.newsForm.value, this.configData.condition),
        "sourceobj": ["share_news","senderaddress"]
      };
      this.newsService.addData(this.configData.endpoint, postData).subscribe((response: any) => {
        if (response.status == "success") {
          console.log(response.status);
        
          this.router.navigate([this.configData.callBack]);
        } else {
          alert("Some error occurred. Please try angain.");
        }
      }, (error) => {
        alert("Some error occurred. Please try angain.");
      });
    }
  }
}
