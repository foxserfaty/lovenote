/* ==========================================================
   Love Note — Interactive Birthday Page
   Pure JS, no dependencies, GitHub Pages compatible.
   ========================================================== */

// ────────────────────────────────────────────────────────────
// 📸 IMAGE LIST
// Add your photo filenames here. They must be in the images/ folder.
// Example: 'photo1.jpg', 'date-night.png', 'beach.jpg'
// You can also add optional captions with the {src, caption} format.
// ────────────────────────────────────────────────────────────
const IMAGES = [
    'att.-62NyNJ9lF65-Nir2n_UCJWPkafcOz6d2d1Oi8Cu5mw.jpg',
    'att.-9ZMH6jGDACNYQ-ZzMTAbTWMymSkbpDlbpIvXD9Zgo8.jpg',
    'att.-kTh4of7kstDFXwUMGUu85Ut6Fi9Ffzg8rRdY0kUSF4.jpg',
    'att.25zjANs2wiDCIRE9qGzVNJwGmjh40Tc7Tz7V595SvdM.jpg',
    'att.7ld3Tkg5jse8eEo9L-BRWLOp_PNqp2-58HNOXYD4DUY.jpg',
    'att.8VuMIQ1iHj6UgnaMA3939MYKxNzxy2UaDy59WmjGRos.jpg',
    'att.94XBPm7Exfk-MEU1dTUS4iKb_0WF9kINIEzTPmpsbxE.jpg',
    'att.bAB8hi760Y6M1ktTM3aaPF3hDUIWBQrgcKRosG-YUgQ.jpg',
    'att.bBT44asxFK2Wl3kUIQPrVWRHl6O7bMLzSwMVhv-pFXc.jpg',
    'att.BeOOeM-WfIY2PVwyJ4HJ-8aNKQN2O1p5zbqAJGISBc0.jpg',
    'att.bHOCNC5V8-lUGHvFRYpGdUV55qI2ur7nfxEa8cFVnQ4(1).jpg',
    'att.bHOCNC5V8-lUGHvFRYpGdUV55qI2ur7nfxEa8cFVnQ4.jpg',
    'att.blOcppNQiAIoh6Cq2aWq3pQUjv6WR7LhXzphYzQaGHc(1).jpg',
    'att.blOcppNQiAIoh6Cq2aWq3pQUjv6WR7LhXzphYzQaGHc.jpg',
    'att.BQWe5v25j_Kg1lriGHvjIlOvtL_5KjIT3XsPrl3VTqU.jpg',
    'att.D2EL7LJQjUy2cLuWPesuYVUxZf0IuHIYOeZTt0l77SA.jpg',
    'att.dLE9bq_ByZfWpQTGVWPWTLdTFh9l3n3I6VbFkFiZelg.jpg',
    'att.DnJAWdTi2URbG4NhO-5hWK8oKELeM0lRZjgaa5jRikA.jpg',
    'att.Eo1WE2J6M1dvwGbcdO3UiikzVwd1yiNNLeNYCpbwnV0.jpg',
    'att.F2ffPVFv_1EiBCR1jlGHnGT1MUgQ0t7wH6x0JFOR5Pk.jpg',
    'att.fCCGhTME3zGpvJhxZ9lvXjjAU7lXf6G1hf9823UyUtk.jpg',
    'att.FEqtjTjKmCURwACNRNbhiyarbVKVXwuUSZtOOGSXwUQ.jpg',
    'att.foqcRVjoQjqC5wHFXFN2X-NM_dTHTUgxQMYMkIKvv7M.jpg',
    'att.gR6VaAFEIJEwmtASSGK-zUPxJL2oPD1UNUkDjj3YTHs.jpg',
    'att.HGAx8Tv9CNPANq6sfVTvIZvQWdYKZy_6fheUarmEpYo.jpg',
    'att.hhikSK0kv4B_RLhwhPTGFHeIDg_bKIBtRr4b1uNnSsY.jpg',
    'att.iLksK8P5EF_tGpMDgNFwjdlrvIARatbwrsr74C-Gklc.jpg',
    'att.LP7RevLGRl62xd7HSjF-OvsJEayf-WMx402DwHmt0ao.jpg',
    'att.lVDih4HyhHcPxxNy0HNG6lW7xYUFlGd1Lvkbsq5kFTM.jpg',
    'att.MiA6wixHqqqrmo3tEsJkH4EVu4b8RLeP5MiOV8BlBhc.jpg',
    'att.MzoxsSY93rDkT3FH4tUGMBsIrN3tDxuqwh8l-CbQ9nM.jpg',
    'att.nOAC1zN4qDvUS2Ax51X2bSuj_x3uqh_MjXUZQyj83uU.jpg',
    'att.PfzRQyLytz5E1irA65iBEHnKENUPics5_QiK0lFsvAk.jpg',
    'att.ra0pXBBRDrOMunu60BcluWefJfm1f4rEClcONBri1VE.jpg',
    'att.RVXMDiknfL-h2SQuUWwC95fOsr7a1WtlJKR23ENFAl0.jpg',
    'att.RxUbeoeDUYXHNSf6Qs8o-cKA0Shy5qYR3HPdIB8piPA.jpg',
    'att.teTVpBr4xeIRY-uAXNSDYou06-2CzA_C_IcBzwO0-FM.jpg',
    'att.TkkRAWRcYcTNh01-0cJPofqooz7SLwvMURFp9jYgfMY.jpg',
    'att.toZZBWdmElm6PZzsZBDGcMjhkGYIXSag5kE5YD9ymT0.jpg',
    'att.TTll3D2uah03eseWFryaJKGZQGPNGSuYBa2E9HM_3uI.jpg',
    'att.uJcMcpsE8tsiXbyBUC5by1vpTcDp4GnfXd4mefF9UrU.jpg',
    'att.URxBwuaczYtFlZyjJ5IZb7e6_3VxxgJEIRYVIhsK4oA.jpg',
    'att.V05paaRtRT2X2ZJ8Zw16-VS396td6eM9rP7beFHd5F0.jpg',
    'att.V3NeG4XklC1wPAxesrJksNAtBMp5MOamOe0GYtDqhqs.jpg',
    'att.v6cImX0B68e3h_q0hP4rmYu8pON1M2KXMWKmUtFTH10.jpg',
    'att.w1LL85-bHzrahIyGzQIbQ_Lu5bOtgQ9-W98dpGfqnIw.jpg',
    'att.XitL6fJnN6o-N-G_wVsHNUV-a2bXz1bNX_v1Aq6ZYuY.jpg',
    'att.YIarHSyqAym2317SBJvdd0Pw_0BOq-1ld82udN9Ji_0.jpg',
    'att.ZfVmk156eIDrKGCFBLhzY5jKYRy19Dbw4wUkuF1gFg0.jpg',
    'att.ZO8HeedRpZUeC8NipeUZxm8hUss1gbeKBN1Wk8H_0HU.jpg',
    'att.zOvdf_ctYH5KDKog8vjNFgroEXMqHfXPbRMdnr1LgNs.jpg',
    'att._wepHdg35X9CglHXvWv8BwSwTeKM0RIIF19wG-OGM64.jpg',
];

