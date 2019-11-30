import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'lib-listing-testemaillib',
  templateUrl: './listing-testemaillib.component.html',
  styleUrls: ['./listing-testemaillib.component.css']
})
export class ListingTestemaillibComponent implements OnInit {

  // ==============================================declaration============================================
  public senderConfigForm: any;
  public loader: boolean = true;
  // =====================================================================================================
  
  
  
  
  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
   
    this.senderConfigForm = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
      listArray_modify_header: { "name": "Sender's Name", "email":"Sender's Email"},
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
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }
  
  
  