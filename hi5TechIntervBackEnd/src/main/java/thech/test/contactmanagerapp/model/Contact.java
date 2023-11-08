package thech.test.contactmanagerapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contact implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false )
    private Long id;
    private String name;
    @Column(nullable = false, unique = true)
    private String email;
    private String phoneNumber;
    private String image;
    private String description;
}
