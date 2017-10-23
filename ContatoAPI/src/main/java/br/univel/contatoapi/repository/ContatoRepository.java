package br.univel.contatoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univel.contatoapi.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
