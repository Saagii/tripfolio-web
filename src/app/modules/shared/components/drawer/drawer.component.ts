import { Component, OnInit } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { DrawerObject, DrawerService, DrawerState } from '../../service/drawer.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [CommonModule, CdkPortalOutlet, CdkPortal, SharedModule],
})
export class DrawerComponent implements OnInit {
  isOpen = false;
  drawerContent: TemplatePortal | null = null;
  drawerStateObject: DrawerObject | undefined;

  constructor(private drawerService: DrawerService, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.drawerService.drawerState$.subscribe((state) => {
        console.log(state);
      this.isOpen = state.isOpen;
      this.drawerStateObject = state.drawerObject;
      this.drawerContent = state.content
        ? new TemplatePortal(state.content, this.viewContainerRef)
        : null;
    });
  }

  closeDrawer() {
    this.drawerService.close();
  }
}
