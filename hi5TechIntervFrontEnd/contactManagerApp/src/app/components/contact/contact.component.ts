
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact?:Contact
  defaultImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6us4kHiwdkq50Cc7XPzxdifkiXoK8iAkiw&usqp=CAU'


  constructor(
    private contactServ: ContactService,
    private dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const contactId = this.data.code; // Obtenez l'ID du contact à éditer depuis les données

    this.contactServ.getContactById(contactId).subscribe((contact) => {
      this.contact=contact;

    });
  }




  closePopup() {
    this.dialogRef.close();
  }

}
