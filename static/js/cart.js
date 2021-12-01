var updatebutton = document.getElementsByClassName('update-cart')

for (var i=0;i<updatebutton.length;i++){
    updatebutton[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action =this.dataset.action
        console.log('productId:',productId,'Action:',action)

        console.log('USER:',user)
        if (user==='AnonymosUser'){
            console.log('User is not authenticated')
        }else{
            updateUserOrder(productId,action)
        }
    })
}
function updateUserOrder(productId,action){
    console.log('User is authenticated , send data....')
    var url ='/update_item/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFTOKEN':csrftoken,
        },
        body:JSON.stringify({'productId': productId,'action':action})
    })
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        console.log('Data:',data)
        location.reload()
    })
}