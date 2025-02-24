// Fetch data from MockAPI
fetch('https://67a98e496e9548e44fc3f738.mockapi.io/api/salik/cars')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.innerHTML = '';

        // Loop through API data and create slides
        data.forEach(item => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            
            slide.innerHTML = `
                <div class="Movie-box">
                    <img src="${item.avatar}" alt="${item.name}" class="movie-box-img">
                    <div class="box-text">
                        <h2 class="movie-title">${item.name}</h2>
                        <span class="movie-type">ID: ${item.id}</span>
                        <button class="show-more-btn" onclick="showCarDetails('${item.id}')">Show More</button>
                    </div>
                </div>`;
            
            swiperWrapper.appendChild(slide);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to handle "Show More" button clickfunction showCarDetails(id) {
    function showCarDetails(id) {
        window.location.href = `car-details.html?id=${id}`;
    }
    

// Fetch filtered data for a different section
fetch('https://67a98e496e9548e44fc3f738.mockapi.io/api/salik/cars')
    .then(response => response.json())
    .then(data => {
        const swiperWrapper = document.querySelector('.movie-content');
        swiperWrapper.innerHTML = '';

        // Filtered data display
        data.forEach(item => {
            const tvShowSlide = document.createElement('div');
            tvShowSlide.classList.add('M-b');

            tvShowSlide.innerHTML = `
                <img src="${item.avatar}" alt="${item.name}" class="movie-box-img">  
                <div class="box-text">  
                    <h2 class="movie-title">${item.name}</h2>  
                    <span class="movie-type">ID: ${item.id}</span>  
                    <button class="show-more-btn" onclick="showCarDetails('${item.id}')">Show More</button>
                </div>`;
            
            swiperWrapper.appendChild(tvShowSlide);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Swiper configuration
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: { slidesPerView: 1, spaceBetween: 10 },
        320: { slidesPerView: 2, spaceBetween: 10 },
        758: { slidesPerView: 3, spaceBetween: 10 },
        900: { slidesPerView: 4, spaceBetween: 20 },
    }
});
