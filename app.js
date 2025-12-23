// ========================
// TEMAS SAZONAIS
// ========================
function detectarTemaSazonal() {
    const hoje = new Date();
    const mes = hoje.getMonth() + 1; // 1-12
    const dia = hoje.getDate();
    
    // Natal (dezembro)
    if (mes === 12) {
        return {
            nome: 'natal',
            titulo: 'Natal Mágico',
            subtitulo: 'Presentes especiais para quem você ama',
            cores: { primary: '#c41e3a', secondary: '#165b33', accent: '#ffd700' },
            emoji: '🎄',
            desconto: 'Até 30% OFF em produtos selecionados'
        };
    }
    
    // Páscoa (março 15 - abril 30)
    if ((mes === 3 && dia >= 15) || (mes === 4 && dia <= 30)) {
        return {
            nome: 'pascoa',
            titulo: 'Páscoa de Beleza',
            subtitulo: 'Renove-se nesta páscoa com nossos produtos',
            cores: { primary: '#9b59b6', secondary: '#f39c12', accent: '#ffb6d9' },
            emoji: '🐰',
            desconto: 'Kits especiais com até 25% OFF'
        };
    }
    
    // Dia das Mães (maio)
    if (mes === 5) {
        return {
            nome: 'maes',
            titulo: 'Dia das Mães',
            subtitulo: 'Presenteie quem mais ama com carinho e beleza',
            cores: { primary: '#e91e63', secondary: '#ff6b9d', accent: '#ffc0cb' },
            emoji: '💐',
            desconto: 'Até 40% OFF + Frete Grátis'
        };
    }
    
    // Dia dos Namorados (junho 1-15)
    if (mes === 6 && dia <= 15) {
        return {
            nome: 'namorados',
            titulo: 'Dia dos Namorados',
            subtitulo: 'Amor em cada detalhe, beleza em cada presente',
            cores: { primary: '#ff1744', secondary: '#f50057', accent: '#ff4081' },
            emoji: '❤️',
            desconto: 'Kits Românticos com 35% OFF'
        };
    }
    
    // Dia dos Pais (agosto)
    if (mes === 8) {
        return {
            nome: 'pais',
            titulo: 'Dia dos Pais',
            subtitulo: 'Cuidado e elegância para os pais especiais',
            cores: { primary: '#1565c0', secondary: '#0d47a1', accent: '#42a5f5' },
            emoji: '👔',
            desconto: 'Perfumes masculinos com até 30% OFF'
        };
    }
    
    // Dia das Crianças (outubro 1-15)
    if (mes === 10 && dia <= 15) {
        return {
            nome: 'criancas',
            titulo: 'Dia das Crianças',
            subtitulo: 'Produtos especiais para os pequenos',
            cores: { primary: '#ff9800', secondary: '#ffc107', accent: '#ffeb3b' },
            emoji: '🎈',
            desconto: 'Linha infantil com até 25% OFF'
        };
    }
    
    // Black Friday (novembro 15-30)
    if (mes === 11 && dia >= 15) {
        return {
            nome: 'blackfriday',
            titulo: 'Black Friday',
            subtitulo: 'Os maiores descontos do ano estão aqui!',
            cores: { primary: '#000000', secondary: '#ff6600', accent: '#ffd700' },
            emoji: '🔥',
            desconto: 'Até 70% OFF em toda a loja'
        };
    }
    
    // Tema padrão
    return {
        nome: 'padrao',
        titulo: 'Beleza e Elegância',
        subtitulo: 'Descubra os melhores produtos de beleza',
        cores: { primary: '#c94b7a', secondary: '#a0365e', accent: '#e87ca5' },
        emoji: '✨',
        desconto: 'Ganhe 10% OFF na primeira compra'
    };
}

const temaSazonal = detectarTemaSazonal();

