import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  showImageModal = false;
  selectedImage = '';
  zoomLevel = 1;

  constructor() { }

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
}

