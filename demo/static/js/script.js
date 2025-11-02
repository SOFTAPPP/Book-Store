document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-links a").forEach(link => {
    const text = link.textContent.trim();

    link.addEventListener("click", e => {
      e.preventDefault();

      if (text === "Home") {
        window.location.href = "/";
      } 
      else if (text === "Product Categories") {
        window.location.href = "/productcatagory/";
      } 
      else if (text === "About Us") {
        window.location.href = "/aboutus/"; 
      } 
      else if (text === "Contact Us") {
        window.location.href = "/contactinformation/"; 
      }
    });
  });
});

