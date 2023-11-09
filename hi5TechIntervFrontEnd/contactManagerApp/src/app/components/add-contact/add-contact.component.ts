import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

   titlePopup='Add  Contact'
  //isEdit=true;
  dialogData:any;
  contactForm?: FormGroup;;


  constructor(private formBuilder:FormBuilder,
              private contactServ: ContactService,
              private dialogRef: MatDialogRef<AddContactComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any){



              }


  ngOnInit(): void {
    //this.dialogData=this.data;
    //this.titlePopup=this.dialogData.titlePopup;
    console.log("data:"+this.data)
    console.log("data:"+this.data.contact)


    // if (this.data && this.data.contact) {
    //   // You received an existing contact in data
    //   this.titlePopup = "Edit Contact";
    //   this.isEdit = true;
    //   this.loadFormData(this.data.contact);
    // }
    // else {
    //   // Aucun contact n'a été fourni, vous êtes en mode ajout
    //   this.isEdit = false;
    //   this.titlePopup = 'Add New Contact';
    // }

    this.titlePopup = 'Add New Contact';
    this.contactForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6us4kHiwdkq50Cc7XPzxdifkiXoK8iAkiw&usqp=CAU',
      description: 'This is a description ',
    });
  }

    // Add a method to load the form with an existing contact's data
    // loadFormData(contact: Contact) {
    //   this.contactForm?.patchValue(contact);}

  // contactForm=this.formBuilder.group({
  //   id:this.formBuilder.control(0),
  //   name:this.formBuilder.control('',Validators.required),
  //   email:this.formBuilder.control('',Validators.compose([Validators.required, Validators.email]) ),
  //   phoneNumber:this.formBuilder.control('', Validators.required),
  //   image:this.formBuilder.control('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fman&psig=AOvVaw07Z1jyX-ZP0piZXlGuZ5RZ&ust=1699544136510000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDh-LrdtIIDFQAAAAAdAAAAABAE'),
  //   description:this.formBuilder.control('this is description')

  // })

  saveContact(){
    // if(this.contactForm.valid){
    //   const contactAdded:Contact={
    //     id:this.contactForm.value.id as number,
    //     name:this.contactForm.value.name as string,
    //     email:this.contactForm.value.email as string,
    //     phoneNumber:this.contactForm.value.phoneNumber as string,
    //     image:this.contactForm.value.image as string,
    //     description:this.contactForm.value.description as string

    //   }
    //   this.titlePopup='Add new contactnnnn'
    //   this.contactServ.addContact(contactAdded).subscribe(
    //     (response) => {
    //       console.log('Contact saved successfully', response);
    //       this.closePopup();
    //     },
    //     (error) => {

    //       console.error('Error while saving contact', error);
    //     }
    //   );
    //   console.log(contactAdded);
    //   this.closePopup();
    // }




    if (this.contactForm?.valid) {
      const contactModified: Contact = this.contactForm?.value as Contact;
      // console.log("modified"+contactModified)
      // console.log(this.isEdit);

      // if (contactModified.id !== 0 || this.isEdit) {
      //   this.titlePopup='Edit contact'
      //   // If in edit mode, call an editContact method
      //   this.contactServ.updateContact(contactModified).subscribe(
      //     (response) => {
      //       console.log('Contact edited successfully', response);
      //      // this.contactServ.getAllContacts; // Mettre à jour la liste des contacts
      //       this.closePopup();
      //     },
      //     (error) => {
      //       console.error('Error while editing contact', error);
      //     }
      //   );
      // } else {
        this.titlePopup='Add new contact'
        this.contactServ.addContact(contactModified).subscribe(
          (response) => {
            console.log('Contact saved successfully', response);
            this.contactServ.updateContacts(); // Déclenchez la mise à jour de la liste de contacts
            this.closePopup();
          },
          (error) => {

            console.error('Error while saving contact', error);
          }
        );
      //}
    }

  }

  closePopup(){
    this.dialogRef.close();
  }

}
