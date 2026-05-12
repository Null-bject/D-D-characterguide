const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const spanText = document.querySelector('.image-box span');

// Upload de imagem
fileInput.addEventListener('change', function () {

  const file = this.files[0];

  if (file) {

    const reader = new FileReader();

    reader.onload = function (e) {

      preview.src = e.target.result;
      preview.style.display = "block";
      spanText.style.display = "none";

    };

    reader.readAsDataURL(file);
  }
});

// Escolher imagem do catálogo
document.querySelectorAll('.catalog img').forEach(img => {

  img.addEventListener('click', () => {

    preview.src = img.src;
    preview.style.display = "block";
    spanText.style.display = "none";

  });

});
