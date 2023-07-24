package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Cprofile;


public interface CRepository extends JpaRepository<Cprofile, Long> {
    
}
