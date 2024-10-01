import styles from "./Navbar.module.css"
import logo from "./img/imgNavbar/logo.png"

function Navbar(){
    return(
        <>
        <header>
            <section>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a href="/"> <img src={logo} alt="Logo" /> </a>
                    </div>
                    <ul>
                        <li className={styles.itensLista}>
                            <a href="/">Ofertas</a>
                        </li>
                        <li className={styles.itensLista}>
                            <a href="/">Reservas</a>
                        </li>
                        <li className={styles.itensLista}>
                            <a href="/">Checkin</a>
                        </li>
                        <li className={styles.itensLista}>
                            <a href="/">Comprar</a>
                        </li>
                        <li className={styles.itensLista}>
                            <a href="/">Ajuda</a>
                        </li>
                    </ul>
                    <div className={styles.busca}>
                        <input type="text" id="busca" placeholder="Buscar" required />
                    </div>
                </div>
            </section>
        </header>
        </>
    )
}

export default Navbar;