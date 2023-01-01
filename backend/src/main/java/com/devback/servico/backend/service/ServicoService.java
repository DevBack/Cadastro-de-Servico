package com.devback.servico.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devback.servico.backend.entity.Servico;
import com.devback.servico.backend.repository.ServicoRepository;

@Service
public class ServicoService {

	@Autowired
	private ServicoRepository servicoRepository;
	
	public List<Servico> findAll () {
		return servicoRepository.findAll();
	}
	
	public Servico insert (Servico servico) {
		if (servico.getValorPago()==null || servico.getValorPago()==0 || servico.getDataPagamento()==null) {
			servico.setStatus("Pendente");
		}
		else {
			servico.setStatus("Realizado");
		}
		return servicoRepository.saveAndFlush(servico);
	}
	
	public Servico update (Servico servico) {
		if (servico.getValorPago()!=null && servico.getValorPago()>0 && servico.getDataPagamento()!=null) {
			servico.setStatus("Realizado");
		}
		return servicoRepository.saveAndFlush(servico);
	}
	
	public void delete (Long id) {
		Servico servico = servicoRepository.findById(id).get();
		servicoRepository.delete(servico);
	}
	
	public void cancel(Long id) {
		Servico servico = servicoRepository.findById(id).get();
		servico.setStatus("Cancelado");
		servicoRepository.saveAndFlush(servico);
	}
	
	public List<Servico> findByStatusPendente () {
		return servicoRepository.findByStatusPendente();
	}
	
	public List<Servico> findByStatusCancelado () {
		return servicoRepository.findByStatusCancelado();
	}
}
