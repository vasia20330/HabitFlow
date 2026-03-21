package com.example.habbitFlow.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.habbitFlow.Entity.Habit;

public interface HabitRepository extends JpaRepository<Habit,Long> {
    
}