// ========================
// DATABASE DE PRODUTOS
// ========================
const produtos = [
    // Perfumes
    { id: 1, nome: 'Perfume Floral Elegance', categoria: 'perfumes', preco: 189.90, imagem: 'https://placehold.co/300x300/FFB6C1/333333?text=Perfume+Floral', descricao: 'Fragrância floral sofisticada com notas de jasmim e rosas' },
    { id: 2, nome: 'Perfume Intense Noir', categoria: 'perfumes', preco: 249.90, imagem: 'https://placehold.co/300x300/708090/ffffff?text=Perfume+Noir', descricao: 'Perfume amadeirado intenso com toque de especiarias' },
    { id: 3, nome: 'Perfume Fresh Summer', categoria: 'perfumes', preco: 159.90, imagem: 'https://placehold.co/300x300/87CEEB/333333?text=Fresh+Summer', descricao: 'Fragrância cítrica refrescante perfeita para o dia a dia' },
    { id: 4, nome: 'Perfume Glamour Night', categoria: 'perfumes', preco: 299.90, imagem: 'https://placehold.co/300x300/DDA0DD/333333?text=Glamour+Night', descricao: 'Perfume sofisticado com notas florais e frutadas' },
    
    // Maquiagem
    { id: 5, nome: 'Base Líquida HD', categoria: 'maquiagem', preco: 79.90, imagem: 'https://placehold.co/300x300/F5DEB3/333333?text=Base+HD', descricao: 'Base de alta cobertura com acabamento natural' },
    { id: 6, nome: 'Paleta de Sombras Rose', categoria: 'maquiagem', preco: 129.90, imagem: 'https://placehold.co/300x300/FFC0CB/333333?text=Paleta+Rose', descricao: '12 cores incríveis para looks deslumbrantes' },
    { id: 7, nome: 'Batom Matte Power', categoria: 'maquiagem', preco: 49.90, imagem: 'https://placehold.co/300x300/DC143C/ffffff?text=Batom+Matte', descricao: 'Batom de longa duração com acabamento matte' },
    { id: 8, nome: 'Máscara de Cílios Volume', categoria: 'maquiagem', preco: 69.90, imagem: 'https://placehold.co/300x300/000000/ffffff?text=Mascara', descricao: 'Volume e definição extremos para seus cílios' },
    
    // Skincare
    { id: 9, nome: 'Sérum Vitamina C', categoria: 'skincare', preco: 119.90, imagem: 'https://placehold.co/300x300/FFD700/333333?text=Serum+Vit+C', descricao: 'Sérum iluminador anti-idade com vitamina C' },
    { id: 10, nome: 'Hidratante Facial Intensivo', categoria: 'skincare', preco: 89.90, imagem: 'https://placehold.co/300x300/ADD8E6/333333?text=Hidratante', descricao: 'Hidratação profunda com ácido hialurônico' },
    { id: 11, nome: 'Protetor Solar FPS 60', categoria: 'skincare', preco: 79.90, imagem: 'https://placehold.co/300x300/F0E68C/333333?text=Protetor+FPS60', descricao: 'Proteção solar avançada com toque seco' },
    { id: 12, nome: 'Esfoliante Facial', categoria: 'skincare', preco: 59.90, imagem: 'https://placehold.co/300x300/98FB98/333333?text=Esfoliante', descricao: 'Renovação celular com micropartículas naturais' },
    
    // Cabelos
    { id: 13, nome: 'Shampoo Hidratação Profunda', categoria: 'cabelos', preco: 45.90, imagem: 'https://placehold.co/300x300/9370DB/ffffff?text=Shampoo', descricao: 'Limpeza suave com hidratação intensa' },
    { id: 14, nome: 'Condicionador Nutrição', categoria: 'cabelos', preco: 49.90, imagem: 'https://placehold.co/300x300/BA55D3/ffffff?text=Condicionador', descricao: 'Nutrição e maciez extrema para seus cabelos' },
    { id: 15, nome: 'Máscara Capilar Reparadora', categoria: 'cabelos', preco: 79.90, imagem: 'https://placehold.co/300x300/8B4789/ffffff?text=Mascara+Capilar', descricao: 'Tratamento intensivo para cabelos danificados' },
    { id: 16, nome: 'Óleo Capilar Brilho', categoria: 'cabelos', preco: 69.90, imagem: 'https://placehold.co/300x300/FFD700/333333?text=Oleo+Capilar', descricao: 'Brilho e maciez instantâneos' },
    
    // Corpo e Banho
    { id: 17, nome: 'Loção Corporal Hidratante', categoria: 'corpo', preco: 54.90, imagem: 'https://placehold.co/300x300/FFF0F5/333333?text=Locao+Corporal', descricao: 'Hidratação prolongada com fragrância suave' },
    { id: 18, nome: 'Sabonete Líquido Premium', categoria: 'corpo', preco: 39.90, imagem: 'https://placehold.co/300x300/E6E6FA/333333?text=Sabonete', descricao: 'Limpeza suave e perfumada' },
    { id: 19, nome: 'Esfoliante Corporal', categoria: 'corpo', preco: 64.90, imagem: 'https://placehold.co/300x300/F0FFF0/333333?text=Esfoliante+Body', descricao: 'Renovação e suavidade para sua pele' },
    { id: 20, nome: 'Body Splash Floral', categoria: 'corpo', preco: 49.90, imagem: 'https://placehold.co/300x300/FFB6C1/333333?text=Body+Splash', descricao: 'Fragrância leve e refrescante' }
];

// ========================
// ESTADO DA APLICAÇÃO
// ========================
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || null;
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
let cupomAplicado = null;
let freteEscolhido = null;

// ========================
// INICIALIZAÇÃO
// ========================
document.addEventListener('DOMContentLoaded', () => {
    aplicarTemaSazonal();
    inicializarPagina();
    atualizarContadorCarrinho();
    atualizarInfoUsuario();
});

