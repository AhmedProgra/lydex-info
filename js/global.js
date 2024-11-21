$(document).ready(function () {
    $("body").prepend(`
                <header class='main-logo'>
                    <img src="../imgs/APEELOGO.png" alt="Logo">
                </header>
                <div class="margin">
                </div>

                <div class="to-top">
                    <span class='fas fa-chevron-circle-up to-top-btn'></span>
                </div>
    `);
    $("body").append(`
        <footer>
            <h2 class="h4">Copyright © 2024 - Lydex de Rabat</h2>
        </footer>
    `);
    //* To top button

    $(window).scroll(function () {
        if (window.scrollY > 200) {
            $(".to-top").show();
        } else {
            $(".to-top").hide();
        }
    });
    $(".to-top").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    $(".text-title .text").append("Sujet de l'événement:");
    $(".imgs-title .text").append("Photos accompagnant le sujet:");
});
