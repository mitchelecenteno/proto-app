import { Component } from '@angular/core';

@Component({
  selector: 'app-proto-app-body',
  templateUrl: './proto-app-body.component.html',
  styleUrls: ['./proto-app-body.component.scss']
})
export class ProtoAppBodyComponent {
  products = [
    {
      title: 'Discover',
      description: 'Get information on using these guidelines whenever you are using therefore they have the same style and quality.',
      image: '../../../assets/product-search.svg'
    },
    {
      title: 'Augmented',
      description: 'Word salad often arouses curiosity due to its seemingly intelligent and tasteful play on words.',
      image: '../../../assets/product-smartphone.svg'
    },
    {
      title: 'End Possibilities',
      description: 'Get information on using these guidelines whenever you are using therefore they have the same style and quality.',
      image: '../../../assets/product-work.svg'
    }

  ];
  alignments = ['right', 'left', 'right']; // Define alignment for each product
}
