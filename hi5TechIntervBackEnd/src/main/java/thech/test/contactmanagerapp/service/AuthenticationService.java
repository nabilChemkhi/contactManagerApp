package thech.test.contactmanagerapp.service;

import thech.test.contactmanagerapp.dto.AuthenticationRequest;
import thech.test.contactmanagerapp.dto.AuthenticationResponse;
import thech.test.contactmanagerapp.dto.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
}
