import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'lib-listing-newsletterlib',
  templateUrl: './listing-newsletterlib.component.html',
  styleUrls: ['./listing-newsletterlib.component.css']
})
export class ListingNewsletterlibComponent implements OnInit {

  // ==============================================declaration============================================
  public newsConfigForm: any;
  public loader: boolean = true;

  // =====================================================================================================




  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {

    this.newsConfigForm = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
      listArray_modify_header: {'title':'Title','subject':'Subject','userGroup':'User Group','time':'Publish Time',
    'publishdate':'Publish Date','status':'Status'},
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,

    }
    this.loader = false;
  }
  // ====================================================================================================

  constructor() {
    
  }

  ngOnInit() {
  }

}


