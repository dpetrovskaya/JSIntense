
const Game = document.getElementById("MyGame")

//console.log(Game)

const GameElements = document.getElementById("MyGame").children

const btn = GameElements[2]
const task = GameElements[0]
const answ = document.getElementById("answer")

const calcGame = () => {
    if (calc.value) {
        const answer = eval(calc.value)
        answ.innerText = answer
    } else {
        answ.innerText = "Не понял вас!"
    }
}
const runCalc = (e) => {

    if (e.key == "Enter") {
       // console.log("calc")
        calcGame()
    } else {
        if (e.key == 'Escape') {
            task.value = ''
            answ.innerText = ''
        }
    }
}

btn.addEventListener("click", calcGame)
task.addEventListener("keydown", runCalc)


function setColor(el, c) {
    el.style.color = c
}

document.getElementById("blue_btn").onclick = () => {
    const hdr = document.getElementsByTagName("h1")
    setColor(hdr[0], "#006c84")

}

document.getElementById("red_btn").onclick = () => {
    const hdr = document.getElementsByTagName("h1")
    setColor(hdr[0], "#ffccbb")

}

const elArray = document.querySelectorAll(".chooser > div")

const gameState = {
    counter: 0,
    sum: 0
}

const eventHandler = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        gameState.counter++;
        gameState.sum = +e.target.innerText + gameState.sum;
    }
    else {
        e.target.className = ""
        gameState.counter--;
        gameState.sum = gameState.sum - e.target.innerText;
    }

    document.getElementById("counter").innerText = gameState.counter;
    document.getElementById("sum").innerText = gameState.sum;
}


for (let i = 0; i < elArray.length; i++) {

    elArray[i].addEventListener("click", eventHandler)
}

const blog = document.querySelector(".blog-container")
const showBtn = document.querySelector(".blog button")

showBtn


function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resp => {
            //  console.log(resp)
            return resp.json()
        })
        .then(data => {
           // console.log(data)
            for (el of data) {
                addPost(el.title, el.body)
            }
        })
        .catch((err) => {
            console.log(err)
            console.log(err.message)
        })
}


function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const post = document.createElement('p')


    post.append(postTitle, postBody)
    blog.append(post)

    postTitle.innerText = title
    postBody.innerText = body
}

showBtn.onclick = getPosts

function createPost(title, body, userId) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => {
            console.log(res)
            return res.json
        })
}
