const envelope = document.querySelector('.envelope-wrapper');
        const letter = document.querySelector('.envelope > .letter');
    
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
            
            if (envelope.classList.contains('flap')) {
                // Animasi surat keluar (amplop terbuka)
                setTimeout(() => {
                    letter.classList.add('after-flap');
                    setTimeout(() => {
                letter.style.zIndex = '1000'; // Ubah z-index setelah animasi selesai
            }, 1000); // Sesuaikan dengan durasi animasi (1s)
        }, 900); // Waktu awal sebelum naik
            } else {
           // Menghapus kelas after-flap ketika amplop tertutup
            
             envelope.classList.remove('after-flap'); // Menghapus after-flap dari envelope
            }
            });