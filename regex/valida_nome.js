export default function ehUmNome(campo){
    const Nome = campo.value
    const patternNome = /^[A-Za-z-À-ÿ -]{3,30}$/.test(nome )
    console.log(patternNome);

    if(!patternNome){
        campo.setCustomValidity('nao é um nome valido');
        console.log(`"${nome}"não é um nome valido`)

    }
    return nome;
}