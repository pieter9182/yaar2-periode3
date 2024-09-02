let options = {
    threshold: 1.0
  };
let jsondata = [];
const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
          console.log("Hello world");
          RenderPosts(jsondata);
        }
    });
};

  let observer = new IntersectionObserver(intersectionCallback, options)


fetch("js/MOCK_DATA.json")
    .then(response => response.json())
    .then(data => {
        jsondata = data;
        RenderPosts(jsondata);

    })
    .catch(error => console.error("Error loading JSON file", error));



function RenderPosts(data){
    const scroll = document.getElementById("loop");
    for(let i = 0; i < 20; i++){
        let element = data[i];
        console.log(element);
        let newDiv = document.createElement("div");    /* createElement veroorzaakt dat een nieuwe element aangemaakt word in je project */
        newDiv.id = element.id;
        newDiv.className = "card";
        newDiv.innerHTML = `
            <h2>${element.name}</h2>
            <img class="card__image" src="${element.img}" alt="Post Image">`;
        scroll.appendChild(newDiv); /* appenChild zorgt er voor dat een bepaalde aantal data gebruikt word in een aangegeven naam */
        if(i==19){
            observer.observe(newDiv);
        }
    }
}