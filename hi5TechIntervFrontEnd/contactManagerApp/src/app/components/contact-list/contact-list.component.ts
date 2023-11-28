import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {



  searchText: string = ''
  sortOrder: string = ''

  public contacts: Contact[] = [];
  filteredContacts = this.contacts;

  constructor(private contServ: ContactService, private matDialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getAllContacts();

    this.contServ.getContactsSubject().subscribe(() => {
      this.getAllContacts();
    });

  }

  public getAllContacts(): void {
    this.contServ.getAllContacts().subscribe({
      next: (resp: Contact[]) => {
        this.contacts = resp;
        this.filteredContacts = [...this.contacts];
      },
      error: (error: any) => {
        alert(error.message);
      }
    });

  }


  public page = 1; // Numéro de la page actuelle
  public pageSize = 6; // Taille de la page
  hidePageSize = true;
  public onPageChange(event: PageEvent): void {
  this.page = event.pageIndex + 1; // pageIndex commence à 0

  }




  applyFilter() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      contact.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sortContacts() {
    this.filteredContacts = [...this.contacts];
    this.filteredContacts.sort((a, b) => {


      if (this.sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (this.sortOrder === 'email') {
        return a.email.localeCompare(b.email);
      }
      return 0;
    });
  }

  showContactFct(code:number) {

    this.OpenPopup(code, 'show contact');
  }
  addContactFct() {

    this.OpenPopup(0, 'Add new contact');
    this.getAllContacts();
  }
  editContactFct(code:number) {

    this.OpenPopup(code, 'Update Contact');
    this.getAllContacts();
  }

  deleteContactFct(code:number){
    if(confirm('do you want to remove?')){
      this.contServ.deleteContact(code).subscribe(
        (response) => {
          console.log('Contact remouved successfully', response);
          this.getAllContacts();

        },
        (error) => {

          console.error('Error while deleting contact', error);
        }
      );

    }
    }



  OpenPopup(code: number, title: string) {

   if(title=='Add new contact')
    this.matDialog.open(AddContactComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    });
    else if (title=='show contact'){
      this.matDialog.open(ContactComponent, {
        width: '50%',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          code: code,
          title: title
        }
      });
    }
    else{
      console.log(code);
      this.matDialog.open(EditContactComponent, {
        width: '50%',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          code: code,
          title: title
        }}) ;

    }
  }




}



