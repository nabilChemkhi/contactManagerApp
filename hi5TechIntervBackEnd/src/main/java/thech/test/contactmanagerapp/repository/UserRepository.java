package thech.test.contactmanagerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import thech.test.contactmanagerapp.model.UserApp;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserApp, Long> {
    Optional<UserApp> findByEmail(String email);
}
