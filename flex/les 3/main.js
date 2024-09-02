fetch('https://hers.hosts1.ma-cloud.nl/catabase/cats.php') 
.then(response => response.json())
.then(data => {
    console.log(data)
});
