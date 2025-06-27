document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul'); // Pilih elemen ul di dalam nav

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active'); // Toggle class 'active' pada ul
        hamburger.classList.toggle('active'); // Toggle class 'active' pada hamburger

        // Kontrol overflow pada body
        if (navUl.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Nonaktifkan scroll body
        } else {
            document.body.style.overflow = 'auto'; // Aktifkan kembali scroll body
        }
    });

    // Opsional: Menutup menu ketika link di dalam menu diklik
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto'; // Aktifkan kembali scroll body
        });
    });
});
