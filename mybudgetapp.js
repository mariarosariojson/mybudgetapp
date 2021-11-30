document.querySelector("button")
.addEventListener("click", countAmount);

const listIn = [];
const listOut = [];

function countAmount(event) {
 event.preventDefault();
 //console.log("it is working!");

 let costSum = 0;
 let incomeSum = 0;

 const select = document.querySelector("select");
 console.log(select.value);

    const description = document.querySelector(".description").value;
    console.log(description);

    const num = document.querySelector(".num").value;
    console.log(num);

    if(select.value=="+") {
        document
        .querySelector(".listIn")
        .innerHTML += `<li> ${description}: ${num}SEK</li>`;
        const divIn = document.querySelector(".listIn");

        listIn.push(num);
        console.log(listIn);
        
    }

    else if(select.value=="-") {
        document
        .querySelector(".listOut")
        .innerHTML += `<li> ${description}: ${num}SEK</li>`;

        listOut.push(num);
        console.log(listOut);
    }

    else if(select.value=="choose") {
        alert("Please, type in + or -");
    }

    listIn.map((e) => {
        console.log(parseFloat(e));
        incomeSum += parseFloat(e);
    })

    listOut.map((e) => {
        console.log(parseFloat(e));
        costSum += parseFloat(e);
    })

    document.querySelector(".out").innerHTML = costSum;
    document.querySelector(".budget").innerHTML = incomeSum - costSum;
    document.querySelector(".in").innerHTML = incomeSum;
}
