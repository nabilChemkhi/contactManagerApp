package thech.test.contactmanagerapp.service;

import thech.test.contactmanagerapp.model.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    public Contact addContact(Contact contact);
    public List<Contact> findAllContacts();
    public Contact updateContact(Contact contact);
    public void deleteContact(Long id);
     Optional<Contact> findContactById(Long id);
}
