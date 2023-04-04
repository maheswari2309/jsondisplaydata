fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{
    return data.json();
})
.then((objetdata)=>{
    console.log([objetdata[0].title]);
    let textdata="";
    objetdata.map((values)=>{
        textdata+=
        `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
        
    </tr>`;
    })
    document.getElementById("display").innerHTML=textdata;
})