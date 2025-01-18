export default function Header() {
    return(
        <header id="header" class="header sticky">
            <a id="skip-nav" class="skip-nav" tabindex="0" href="#main">Skip to main content</a>
            <h2 class="title"><a href="#" id="home" tabindex="0">Tracy Cui</a></h2>
            <nav class="navigation" role="navigation">
                <ul class="nav-ul">
                    <li><a href="#about-section" id="about">about</a></li>
                    <li><a href="#gamedev-section" id="gamedev">game dev</a></li>
                    <li><a href="#fun-section" id="fun">web dev</a></li>
                    <li><a href="/img/resume.pdf" id="cv" download>cv<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        class="cv-download-icon w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg></a></li>
                    <li>
                        <div class="theme-switch-wrapper" 
                             id="theme-toggle" tabindex="0" 
                             onfocus="return setFocusThemeToggle()">
                            <span class="toggle-icon" id="toggle-icon">
                                <i class="fas fa-sun"></i>
                                <i class="fas fa-moon"></i>
                            </span>
                            <label class="theme-switch">
                                <input type="checkbox" id="theme-checkbox"/>
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </li>
                </ul>
                <button class="btn-mobile-nav">
                    <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
                    <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
                </button>
            </nav>   
        </header>
    );
}