const cars = [
    { name: 'FERRARI', image: 'https://th.bing.com/th/id/R.3ba2a5aac4d53ab0a942b6d84f3f0ea9?rik=f5FztJZw5NeQaQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCXUF4vo.jpg&ehk=ij6HIDK0baVmYo%2fUmPW1vOiBWIPbVyD2nGw2Gtek8cE%3d&risl=&pid=ImgRaw&r=0.jpg', description: 'A high-performance sports car known for its speed and luxury.' },
    { name: 'LAMBORGHINI', image: 'https://c4.wallpaperflare.com/wallpaper/991/528/896/lamborghini-car-logo-wallpaper-thumb.jpg', description: 'An Italian brand and manufacturer of high-performance sports cars.' },
    { name: 'BUGATTI', image: 'https://th.bing.com/th/id/OIP.yFYmiX0tRzPd7cV8qOGC0AAAAA?rs=1&pid=ImgDetMain', description: 'Known for its luxury vehicles and high-speed performance.' },
    { name: 'PORSCHE', image: 'https://th.bing.com/th/id/OIP.kidncoZS9hFdT5N1OcECTwHaEK?rs=1&pid=ImgDetMain.jpg', description: 'A German automobile manufacturer specializing in high-performance sports cars.' },
    { name: 'McLaren', image: 'https://th.bing.com/th/id/OIP.hf1V_mBgEuXJCSXLF9xOEAHaHa?rs=1&pid=ImgDetMain.jpg', description: 'A British automaker known for its supercars and Formula 1 racing.' },
    { name: 'BMW', image: 'https://th.bing.com/th/id/OIP._ATdCQVSmjrY1dVNpWAQWAHaE8?rs=1&pid=ImgDetMain.jpg', description: 'A German luxury vehicle manufacturer known for its performance and quality.' }
];

const gallery = document.getElementById('gallery');

cars.forEach(car => {
    const item = document.createElement('li');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="caption">${car.name}</div>
        <div class="description">${car.description}</div>
    `;
    
    item.addEventListener('click', () => {
        item.classList.toggle('active'); 
    });

    gallery.appendChild(item);
});
