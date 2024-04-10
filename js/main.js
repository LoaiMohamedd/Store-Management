var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var tableBody = document.getElementById('tableBody');
// localStorage.clear();
var productContainer;
if (localStorage.getItem('myProducts')) {
    productContainer =JSON.parse(localStorage.getItem('myProducts')) ;
    displayProduct(productContainer)
    
} else {
    productContainer = [];
}


function addProduct() {
    if (validation(productNameInput.value)&&validatCategory(productCategoryInput.value)&&description(productDescriptionInput.value)) {
        var product = {
                            productNameInput: productNameInput.value,
                            productPriceInput: productPriceInput.value,
                            productDescriptionInput: productDescriptionInput.value,
                            productCategoryInput: productCategoryInput.value,
                        }        
                        productContainer.push(product)
                        // console.log(productContainer);
                        localStorage.setItem('myProducts',JSON.stringify(productContainer))
                        clearForm();
                        displayProduct(productContainer);
        
    } else {
        alert(`
The Description Must Be Only Words
 The Category Must Start With Capital Words
 Product Name should Start With Capital Word And only Contain 11 Word` )
        
    }
  }
    // if (validation(productNameInput.value)) {
    //     if (validatCategory(productCategoryInput.value)) {
    //         if (description(productDescriptionInput.value)) {
    //             var product = {
    //                 productNameInput: productNameInput.value,
    //                 productPriceInput: productPriceInput.value,
    //                 productDescriptionInput: productDescriptionInput.value,
    //                 productCategoryInput: productCategoryInput.value,
    //             }        
    //             productContainer.push(product)
    //             // console.log(productContainer);
    //             localStorage.setItem('myProducts',JSON.stringify(productContainer))
    //             clearForm();
    //             displayProduct(productContainer);
                
    //         } else {
    //             alert(' The Description Must Be Only Words')
    //         }
            
    //     }else{
    //         alert(' The Category Must Start With Capital Words')

    //     }
    
        
    // } else {
    //     alert('Product Name should Start With Capital Word And only Contain 11 Word')
        
    // }

function clearForm(){
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescriptionInput.value = '';

} 
function displayProduct(arr) {
    var Lol = ''
    for (var i=0; i<arr.length; i++) {
        Lol +=`
        <tr>
            <td>${i+1}</td>
            <td>${arr[i].productNameInput}</td>
            <td>${arr[i].productPriceInput}</td>
            <td>${arr[i].productCategoryInput}</td>
            <td>${arr[i].productDescriptionInput}</td>
            <td><button onClick="setFormForUpdate(${i})" class="btn btn-outline-success  ">Update</button></td>
            <td><button onClick="deleteProduct(${i})" class="btn btn-outline-dark ">Delete</button></td>
       </tr>`
        
    }
    tableBody.innerHTML=Lol
}

function searchProduct(searchTerm) {
     var searchResult=[] ;
    for (let i = 0; i < productContainer.length; i++) {
        if (productContainer[i].productNameInput.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(productContainer[i]);
        }
        
    }
    displayProduct(searchResult)
}
function deleteProduct(deleteIndex) {
    productContainer.splice(deleteIndex,1);
    localStorage.setItem('myProducts',JSON.stringify(productContainer))
    displayProduct(productContainer);
    
}
function setFormForUpdate(updateIndex) {
    productNameInput.value = productContainer[updateIndex].productNameInput;
    productPriceInput.value =productContainer[updateIndex].productPriceInput;
    productCategoryInput.value =productContainer[updateIndex].productCategoryInput;
    productDescriptionInput.value =productContainer[updateIndex].productDescriptionInput;
    // console.log(addBtn);
    // console.log(updateBtn);
    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')

    
}
function validation(name) {
    var regex =/^[A-Z]{1}[a-z]{3,10}\s?\S{0,}$/ ;
    if (regex.test(name)) {
        productNameInput.classList.replace('is-invalid','is-valid')
        return true;
    } else {
        productNameInput.classList.add('is-invalid')
        return false ;    
    }
    
}
function validatCategory(cate) {
    var regex =/^[A-Z]{1}\w/ ;
    if (regex.test(cate)) {
        productCategoryInput.classList.replace('is-invalid','is-valid')
        return true;
    } else {
        productCategoryInput.classList.add('is-invalid')
        return false ;    
    }
}
function description(desc) {
    var regex =/^[A-Z][a-z]{1}/ ;
    if (regex.test(desc)) {
        productDescriptionInput.classList.replace('is-invalid','is-valid')
        return true;
    } else {
        productDescriptionInput.classList.add('is-invalid')
        return false ;    
    }
    
}









// var productNameInput = document.getElementById('productNameInput');

// function test() {
//     console.log(productNameInput.value);
//     console.log(productPriceInput.value);
//     console.log(productCategoryInput.value);
// }