// add await & async
import 'babel-polyfill'
//declare variable for the article & search from elements in the page
let news
let search
let clickup=0
let votup
let vdwn

window
// make sure all elements loaded on page
document.addEventListener('DOMContentLoaded',function(){
    // showdata()

    //console.log(window.location.pathname.substr(1))
    news= document.getElementById("News")
    search=document.getElementById('search')
    votup=document.getElementById('upvot')
    
   // an event on the search box on keyboard enter
    search.addEventListener('keyup',(event)=>{
       //dont load news until user clicks enter 
        if (event.key=='Enter'){
            getNews(search.value)
            history.pushState({},"",search.value)
        }
       // console.log(event)
    })
    
    vdwn=document.getElementById('dwnvot')
    vdwn.addEventListener('click',()=>{
        clickup++
        console.log(clickup)
        document.getElementById('counter'+${i}).innerHTML=clickup.value
       })

   
    
        // display default news
         getNews('Iraq')
    
})



//async & await do not work without babel-polyfill
//query is variable that used for search
async function getNews(query){
    //using async await to get rid of callback hell
       let response= await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=b6e84f6f84644a669ad26a9e6714cda6`)
       let content= await response.json()
        
    //.then((response)=>{return await response.json()})
   // .then((data)=>{
      //  console.log(data)

      //match between data return from fetch with article template
        let result=content.articles.map(createArticle).join('\n');
        showdata(result)
        }

        //
function showdata(result){
    news.innerHTML=result;
}
    
function createArticle(article,i){
    article.counter = 1
        return `
    <article id="${i}">
            <img src="${article.urlToImage}" width="124px" height="124px">
            <div>
                <h1>${article.title}</h1>
                <p>${article.description}</p>
                <time>${article.publishedAt}</time>
            </div>
            <div id="voter">
            <button id="upvot"><img height="13px" src="${require('./assets/images/upvote.svg')}" alt=""></button>
            <div id="counter${i}">${counter.article}</div>
            <button id="dwnvot"><img height="13px" src="${require('./assets/images/downvote.svg')}" alt=""></button>
    </div>
    </article>
    `
}


 
