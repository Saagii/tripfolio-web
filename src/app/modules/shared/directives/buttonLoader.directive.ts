import { Directive, ElementRef, Input, Renderer2, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef, ViewContainerRef } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[buttonLoader]'
})
export class ButtonLoaderDirective {
  private _loading = false;
  private spinner: ComponentRef<MatProgressSpinner> | null = null;
  private contentWrapper: HTMLElement | null = null;

  @Input() set buttonLoader(value: boolean) {
    if (this._loading !== value) {
      this._loading = value;
      if (value) {
        this.showSpinner();
      } else {
        this.hideSpinner();
      }
    }
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private showSpinner(): void {
    // Disable button
    this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
    
    if (!this.spinner) {
      // Create content wrapper if it doesn't exist
      if (!this.contentWrapper) {
        this.contentWrapper = this.renderer.createElement('div');
        this.renderer.setStyle(this.contentWrapper, 'display', 'inline-flex');
        this.renderer.setStyle(this.contentWrapper, 'align-items', 'center');
        this.renderer.setStyle(this.contentWrapper, 'gap', '10px');
        
        // Move original content to wrapper
        const originalContent = Array.from(this.el.nativeElement.childNodes);
        originalContent.forEach(node => {
          this.renderer.appendChild(this.contentWrapper, node);
        });
        
        // Add wrapper to button
        this.renderer.appendChild(this.el.nativeElement, this.contentWrapper);
      }

      // Create spinner component using ViewContainerRef
      this.spinner = this.viewContainerRef.createComponent(MatProgressSpinner);
      
      // Configure spinner
      if (this.spinner) {
        this.spinner.instance.diameter = 16;
        this.spinner.instance.mode = 'indeterminate';
        this.spinner.instance.color = 'accent';
        
        // Get DOM element of spinner
        const spinnerElement = (this.spinner.hostView as EmbeddedViewRef<any>).rootNodes[0];

        // Add custom color style
        this.renderer.setStyle(spinnerElement, 'color', '#666666');
        
        if (this.contentWrapper) {
          // Add spinner to the beginning of the wrapper
          this.renderer.insertBefore(this.contentWrapper, spinnerElement, this.contentWrapper.firstChild);
        }
      }
    }
  }

  private hideSpinner(): void {
    if (this.spinner) {
      // Remove spinner
      this.viewContainerRef.clear();
      this.spinner = null;
      
      // Enable button
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
    }
  }

  ngOnDestroy(): void {
    if (this.spinner) {
      this.viewContainerRef.clear();
    }
  }
}