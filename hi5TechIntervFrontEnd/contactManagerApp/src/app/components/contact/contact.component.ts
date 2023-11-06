import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  longText = `The Shiba Inu is the `;
  name='Chemkhi Nabil'
  phone='+216 243 366'
  email='chna@gmail.com'

}
