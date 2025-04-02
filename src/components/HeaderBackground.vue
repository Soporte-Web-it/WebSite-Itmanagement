<template>
    <section class="HeaderWeb">
        <div class="overlay"></div>
        <!-- <div class="content">
            <h1 class="title">Bienvenido a Nuestra Página</h1>
        </div> -->

        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,96C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,320L0,320Z"></path>
            <text x="50%" y="80%" text-anchor="middle" fill="#000" font-size="40px" font-weight="bold" class="subtitleHeader">Tu Mensaje Aquí</text>
        </svg>
    </section>
</template>

<style scoped>

.HeaderWeb {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    /* background-image: url('../assets/images/banners/BANNER-IT-2.jpg'); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    color: white;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 0 20px;
    z-index: 2;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: var(--font-family1);
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}

.subtitleHeader {
    display: flex;
    font-size: 3rem;
    font-family: var(--font-family2);
}

@media (max-width: 768px) {
    .HeaderWeb {
        height: 50vh;
        background-size: contain;
        /* background-image: url('../assets/images/banners/BANNER-IT-2-LARGO.jpg'); */
        background-position: center top;
        position: relative;
    }

    .title {
        font-size: 2rem;
        padding: 0 10px;
    }
}

@media (max-width: 480px) {
    .HeaderWeb {
        height: 100vh;
    }

    .title {
        font-size: 1.5rem;
    }

    .subtitleHeader {
        font-size: 5rem;
        font-family: var(--font-family2);
    }
}
</style>