// ────────────────────────────────────────────────────────────
// UTILITIES
// ────────────────────────────────────────────────────────────
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function normalizeImage(img) {
    if (typeof img === 'string') return { src: img, caption: '' };
    return { src: img.src, caption: img.caption || '' };
}

// ────────────────────────────────────────────────────────────
// 🎵 MUSIC PLAYER
// ────────────────────────────────────────────────────────────
(function initMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    const iconPlay = btn.querySelector('.icon-play');
    const iconPause = btn.querySelector('.icon-pause');
    const label = document.getElementById('music-label');
    let isPlaying = false;

    function updateUI() {
        iconPlay.style.display = isPlaying ? 'none' : 'block';
        iconPause.style.display = isPlaying ? 'block' : 'none';
        label.textContent = isPlaying ? 'Now playing ♪' : 'Tap to play ♪';
    }

    btn.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play().then(function () {
                isPlaying = true;
                updateUI();
            }).catch(function () {
                label.textContent = 'Audio blocked 🔇';
            });
        }
        updateUI();
    });

    // Also try autoplay on first user interaction anywhere
    function tryAutoplay() {
        if (!isPlaying) {
            audio.play().then(function () {
                isPlaying = true;
                updateUI();
            }).catch(function () { /* silently fail */ });
        }
        document.removeEventListener('click', tryAutoplay);
    }
    document.addEventListener('click', tryAutoplay);
})();

// ────────────────────────────────────────────────────────────
// 💌 ENVELOPE OPEN ANIMATION
// ────────────────────────────────────────────────────────────
(function initEnvelope() {
    var envelopeWrapper = document.getElementById('envelope-wrapper');
    var flap = document.getElementById('envelope-flap');
    var letterContainer = document.getElementById('letter-container');
    var heroBtn = document.getElementById('open-envelope-btn');
    var opened = false;

    function openEnvelope() {
        if (opened) return;
        opened = true;

        // Step 1: Open the flap
        flap.classList.add('opened');

        // Step 2: After flap opens, shrink envelope away
        setTimeout(function () {
            envelopeWrapper.classList.add('opened');
        }, 800);

        // Step 3: Reveal the letter
        setTimeout(function () {
            letterContainer.classList.add('revealed');
        }, 1100);
    }

    // Click on hero CTA scrolls to envelope section and opens it
    heroBtn.addEventListener('click', function () {
        document.getElementById('envelope-section').scrollIntoView({ behavior: 'smooth' });
        setTimeout(openEnvelope, 400);
    });

    // Also open if user clicks directly on the envelope
    envelopeWrapper.addEventListener('click', openEnvelope);
})();

