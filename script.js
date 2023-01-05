fetch("https://makeup-api.herokuapp.com/api/v1/products.json").then((data)=>{
    return data.json();
})
.then((objectData)=>{
    console.log(objectData[0].brand);
    let products="";
    objectData.map((values)=>{
        products+=  `<tr>
        
        <td>${values.brand}</td>
        <td>${values.name}</td>
        <td>${values.price}</td>
        <td>${values.image_link}</td>
        <td>${values.product_link}</td>
        <td>${values.description}</td>
      </tr>`;
});
   document.getElementById("make-product").
innerHTML=products;
})
.trycatch((err)=>{
    console.log(err);
});
