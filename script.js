// 1. BASE DE DATOS DE PRODUCTOS
const perfumes = [
  {
    id: 1,
    nombre: "Toy 2 Pearl",
    marca: "Limón Jazmín",
    precio: 1700,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\\Toy 2 Pearl.png",
  },
  {
    id: 2,
    nombre: "Toy Boy 2",
    marca: "Azafrán",
    precio: 1800,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\\Toy Boy 2.png",
  },
  {
    id: 3,
    nombre: "Impact Intense",
    marca: "Lavanda Cedro",
    precio: 1200,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Impact Intense.png",
  },
  {
    id: 4,
    nombre: "DOLCE & GABBANA Q",
    marca: "Limón Almendra",
    precio: 1700,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\DOLCE & GABBANA Q.png",
  },
  {
    id: 5,
    nombre: "Versace Pour Homme",
    marca: "Azafrán",
    precio: 1200,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Versace Pour Homme.png",
  },
  {
    id: 6,
    nombre: "DKNY Delicious Fresh",
    marca: "Pomelo",
    precio: 1300,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\DKNY Delicious Fresh.png",
  },
  {
    id: 7,
    nombre: "Lacoste Sparkling",
    marca: "Ciprés",
    precio: 1600,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\Lacoste Sparkling.png",
  },
  {
    id: 8,
    nombre: "Eilish No. 2",
    marca: "Bergamota Ébano",
    precio: 1200,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\Eilish No. 2.png",
  },
  {
    id: 9,
    nombre: "Odyssey Mega",
    marca: "Naranja Piña",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Odyssey Mega.png",
  },
  {
    id: 10,
    nombre: "Club De Nuit Mujer",
    marca: "Rosas Naranja",
    precio: 900,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\Club De Nuit Mujer.png",
  },
  {
    id: 11,
    nombre: "Club de Nuit Intense",
    marca: "Limón Ámbar Gris",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Club de Nuit Intense.png",
  },
  {
    id: 12,
    nombre: "Club De Nuit Elixir",
    marca: "Bergamota Nardo",
    precio: 1100,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Club De Nuit Elixir.png",
  },
  {
    id: 13,
    nombre: "Club De Nuit Urban",
    marca: "Abeto Bergamota",
    precio: 1000,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Club De Nuit Urban.png",
  },
  {
    id: 14,
    nombre: "Asad Zanzibar",
    marca: "Pomelo Pimienta Negra",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Asad Zanzibar.png",
  },
  {
    id: 15,
    nombre: "Al Shuyukh Gold",
    marca: "Caramelo Ámbar",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Al Shuyukh Gold.png",
  },
  {
    id: 16,
    nombre: "Hawas for Him",
    marca: "Notas marinas",
    precio: 950,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Hawas for Him.png",
  },
  {
    id: 17,
    nombre: "Versace Eros",
    marca: "Limón Cedro",
    precio: 1400,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Versace Eros.png",
  },
  {
    id: 18,
    nombre: "Versace Crystals",
    marca: "Yuzu Fresco Granada",
    precio: 1500,
    familia: "Perfumes",
    genero: "Mujer",
    imagen: "IMAGENES\\PERFUMES\\Versace Crystals.png",
  },
  {
    id: 19,
    nombre: "9 Pm",
    marca: "Lavanda Bergamota",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\9 Pm.png",
  },
  {
    id: 20,
    nombre: "9 Am",
    marca: "Limón Manzana",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\9 AM.png",
  },
  {
    id: 21,
    nombre: "Nautica Voyage",
    marca: "Almizcle Magnolia",
    precio: 600,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Nautica Voyage.png",
  },
  {
    id: 22,
    nombre: "Fakhar Black",
    marca: "Bergamota Cedro",
    precio: 900,
    familia: "Perfumes",
    genero: "Hombre",
    imagen: "IMAGENES\\PERFUMES\\Fakhar Black.png",
  },
  {
    id: 31,
    nombre: "Essentials Shirt Negra",
    marca: "Essentials",
    precio: 1100,
    familia: "Ropa",
    genero: "Hombre",
    imagen: "IMAGENES\\ROPA\\Essentials Fear of God negra.jpg",
  },
  {
    id: 32,
    nombre: "Essentials Shirt Gris",
    marca: "Essentials",
    precio: 1100,
    familia: "Ropa",
    genero: "Hombre",
    imagen: "IMAGENES\\ROPA\\Essentials Fear of God Gris.jpg",
  },
  {
    id: 33,
    nombre: "Essentials Sueter Negro",
    marca: "Essentials",
    precio: 1500,
    familia: "Ropa",
    genero: "Hombre",
    imagen: "IMAGENES\\ROPA\\Fear Of God Essentials.jpg",
  },
  {
    id: 34,
    nombre: "Armani AX4168",
    marca: "A/X",
    precio: 3200,
    familia: "Relojes",
    genero: "Hombre",
    imagen: "IMAGENES\\RELOJES\\Reloj Armani Exchange AX4168.avif",
  },
  {
    id: 35,
    nombre: "Armani AX4180",
    marca: "A/X",
    precio: 4500,
    familia: "Relojes",
    genero: "Hombre",
    imagen: "IMAGENES\\RELOJES\\Reloj Armani Exchange AX4180.avif",
  },
  {
    id: 36,
    nombre: "Citizen Negro",
    marca: "Citizen",
    precio: 3750,
    familia: "Relojes",
    genero: "Hombre",
    imagen: "IMAGENES\\RELOJES\\Reloj Citizen Negro.avif",
  },
];

