
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
      lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
    }
  });
  