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
});