function aplicarTemaSazonal() {
    // Adicionar classe do tema ao body
    document.body.classList.add(`tema-${temaSazonal.nome}`);
    
    // Atualizar cores CSS
    document.documentElement.style.setProperty('--primary-color', temaSazonal.cores.primary);
    document.documentElement.style.setProperty('--accent-color', temaSazonal.cores.accent);
    
    // Atualizar hero banner
    const heroContent = document.querySelector('.hero-content h2');
    if (heroContent) {
        heroContent.innerHTML = `${temaSazonal.emoji} ${temaSazonal.titulo}`;
    }
    
    const heroSubtitle = document.querySelector('.hero-content p');
    if (heroSubtitle) {
        heroSubtitle.textContent = temaSazonal.subtitulo;
    }
    
    // Atualizar barra superior
    const topBarSpans = document.querySelectorAll('.top-bar-content span');
    if (topBarSpans.length > 1) {
        topBarSpans[1].innerHTML = `<i class="fas fa-gift"></i> ${temaSazonal.desconto}`;
    }
    
    // Adicionar decorações sazonais
    adicionarDecoracoesSazonais();
}

function adicionarDecoracoesSazonais() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Remover decorações antigas
    const decoracoesAntigas = document.querySelectorAll('.decoracao-sazonal');
    decoracoesAntigas.forEach(dec => dec.remove());
    
    // Adicionar novas decorações baseadas no tema
    const decoracao = document.createElement('div');
    decoracao.className = 'decoracao-sazonal';
    
    switch(temaSazonal.nome) {
        case 'natal':
            decoracao.innerHTML = '❄️🎄🎅🎁⛄';
            break;
        case 'pascoa':
            decoracao.innerHTML = '🐰🥚🌸🐣🌷';
            break;
        case 'maes':
            decoracao.innerHTML = '💐🌹💕👩‍👧‍👦🌺';
            break;
        case 'namorados':
            decoracao.innerHTML = '❤️💘💝💖💗';
            break;
        case 'pais':
            decoracao.innerHTML = '👔🎩👨‍👧‍👦💼🏆';
            break;
        case 'criancas':
            decoracao.innerHTML = '🎈🎪🎨🎮🧸';
            break;
        case 'blackfriday':
            decoracao.innerHTML = '🔥💰🛍️💥⚡';
            break;
    }
    
    if (decoracao.innerHTML) {
        header.appendChild(decoracao);
    }
}

function inicializarPagina() {
    const pagina = window.location.pathname.split('/').pop();
    
    switch(pagina) {
        case 'index.html':
        case '':
            carregarProdutosDestaque();
            break;
        case 'produtos.html':
            inicializarPaginaProdutos();
            break;
        case 'login.html':
            inicializarPaginaLogin();
            break;
        case 'carrinho.html':
            inicializarPaginaCarrinho();
            break;
        case 'checkout.html':
            inicializarPaginaCheckout();
            break;
        case 'pedidos.html':
            inicializarPaginaPedidos();
            break;
    }
    
    configurarBuscaProdutos();
}

// ========================
// PRODUTOS
// ========================
function carregarProdutosDestaque() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const produtosDestaque = produtos.slice(0, 8);
    container.innerHTML = produtosDestaque.map(produto => criarCardProduto(produto)).join('');
}

function criarCardProduto(produto) {
    return `
        <div class="product-card" onclick="abrirModalProduto(${produto.id})">
            <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
            <div class="product-info">
                <p class="product-category">${produto.categoria}</p>
                <h3 class="product-name">${produto.nome}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(150)</span>
                </div>
                <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
                <p class="product-installment">ou 6x de R$ ${(produto.preco / 6).toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); adicionarAoCarrinho(${produto.id})">
                        <i class="fas fa-shopping-cart"></i> Comprar
                    </button>
                </div>
            </div>
        </div>
    `;
}

function abrirModalProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    
    document.getElementById('modal-product-image').src = produto.imagem;
    document.getElementById('modal-product-name').textContent = produto.nome;
    document.getElementById('modal-product-category').textContent = produto.categoria;
    document.getElementById('modal-product-price').textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById('modal-installment').textContent = `R$ ${(produto.preco / 6).toFixed(2)}`;
    document.getElementById('modal-product-description').textContent = produto.descricao;
    document.getElementById('product-qty').value = 1;
    
    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
    
    // Configurar botão de adicionar ao carrinho
    document.getElementById('add-to-cart-modal').onclick = () => {
        const quantidade = parseInt(document.getElementById('product-qty').value);
        adicionarAoCarrinho(id, quantidade);
        modal.style.display = 'none';
    };
    
    // Controles de quantidade
    document.getElementById('increase-qty').onclick = () => {
        const input = document.getElementById('product-qty');
        input.value = Math.min(parseInt(input.value) + 1, 10);
    };
    
    document.getElementById('decrease-qty').onclick = () => {
        const input = document.getElementById('product-qty');
        input.value = Math.max(parseInt(input.value) - 1, 1);
    };
}

// Fechar modal ao clicar no X ou fora dele
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal')) {
        e.target.closest('.modal').style.display = 'none';
    }
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// ========================
// PÁGINA DE PRODUTOS
// ========================
function inicializarPaginaProdutos() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaFiltro = urlParams.get('categoria');
    
    carregarProdutosPagina(categoriaFiltro);
    configurarFiltros();
    
    if (categoriaFiltro) {
        document.getElementById('category-title').textContent = 
            categoriaFiltro.charAt(0).toUpperCase() + categoriaFiltro.slice(1);
        document.getElementById('current-category').textContent = categoriaFiltro;
        
        // Marcar checkbox da categoria
        const checkbox = document.querySelector(`input[name="categoria"][value="${categoriaFiltro}"]`);
        if (checkbox) checkbox.checked = true;
    }
}

