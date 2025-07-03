const photos = [
    { src: '/img/IMG_1489.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1593.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1594.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1595.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1596.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1597.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1598.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1599.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1600.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1601.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1602.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1603.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1604.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1605.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1606.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1607.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1608.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1609.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1610.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1612.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1613.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1676.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1678.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1685.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1686.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1689.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1690.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1708.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1710.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1711.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1726.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1728.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1729.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1730.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1734.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1735.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1737.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1738.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1739.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1740.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1747.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1749.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1751.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1752.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1753.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1754.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1756.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1757.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1758.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1759.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1760.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1761.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1763.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1764.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/IMG_1766.jpg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/JPEG image 2.jpeg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/JPEG image 3.jpeg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: '/img/JPEG image.jpeg', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    // Added images from /img/upload-2
    { src: '/img/upload-2/DSC_2753.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2754.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2758.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2772.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2791.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2817.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2850.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2852.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2863.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    { src: '/img/upload-2/DSC_2879.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-2' },
    // Added images from /img/upload-3
    { src: '/img/upload-3/DSC_3636.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3535.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3692.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/CSC_3608.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3811.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3622.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3633.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3793.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3827.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3765.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3764.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3767.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
    { src: '/img/upload-3/DSC_3773.JPG', description: '<i class="fa-solid fa-location-dot"></i> Upload-3' },
];

// Helper: use .jpg if .NEF
const getDisplaySrc = src => src.toLowerCase().endsWith('.nef') ? src.replace(/\.nef$/i, '.jpg') : src;

const gallery = document.getElementById('photoGallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');

function loadPhotos() {
    photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item loading';
        const img = document.createElement('img');
        const displaySrc = getDisplaySrc(photo.src);
        img.setAttribute('data-src', displaySrc); // Use data-src for lazy loading
        img.loading = 'lazy'; // Keep native lazy loading as fallback
        // Set the title and overlay title to the image file name
        const imageName = displaySrc.split('/').pop();
        img.title = imageName;
        img.alt = imageName;
        const overlay = document.createElement('div');
        overlay.className = 'photo-overlay';
        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlay-content';
        overlayContent.innerHTML = `
            <div class="overlay-title">${imageName}</div>
            <div class="overlay-description">${photo.description}</div>
        `;
        overlay.appendChild(overlayContent);
        photoItem.appendChild(img);
        photoItem.appendChild(overlay);
        img.onload = () => photoItem.classList.remove('loading');
        photoItem.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = displaySrc;
            modalCaption.innerHTML = `${imageName} - ${photo.description}`;
        });
        gallery.appendChild(photoItem);
    });
}

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'block') modal.style.display = 'none';
});
loadPhotos();
// Intersection Observer for fade-in and lazy loading images
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Lazy load image
            const img = entry.target.querySelector('img');
            if (img && img.dataset.src && !img.src) {
                img.src = img.dataset.src;
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
setTimeout(() => {
    document.querySelectorAll('.photo-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}, 100);