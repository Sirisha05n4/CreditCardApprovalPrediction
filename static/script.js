/**
 * NexBank Credit Portal — script.js
 * Handles: loading animation, form submission, confidence bar, entrance animations
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Loading overlay ──────────────────────────────── */
    const form        = document.getElementById('predictionForm');
    const overlay     = document.getElementById('loadingOverlay');

    if (form && overlay) {
        form.addEventListener('submit', (e) => {
            // Basic client-side validation guard
            const allFilled = [...form.querySelectorAll('[required]')]
                .every(el => el.value.trim() !== '');

            if (!allFilled) return; // Let browser handle native validation

            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
        });
    }

    /* ── Field focus ripple animation ─────────────────── */
    const inputs = document.querySelectorAll('.field-input, .field-select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.field-group')?.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.closest('.field-group')?.classList.remove('focused');
        });
    });

    /* ── Staggered section entrance ──────────────────── */
    const sections = document.querySelectorAll('.form-section');
    if (sections.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'sectionFadeIn 0.5s ease both';
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach((sec, i) => {
            sec.style.opacity = '0';
            sec.style.animationDelay = `${i * 0.1}s`;
            io.observe(sec);
        });

        // Inject keyframe dynamically
        if (!document.getElementById('dynamicKeyframes')) {
            const style = document.createElement('style');
            style.id = 'dynamicKeyframes';
            style.textContent = `
                @keyframes sectionFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0);    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /* ── Result page: confidence bar animation ─────────── */
    const confBar = document.getElementById('confBar');
    const confPct = document.getElementById('confPct');

    if (confBar && confPct) {
        // Simulate a confidence percentage (placeholder — replace with real model value)
        // To pass a real value: render it from Flask via Jinja2 as a data-attribute
        const rawConfidence = confBar.dataset.confidence;
        const confidence = rawConfidence
            ? parseFloat(rawConfidence)
            : (65 + Math.floor(Math.random() * 25)); // placeholder 65–90 %

        // Animate bar fill after a brief delay (DOM paint)
        setTimeout(() => {
            confBar.style.width = confidence + '%';
            animateCount(confPct, 0, confidence, 1400);
        }, 300);
    }

    /* ── Result card entrance ─────────────────────────── */
    const resultCard = document.getElementById('resultCard');
    if (resultCard) {
        resultCard.style.animationDuration = '0.9s';

        // Confetti burst for approved
        if (resultCard.classList.contains('result-approved')) {
            launchConfetti();
        }
    }

    /* ── Predict Again button hover ───────────────────── */
    const predictAgain = document.getElementById('predictAgainBtn');
    if (predictAgain) {
        predictAgain.addEventListener('mouseenter', () => {
            predictAgain.querySelector('i')?.classList.add('fa-spin');
        });
        predictAgain.addEventListener('mouseleave', () => {
            predictAgain.querySelector('i')?.classList.remove('fa-spin');
        });
    }

});

/* ── Utility: animate number counter ───────────────────── */
function animateCount(el, from, to, duration) {
    const start = performance.now();
    const update = (ts) => {
        const elapsed = ts - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(from + (to - from) * eased) + '%';
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

/* ── Lightweight confetti burst ────────────────────────── */
function launchConfetti() {
    const colors = ['#10b981', '#4f8ef7', '#9c5cf5', '#22d3ee', '#fbbf24', '#f472b6'];
    const count  = 60;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            top: 20%;
            left: ${20 + Math.random() * 60}%;
            width: ${5 + Math.random() * 6}px;
            height: ${5 + Math.random() * 6}px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            pointer-events: none;
            z-index: 9998;
            opacity: 1;
        `;
        document.body.appendChild(particle);

        const tx = (Math.random() - 0.5) * 300;
        const ty = 150 + Math.random() * 300;
        const rot = Math.random() * 720;
        const dur = 1000 + Math.random() * 1000;

        particle.animate([
            { transform: 'translate(0,0) rotate(0deg)',       opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, opacity: 0 }
        ], {
            duration: dur,
            delay: Math.random() * 400,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        }).onfinish = () => particle.remove();
    }
}
