package com.github.hadesfranklyn.vendas.rest.produtos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.hadesfranklyn.vendas.model.Produto;
import com.github.hadesfranklyn.vendas.model.repositories.ProdutoRepository;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

	@Autowired
	private ProdutoRepository repository;

	@PostMapping
	public ProdutoFromRequestDTO salvar(@RequestBody ProdutoFromRequestDTO produtoDTO) {

		Produto entidadeProduto = new Produto(
				produtoDTO.getNome(), 
				produtoDTO.getDescricao(), 
				produtoDTO.getPreco(),
				produtoDTO.getDescricao());
		
		repository.save(entidadeProduto);
		System.out.println(produtoDTO);
		return produtoDTO;
	}
}