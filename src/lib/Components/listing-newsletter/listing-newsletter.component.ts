import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'lib-listing-newsletter',
  templateUrl: './listing-newsletter.component.html',
  styleUrls: ['./listing-newsletter.component.css']
})
export class ListingNewsletterComponent implements OnInit {

  // ========================================declarations=====================================
  public newsLetterListConfig: any;
  public loader: boolean = true;
  // =========================================================================================


  constructor() { }

  ngOnInit() {

  }




  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {
    this.newsLetterListConfig = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "image"],
      listArray_modify_header: { "fullname": "Full Name", "phone": "Phone", "company": "Company", "email": "Email","group":"Group" },
      admintablenameTableName: "admin",
      statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
      updateurl: receivedData.updateEndpoint,
      editUrl: receivedData.editUrl,
      jwtToken: receivedData.jwtToken,
      deleteEndPoint: receivedData.deleteEndPoint,
      view: receivedData.view,
      search_settings: {
        textsearch: [{ label: "Search by customer name...", field: 'fullname' },{ label: "Search by email...", field: 'email' }],
       
      }

    }
    this.loader = false;
  }
  // ====================================================================================================

}
