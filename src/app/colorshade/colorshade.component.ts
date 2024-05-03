import { Component } from '@angular/core';

@Component({
  selector: 'app-colorshade',
  templateUrl: './colorshade.component.html',
  styleUrls: ['./colorshade.component.scss']
})
export class ColorshadeComponent {
  private storagekey = 'user-background';
  private defaultColor = "#bedac9"
  userBackgroundColor: any;

  ngOnIt():void
  {
    this.loadBackgroundPreferences();
  }


  private loadBackgroundPreferences(): void {
    this.defaultColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor()
  }
  removePreferences(): void {
    localStorage.removeItem(this.storagekey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storagekey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storagekey) || this.defaultColor;
  }
  }
