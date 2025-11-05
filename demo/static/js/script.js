document.addEventListener("DOMContentLoaded", () => {
  const linkMap = {
    "Home": "/",
    "Product Categories": "/productcatagory/",
    "About Us": "/aboutus/",
    "Contact Us": "/contactinformation/",
    "Bulk Purchase": "/bulkpurchase/",
    "Return & Replacement": "/return/",
    "Privacy Policy": "/privacy-policy/"
  };
  const attachLinkHandler = (linkElements) => {
    linkElements.forEach(link => {
      const text = link.textContent.trim();
      if (linkMap[text]) {
        link.addEventListener("click", e => {
          e.preventDefault();
          window.location.href = linkMap[text];
        });
      }
    });
  };
  const navLinks = document.querySelectorAll(".nav-links a");
  const footerLinks = document.querySelectorAll(".footer-section ul li a");
  attachLinkHandler(navLinks);
  attachLinkHandler(footerLinks);

  const loadMoreBtn = document.getElementById("viewAllBtn");
  const bookGrid = document.getElementById("bookGrid");

  if (!loadMoreBtn || !bookGrid) return;

  const CARDS_PER_LOAD = 20;
  const MAX_CLICKS = 7;
  let clickCount = 0;
  let currentCardIndex = 10; 

  // Helper: get static URL from meta tag
  const getStaticUrl = () => document.querySelector('meta[name="static-url"]')?.content || '';

  loadMoreBtn.addEventListener("click", () => {
    clickCount++;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < CARDS_PER_LOAD; i++) {
      const card = document.createElement("div");
      card.className = "book-card";

      card.innerHTML = `
        <img src="${getStaticUrl()}Books/doittoday.jpg" alt="Do It Today">
        <span class="sale-tag">Sale</span>
        <h3>Do It Today #${currentCardIndex + i + 1}</h3>
        <p class="price"><span class="old">Rs. 599.00</span> Rs. 99.00</p>
        <button class="cart-btn">Add to cart</button>
      `;

      card.style.setProperty('--i', i);
      fragment.appendChild(card);
    }

    bookGrid.appendChild(fragment);
    currentCardIndex += CARDS_PER_LOAD;

    if (clickCount >= MAX_CLICKS) {
      loadMoreBtn.remove();
    }
  });
});