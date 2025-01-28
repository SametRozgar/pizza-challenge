import "./FlexSection.css";

export default function FlexSection()
{

    return (
        
        <div class="menu-container">
        <div class="menu-main menu-2804">
            <div class="menu-main-content">
                <h1 class="menu-main-title">Special Tastes</h1>
                <p class="menu-main-text">Perfect Mixed Margherita Pizza</p>
                <button class="menu-main-btn">Order Now</button>
            </div>
        </div>

        <div class="menu-box-container">
            <div class="menu-box menu-box-burger  menu-2804">
                <h1 class="menu-box-title">Burger Menu</h1>
                <p class="menu-box-text">Perfect Sized Burger</p>
                <button class="menu-box-btn">Order Now</button>
            </div>

            <div class="menu-box menu-box-delivery menu-2804">
                <h1 class="menu-box-title"><span class="menu-highlight">Tooooooo</span> Fast Delivery</h1>
                <button class="menu-box-btn">Order Now</button>
            </div>
        </div>
    </div>
    
      );
}