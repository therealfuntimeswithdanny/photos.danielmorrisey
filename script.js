const photos = [
    { src: 'https://img.madebydanny.uk/img/IMG_1489.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1593.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1594.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1595.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1596.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1597.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1598.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1599.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1600.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1601.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1602.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1603.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1604.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1605.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1606.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1607.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1608.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1609.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1610.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1612.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1613.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1676.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1678.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1685.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1686.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1689.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1690.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1708.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1710.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1711.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1726.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1728.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1729.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1730.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1734.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1735.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1737.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1738.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1739.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1740.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1747.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1749.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1751.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1752.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1753.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1754.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1756.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1757.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1758.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1759.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1760.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1761.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1763.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1764.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/IMG_1766.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/JPEG image 2.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/JPEG image 3.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/JPEG image.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    // Added images from /img/upload-2
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2753.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2754.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2758.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2772.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2791.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2817.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2850.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2852.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2863.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-2/DSC_2879.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    // Added images from /img/upload-3
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3636.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3535.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3692.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/CSC_3608.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3811.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3622.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3633.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3793.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3827.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3765.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3764.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3767.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    { src: 'https://img.madebydanny.uk/img/upload-3/DSC_3773.avif', description: '<i class="fa-solid fa-location-dot"></i> Honolulu, Hawaii' },
    // Added images from /img/upload-4
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0152.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0114.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0140.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0126.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0141.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0142.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    { src: 'https://img.madebydanny.uk/img/upload-4/DSC_0144.avif', description: '<i class="fa-solid fa-location-dot"></i> Atlantic Beach, NC' },
    // Added images from /img/upload-5
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0007.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0009.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0010.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0012.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0015.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0017.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0019.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0044.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0046.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0050.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0065.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0073.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0080.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0093.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0096.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0097.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
    { src: 'https://img.madebydanny.uk/img/upload-5/DSC_0115.avif', description: '<i class="fa-solid fa-location-dot"></i> Washington DC' },
];

const gallery = document.getElementById('photoGallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');
const locationFilter = document.getElementById('locationFilter');
const sizeFilter = document.getElementById('sizeFilter');

async function getImageSizeKB(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const size = response.headers.get('content-length');
        return size ? Math.round(Number(size) / 1024) : 0;
    } catch {
        return 0;
    }
}

function getLocationFromDescription(description) {
    // Remove HTML tags (e.g., icons) and trim whitespace
    return description.replace(/<[^>]+>/g, '').trim();
}

function getUniqueLocations() {
    const locations = new Set();
    photos.forEach(photo => {
        const loc = getLocationFromDescription(photo.description);
        if (loc) locations.add(loc);
    });
    return Array.from(locations).sort();
}

function populateLocationFilter() {
    const uniqueLocations = Array.from(new Set(photos.map(p => getLocationFromDescription(p.description).trim())));
    locationFilter.innerHTML = '<option value="All">All</option>' +
        uniqueLocations.map(loc => `<option value="${loc}">${loc}</option>`).join('');
}

function clearGallery() {
    while (gallery.firstChild) gallery.removeChild(gallery.firstChild);
}

async function loadPhotos(filterLoc = 'All', minSizeKB = 0) {
    clearGallery();
    let filtered = photos;
    if (filterLoc && filterLoc !== 'All') {
        filtered = filtered.filter(photo => {
            const loc = getLocationFromDescription(photo.description).toLowerCase();
            return loc === filterLoc.toLowerCase();
        });
    }
    if (minSizeKB && !isNaN(minSizeKB) && minSizeKB > 0) {
        // Filter by image size (async)
        const sizeChecks = await Promise.all(filtered.map(async photo => {
            const size = await getImageSizeKB(photo.src);
            return size >= minSizeKB;
        }));
        filtered = filtered.filter((_, i) => sizeChecks[i]);
    }
    filtered.forEach(photo => {
        const photoItem = createPhotoElement(photo);
        gallery.appendChild(photoItem);
    });
    // Re-apply observer for fade-in
    setTimeout(() => {
        document.querySelectorAll('.photo-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }, 100);
}

// Populate filters on load
populateLocationFilter();

if (locationFilter) {
    locationFilter.addEventListener('change', () => {
        loadPhotos(locationFilter.value, sizeFilter.value);
    });
}
if (sizeFilter) {
    sizeFilter.addEventListener('input', () => {
        loadPhotos(locationFilter.value, sizeFilter.value);
    });
}

// Initial load (show all)
loadPhotos();

function getAvifPath(src) {
    // Only replace .jpg, .jpeg, .JPG, .JPEG extensions
    return src.replace(/\.(jpe?g)$/i, '.avif');
}

function createPhotoElement(photo) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item loading';
    const imageName = photo.src.split('/').pop();
    // Always use AVIF for display if the source is jpg/jpeg
    let avifSrc = photo.src;
    if (/\.(jpe?g)$/i.test(photo.src)) {
        avifSrc = getAvifPath(photo.src);
    }
    // Create <img> for AVIF only
    const img = document.createElement('img');
    img.setAttribute('data-src', avifSrc); // Use data-src for lazy loading
    img.loading = 'lazy';
    img.title = imageName;
    img.alt = imageName;
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    const overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    overlayContent.innerHTML = `
        <div class="overlay-title">${imageName}</div>
        <div class="overlay-description">${photo.description}</div>
    `;
    // Download button (centered)
    const downloadBtn = document.createElement('a');
    downloadBtn.className = 'download-btn';
    downloadBtn.href = avifSrc;
    downloadBtn.download = imageName;
    downloadBtn.title = 'Download image';
    downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i>';
    overlayContent.appendChild(downloadBtn);
    overlay.appendChild(overlayContent);
    photoItem.appendChild(img);
    photoItem.appendChild(overlay);
    img.onload = () => photoItem.classList.remove('loading');
    photoItem.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = avifSrc;
        modalImg.onerror = function() {
            // fallback to original if AVIF fails
            modalImg.src = photo.src;
        };
        modalCaption.innerHTML = `${imageName} - ${photo.description}`;
    });
    return photoItem;
}

function loadPhotos() {
    photos.forEach(photo => {
        const photoItem = createPhotoElement(photo);
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

// Add CSS for download button
(function addDownloadBtnStyle() {
    const style = document.createElement('style');
    style.textContent = `
    .overlay-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
    }
    .overlay-title, .overlay-description {
        pointer-events: auto;
    }
    .download-btn {
        opacity: 0;
        margin-top: 1.2em;
        background: rgba(255,255,255,0.92);
        border-radius: 50%;
        padding: 0.7em 0.8em;
        color: #222;
        font-size: 1.6em;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: background 0.2s, color 0.2s, opacity 0.2s;
        text-decoration: none;
        pointer-events: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .download-btn i {
        pointer-events: none;
    }
    .photo-item:hover .download-btn {
        opacity: 1;
    }
    .photo-item:hover .overlay-content {
        justify-content: center;
    }
    .photo-overlay {
        position: relative;
    }
    `;
    document.head.appendChild(style);
})();