function carregarProdutosPagina(categoriaFiltro = null) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    let produtosFiltrados = categoriaFiltro ? 
        produtos.filter(p => p.categoria === categoriaFiltro) : 
        produtos;
    
    // Aplicar filtros de preço
    const filtrosPreco = Array.from(document.querySelectorAll('input[name="preco"]:checked'))
        .map(cb => cb.value);
    
    if (filtrosPreco.length > 0) {
        produtosFiltrados = produtosFiltrados.filter(produto => {
            return filtrosPreco.some(faixa => {
                const [min, max] = faixa.split('-').map(Number);
                return produto.preco >= min && produto.preco < max;
            });
        });
    }
    
    // Aplicar ordenação
    const ordenacao = document.getElementById('sort-select')?.value;
    if (ordenacao) {
        switch(ordenacao) {
            case 'menor-preco':
                produtosFiltrados.sort((a, b) => a.preco - b.preco);
                break;
            case 'maior-preco':
                produtosFiltrados.sort((a, b) => b.preco - a.preco);
                break;
            case 'nome':
                produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
                break;
        }
    }
    
    container.innerHTML = produtosFiltrados.map(produto => criarCardProduto(produto)).join('');
    document.getElementById('products-count').textContent = `${produtosFiltrados.length} produtos encontrados`;
}

function configurarFiltros() {
    // Filtros de categoria
    document.querySelectorAll('input[name="categoria"]').forEach(checkbox => {
        checkbox.addEventListener('change', aplicarFiltros);
    });
    
    // Filtros de preço
    document.querySelectorAll('input[name="preco"]').forEach(checkbox => {
        checkbox.addEventListener('change', aplicarFiltros);
    });
    
    // Ordenação
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', aplicarFiltros);
    }
    
    // Limpar filtros
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            window.location.href = 'produtos.html';
        });
    }
}

function aplicarFiltros() {
    const categoriasSelecionadas = Array.from(document.querySelectorAll('input[name="categoria"]:checked'))
        .map(cb => cb.value);
    
    let produtosFiltrados = categoriasSelecionadas.length > 0 ?
        produtos.filter(p => categoriasSelecionadas.includes(p.categoria)) :
        produtos;
    
    // Aplicar filtros de preço
    const filtrosPreco = Array.from(document.querySelectorAll('input[name="preco"]:checked'))
        .map(cb => cb.value);
    
    if (filtrosPreco.length > 0) {
        produtosFiltrados = produtosFiltrados.filter(produto => {
            return filtrosPreco.some(faixa => {
                const [min, max] = faixa.split('-').map(Number);
                return produto.preco >= min && produto.preco < max;
            });
        });
    }
    
    // Aplicar ordenação
    const ordenacao = document.getElementById('sort-select')?.value;
    if (ordenacao) {
        switch(ordenacao) {
            case 'menor-preco':
                produtosFiltrados.sort((a, b) => a.preco - b.preco);
                break;
            case 'maior-preco':
                produtosFiltrados.sort((a, b) => b.preco - a.preco);
                break;
            case 'nome':
                produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
                break;
        }
    }
    
    const container = document.getElementById('products-grid');
    container.innerHTML = produtosFiltrados.map(produto => criarCardProduto(produto)).join('');
    document.getElementById('products-count').textContent = `${produtosFiltrados.length} produtos encontrados`;
}

// ========================
// CARRINHO
// ========================
function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    
    const itemExistente = carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ ...produto, quantidade });
    }
    
    salvarCarrinho();
    atualizarContadorCarrinho();
    mostrarNotificacao('Produto adicionado ao carrinho!');
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
    atualizarContadorCarrinho();
    
    if (window.location.pathname.includes('carrinho.html')) {
        inicializarPaginaCarrinho();
    }
}

function atualizarQuantidadeCarrinho(id, quantidade) {
    const item = carrinho.find(item => item.id === id);
    if (item) {
        item.quantidade = Math.max(1, Math.min(10, quantidade));
        salvarCarrinho();
        inicializarPaginaCarrinho();
    }
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById('cart-count');
    if (contador) {
        const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
        contador.textContent = totalItens;
    }
}

function calcularSubtotal() {
    return carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
}

function calcularDesconto() {
    if (!cupomAplicado) return 0;
    const subtotal = calcularSubtotal();
    return subtotal * (cupomAplicado.desconto / 100);
}

function calcularFrete() {
    if (!freteEscolhido) return 0;
    const subtotal = calcularSubtotal();
    return subtotal >= 199 ? 0 : freteEscolhido.valor;
}

function calcularTotal() {
    return calcularSubtotal() - calcularDesconto() + calcularFrete();
}

