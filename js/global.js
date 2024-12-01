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
                                src="../imgs/journal-info-logo.jpg"
                                alt=""
                                srcset="" />
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
                                        class="nav-link active"
                                        aria-current="page"
                                        href="../index.html">
                                        Home
                                    </a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Catégories des aricles
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">
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
                                            <a class="dropdown-item" href="#">
                                                Catécorie 4
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                >Catécorie 5
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 6
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 7
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Catégories des interviws
                                    </a>
                                    <ul class="dropdown-menu bg-info">
                                        <li>
                                            <a class="dropdown-item" href="#">
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
                                                Catécorie 1
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 1
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 1
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
                                            <a class="dropdown-item" href="#"
                                                >Catécorie 4
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                >Catécorie 5
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                >Catécorie 6
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Catécorie 7
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
                                    <a class="nav-link" href="#"
                                        >Nous contacter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


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