let cart = []; 
let currentCategory = "all"; // Variable global para recordar qué filtro está activo

function renderProducts(filter = "all", query = "") {
  currentCategory = filter; // Guardamos el filtro actual
  const grid = document.getElementById("perfume-grid");
  grid.innerHTML = "";

  const filtered = perfumes.filter((p) => {
    // 1. Lógica de Categorías: Revisa si coincide con familia O con género
    const matchesFilter = filter === "all" || 
                         p.familia === filter || 
                         p.genero === filter;

    // 2. Lógica de Buscador
    const matchesSearch = p.nombre.toLowerCase().includes(query.toLowerCase()) || 
                         p.marca.toLowerCase().includes(query.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Si no hay resultados, mostrar un mensaje amistoso
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-10 text-gray-400">No encontramos productos que coincidan.</div>`;
    return;
  }

  filtered.forEach((p) => {
    grid.innerHTML += `
      <div class="perfume-card bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div class="relative overflow-hidden group">
              <img src="${p.imagen}" class="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-110" alt="${p.nombre}">
          </div>
          <div class="p-5 text-center flex-grow flex flex-col justify-between">
              <div>
                  <span class="text-[10px] uppercase tracking-widest text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded">${p.familia}</span>
                  <h3 class="text-lg font-bold mt-2 leading-tight">${p.nombre}</h3>
                  <p class="text-gray-400 text-xs mb-3 font-medium uppercase">${p.marca}</p>
              </div>
              <div>
                  <p class="text-xl font-bold mb-4 text-neutral-800">$${p.precio.toLocaleString("es-MX")} MXN</p>
                  <button onclick="addToCart(${p.id})" class="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-amber-600 active:scale-95 transition duration-300 font-semibold text-sm">
                      Añadir a la bolsa
                  </button>
              </div>
          </div>
      </div>
    `;
  });
}

// BUSCADOR EN VIVO MEJORADO
document.getElementById("searchInput").addEventListener("input", (e) => {
  // Ahora el buscador respeta el filtro (Hombre/Mujer) que tengas seleccionado
  renderProducts(currentCategory, e.target.value);
});

// 3. LÓGICA DEL CARRITO
function addToCart(id) {
  // 1. Buscamos el producto en la lista completa (perfumes)
  const item = perfumes.find((p) => p.id === id);
  
  // Seguridad: Si por alguna razón no encuentra el item, detenemos la función
  if (!item) {
      console.error("No se encontró el producto con ID:", id);
      return;
  }

  // 2. Revisamos si ya está en el carrito
  const inCart = cart.find((p) => p.id === id);

  if (inCart) {
    inCart.qty++; // Si ya está, sumamos 1 a la cantidad
  } else {
    cart.push({ ...item, qty: 1 }); // Si es nuevo, lo añadimos con cantidad 1
  }

  // 3. Actualizamos la interfaz
  updateCartUI();
  
  // 4. Mostramos el mensaje de éxito
  showToast(`✨ ${item.nombre} añadido`);
  // 1. Abrimos el carrito si está cerrado
  if (!document.getElementById("cart-sidebar").classList.contains("open")) {
    toggleCart(); 

    // 2. Programamos el cierre automático a los 2 segundos (2000 milisegundos)
    setTimeout(() => {
        // Solo lo cerramos si el carrito sigue abierto
        if (document.getElementById("cart-sidebar").classList.contains("open")) {
            toggleCart();
        }
    }, 750); 
  }
}

function updateCartUI() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    const countEl = document.getElementById("cart-count");

    container.innerHTML = "";
    let total = 0;
    let itemsCount = 0;

    cart.forEach((p) => {
        total += p.precio * p.qty;
        itemsCount += p.qty;
        container.innerHTML += `
            <div class="flex gap-4 items-center border-b border-gray-100 pb-4">
                <img src="${p.imagen}" class="w-16 h-16 rounded-lg object-contain bg-gray-50 border">
                <div class="flex-grow">
                    <h4 class="font-bold text-sm text-neutral-800">${p.nombre}</h4>
                    <div class="flex items-center gap-3 mt-2">
                        <button onclick="changeQty(${p.id}, -1)" class="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">-</button>
                        
                        <span class="font-semibold text-sm">${p.qty}</span>
                        
                        <button onclick="changeQty(${p.id}, 1)" class="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">+</button>
                    </div>
                    <p class="text-xs text-amber-700 font-bold mt-1">$${(p.precio * p.qty).toLocaleString("es-MX")}</p>
                </div>
                <button onclick="removeFromCart(${p.id})" class="text-red-400 hover:text-red-600 transition p-2">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    totalEl.innerText = `$${total.toLocaleString("es-MX")} MXN`;
    countEl.innerText = itemsCount;
}

function removeFromCart(id) {
  cart = cart.filter((p) => p.id !== id);
  updateCartUI();
}

// 4. FUNCIONES DE INTERFAZ (RESPONSIVAS)
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("hidden");
}

function filterPerfumes(category, btn) {
  // 1. Manejo visual de botones
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.remove("active", "bg-amber-600", "text-white");
    b.classList.add("bg-white", "text-neutral-600");
  });

  btn.classList.add("active", "bg-amber-600", "text-white");
  btn.classList.remove("bg-white", "text-neutral-600");

  // 2. Centrar botón en scroll horizontal (CELULARES)
  btn.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });

  // 3. Filtrar
  renderProducts(category);
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.className =
    "toast fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-2xl z-[3000] text-sm font-medium animate-bounce-short";
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// 5. WHATSAPP (CON CODIFICACIÓN PROFESIONAL)
function checkoutWhatsApp() {
  if (cart.length === 0) return alert("Tu bolsa está vacía");

  const telefono = "527321226378";
  let texto = "🛒 *NUEVO PEDIDO - CATALOGO PERFUMES\*\n";
  texto += "--------------------------------------\n";
  let total = 0;

  cart.forEach((p) => {
    texto += `✅ *${p.qty}x* ${p.nombre}\n   _Subtotal: $${(p.precio * p.qty).toLocaleString("es-MX")}_\n\n`;
    total += p.precio * p.qty;
  });

  texto += "--------------------------------------\n";
  texto += `💰 *TOTAL A PAGAR: $${total.toLocaleString("es-MX")} MXN*`;

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

// BUSCADOR EN VIVO
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderProducts("all", e.target.value);
});

// INICIALIZAR
renderProducts();

function changeQty(id, delta) {
    // Buscamos el producto en el carrito
    const item = cart.find(p => p.id === id);
    
    if (item) {
        item.qty += delta;

        // Si la cantidad llega a 0, lo borramos automáticamente
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            // Si no es 0, solo actualizamos los números en pantalla
            updateCartUI();
        }
    }
}
