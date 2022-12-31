package com.devback.servico.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devback.servico.backend.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

	@Query("select servicos from Servico servico where servico.valorPago <> null and servico.valorPago > 0")
	List<Servico> findByStatusPendente();
	
	@Query("select servicos from Servico servico where servico.status = 'Cancelado'")
	List<Servico> findByStatusCancelado();
}
