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

const { select, input, checkbox } = require('@inquirer/prompts')

let meta = { 
    value: 'Tomar 3L de água por dia',
    checked: false,

}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite a meta"})

    if(meta.length == 0) {
    console.log('A meta não pode ser vazia.')
    return
    }

metas.push(
    { value: meta, checked: false }

)

}

const listarMetas = async () => {
    const respostas = await checkbox({
    message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false

    })
   
    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return

     
    }

  
    respostas.forEach((resposta) =>{
    const meta = metas.find((m) => {
        return m.value == resposta
    })
    meta.checked = true

    })
    console.log('meta(s) marcada como concluida(s)')
}

    const metasRealizadas = async () => {
        const realizadas = metas.filter((meta) => {
        return meta.checked
    })

   if(realizadas.length == 0) {
   console.log('Não existe metas realizadas! :(')
   return
   }

   await select({
     massage: "Metas realizadas",
     choices: [...realizadas]

   })
}


metas.push(
    { value: meta, checked: false }

)

const start = async () => {
    
    while(true){
       const opcao = await select({
          message: "menu >",
          choices: [
            {
              name: "cadastrar meta",
              value: "cadastrar"
                 
            },
            {
                name: "listar metas",
                value: "listar"

            },
            {
                name: "metas realizadas",
                value: "realizadas"

            },
            {
              name: "sair",
              value: "sair"
            }
            
     ] 

 })
       switch(opcao) {
            case "cadastrar": 
            await cadastrarMeta()
            console.log(metas)
            break
        case "listar":
            await listarMetas()
            break
        case "realizadas":
            await metasRealizadas()
            break
        case "sair":
            console.log("Até a próxima pessoal!")
            return
     }
  }

}

start()