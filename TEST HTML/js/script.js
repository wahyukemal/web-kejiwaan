function initializePage() {
  const currentPage = window.location.hash;
  switch (currentPage) {
    case "#tentang-kami":
      // Tambahkan logika khusus untuk halaman Tentang Kami di sini
      break;
    case "#program-pemulihan":
      // Tambahkan logika khusus untuk halaman Program Pemulihan di sini
      break;
    case "#komunitas-dukungan":
      // Tambahkan logika khusus untuk halaman Komunitas Dukungan di sini
      initializeChat(); // Panggil fungsi untuk menginisialisasi chat pada halaman ini
      break;
    case "#berita-acara":
      // Tambahkan logika khusus untuk halaman Berita dan Acara di sini
      break;
    case "#sumber-daya":
      // Tambahkan logika khusus untuk halaman Sumber Daya di sini
      break;
    case "#kontak":
      // Tambahkan logika khusus untuk halaman Kontak di sini
      break;
    case "#donasi":
      // Tambahkan logika khusus untuk halaman Donasi di sini
      break;
    default:
      // Logika default untuk halaman Depan
      break;
  }
}

// Fungsi untuk menginisialisasi chat
function initializeChat() {
  // Ambil referensi ke elemen form dan kontainer chat
  const form = document.getElementById("pesan-form");
  const chatContainer = document.getElementById("chat-container");

  // Event listener untuk saat formulir dikirim
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai input dari formulir
    const usernameInput = document.getElementById("username");
    const messageInput = document.getElementById("pesan");

    const username = usernameInput.value;
    const message = messageInput.value;

    // Kirim pesan ke server menggunakan teknologi server-side seperti Ajax atau Fetch API
    // Gantikan URL_API dengan URL endpoint server-side yang akan menghandle pengiriman pesan
    const URL_API = "http://contoh-url-api.com/pesan";

    fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, message })
    })
      .then(response => response.json())
      .then(data => {
        // Tambahkan pesan ke chat room setelah berhasil dikirimkan ke server
        addMessage(data.username, data.message);

        // Reset nilai input
        usernameInput.value = "";
        messageInput.value = "";
      })
      .catch(error => {
        console.error("Terjadi kesalahan:", error);
      });
  });

  // Fungsi untuk menambahkan pesan ke chat room
  function addMessage(username, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    const userElement = document.createElement("p");
    userElement.classList.add("user");
    userElement.textContent = username + ":";

    const contentElement = document.createElement("p");
    contentElement.classList.add("content");
    contentElement.textContent = message;

    messageElement.appendChild(userElement);
    messageElement.appendChild(contentElement);

    chatContainer.appendChild(messageElement);
  }
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
  
    const URL_API = "kontak.txt";
    fetch(URL_API, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    })
    .catch(error => {
      console.log(error);
      alert("Gagal mengirim pesan. Terjadi kesalahan server.");
    });
  });
  function loadArtikel() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "artikel.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("kumpulan-artikel").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
    