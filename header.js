const header = document.getElementById('header')

header.innerHTML = `
<div  class="section--container">
<nav>
    <img src="images/logo.png" alt="logo" width="105px"/>

    <div>
        <ul>
            <li class="dropdown"><a href="#" >Habitats <i class="fa-solid fa-caret-down"></i></a>
                <div class="dropdown--content">
                    <div class="habitats">
                        <a href="OchoRios.html">
                            <img src="images/ocho-rios-habitat.jpg" alt="" srcset="">
                            <h3>Ocho Rios</h3>
                        </a>
                    </div>
                    <div class="habitats">
                       <a href="Mobay.html"> <img src="images/montego-bay-habitat.jpg" alt="" srcset="">
                        <h3>Montego Bay</h3></a>
                    </div>
                    <div class="habitats">
                        <a href="moonPalace.html"><img src="images/moon-palace-habitat.jpg" alt="" srcset="">
                            <h3>Moon Palace</h3></a>
                    </div>
                    <div class="habitats">
                        <a href="PuertoSeco.html">
                            <img src="images/puerto-seco-habitat.jpg" alt="" srcset="">
                        <h3>Puerto Seco</h3>
                        </a>
                    </div>
                    <div class="habitats">
                        <a href="#">
                            <img src="images/yaaman-habitat.jpg" alt="" srcset="">
                        <h3>Yaaman</h3>
                        </a>
                    </div>

                </div>
            </li>
            <li><a href="#" >Experiences</a></li>
            <li><a href="#" >Deals</a></li>
            <li><a href="#" >Investors</a></li>
            <li class="nav--btn"><a href="#" ><i class="fa-solid fa-phone-flip"></i></a></li>
            <li class="nav--btn"><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>

        </ul>

        <div>
          
        </div>
    </div>
</nav>
</div>
`