// ========================
// PÁGINA DO CARRINHO
// ========================
function inicializarPaginaCarrinho() {
    if (carrinho.length === 0) {
        document.getElementById('empty-cart').style.display = 'flex';
        document.getElementById('cart-content').style.display = 'none';
        return;
    }
    
    document.getElementById('empty-cart').style.display = 'none';
    document.getElementById('cart-content').style.display = 'block';
    
    renderizarItensCarrinho();
    atualizarResumoCarrinho();
    
    // Cupom
    document.getElementById('apply-coupon')?.addEventListener('click', aplicarCupom);
    
    // Calcular frete
    document.getElementById('calculate-shipping')?.addEventListener('click', calcularFreteCarrinho);
    
    // Finalizar compra
    document.getElementById('proceed-checkout')?.addEventListener('click', () => {
        if (!usuarioLogado) {
            mostrarNotificacao('Faça login para continuar', 'error');
            setTimeout(() => window.location.href = 'login.html', 1500);
            return;
        }
        window.location.href = 'checkout.html';
    });
}

function renderizarItensCarrinho() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    
    container.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.nome}</h3>
                <p class="product-category">${item.categoria}</p>
                <p class="cart-item-price">R$ ${item.preco.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="atualizarQuantidadeCarrinho(${item.id}, ${item.quantidade - 1})">-</button>
                    <input type="number" value="${item.quantidade}" min="1" max="10" readonly>
                    <button onclick="atualizarQuantidadeCarrinho(${item.id}, ${item.quantidade + 1})">+</button>
                </div>
                <i class="fas fa-trash remove-item" onclick="removerDoCarrinho(${item.id})"></i>
            </div>
        </div>
    `).join('');
}

function atualizarResumoCarrinho() {
    const subtotal = calcularSubtotal();
    const desconto = calcularDesconto();
    const frete = calcularFrete();
    const total = calcularTotal();
    
    document.getElementById('summary-items').textContent = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    document.getElementById('summary-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    
    if (cupomAplicado) {
        document.getElementById('discount-line').style.display = 'flex';
        document.getElementById('discount-code').textContent = cupomAplicado.codigo;
        document.getElementById('summary-discount').textContent = `- R$ ${desconto.toFixed(2)}`;
    }
    
    if (freteEscolhido) {
        document.getElementById('summary-shipping').textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`;
    }
    
    document.getElementById('summary-total').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('installment-value').textContent = `R$ ${(total / 6).toFixed(2)}`;
}

function aplicarCupom() {
    const codigo = document.getElementById('coupon-code').value.toUpperCase();
    const mensagem = document.getElementById('coupon-message');
    
    // Cupons de exemplo
    const cupons = {
        'PRIMEIRACOMPRA': { desconto: 10, minimo: 0 },
        'NATAL2025': { desconto: 15, minimo: 150 },
        'FRETEGRATIS': { desconto: 0, frete: true }
    };
    
    if (cupons[codigo]) {
        const subtotal = calcularSubtotal();
        if (subtotal >= cupons[codigo].minimo) {
            cupomAplicado = { codigo, ...cupons[codigo] };
            mensagem.textContent = `Cupom ${codigo} aplicado com sucesso!`;
            mensagem.className = 'coupon-message success';
            atualizarResumoCarrinho();
        } else {
            mensagem.textContent = `Valor mínimo de R$ ${cupons[codigo].minimo.toFixed(2)} não atingido`;
            mensagem.className = 'coupon-message error';
        }
    } else {
        mensagem.textContent = 'Cupom inválido';
        mensagem.className = 'coupon-message error';
    }
}

function calcularFreteCarrinho() {
    const cep = document.getElementById('cep-input').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        mostrarNotificacao('CEP inválido', 'error');
        return;
    }
    
    // Simular cálculo de frete
    const opcoesContainer = document.getElementById('shipping-options');
    opcoesContainer.innerHTML = `
        <div class="shipping-option" onclick="selecionarFrete('PAC', 15.90, 7)">
            <strong>PAC</strong>
            <p>Entrega em 7 dias úteis</p>
            <p>R$ 15,90</p>
        </div>
        <div class="shipping-option" onclick="selecionarFrete('SEDEX', 29.90, 3)">
            <strong>SEDEX</strong>
            <p>Entrega em 3 dias úteis</p>
            <p>R$ 29,90</p>
        </div>
    `;
}

function selecionarFrete(tipo, valor, prazo) {
    freteEscolhido = { tipo, valor, prazo };
    
    document.querySelectorAll('.shipping-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.shipping-option').classList.add('selected');
    
    atualizarResumoCarrinho();
}

// ========================
// AUTENTICAÇÃO
// ========================
function inicializarPaginaLogin() {
    if (usuarioLogado) {
        document.getElementById('auth-area').style.display = 'none';
        document.getElementById('user-area').style.display = 'block';
        document.getElementById('dashboard-user-name').textContent = usuarioLogado.nome;
    } else {
        document.getElementById('auth-area').style.display = 'block';
        document.getElementById('user-area').style.display = 'none';
    }
    
    // Alternar entre login e cadastro
    document.getElementById('show-register')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form-container').style.display = 'none';
        document.getElementById('register-form-container').style.display = 'block';
    });
    
    document.getElementById('show-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form-container').style.display = 'block';
        document.getElementById('register-form-container').style.display = 'none';
    });
    
    // Formulários
    document.getElementById('login-form')?.addEventListener('submit', fazerLogin);
    document.getElementById('register-form')?.addEventListener('submit', cadastrarUsuario);
    document.getElementById('logout-btn')?.addEventListener('click', fazerLogout);
    
    // Toggle de senha
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.dataset.target;
            const input = document.getElementById(targetId);
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

function fazerLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;
    
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
        usuarioLogado = usuario;
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        mostrarNotificacao('Login realizado com sucesso!');
        setTimeout(() => window.location.reload(), 1000);
    } else {
        mostrarNotificacao('E-mail ou senha incorretos', 'error');
    }
}

function cadastrarUsuario(e) {
    e.preventDefault();
    
    const nome = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const telefone = document.getElementById('register-phone').value;
    const cpf = document.getElementById('register-cpf').value;
    const senha = document.getElementById('register-password').value;
    const senhaConfirm = document.getElementById('register-password-confirm').value;
    
    if (senha !== senhaConfirm) {
        mostrarNotificacao('As senhas não coincidem', 'error');
        return;
    }
    
    if (usuarios.find(u => u.email === email)) {
        mostrarNotificacao('E-mail já cadastrado', 'error');
        return;
    }
    
    const novoUsuario = { id: Date.now(), nome, email, telefone, cpf, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    usuarioLogado = novoUsuario;
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
    
    mostrarNotificacao('Cadastro realizado com sucesso!');
    setTimeout(() => window.location.reload(), 1000);
}

function fazerLogout() {
    usuarioLogado = null;
    localStorage.removeItem('usuarioLogado');
    mostrarNotificacao('Logout realizado com sucesso!');
    setTimeout(() => window.location.href = 'index.html', 1000);
}

function atualizarInfoUsuario() {
    const userBtn = document.getElementById('user-name');
    if (userBtn && usuarioLogado) {
        userBtn.textContent = usuarioLogado.nome.split(' ')[0];
    }
}

// ========================
// CHECKOUT
// ========================
function inicializarPaginaCheckout() {
    if (!usuarioLogado) {
        mostrarNotificacao('Faça login para continuar', 'error');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }
    
    if (carrinho.length === 0) {
        mostrarNotificacao('Seu carrinho está vazio', 'error');
        setTimeout(() => window.location.href = 'produtos.html', 1500);
        return;
    }
    
    // Mostrar informações do usuário
    document.getElementById('logged-user-info').style.display = 'block';
    document.getElementById('checkout-user-name').textContent = usuarioLogado.nome;
    document.getElementById('checkout-user-email').textContent = usuarioLogado.email;
    
    // Renderizar resumo
    renderizarResumoCheckout();
    
    // Buscar CEP
    document.getElementById('cep')?.addEventListener('blur', buscarCEP);
    
    // Continuar para pagamento
    document.getElementById('continue-payment')?.addEventListener('click', () => {
        if (validarEndereço()) {
            document.getElementById('address-section').style.display = 'none';
            document.getElementById('payment-section').style.display = 'block';
            document.getElementById('step-identification').classList.remove('active');
            document.getElementById('step-identification').classList.add('completed');
            document.getElementById('step-payment').classList.add('active');
            window.scrollTo(0, 0);
        }
    });
    
    // Alternar formas de pagamento
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.payment-form').forEach(form => {
                form.style.display = 'none';
            });
            
            const metodo = e.target.value;
            document.getElementById(`${metodo}-${metodo === 'credit' ? 'card' : ''}-form`).style.display = 'block';
        });
    });
    
    // Finalizar pedido
    document.getElementById('finalize-order')?.addEventListener('click', finalizarPedido);
    
    // Máscara para cartão
    document.getElementById('card-number')?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value;
    });
    
    // Máscara para validade
    document.getElementById('card-expiry')?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
}

function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) return;
    
    // Simulação de busca de CEP
    document.getElementById('street').value = 'Rua das Flores';
    document.getElementById('neighborhood').value = 'Centro';
    document.getElementById('city').value = 'São Paulo';
    document.getElementById('state').value = 'SP';
}

function validarEndereço() {
    const campos = ['cep', 'street', 'number', 'neighborhood', 'city', 'state'];
    
    for (const campo of campos) {
        const input = document.getElementById(campo);
        if (!input.value.trim()) {
            mostrarNotificacao('Preencha todos os campos obrigatórios', 'error');
            input.focus();
            return false;
        }
    }
    
    return true;
}

