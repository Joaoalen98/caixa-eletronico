import prompt from "prompt"
prompt.start()

const caixaEletronico = {
    notas2: 10,
    notas5: 35,
    notas10: 30,
    notas20: 20,
    notas50: 15,
    notas100: 5
}

prompt.get("Digite um valor para sacar que seja 20, 50 ou 100: ", 
(err, res,  {notas2, notas5, notas10, notas20, notas50, notas100} = caixaEletronico) => {

    const valorParaSacar = Number(res["Digite um valor para sacar que seja 20, 50 ou 100: "])

    let valorSacado = 0;
    let notasSacadas = {} 

    if (
        valorParaSacar === 20 ||
        valorParaSacar === 50 ||
        valorParaSacar === 100
    ) {
        while (notas2 > 0) {
            notas2 -= 1
            valorSacado += 2

            if (!notasSacadas.notas2) notasSacadas.notas2 = 0

            notasSacadas.notas2 += 1

            if (valorParaSacar == valorSacado)
                break
        }
        if (valorParaSacar > valorSacado) {
            while (notas5 > 0) {
            notas5 -= 1
            valorSacado += 5

            if (!notasSacadas.notas5) notasSacadas.notas5 = 0

            notasSacadas.notas5 += 1

            if (valorParaSacar == valorSacado)
                break
            }
        }
        if (valorParaSacar > valorSacado) { 
            while (notas10 > 0) {
                notas10 -= 1
                valorSacado += 10

                if (!notasSacadas.notas10) notasSacadas.notas10 = 0

                notasSacadas.notas10 += 1

                if (valorParaSacar == valorSacado)
                    break
            }
        }
        if (valorParaSacar > valorSacado) { 
            while (notas20 > 0) {
                notas20 -= 1
                valorSacado += 20

                if (!notasSacadas.notas20) notasSacadas.notas20 = 0

                notasSacadas.notas20 += 1

                if (valorParaSacar == valorSacado)
                    break
            }
        }
        if (valorParaSacar > valorSacado) { 
            while (notas50 > 0) {
                notas50 -= 1
                valorSacado += 50

                if (!notasSacadas.notas50) notasSacadas.notas50 = 0

                notasSacadas.notas50 += 1

                if (valorParaSacar == valorSacado)
                    break
            }
        }
        if (valorParaSacar > valorSacado) { 
            while (notas100 > 0) {
                notas100 -= 1
                valorSacado += 100

                if (!notasSacadas.notas100) notasSacadas.notas100 = 0

                notasSacadas.notas100 += 1

                if (valorParaSacar == valorSacado)
                    break
            }
        }

    } else {
        console.log("Só é possível saques nos valores 20, 50 e 100!")
    }

    console.log(`valor sacado: ${valorSacado}, notas sacadas: `, notasSacadas)

});