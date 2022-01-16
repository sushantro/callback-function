const person=(fr,call)=>{
    console.log(`thie is ${fr}`);
    call()

}

const per2=()=>{
    console.log(`hii how r u dekhak`);
}


person("thapa",per2)

// when we pass one funcion as argument to first function then it is call back function