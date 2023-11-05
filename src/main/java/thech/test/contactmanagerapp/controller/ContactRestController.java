package thech.test.contactmanagerapp.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thech.test.contactmanagerapp.model.Contact;
import thech.test.contactmanagerapp.service.ContactService;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/contact")
public class ContactRestController {

    private final ContactService contactService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.findAllContacts();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable("id") Long id) {
        Optional<Contact> optionalContact = contactService.findContactById(id);
        if (optionalContact.isPresent()) {
            Contact contact = optionalContact.get();
            return new ResponseEntity<>(contact, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

//        Optional<Contact> contact = contactService.findContactById(id);
//         return new ResponseEntity<>(contact, HttpStatus.OK).orElse(()-> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact){
        Contact newContact = contactService.addContact(contact);
        return new ResponseEntity<>(newContact,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Contact> updateContact(@RequestBody Contact contact){
        Contact updateContact = contactService.updateContact(contact);
        return new ResponseEntity<>(updateContact,HttpStatus.CREATED);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable("id") Long id){
           contactService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