// ────────────────────────────────────────────────────────────
// 🖼️ FLOATING POLAROIDS (HERO)
// ────────────────────────────────────────────────────────────
(function initFloatingPolaroids() {
    var container = document.getElementById('hero-polaroids');
    if (IMAGES.length === 0) return;

    // Use more images for the hero (up to 20), cycling through all available
    var heroCount = Math.min(IMAGES.length, 20);
    var sizes = [90, 110, 130, 150, 120];

    for (var i = 0; i < heroCount; i++) {
        var data = normalizeImage(IMAGES[i % IMAGES.length]);
        var div = document.createElement('div');
        div.className = 'floating-polaroid';
        var size = sizes[i % sizes.length];
        var startRot = rand(-25, 25);
        var endRot = rand(-25, 25);

        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.left = rand(3, 90) + '%';
        div.style.setProperty('--start-rot', startRot + 'deg');
        div.style.setProperty('--end-rot', endRot + 'deg');
        div.style.animationDuration = rand(12, 20) + 's';
        div.style.animationDelay = rand(0, 8) + 's';

        var imgEl = document.createElement('img');
        imgEl.src = 'images/' + data.src;
        imgEl.alt = data.caption || 'Memory';
        imgEl.loading = 'lazy';
        div.appendChild(imgEl);
        container.appendChild(div);
    }
})();

// ────────────────────────────────────────────────────────────
// 🖼️ COLLAGE GRID (split into left & right masonry columns)
// ────────────────────────────────────────────────────────────
(function initCollageGrid() {
    var leftCol = document.getElementById('collage-left');
    var rightCol = document.getElementById('collage-right');

    if (IMAGES.length === 0) {
        leftCol.innerHTML = '<p style="text-align:center;color:#c44569;font-size:1.1rem;">Add your images to the <code>images/</code> folder and update the IMAGES array in <code>scripts.js</code> to see them here!</p>';
        return;
    }

    var speeds = ['parallax-slow', 'parallax-medium', 'parallax-fast'];

    IMAGES.forEach(function (img, i) {
        var data = normalizeImage(img);
        var card = document.createElement('div');
        card.className = 'polaroid-card ' + speeds[i % speeds.length];
        card.style.transform = 'rotate(' + rand(-3, 3) + 'deg)';

        var imgEl = document.createElement('img');
        imgEl.src = 'images/' + data.src;
        imgEl.alt = data.caption || 'Photo ' + (i + 1);
        imgEl.loading = 'lazy';

        var caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = data.caption;

        card.appendChild(imgEl);
        card.appendChild(caption);

        // Click to open lightbox
        card.addEventListener('click', function () {
            openLightbox('images/' + data.src);
        });

        // Alternate between left and right columns
        if (i % 2 === 0) {
            leftCol.appendChild(card);
        } else {
            rightCol.appendChild(card);
        }
    });
})();

// ────────────────────────────────────────────────────────────
// 🔍 LIGHTBOX
// ────────────────────────────────────────────────────────────
(function initLightbox() {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');

    var lbImg = document.createElement('img');
    lbImg.id = 'lightbox-img';
    lbImg.alt = 'Enlarged photo';

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(lbImg);
    document.body.appendChild(lightbox);

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });
})();

function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// ────────────────────────────────────────────────────────────
// 🌀 PARALLAX ON SCROLL
// ────────────────────────────────────────────────────────────
(function initParallax() {
    var hero = document.getElementById('hero');
    var cards = document.querySelectorAll('.polaroid-card');

    function onScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        // Hero section parallax — shift floating polaroids container
        var heroPolaroids = document.getElementById('hero-polaroids');
        if (heroPolaroids) {
            heroPolaroids.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
        }

        // Collage cards parallax
        cards.forEach(function (card) {
            var rect = card.getBoundingClientRect();
            var inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!inView) return;

            var speed = parseFloat(getComputedStyle(card).getPropertyValue('--parallax-speed')) || 0.03;
            var offset = (rect.top - window.innerHeight / 2) * speed;
            var baseRotation = card.dataset.baseRotation;
            if (!baseRotation) {
                baseRotation = card.style.transform.match(/rotate\((.+?)deg\)/);
                baseRotation = baseRotation ? parseFloat(baseRotation[1]) : 0;
                card.dataset.baseRotation = baseRotation;
            } else {
                baseRotation = parseFloat(baseRotation);
            }
            card.style.transform = 'rotate(' + baseRotation + 'deg) translateY(' + offset + 'px)';
        });
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
})();
