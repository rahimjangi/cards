import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      username: "nature",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/tree.jpeg"
    },
    {
      title: "Snowy Mountain",
      username: "mountain lover",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/biking.jpeg"
    },
    {
      title: "Mountain Biking",
      username: "Biking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/mountain.jpeg"
    },
        {
      title: "Neat Tree",
      username: "nature",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/tree.jpeg"
    },
    {
      title: "Snowy Mountain",
      username: "mountain lover",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/biking.jpeg"
    },
    {
      title: "Mountain Biking",
      username: "Biking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      imageUrl:"assets/mountain.jpeg"
    }
  ];
}
