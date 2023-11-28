package thech.test.contactmanagerapp.service.impl;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import thech.test.contactmanagerapp.model.Contact;
import thech.test.contactmanagerapp.repository.ContactRepo;
import thech.test.contactmanagerapp.service.ContactService;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRepo contactRepo;

    @Override
    public Contact addContact(Contact contact) {
        return contactRepo.save(contact);
    }

    @Override
    public List<Contact> findAllContacts() {
        return contactRepo.findAll();
    }

    @Override
    public Contact updateContact(Contact contact) {
        return contactRepo.save(contact);
    }

    @Override
    public void deleteContact(Long id) {
        contactRepo.deleteById(id);
    }

    @Override
    public Optional<Contact> findContactById(Long id) {
        return contactRepo.findById(id);
    }
}