import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'lib-listing-subcategory',
  templateUrl: './listing-subcategory.component.html',
  styleUrls: ['./listing-subcategory.component.css']
})
export class ListingSubcategoryComponent implements OnInit {
// ==============================================declaration============================================
public SubsCatListConfig: any;
public loader: boolean = true;
// =====================================================================================================




// ================================================Input For Lib Listing================================
@Input()
set config(receivedData: any) {
 
  this.SubsCatListConfig = {
    apiUrl: receivedData.apiBaseUrl,
    listEndPoint: receivedData.listEndPoint,
    datasource: receivedData.datasource,
    tableName: receivedData.tableName,
    listArray_skip: ["_id", "userId", "created_at", "id", "updated_at","image"],
    listArray_modify_header: { "name": "Name", "priority": "Priority", "status": "Status" ,"date_added":"Date"},
    admintablenameTableName: "admin",
    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
    updateurl: receivedData.updateEndpoint,
    editUrl: receivedData.editUrl,
    jwtToken: receivedData.jwtToken,
    deleteEndPoint: receivedData.deleteEndPoint,
    view: receivedData.view,
    search_settings:{
      textsearch: [{ label: "name...", field: 'name' }],
      selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
    },
     /*Showing Image in the Modal*/
     pendingmodelapplicationarray_detail_datatype: [{
      key: "image",
      value: 'image',
      fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/testimonial/'             // Image path 
    }],
  }
  this.loader = false;
}
// ====================================================================================================

constructor() { }

ngOnInit() {
}

}


