$("#cep").blur(function(){
	$.getJSON("https://viacep.com.br/ws/"+ $("#cep").val()+"/json/", function(dados){
		$("#endereco").val(dados.logradouro);
		$("#cidade").val(dados.localidade);
		$("#estado").val(dados.uf);
	});
});