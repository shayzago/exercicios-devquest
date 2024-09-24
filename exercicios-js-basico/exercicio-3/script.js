const nomePessoa = prompt('Digite seu nome')

const confirmarViagem = confirm('Seja bem vindo(a), '+ nomePessoa +'! Gostaria de pagar R$ 50,00, para passar a noite na nossa hospedagem?')

if(confirmarViagem){
    alert('Ótimo! Nós temos as melhores camas de toda a região!')
}else{
    alert('Que pena! Você parecia ser uma pessoa mais legal')
}