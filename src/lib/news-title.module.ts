import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent,Modal } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptiongroupComponent,Modal2 } from './Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component';
import { AddEditNewsletterlibComponent } from './Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component';
import { ListingNewsletterlibComponent } from './Components/newsletter/listing-newsletterlib/listing-newsletterlib.component';
import { AddEditSenderComponent , Modal3} from './Components/senderslist/add-edit-sender/add-edit-sender.component';
import { ListingSenderComponent } from './Components/senderslist/listing-sender/listing-sender.component';
import { AddEditTestemaillibComponent,Modal4 } from './Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component';
import { ListingTestemaillibComponent } from './Components/testemails/listing-testemaillib/listing-testemaillib.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DatePipe} from '@angular/common';


@NgModule({
  declarations: [Modal4,Modal2,Modal,NewsTitleComponent, modalData, ListingNewsletterComponent, 
    AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent, 
    AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent, 
    ListingSenderComponent,Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent,
    ],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ListingModule,
    RouterModule,
    HttpClientModule,
    AmazingTimePickerModule,
    CKEditorModule,
    
  ],
  exports: [AddEditSenderComponent,AddEditNewsletterlibComponent,AddEditSubscriptiongroupComponent,
    Modal,NewsTitleComponent,ListingNewsletterComponent,AddEditSubcategoryComponent,
    ListingSubcategoryComponent,AddEditTestemaillibComponent,ListingTestemaillibComponent,ListingNewsletterlibComponent,
    ListingSenderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService,DatePipe],
  entryComponents:[Modal4,Modal3,NewsTitleComponent, modalData,Modal,Modal2]
})
export class NewsTitleModule { }



