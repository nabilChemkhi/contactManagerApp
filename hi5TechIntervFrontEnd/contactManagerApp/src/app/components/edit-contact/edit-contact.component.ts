
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  titlePopup = 'Edit Contact';
  contactForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactServ: ContactService,
    private dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const contactId = this.data.code; // Obtenez l'ID du contact à éditer depuis les données

    this.contactServ.getContactById(contactId).subscribe((contact) => {
      this.titlePopup = 'Edit Contact';

      this.contactForm = this.formBuilder.group({
        id: contact.id,
        name: [contact.name, Validators.required],
        email: [contact.email, [Validators.required, Validators.email]],
        phoneNumber: [contact.phoneNumber, Validators.required],
        image: [contact.image, Validators.required],
        description: [contact.description, Validators.required],
      });
    });
  }

  saveContact() {
    if (this.contactForm.valid) {
      const contactModified: Contact = this.contactForm.value as Contact;
      this.contactServ.updateContact(contactModified).subscribe(
        (response) => {
          console.log('Contact edited successfully', response);
          this.contactServ.updateContacts(); // Déclenchez la mise à jour de la liste de contacts
          this.closePopup();
        },
        (error) => {
          console.error('Error while editing contact', error);
        }
      );
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

}
