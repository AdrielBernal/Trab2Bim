package br.univel.contatoapi.controller;

import java.util.List;

import javax.validation.Valid;

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

import br.univel.contatoapi.model.Contato;
import br.univel.contatoapi.repository.ContatoRepository;

@RestController
@RequestMapping("/api")
public class ContatoController {

	@Autowired
	ContatoRepository contatoRepository;

	@GetMapping("/contatos")
	public List<Contato> getAllContatos() {
		return contatoRepository.findAll();
	}

	@GetMapping("/contatos/{id}")
	public ResponseEntity<Contato> getContatoById(@PathVariable(value = "id") Long id) {
		Contato c = contatoRepository.findOne(id);
		if (c == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(c);
	}

	@PostMapping("/contatos")
	public Contato createContato(@Valid @RequestBody Contato c) {
		System.out.println("rafael viado");
		return contatoRepository.save(c);
	}

	@DeleteMapping("/contatos/{id}")
	public ResponseEntity<Contato> deleteContato(@PathVariable(value = "id")Long id) {
		Contato c = contatoRepository.findOne(id);
		if (c == null) {
			return ResponseEntity.notFound().build();
		}
		contatoRepository.delete(c);
		return ResponseEntity.ok().body(c);
	}

	@PutMapping("/contatos/{id}")
	public Contato updateContato(@Valid @RequestBody Contato c) {
		return contatoRepository.save(c);
	}

}
