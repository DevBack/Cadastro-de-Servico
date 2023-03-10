package com.devback.servico.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@CrossOrigin("http://localhost:3000")
	public List<Servico> getAll() {
		return servicoService.findAll();
	}
	
	@GetMapping("/pendentes")
	@CrossOrigin("http://localhost:3000")
	public List<Servico> getPendentes() {
		return servicoService.findByStatusPendente();
	}
	
	@GetMapping("/cancelados")
	@CrossOrigin("http://localhost:3000")
	public List<Servico> getCancelados() {
		return servicoService.findByStatusCancelado();
	}
	
	@PostMapping("/")
	@CrossOrigin("http://localhost:3000")
	public Servico insert(@RequestBody Servico servico) {
		return servicoService.insert(servico);
	}
	
	@PutMapping("/")
	@CrossOrigin("http://localhost:3000")
	public Servico update(@RequestBody Servico servico) {
		return servicoService.update(servico);
	}
	
	@DeleteMapping("/{id}")
	@CrossOrigin("http://localhost:3000")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		servicoService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/{id}")
	@CrossOrigin("http://localhost:3000")
	public ResponseEntity<Void> cancel(@PathVariable("id") Long id) {
		servicoService.cancel(id);
		return ResponseEntity.ok().build();
	}
}
