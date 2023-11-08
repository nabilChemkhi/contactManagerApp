import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  //ngModel?:FormsModule
  searchText:string=''
  sortOrder:string=''

  public contacts:Contact[]=[];
  filteredContacts = this.contacts;

  constructor(private contServ:ContactService){

  }
  ngOnInit(): void {
    this.getAllContacts();

  }

  public getAllContacts():void{
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
  public pageSize = 9; // Taille de la page
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
    //console.log(this.filteredContacts)

    if (this.sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (this.sortOrder === 'email') {
      return a.email.localeCompare(b.email);
    }
    // Add more sorting options as needed

    // Default case when sortOrder doesn't match any option
    return 0;
  });
}

}