function renderizarResumoCheckout() {
    const container = document.getElementById('checkout-items');
    if (!container) return;
    
    container.innerHTML = carrinho.map(item => `
        <div class="summary-item">
            <img src="${item.imagem}" alt="${item.nome}" class="summary-item-image">
            <div class="summary-item-info">
                <h4>${item.nome}</h4>
                <p>Quantidade: ${item.quantidade}</p>
            </div>
        </div>
    `).join('');
    
    const subtotal = calcularSubtotal();
    const desconto = calcularDesconto();
    const frete = calcularFrete();
    const total = calcularTotal();
    
    document.getElementById('checkout-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('checkout-shipping').textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `R$ ${total.toFixed(2)}`;
    
    if (cupomAplicado) {
        document.getElementById('checkout-discount-line').style.display = 'flex';
        document.getElementById('checkout-discount').textContent = `- R$ ${desconto.toFixed(2)}`;
    }
}

function finalizarPedido() {
    const metodo = document.querySelector('input[name="payment-method"]:checked').value;
    
    // Validar dados de pagamento
    if (metodo === 'credit') {
        const campos = ['card-number', 'card-name', 'card-expiry', 'card-cvv'];
        for (const campo of campos) {
            const input = document.getElementById(campo);
            if (!input.value.trim()) {
                mostrarNotificacao('Preencha todos os dados do cartão', 'error');
                input.focus();
                return;
            }
        }
    }
    
    // Criar pedido
    const pedido = {
        id: Date.now(),
        numero: `#${Math.floor(100000 + Math.random() * 900000)}`,
        data: new Date().toLocaleDateString('pt-BR'),
        status: 'processing',
        usuario: usuarioLogado,
        itens: [...carrinho],
        endereco: {
            cep: document.getElementById('cep').value,
            rua: document.getElementById('street').value,
            numero: document.getElementById('number').value,
            complemento: document.getElementById('complement').value,
            bairro: document.getElementById('neighborhood').value,
            cidade: document.getElementById('city').value,
            estado: document.getElementById('state').value
        },
        pagamento: {
            metodo,
            parcelas: metodo === 'credit' ? document.getElementById('installments')?.value : 1
        },
        valores: {
            subtotal: calcularSubtotal(),
            desconto: calcularDesconto(),
            frete: calcularFrete(),
            total: calcularTotal()
        }
    };
    
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    // Limpar carrinho
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    
    // Mostrar confirmação
    mostrarConfirmacao(pedido);
}

function mostrarConfirmacao(pedido) {
    document.getElementById('address-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'block';
    
    document.getElementById('step-payment').classList.remove('active');
    document.getElementById('step-payment').classList.add('completed');
    document.getElementById('step-confirmation').classList.add('completed');
    document.getElementById('step-confirmation').classList.add('active');
    
    document.getElementById('order-number').textContent = pedido.numero;
    
    const detailsContainer = document.getElementById('confirmation-details');
    detailsContainer.innerHTML = `
        <p><strong>Data:</strong> ${pedido.data}</p>
        <p><strong>Valor Total:</strong> R$ ${pedido.valores.total.toFixed(2)}</p>
        <p><strong>Forma de Pagamento:</strong> ${formatarMetodoPagamento(pedido.pagamento.metodo)}</p>
    `;
    
    // Mostrar informações específicas de pagamento
    if (pedido.pagamento.metodo === 'pix') {
        document.getElementById('pix-qrcode').style.display = 'block';
        document.getElementById('pix-code-value').textContent = gerarCodigoPix();
        
        document.getElementById('copy-pix-code').addEventListener('click', () => {
            const codigo = document.getElementById('pix-code-value').textContent;
            navigator.clipboard.writeText(codigo);
            mostrarNotificacao('Código PIX copiado!');
        });
    } else if (pedido.pagamento.metodo === 'boleto') {
        document.getElementById('boleto-info').style.display = 'block';
        
        document.getElementById('download-boleto').addEventListener('click', () => {
            mostrarNotificacao('Boleto baixado com sucesso!');
        });
    }
    
    window.scrollTo(0, 0);
}

function gerarCodigoPix() {
    return '00020126580014br.gov.bcb.pix0136' + Math.random().toString(36).substring(2, 15) + '520400005303986540' + calcularTotal().toFixed(2) + '5802BR5925Ana\'s Beauty6009Sao Paulo62070503***6304';
}

function formatarMetodoPagamento(metodo) {
    const metodos = {
        'credit': 'Cartão de Crédito',
        'pix': 'PIX',
        'boleto': 'Boleto Bancário'
    };
    return metodos[metodo] || metodo;
}

// ========================
// PÁGINA DE PEDIDOS
// ========================
function inicializarPaginaPedidos() {
    if (!usuarioLogado) {
        document.getElementById('not-logged-in').style.display = 'flex';
        document.getElementById('orders-list').style.display = 'none';
        return;
    }
    
    const pedidosUsuario = pedidos.filter(p => p.usuario.email === usuarioLogado.email);
    
    if (pedidosUsuario.length === 0) {
        document.getElementById('no-orders').style.display = 'flex';
        document.getElementById('orders-list').style.display = 'none';
        return;
    }
    
    renderizarPedidos(pedidosUsuario);
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const status = btn.dataset.status;
            const pedidosFiltrados = status === 'all' ? 
                pedidosUsuario : 
                pedidosUsuario.filter(p => p.status === status);
            
            renderizarPedidos(pedidosFiltrados);
        });
    });
}

