import { Component, OnInit, TemplateRef } from '@angular/core';
import { DrawerObject, DrawerService } from '../../../shared/services/drawer.service';
import { UserActionData } from '../../data/userAction.data';
import { SampleTripDetailsData } from '../../data/sampleTripDetails.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  showImageModal = false;
  selectedImage = '';
  zoomLevel = 1;
  userActionData = UserActionData;
  sampleTripDetailsData = SampleTripDetailsData;
  activeTripIdItenary = '';

  constructor(
    private drawerService: DrawerService
  ) { }

  ngOnInit(): void {
    // Initialization logic goes here
  }

  currentImageIndex = 0;

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + 2) % 2;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % 2;
  }

  openImageModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
  } 

  zoomIn(event: MouseEvent) {
    event.stopPropagation();
    this.zoomLevel += 0.1;
  }

  zoomOut(event: MouseEvent) {
    event.stopPropagation();
    this.zoomLevel -= 0.1;
  }

  openDrawer(template: TemplateRef<any>, actionType: string, tripId?: string, customData?: any): void {
    console.log('Inside Open Drawer Method');
    let drawerTitle = '';
    let drawerSubtitle = '';
    for(const userAction of this.userActionData) {
      if(userAction.actionType === actionType) {
        drawerTitle = userAction.title;
        drawerSubtitle = userAction.subTitle;
      }
    }

    const additionalSupportiveData = {
      customData: customData ? customData : null
    }

    const drawerObject: DrawerObject = {
      drawerTitle: drawerTitle,
      drawerSubtitle: drawerSubtitle ,
      drawerData: {
        actionType: actionType,
        tripId: tripId,
        customData: additionalSupportiveData
      }
    }
    console.log(drawerObject);
    this.drawerService.open(template, drawerObject);
  }
}

