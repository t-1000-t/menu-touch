import './App.css';
import isMobile from "../services/isMobile";

function App() {

    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a href="" className="header__logo"></a>
                    <div className="header__menu menu">
                        <div className="menu__icon">
                            <span></span>
                        </div>
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li><a href="" className="menu__link">Раздел №1</a></li>
                                <li><a href="" className="menu__link">Раздел №2</a></li>
                                <li><a href="" className="menu__link">Раздел №3</a></li>
                                <li>
                                    <a href="" className="menu__link">Страница №1</a>
                                    <span className="menu__arrow"></span>
                                    <ul className="menu__sub-list">
                                        <li>
                                            <a href="" className="menu__sub-link">Раздел Страница №1</a>
                                        </li>
                                        <li>
                                            <a href="" className="menu__sub-link">Раздел Страница №2</a>
                                        </li>
                                        <li>
                                            <a href="" className="menu__sub-link">Раздел Страница №3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Страница №2</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="page">
                <section className="page__section page__section_1">
                    <h1 className="page__title">Отличная статья</h1>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
                <section className="page__section page__section_2">
                    <h2 className="page__sub-title">Отличный раздел сайта</h2>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
                <section className="page__section page__section_3">
                    <h2 className="page__sub-title">Отличный раздел сайта</h2>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
