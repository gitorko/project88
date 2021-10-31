package com.demo.project88.config;

import static com.demo.project88.config.SecurityConstants.USER_NAME;
import static com.demo.project88.config.SecurityConstants.USER_PASSWORD;
import static com.demo.project88.config.SecurityConstants.USER_ROLE;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private static final String MESSAGE_FORMAT = "Cannot find username %s.";

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
        setAuths.add(new SimpleGrantedAuthority(USER_ROLE));
        String encodedPassword = new BCryptPasswordEncoder().encode(USER_PASSWORD);
        User user = new User(USER_NAME, encodedPassword, true, true, true, true, setAuths);
        final Optional<User> userOptional = Optional.of(user);
        return userOptional.orElseThrow(() -> new UsernameNotFoundException(String.format(MESSAGE_FORMAT, username)));
    }

}
