import './tailwind.css'

export default function Menu ()
{


    return(
        <div className="menu-midle">
            <div className="icon-div">
                <p>New Korea</p>
                <img src="/images/erişte.png" alt="" />
            </div>
            <div className="icon-div selected">
                <p>Pizza</p>
                <img src="/images/pizza.png" alt="" />
            </div>
            <div className="icon-div">
                <p>Burger</p>
                <img src="/images/hamburger.png" alt="" />
            </div>
            <div className="icon-div">
                <p>French Fries</p>
                <img src="/images/patates.png" alt="" />
            </div>
            <div className="icon-div">
                <p>Fast Food</p>
                <img src="/images/kilo.png" alt="" />
            </div>
            <div className="icon-div">
                <p>Drinks</p>
                <img src="/images/drink.png" alt="" />
            </div>
            

        </div>
    )
}