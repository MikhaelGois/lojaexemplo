# 🛍️ Ana's Beauty - Loja E-commerce

Loja de moda e beleza completa desenvolvida com HTML, CSS e JavaScript puro, inspirada no site do Boticário.

## 🎯 Funcionalidades

### ✨ Principais Recursos

- **🏠 Página Inicial**: Banner promocional, categorias em destaque, produtos em destaque e benefícios
- **📦 Catálogo de Produtos**: 20 produtos distribuídos em 5 categorias diferentes
- **🔍 Sistema de Busca**: Busca por nome de produtos
- **🎨 Filtros Avançados**: Filtrar por categoria, faixa de preço e ordenação
- **👤 Sistema de Autenticação**: Login, cadastro e área do usuário
- **🛒 Carrinho de Compras**: Adicionar, remover e alterar quantidades
- **💳 Checkout Completo**: Endereço, formas de pagamento e confirmação
- **💰 Sistema de Pagamento**: Cartão de crédito, PIX e Boleto
- **🎫 Cupons de Desconto**: Sistema de validação de cupons
- **📦 Gestão de Pedidos**: Histórico, rastreamento e detalhes
- **📱 Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop

### 🎨 Design

- Interface moderna e elegante inspirada no Boticário
- Cores principais: Rosa (#d4145a) e preto (#2b2b2b)
- Animações suaves e transições
- Layout responsivo com CSS Grid e Flexbox
- Ícones Font Awesome

## 📁 Estrutura do Projeto

```
loja-ecommerce/
├── index.html          # Página inicial
├── produtos.html       # Catálogo de produtos
├── login.html          # Login e cadastro
├── carrinho.html       # Carrinho de compras
├── checkout.html       # Finalização da compra
├── pedidos.html        # Histórico de pedidos
├── styles.css          # Estilos CSS
└── app.js              # Lógica JavaScript
```

## 🚀 Como Usar

### Abrir a Loja

1. Abra o arquivo `index.html` em seu navegador
2. Ou use um servidor local:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

### Testar Funcionalidades

#### 1. **Criar uma Conta**
   - Acesse "Entrar" no menu
   - Clique em "Cadastre-se"
   - Preencha os dados (pode usar dados fictícios)

#### 2. **Fazer Login**
   - Use o e-mail e senha cadastrados
   - Ou crie uma nova conta

#### 3. **Adicionar Produtos ao Carrinho**
   - Navegue pelos produtos
   - Clique em "Comprar" ou no produto para ver detalhes
   - Ajuste a quantidade desejada

#### 4. **Aplicar Cupom de Desconto**
   - No carrinho, use um dos cupons disponíveis:
     - `PRIMEIRACOMPRA` - 10% de desconto
     - `NATAL2025` - 15% de desconto (mínimo R$ 150)
     - `FRETEGRATIS` - Frete grátis

#### 5. **Calcular Frete**
   - Digite qualquer CEP com 8 dígitos
   - Escolha entre PAC ou SEDEX

#### 6. **Finalizar Compra**
   - Clique em "Finalizar Compra"
   - Preencha o endereço (o CEP preenche automaticamente)
   - Escolha a forma de pagamento:
     - **Cartão**: Preencha os dados do cartão
     - **PIX**: Receberá QR Code e código copia e cola
     - **Boleto**: Poderá baixar o boleto
   - Confirme o pedido

#### 7. **Acompanhar Pedidos**
   - Acesse "Meus Pedidos" no menu do usuário
   - Visualize detalhes e rastreamento

## 💳 Formas de Pagamento

### Cartão de Crédito
- Parcelamento em até 6x sem juros
- Validação de campos obrigatórios
- Máscaras para número e validade

### PIX
- QR Code gerado automaticamente
- Código PIX copia e cola
- Pagamento instantâneo

### Boleto Bancário
- Download do boleto
- Vencimento em 3 dias
- Confirmação em até 2 dias úteis

## 🎁 Cupons de Desconto

| Código | Desconto | Valor Mínimo |
|--------|----------|--------------|
| PRIMEIRACOMPRA | 10% | Sem mínimo |
| NATAL2025 | 15% | R$ 150,00 |
| FRETEGRATIS | Frete Grátis | Sem mínimo |

## 📦 Categorias de Produtos

1. **Perfumes** - 4 produtos
2. **Maquiagem** - 4 produtos
3. **Skincare** - 4 produtos
4. **Cabelos** - 4 produtos
5. **Corpo & Banho** - 4 produtos

## 🔒 Sistema de Autenticação

### Armazenamento Local
- Dados salvos no `localStorage`
- Persistência entre sessões
- Segurança básica (apenas para demonstração)

### Funcionalidades
- Cadastro de novos usuários
- Login com e-mail e senha
- Área do usuário personalizada
- Logout

## 💾 Dados Persistidos

Os seguintes dados são salvos no `localStorage`:

- `usuarios` - Lista de usuários cadastrados
- `usuarioLogado` - Usuário atualmente logado
- `carrinho` - Itens no carrinho de compras
- `pedidos` - Histórico de pedidos

## 🎨 Recursos de Design

### Cores
```css
--primary-color: #d4145a;      /* Rosa principal */
--primary-dark: #a01046;       /* Rosa escuro */
--secondary-color: #2b2b2b;    /* Preto */
--accent-color: #ff6b9d;       /* Rosa claro */
--success-color: #28a745;      /* Verde sucesso */
--error-color: #dc3545;        /* Vermelho erro */
```

### Tipografia
- Fonte: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Tamanhos responsivos
- Hierarquia clara

### Componentes
- Cards de produtos com hover
- Modais elegantes
- Formulários estilizados
- Botões com animações
- Timeline de pedidos
- Notificações toast

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance

- CSS otimizado
- JavaScript modular
- Lazy loading de imagens
- Transições suaves
- Sem dependências externas (exceto Font Awesome)

## 🔧 Melhorias Futuras

- [ ] Integração com API de pagamento real (Stripe, Mercado Pago)
- [ ] Backend com Node.js e MongoDB
- [ ] Validação de CPF e e-mail
- [ ] Integração com API de CEP (ViaCEP)
- [ ] Sistema de avaliações de produtos
- [ ] Lista de desejos
- [ ] Comparação de produtos
- [ ] Chat de atendimento
- [ ] Sistema de pontos/fidelidade
- [ ] Newsletter
- [ ] Blog de conteúdo
- [ ] Programa de afiliados

## 🐛 Observações

### Limitações Atuais
- Dados salvos apenas localmente (sem backend)
- Pagamentos são simulados
- CEP utiliza dados fictícios
- Imagens são placeholders

### Para Produção
Para usar em produção real, seria necessário:
1. Backend com banco de dados
2. API de pagamento integrada
3. Sistema de autenticação robusto
4. API de cálculo de frete real
5. Imagens reais dos produtos
6. SSL/HTTPS
7. CDN para assets
8. Sistema de backup

## 📝 Licença

Projeto de demonstração - Uso educacional

## 👨‍💻 Desenvolvido por

GitHub Copilot com Claude Sonnet 4.5

---

**Ana's Beauty** - Sua loja de moda e beleza 💄✨
