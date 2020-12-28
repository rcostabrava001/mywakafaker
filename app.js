const faker = require('faker');

faker.locale = 'pt_BR';
const clients = [];

for (let index = 0; index < 10; index++) {
    const name = faker.name.findName();
    const email = faker.internet.email(name).toLowerCase();
    const phoneNumber = faker.phone.phoneNumber();
    const birth = faker.date.past(30, 2000);
    // https://cep.guiamais.com.br/busca/sao+paulo-sp
    const addressZip = '04849-529';
    //const addressState = faker.address.state();
    //const addressStreet = faker.address.streetAddress();
    const cpf = '75937363000';
    const cnpj = '66383296000185';
    const bandeiraCartao = 'mastercard';
    const numeroCartao = '5103 3697 9193 2738';
    const validadeCartao = '06/21';
    const cvvCartao = '266';

    client = {
        name,
        email,
        phoneNumber,
        birth,
        addressZip,
        cpf,
        cnpj,
        bandeiraCartao,
        numeroCartao,
        validadeCartao,
        cvvCartao,
    }

    clients.push(client);
}

console.log(clients);