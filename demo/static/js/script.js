document.addEventListener("DOMContentLoaded", () => {
  // Navigation link mapping
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

  // Load More Books Logic - Updated for Backend
  const loadMoreBtn = document.getElementById("viewAllBtn");
  const bookGrid = document.getElementById("bookGrid");

  if (!loadMoreBtn || !bookGrid) return;

  let offset = 10; // Start after initial 10 books loaded by Django
  const limit = 20; // Load 20 books per click
  const maxBooks = 170; // Maximum books to show on page

  loadMoreBtn.addEventListener("click", () => {
    // Disable button and show loading state
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Loading...";

    // Fetch more books from backend via AJAX
    fetch(`/api/load-more-books/?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        const fragment = document.createDocumentFragment();

        // Create card for each book received from backend
        data.books.forEach((book, i) => {
          const card = document.createElement("div");
          card.className = "book-card";

          // Show sale tag only if book is on sale
          const hasDiscount = book.has_discount;
          const saleTag = book.is_on_sale ? '<span class="sale-tag">Sale</span>' : '';

          const priceHTML = hasDiscount
          ? `<span class="old">Rs. ${book.original_price}</span> Rs. ${book.sale_price}`
          : `Rs. ${book.original_price}`;

          card.innerHTML = `
            <img src="${book.image_url}" alt="${book.title}">
            ${saleTag}
            <h3>${book.title}</h3>
            <p class="price">
              <span class="old">Rs. ${book.original_price}</span> 
              Rs. ${book.sale_price}
            </p>
            <button class="cart-btn">Add to cart</button>
          `;

          card.style.setProperty('--i', i);
          fragment.appendChild(card);
        });

        // Add new books to the grid
        bookGrid.appendChild(fragment);

        // Update offset for next load
        offset += limit;

        // Hide button if no more books or reached max limit
        if (!data.has_more || offset >= maxBooks) {
          loadMoreBtn.style.display = "none";
        } else {
          // Re-enable button
          loadMoreBtn.disabled = false;
          loadMoreBtn.textContent = "Load More";
        }
      })
      .catch(error => {
        console.error("Error loading books:", error);
        // Re-enable button and show error
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = "Load More";
        alert("Failed to load more books. Please try again.");
      });
  });
});