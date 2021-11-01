package com.demo.project88.repo;

import java.util.Optional;

import com.demo.project88.model.Role;
import com.demo.project88.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(Roles role);
}
