import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    title: string = 'Home Page';
    description: string = 'This is angular app data binding';
    imgPath: string = 'https://i.ibb.co/6FLGh3D/Syaji.jpg';
    // myText: string = 'Text Before click...';
    myTextBefore: string = 'Text Before click...';
    myTextAfter: string = 'Button Already Clicked...';
    toggleCondition: boolean = true;



    toggleText(): void {
        this.toggleCondition = !this.toggleCondition;
        // this.myText = this.toggleBtn ? 'Text BEFORE click' : 'Button Already Clicked...';
    }
}