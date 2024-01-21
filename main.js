

let formInput = document.querySelector(".buttonSearch")
let submButton = document.querySelector("#submitButton")
let inputValue = document.querySelector("#inputText").value
let arrCeil = document.querySelectorAll(".tableRow")
let resultNode = document.createElement("div")

resultNode.className = "resultDiv"
submButton.addEventListener("click",() => {
    inputValue = document.querySelector("#inputText").value
    arrCeil.forEach((el) => el.children[1].style.color = "black")
    if(formInput.lastChild == resultNode){
        formInput.removeChild(resultNode)
    }
    
    let count = 0;
    for(let i = 0; i < arrCeil.length;i++){
        
        if(arrCeil[i].children[1].textContent.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ){
            arrCeil[i].children[1].style.color = "red"
            count+=1
        }
    }

    if(count > 0){
        resultNode.innerText = `Найдено ${count} совпадения`
    }else{
        resultNode.innerText = `Ничего не найдено`  
    }
    formInput.append(resultNode)
})