(function () {
  function createSlider(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Element with ID "${containerId}" not found.`);
      return;
    }

    // Basic slider HTML
    container.innerHTML = `
            <div class="slider">
                <div class="slides">
                    <div class="slide">Slide 1</div>
                    <div class="slide">Slide 2</div>
                    <div class="slide">Slide 3</div>
                </div>
                <button class="prev">Previous</button>
                <button class="next">Next</button>
            </div>
        `;

    // Slider CSS
    const style = document.createElement('style');
    style.textContent = `
            .slider {
                position: relative;
                width: 100%;
                overflow: hidden;
            }
            .slides {
                display: flex;
                transition: transform 0.3s ease;
            }
            .slide {
                min-width: 100%;
                box-sizing: border-box;
                padding: 20px;
                text-align: center;
                background: #f5f5f5;
            }
            .prev, .next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                border: none;
                padding: 10px;
                cursor: pointer;
            }
            .prev { left: 10px; }
            .next { right: 10px; }
        `;
    document.head.appendChild(style);

    // Slider Logic
    let currentIndex = 0;
    const slides = container.querySelector('.slides');
    const slideCount = slides.children.length;

    function showSlide(index) {
      const offset = index * -100;
      slides.style.transform = `translateX(${offset}%)`;
    }

    container.querySelector('.prev').addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : slideCount - 1;
      showSlide(currentIndex);
    });

    container.querySelector('.next').addEventListener('click', () => {
      currentIndex = currentIndex < slideCount - 1 ? currentIndex + 1 : 0;
      showSlide(currentIndex);
    });
  }

  // Expose function to global scope
  window.initializeSlider = createSlider;
})();
