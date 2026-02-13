// 1. BASE DE DATOS DE PRODUCTOS
const perfumes = [
    {
        id: 1,
        nombre: "Toy 2 Pearl",
        marca: "Limón Jazmín",
        precio: 1700,
        familia: "Cítrico",
        imagen: "IMAGENES\\Toy 2 Pearl.png"
    },
    {
        id: 2,
        nombre: "Toy Boy 2",
        marca: "Azafrán",
        precio: 1800,
        familia: "Amaderada",
        imagen: "IMAGENES\\Toy Boy 2.png"
    },
    {
        id: 3,
        nombre: "Impact Intense",
        marca: "Lavanda Cedro",
        precio: 1200,
        familia: "Cítrico",
        imagen: "IMAGENES\\Impact Intense.png"
    },
    {
        id: 4,
        nombre: "DOLCE & GABBANA Q",
        marca: "Limón Almendra",
        precio: 1700,
        familia: "Cítrico",
        imagen: "IMAGENES\\DOLCE & GABBANA Q.png"
    },{
        id: 5,
        nombre: "Versace Pour Homme",
        marca: "Azafrán",
        precio: 1200,
        familia: "Amaderada",
        imagen: "IMAGENES\\Versace Pour Homme.png"
    },{
        id: 6,
        nombre: "DKNY Delicious Fresh",
        marca: "Pomelo",
        precio: 1300,
        familia: "Cítrico",
        imagen: "IMAGENES\\DKNY Delicious Fresh.png"
    },{
        id: 7,
        nombre: "Lacoste Sparkling",
        marca: "Ciprés",
        precio: 1600,
        familia: "Floral",
        imagen: "IMAGENES\\Lacoste Sparkling.png"
    },{
        id: 8,
        nombre: "Eilish No. 2",
        marca: "Bergamota Ébano",
        precio: 1200,
        familia: "Amaderada",
        imagen: "IMAGENES\\Eilish No. 2.png"
    },{
        id: 9,
        nombre: "Odyssey Mega",
        marca: "Naranja Piña",
        precio: 900,
        familia: "Cítrico",
        imagen: "IMAGENES\\Odyssey Mega.png"
    },{
        id: 10,
        nombre: "Club De Nuit Mujer",
        marca: "Rosas Naranja",
        precio: 900,
        familia: "Floral",
        imagen: "IMAGENES\\Club De Nuit Mujer.png"
    },{
        id: 11,
        nombre: "Club de Nuit Intense",
        marca: "Limón Ámbar Gris",
        precio: 900,
        familia: "Frutal",
        imagen: "IMAGENES\\Club de Nuit Intense.png"
    },{
        id: 12,
        nombre: "Club De Nuit Elixir",
        marca: "Bergamota Nardo",
        precio: 1100,
        familia: "Cítrico",
        imagen: "IMAGENES\\Club De Nuit Elixir.png"
    },{
        id: 13,
        nombre: "Club De Nuit Urban",
        marca: "Abeto Bergamota",
        precio: 1000,
        familia: "Amaderada",
        imagen: "IMAGENES\\Club De Nuit Urban.png"
    },{
        id: 14,
        nombre: "Asad Zanzibar",
        marca: "Pomelo Pimienta Negra",
        precio: 900,
        familia: "Frutal",
        imagen: "IMAGENES\\Asad Zanzibar.png"
    },{
        id: 15,
        nombre: "Al Shuyukh Gold",
        marca: "Caramelo Ámbar",
        precio: 900,
        familia: "Floral",
        imagen: "IMAGENES\\Al Shuyukh Gold.png"
    },{
        id: 16,
        nombre: "Hawas for Him",
        marca: "Notas marinas",
        precio: 950,
        familia: "Frutal",
        imagen: "IMAGENES\\Hawas for Him.png"
    },{
        id: 17,
        nombre: "Versace Eros",
        marca: "Limón Cedro",
        precio: 1400,
        familia: "Cítrico",
        imagen: "IMAGENES\\Versace Eros.png"
    },{
        id: 18,
        nombre: "Versace Crystals",
        marca: "Yuzu Fresco Granada",
        precio: 1500,
        familia: "Floral",
        imagen: "IMAGENES\\Versace Crystals.png"
    },{
        id: 19,
        nombre: "9 Pm",
        marca: "Lavanda Bergamota",
        precio: 900,
        familia: "Cítrico",
        imagen: "IMAGENES\\9 Pm.png"
    },{
        id: 20,
        nombre: "9 Am",
        marca: "Limón Manzana",
        precio: 900,
        familia: "Frutal",
        imagen: "IMAGENES\\9 AM.png"
    },{
        id: 21,
        nombre: "Nautica Voyage",
        marca: "Almizcle Magnolia",
        precio: 600,
        familia: "Cítrico",
        imagen: "IMAGENES\\Nautica Voyage.png"
    }
];

