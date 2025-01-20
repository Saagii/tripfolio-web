import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { DrawerObject, DrawerService } from '../../services/drawer.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [CommonModule, PortalModule, SharedModule],
})
export class DrawerComponent implements OnInit, OnDestroy {
  isOpen = false;
  drawerContent: TemplatePortal | null = null;
  drawerStateObject: DrawerObject | undefined;
  private subscription: Subscription | undefined;

  constructor(private drawerService: DrawerService, private viewContainerRef: ViewContainerRef) {
    console.log('DrawerComponent constructed');
  }

  ngOnInit(): void {
    console.log('DrawerComponent initializing...');
    
    // First, check if the service has a current value
    console.log('Current drawer state value:', this.drawerService.drawerState$);
    
    this.subscription = this.drawerService.drawerState$
      .pipe(
        distinctUntilChanged((prev, curr) => {
          console.log('Previous state:', JSON.stringify(prev, null, 2));
          console.log('Current state:', JSON.stringify(curr, null, 2));
          
          const isEqual = prev?.isOpen === curr?.isOpen && 
                         prev?.drawerObject?.drawerData === curr?.drawerObject?.drawerData &&
                         prev?.content === curr?.content;
          
          console.log('States are equal?', isEqual);
          console.log('isOpen comparison:', prev?.isOpen === curr?.isOpen);
          console.log('drawerData comparison:', prev?.drawerObject?.drawerData === curr?.drawerObject?.drawerData);
          console.log('content comparison:', prev?.content === curr?.content);
          
          return isEqual;
        })
      )
      .subscribe({
        next: (state) => {
          console.log('Drawer state received:', state);
          if (state) {
            console.log('Updating drawer with state:', state);
            this.isOpen = state.isOpen;
            this.drawerStateObject = state.drawerObject;
            if (state.content) {
              this.drawerContent = new TemplatePortal(state.content, this.viewContainerRef);
              console.log('Portal created');
            } else {
              this.drawerContent = null;
              console.log('Portal cleared');
            }
          }
        },
        error: (error) => console.error('Error in drawer subscription:', error),
        complete: () => console.log('Drawer subscription completed')
      });
    
    console.log('Subscription set up complete');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeDrawer() {
    this.drawerService.close();
  }
}
