const userinput=document.getElementById("UserInput");

let expression ='';

let press= (num)=>{

        expression+=num;

        userinput.value=expression;
}

let equal=()=>{

    userinput.value=eval(expression);
    expression='';

}

let erase =()=> {
    expression='';
    userinput.value=expression;
}

