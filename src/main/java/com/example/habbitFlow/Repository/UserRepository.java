package com.example.habbitFlow.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.habbitFlow.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