function renderizarPedidos(pedidosLista) {
    const container = document.getElementById('orders-grid');
    if (!container) return;
    
    container.innerHTML = pedidosLista.map(pedido => `
        <div class="order-card" onclick="abrirModalPedido(${pedido.id})">
            <div class="order-header">
                <div>
                    <p class="order-number-text">Pedido ${pedido.numero}</p>
                    <p class="order-date">${pedido.data}</p>
                </div>
                <span class="order-status ${pedido.status}">${formatarStatus(pedido.status)}</span>
            </div>
            <div class="order-items">
                ${pedido.itens.slice(0, 4).map(item => `
                    <img src="${item.imagem}" alt="${item.nome}" class="order-item-image">
                `).join('')}
                ${pedido.itens.length > 4 ? `<span>+${pedido.itens.length - 4}</span>` : ''}
            </div>
            <div class="order-footer">
                <p class="order-total">R$ ${pedido.valores.total.toFixed(2)}</p>
                <div class="order-actions">
                    <button class="btn btn-outline" onclick="event.stopPropagation(); abrirModalPedido(${pedido.id})">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function formatarStatus(status) {
    const statusMap = {
        'processing': 'Em Processamento',
        'shipped': 'Enviado',
        'delivered': 'Entregue',
        'cancelled': 'Cancelado'
    };
    return statusMap[status] || status;
}

function abrirModalPedido(id) {
    const pedido = pedidos.find(p => p.id === id);
    if (!pedido) return;
    
    const modal = document.getElementById('order-modal');
    modal.style.display = 'block';
    
    document.getElementById('modal-order-number').textContent = pedido.numero;
    
    // Timeline
    const timeline = document.getElementById('modal-timeline');
    timeline.innerHTML = `
        <div class="timeline-step ${['processing', 'shipped', 'delivered'].includes(pedido.status) ? 'completed' : ''}">
            <div class="timeline-icon"><i class="fas fa-check"></i></div>
            <p class="timeline-label">Confirmado</p>
        </div>
        <div class="timeline-step ${['shipped', 'delivered'].includes(pedido.status) ? 'completed' : pedido.status === 'processing' ? 'active' : ''}">
            <div class="timeline-icon"><i class="fas fa-box"></i></div>
            <p class="timeline-label">Enviado</p>
        </div>
        <div class="timeline-step ${pedido.status === 'delivered' ? 'completed' : pedido.status === 'shipped' ? 'active' : ''}">
            <div class="timeline-icon"><i class="fas fa-check-circle"></i></div>
            <p class="timeline-label">Entregue</p>
        </div>
    `;
    
    // Produtos
    const produtosContainer = document.getElementById('modal-order-products');
    produtosContainer.innerHTML = pedido.itens.map(item => `
        <div class="order-modal-product">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="order-modal-product-info">
                <h4>${item.nome}</h4>
                <p>Quantidade: ${item.quantidade}</p>
            </div>
            <div class="order-modal-product-price">
                <p class="price">R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
        </div>
    `).join('');
    
    // Endereço
    const endereco = pedido.endereco;
    document.getElementById('modal-order-address').innerHTML = `
        <p>${endereco.rua}, ${endereco.numero} ${endereco.complemento ? '- ' + endereco.complemento : ''}</p>
        <p>${endereco.bairro} - ${endereco.cidade}/${endereco.estado}</p>
        <p>CEP: ${endereco.cep}</p>
    `;
    
    // Pagamento
    document.getElementById('modal-order-payment').innerHTML = `
        <p><strong>Método:</strong> ${formatarMetodoPagamento(pedido.pagamento.metodo)}</p>
        ${pedido.pagamento.metodo === 'credit' ? `<p><strong>Parcelas:</strong> ${pedido.pagamento.parcelas}x</p>` : ''}
    `;
    
    // Resumo financeiro
    document.getElementById('modal-subtotal').textContent = `R$ ${pedido.valores.subtotal.toFixed(2)}`;
    document.getElementById('modal-shipping').textContent = `R$ ${pedido.valores.frete.toFixed(2)}`;
    document.getElementById('modal-total').textContent = `R$ ${pedido.valores.total.toFixed(2)}`;
    
    if (pedido.valores.desconto > 0) {
        document.getElementById('modal-discount-line').style.display = 'flex';
        document.getElementById('modal-discount').textContent = `- R$ ${pedido.valores.desconto.toFixed(2)}`;
    }
    
    // Botões de ação
    document.getElementById('track-order-btn').onclick = () => {
        modal.style.display = 'none';
        document.getElementById('tracking-modal').style.display = 'block';
    };
    
    document.getElementById('invoice-btn').onclick = () => {
        mostrarNotificacao('Nota fiscal baixada com sucesso!');
    };
    
    document.getElementById('help-btn').onclick = () => {
        mostrarNotificacao('Abrindo central de ajuda...');
    };
}

// ========================
// BUSCA
// ========================
function configurarBuscaProdutos() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', realizarBusca);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                realizarBusca();
            }
        });
    }
}

function realizarBusca() {
    const termo = document.getElementById('search-input').value.toLowerCase();
    
    if (!termo) return;
    
    window.location.href = `produtos.html?busca=${encodeURIComponent(termo)}`;
}

// ========================
// NOTIFICAÇÕES
// ========================
function mostrarNotificacao(mensagem, tipo = 'success') {
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao ${tipo}`;
    notificacao.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${tipo === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notificacao.textContent = mensagem;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
