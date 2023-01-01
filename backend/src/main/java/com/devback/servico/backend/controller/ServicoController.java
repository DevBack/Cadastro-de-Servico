package com.devback.servico.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devback.servico.backend.entity.Servico;
import com.devback.servico.backend.service.ServicoService;

@RestController
@RequestMapping("/servicos")
public class ServicoController {

	@Autowired
	private ServicoService servicoService;
	
	@GetMapping("/")
	public List<Servico> getAll() {
		return servicoService.findAll();
	}
	
	@GetMapping("/pendentes")
	public List<Servico> getPendentes() {
		return servicoService.findByStatusPendente();
	}
	
	@GetMapping("/cancelados")
	public List<Servico> getCancelados() {
		return servicoService.findByStatusCancelado();
	}
	
	@PostMapping("/")
	public Servico insert(@RequestBody Servico servico) {
		return servicoService.insert(servico);
	}
	
	@PutMapping("/")
	public Servico update(@RequestBody Servico servico) {
		return servicoService.update(servico);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		servicoService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Void> cancel(@PathVariable("id") Long id) {
		servicoService.cancel(id);
		return ResponseEntity.ok().build();
	}
}
