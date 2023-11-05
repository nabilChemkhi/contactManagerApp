package thech.test.contactmanagerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import thech.test.contactmanagerapp.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,Long> {
}
