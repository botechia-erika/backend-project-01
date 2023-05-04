/*user

É a pessoa cliente cadastrada.

    id (string)
    email (string)
    password (string)

product

É o produto cadastrado.

    id (string)
    name (string)
    price (number)
    category (string)

purchase

É a compra realizada por cliente.

    userId (string)
    productId (string)
    quantity (number)
    totalPrice (number)
*/

const  CADASTRADO= 1
const PUBLIC = 0
enum TipoUsuarios {
    
"Cadastrado" = CADASTRADO,
"Public" = PUBLIC
}


type Cliente = {
    id: string,
    name: string,
    email: string,
    password: string,
    cadastrado: TipoUsuarios.Cadastrado|TipoUsuarios.Public
}

const astrodev:Cliente = {id: "id0", name: "Astrodev",email: "email@gmail.com", password: "astroDEV23", cadastrado: CADASTRADO}


console.log(astrodev)