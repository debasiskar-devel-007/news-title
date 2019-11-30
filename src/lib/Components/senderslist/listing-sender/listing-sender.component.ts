import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'lib-listing-sender',
  templateUrl: './listing-sender.component.html',
  styleUrls: ['./listing-sender.component.css']
})
export class ListingSenderComponent implements OnInit {

  // ==============================================declaration============================================
  public senderConfigForm2: any;
  public loader: boolean = true;
  // =====================================================================================================




  // ================================================Input For Lib Listing================================
  @Input()
  set config(receivedData: any) {

    this.senderConfigForm2 = {
      apiUrl: receivedData.apiBaseUrl,
      listEndPoint: receivedData.listEndPoint,
      datasource: receivedData.datasource,
      tableName: receivedData.tableName,
      listArray_skip: ["_id", "userId", "created_at", "id", "updated_at"],
      listArray_modify_header: { "name": "Sender's Name", "email": "Sender's Email", "date": "Date" },
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

  constructor(private cookieService: CookieService) {
    
  }

  ngOnInit() {
  }

}


