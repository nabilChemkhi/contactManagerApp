package thech.test.contactmanagerapp.service;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    String extractUsername(String token);
    Claims extractAllClaims(String token);
    Key getSignInKey();
    <T> T extractClaim(String token, Function<Claims,T> claimResolver);

    String generateToken(Map<String, Object> extraClaims, UserDetails userDetails);
    String generateToken(UserDetails userDetails);
    boolean isTokenValid(String token, UserDetails userDetails);

}
