
export default class Review {
    constructor(containerElem) {
      this.containerElem = containerElem;
      this.render();
    }
  
    render() {
        this.containerElem.innerHTML = `
            <div class="review-component">
                <div class="review-date"></div>
                <div class="overall-rating">
                    <span>Overall</span>
                    <span class="rating-value"></span>
                </div>
                <div class="review-content-container">
                    <div class="review-content">
                        <p></p>
                    </div>
                    <div class="review-details">
                        <div class="category-rating">
                            Building: <div class="stars" data-category="building"></div>
                        </div>
                        <div class="category-rating">
                            Room: <div class="stars" data-category="room"></div>
                        </div>
                        <div class="category-rating">
                            Location: <div class="stars" data-category="location"></div>
                        </div>
                        <div class="category-rating">
                            Cleanliness: <div class="stars" data-category="cleanliness"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    
  
    update(reviewData) {
        // Display overall rating
        const overallRatingElem = this.containerElem.querySelector('.rating-value');
        overallRatingElem.textContent = reviewData.overallRating.toFixed(1);
    
        const roundedRating = Math.round(reviewData.overallRating);
        overallRatingElem.setAttribute('data-rating', roundedRating);
        
        // Display review content
        this.containerElem.querySelector('.review-content p').textContent = reviewData.review;
        
        // Display category ratings
        for (let category in reviewData.ratings) {
            const starsElem = this.containerElem.querySelector(`.stars[data-category="${category}"]`);
            this.populateStars(starsElem, reviewData.ratings[category]);
        }
    
        // Display date, if available
        if (reviewData.date) {
            this.containerElem.querySelector('.review-date').textContent = reviewData.date;
        }
    }
    
    populateStars(starsElem, ratingValue) {
        if (!starsElem) return;  // Return early if the element is not provided.
    
        starsElem.innerHTML = ''; // clear existing stars
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            if (i <= ratingValue) {
                star.classList.add('active');
            } else {
                star.classList.add('inactive'); // Add an "inactive" class to uncolored stars.
            }
            star.textContent = '★';
            starsElem.appendChild(star);
        }
    }
  }
  
