

let formInput = document.querySelector(".buttonSearch")
let tableRows = document.querySelectorAll(".tableRow")
let resultNode = document.createElement("p")
let columnToSearch = document.getElementsByName("searchColumn")
let searchForm = document.querySelector("#searchForm")
let results = []
resultNode.className = "resultDiv"

const getRadioValue = () =>{
    for(let i = 0; i < columnToSearch.length; i++){
        if(columnToSearch[i].checked){
            console.log(columnToSearch[i].value)
            return columnToSearch[i].value

        }
    }
}
const seachInTable = (columnIndex) => {
    let inputValue = document.querySelector("#inputText").value

    results.forEach((el) => el.style.color = "black")
    results =[]
    if(formInput.lastChild == resultNode){
        formInput.removeChild(resultNode)
    }
    
    let count = 0;
    for(let i = 0; i < tableRows.length;i++){
        console.log(i)
        if(tableRows[i].children[columnIndex].textContent.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ){
            tableRows[i].children[columnIndex].style.color = "red"
            results.push(tableRows[i].children[columnIndex])
            count+=1
        }
    }

    if(count > 0){
        resultNode.innerText = `Найдено ${count} совпадения`
    }else{
        resultNode.innerText = `Ничего не найдено`  
    }
    formInput.append(resultNode)
}


searchForm.addEventListener("submit",(e) =>{e.preventDefault()
    seachInTable(getRadioValue())})