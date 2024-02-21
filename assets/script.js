/*const topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

const topic = "HTML";
if(topic === "HTML")
{
    console.log("Let's Study HTML!");
}
else if(topic === "CSS")
{
    console.log("Let's Study CSS!");
}
else if(topic === "Git")
{
    console.log("Let's Study Git");
}
else if(topic === "JavaScript")
{
    console.log("Let's study JavaScript!");
}
else 
{
    console.log("Please try again!");
}


const shapes = ["triangle", "square", "pentagon", "circle"];
for(let i = 0; i < shapes.length; i++)
{
    console.log(shapes[i]);
}   

function helloWorld()
{
    console.log("Hello, world, I am a function!");
}
*/

const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics()
{
    for(let i = 0; i < topics.length; i++)
    {
        console.log(topics[i]);
    }
}

function selectTopic()
{
    if(randomTopic === "HTML")
    {
        console.log("Let's Study HTML!");
    }
    else if(randomTopic === "CSS")
    {
        console.log("Let's Study CSS!");
    }
    else if(randomTopic === "Git")
    {
        console.log("Let's Study Git");
    }
    else if(randomTopic === "JavaScript")
    {
        console.log("Let's study JavaScript!");
    }
    else
    {
        console.log("Please try again!");
    }
}
console.log("Here are the topics we learned through Prework:")
listTopics();
console.log("Which topic should we study first?")
selectTopic();