let cart = [];

// 2. RENDERIZAR PRODUCTOS
function renderProducts(filter = 'all', query = '') {
    const grid = document.getElementById('perfume-grid');
    grid.innerHTML = '';

    const filtered = perfumes.filter(p => {
        const matchesFilter = filter === 'all' || p.familia === filter;
        const matchesSearch = p.nombre.toLowerCase().includes(query.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    filtered.forEach(p => {
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
                        <p class="text-xl font-bold mb-4 text-neutral-800">$${p.precio.toLocaleString('es-MX')} MXN</p>
                        <button onclick="addToCart(${p.id})" class="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-amber-600 active:scale-95 transition duration-300 font-semibold text-sm">
                            Añadir a la bolsa
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// 3. LÓGICA DEL CARRITO
function addToCart(id) {
    const item = perfumes.find(p => p.id === id);
    const inCart = cart.find(p => p.id === id);

    if (inCart) {
        inCart.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
    showToast(`✨ ${item.nombre} añadido`);
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    container.innerHTML = '';
    let total = 0;
    let itemsCount = 0;

    cart.forEach(p => {
        total += p.precio * p.qty;
        itemsCount += p.qty;
        container.innerHTML += `
            <div class="flex gap-4 items-center border-b border-gray-100 pb-4">
                <img src="${p.imagen}" class="w-16 h-16 rounded-lg object-contain bg-gray-50 border">
                <div class="flex-grow">
                    <h4 class="font-bold text-sm text-neutral-800">${p.nombre}</h4>
                    <p class="text-xs text-gray-500">${p.qty} unidad(es) x $${p.precio}</p>
                </div>
                <button onclick="removeFromCart(${p.id})" class="text-red-400 hover:text-red-600 transition p-2">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    totalEl.innerText = `$${total.toLocaleString('es-MX')} MXN`;
    countEl.innerText = itemsCount;
}

function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    updateCartUI();
}

// 4. FUNCIONES DE INTERFAZ (RESPONSIVAS)
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('hidden');
}

function filterPerfumes(category, btn) {
    // 1. Manejo visual de botones
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-amber-600', 'text-white');
        b.classList.add('bg-white', 'text-neutral-600');
    });
    
    btn.classList.add('active', 'bg-amber-600', 'text-white');
    btn.classList.remove('bg-white', 'text-neutral-600');
    
    // 2. Centrar botón en scroll horizontal (CELULARES)
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    
    // 3. Filtrar
    renderProducts(category);
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-2xl z-[3000] text-sm font-medium animate-bounce-short';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// 5. WHATSAPP (CON CODIFICACIÓN PROFESIONAL)
function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Tu bolsa está vacía");

    const telefono = "527321226378";
    let texto = "🛒 *NUEVO PEDIDO - CATALOGO PERFUMES*\n";
    texto += "--------------------------------------\n";
    let total = 0;

    cart.forEach(p => {
        texto += `✅ *${p.qty}x* ${p.nombre}\n   _Subtotal: $${(p.precio * p.qty).toLocaleString('es-MX')}_\n\n`;
        total += p.precio * p.qty;
    });

    texto += "--------------------------------------\n";
    texto += `💰 *TOTAL A PAGAR: $${total.toLocaleString('es-MX')} MXN*`;
    
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

// BUSCADOR EN VIVO
document.getElementById('searchInput').addEventListener('input', (e) => {
    renderProducts('all', e.target.value);
});

// INICIALIZAR

renderProducts();
