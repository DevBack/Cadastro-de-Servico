package com.devback.servico.backend.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "TB_SERVICO")
@Data
public class Servico {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String cliente;
	
	@Temporal(TemporalType.DATE)
	private Date dataInicio = new Date();
	
	@Temporal(TemporalType.DATE)
	private Date dataFim;
	
	private String descricao;
	private Double valor;
	private Double valorPago;
	
	@Temporal(TemporalType.DATE)
	private Date dataPagamento;
	private String status;
}
