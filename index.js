//1 estrutura de repetição
//const start = () => {
    //let count = 0
    //while(count <= 10){
        //console.log(count)
       // count = count + 1
   // }
//}

//start()

//2 Condicional (switch)

const start = () => {
    
    while(true){
       let opção = "sair"
       switch(opção) {
            case "cadastrar": 
            console.log("vamos cadastrar")  
            break
        case "listar":
            console.log("vamos listar")
            break
        case "sair":
            return
     }
  }

}

start()