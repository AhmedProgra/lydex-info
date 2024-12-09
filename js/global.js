$(document).ready(function () {
    $("main").append(`
        <div class="margin-top"></div>
    `);
    $("body").prepend(`
                <div class="margin-bottom">
                </div>
            <div class="lydex-navbar">
                <nav class="navbar navbar-expand-lg text-white">
                    <div class="container-fluid">
                        <div class="navbar-brand">
                            <img
                                src="../../imgs/journal-info-logo.jpg"
                                class="one"
                                 />
                            <img
                                src="../imgs/journal-info-logo.jpg"
                                alt=""
                                srcset=""
                                class="two"
                                 />
                            Lydex-Info
                        </div>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active home-page"
                                        aria-current="page"
                                        href="../../index.html">
                                        Accueil
                                    </a>
                                </li>

                                <li class="nav-item dropdown" title="Aller à la page d'accueil">
                                    <a
                                        class="nav-link dropdown-toggle disabled"
                                        href="../index.html"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Catégories des aricles
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../index.html">
                                                Toutes les catégories
                                            </a>
                                        </li>

                                        <li>
                                            <a class="dropdown-item" href="../../index.html">
                                                Catécorie 1
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 2
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 3
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 4
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown" title="Aller à la page d'accueil">
                                    <a
                                        class="nav-link dropdown-toggle disabled"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Catégories des interviws
                                    </a>
                                    <ul class="dropdown-menu bg-info">
                                        <li>
                                            <a class="dropdown-item" href="../index.html">
                                                Toutes les catégories
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 1
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 2
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 3
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../index.html">
                                                Catécorie 4
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../pages/about-us.html">
                                        À propos de nous
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">

                                        Nous contacter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
                <!--todo  Strat - Modal - Nous contacter -->
                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <b>Nous Contacter</b> - Avec l'équipe de développeurs
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Bienvenue dans le monde entier sur notre site web
                                <b>"Lydex Info"</b>, Vous pouvez communiquer avec
                                nous par l'un des moyennes suivants:
                                <div class="icons pt-3">
                                    <i class="fab fa-whatsapp fa-2x text-success icon"></i>
                                    <i class="fas fa-envelope fa-2x text-danger icon"></i>
                                    <i class="fab fa-facebook fa-2x text-primary icon"></i>
                                    <i class="fab fa-github fa-2x text-black icon"></i>
                                    <i class="fab fa-stack-overflow fa-2x text-secondary icon"></i>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    >Close</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="to-top">
                    <span class='fas fa-chevron-circle-up to-top-btn'></span>
                </div>
    `);
    $("body").append(`
        <footer>
            <h2 class="h4">Copyright © ${new Date(
                Date.now()
            ).getFullYear()} - Lydex de Rabat</h2>
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

    //todo Start Menu links
    $(".home-page").click(function (e) {
        $(".articles .article").show();
        $(".articles .interview").show();
    });
    $(".article-types li a").click(function (e) {
        $(".articles .interview").hide();
        $(".article-types li a").css({
            "background-color": "#eee",
            color: "black",
        });
        $(this).css({
            "background-color": "#319aff",
            color: "white",
        });
        const linkCat = $(this).attr("data-src");
        const articles = $(".articles .article");
        $(articles).show();
        $(articles).each(function () {
            if ($(this).attr("data-src") != linkCat) {
                $(this).hide();
            }
        });
        if (linkCat === "cat-tous") {
            $(articles).show();
        }
        $(".no-result").hide();
    });

    $(".interview-types li a").click(function (e) {
        $(".no-result").remove();
        $(".articles .article").hide();
        let count = 0;
        $(".interview-types li a").css({
            "background-color": "#eee",
            color: "black",
        });
        $(this).css({
            "background-color": "#319aff",
            color: "white",
        });
        const linkCat = $(this).attr("data-src");
        const interviews = $(".articles .interview");
        $(interviews).show();
        $(interviews).each(function () {
            if ($(this).attr("data-src") != linkCat) {
                $(this).hide();
            } else {
                count += 1;
            }
        });
        if (linkCat === "cat-tous") {
            $(interviews).show();
            count = "all";
        }
        if (count == 0) {
            $("body").append(
                `<h1 class='text-danger text-center no-result'>Il n'y a aucun résultat pour "${
                    "Interview - " + $(this).text()
                }"</h1>`
            );
        }
    });
});
