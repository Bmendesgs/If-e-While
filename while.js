let andar = 5;
let subindo = false;

while(andar !== 0) {
    alert(`Espera mais um pouquinho: Andar atual: ${andar}`);
    
    if(andar === 1) {
        subindo = true;
    }

    if(andar === 5) {
        subindo = false;
    }

    if(subindo){andar++;
    }
    else{
    andar--;
}

alert("Pode sair que já chegou no térreo.");
