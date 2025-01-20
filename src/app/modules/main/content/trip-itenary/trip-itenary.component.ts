import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DrawerService } from '../../../shared/services/drawer.service';

@Component({
  selector: 'app-trip-itenary',
  templateUrl: './trip-itenary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripItenaryComponent implements OnInit {

  readonly panelOpenState = signal(false);
  submitLoader: boolean = false;
  drawerData: any;

  constructor(
    public dialog: MatDialog,
    private drawerService: DrawerService
  ) {}

  ngOnInit(): void {

    // Get Drawer Data.
    this.getDrawerData();
  }


  /*
    Get drawer data.
  */
  getDrawerData(): void {
    this.drawerService.drawerState$.subscribe((state) => {
      this.drawerData = state.drawerObject.drawerData;
    });
  }


  /* 
    Close the side nav drawer.
  */
  closeDrawer(): void {
    if(this.submitLoader) {
      return;
    }
    this.drawerService.close(); // Trigger close from the service
  }

}
