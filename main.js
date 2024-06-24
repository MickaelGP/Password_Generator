const results = document.getElementById('results');
const taillePassword = document.getElementById('taille');
const btn = document.getElementById('button');
const copyBtn = document.getElementById('copyBtn');
const tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
const tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
const tableaunumero = [1,2,3,4,5,6,7,8,9,0];
const tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];


function generatePassword(){
    let resultat = '';
    if(taillePassword.value < 12){
        alert('Pour un mot de passe securisé il faut un minimum de 12 carrectére');
    }else{
        const newArr = [].concat(tableaumajuscule, tableauminuscule, tableaunumero, tableausymbole)
        const passwordLength = taillePassword.value;
        for(i = 0; i < passwordLength ; i++){
            resultat += newArr[Math.floor(Math.random() * newArr.length)];
        }
        return resultat;
    }
}
function copy(){
    results.select();
    navigator.clipboard.writeText(results.value);
    alert('Mot de passe copié')
}
function affichagePassword(){
   results.value = generatePassword();
}

btn.addEventListener('click', affichagePassword);
copyBtn.addEventListener('click', copy)