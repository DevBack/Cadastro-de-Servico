package com.devback.servico.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devback.servico.backend.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

	
}
