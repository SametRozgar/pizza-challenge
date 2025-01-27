export default function FlexSection()
{

    return(
        <div class="flex flex-row justify-center items-start space-x-4 flexed-div">
    <div class="flex-1 boxed  flex-items-div-1 ">
        <div className="content">
        <h1 class="text-center text-xl">Special Tastes</h1>
        <p class="text-center">Perfect Mixed Margherita Pizza</p>
        <button class="flexed-div-button order-flex  block">Order Now</button>
        </div>
        
    </div>
    <div class="flex flex-col space-y-4 mr-15 ">
        <div class="boxed p-4 flex-item-boxed">
            <h1 class="text-center text-xl">Burger Menu</h1>
            <p class="text-center">Perfect Sized Burger</p>
            <button class=" flexed-div-button order-flex mx-auto block">Order Now</button>
        </div>
        <div class="boxed p-4 flex-item-boxed-2">
            <h1 class="text-center text-black text-xl"> <span className="red-danger"> Tooooooo </span> Fast Delivery </h1>
            <button class="order-flex margin-button mx-auto mb-10px block flexed-div-button">Order Now</button>
        </div>
    </div>
</div>

    )
}