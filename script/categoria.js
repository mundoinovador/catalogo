const produtos = [
  {
    id: 1,
    nome: "Sabor: Doce de Leite",
    preco: "R$ 13,00",
    categoria: "bolo",
    imagem: "img/doce-de-leite.jpeg",
    descricao: `
      Bolo no Pote Chocol ate 70% com Doce de Leite (250ml)*
    
      Desperte seus sentidos com o nosso delicioso e reconfortante 'Bolo no Pote Chocolate 70% com Doce de Leite'.. mais
    `,
  },
  {
    id: 2,
    nome: "Sabor: Mousse de Maracujá",
    preco: "R$ 13,00",
    categoria: "bolo",
    imagem: "img/mousse-de-maracuja.jpeg",
    descricao: `
      *Bolo no Pote Chocolate 70% com Mousse de Maracujá (250ml)*

      Desperte seus sentidos com o nosso delicioso e vibrante 'Bolo no Pote Chocolate 70% com Mousse de Maracujá'.. mais
    `,
  },
  {
    id: 3,
    nome: "Sabor: Brigadeiro",
    preco: "R$ 13,00",
    categoria: "bolo",
    imagem: "img/brigadeiro.jpeg",
    descricao: `
      Bolo no Pote Brigadeiro com Chocolate 70% (250ml)*

      Desperte seus sentidos com o nosso delicioso 'Bolo no Pote Brigadeiro com Chocolate 70%'.. mais
    `,
  },
  {
    id: 4,
    nome: "Sabor: Prestígio",
    preco: "R$ 13,00",
    categoria: "bolo",
    imagem: "img/prestigio.jpeg",
    descricao: `
        Bolo no Pote Prestígio (Chocolate 70% e Beijinho) - 250ml*

        Desperte seus sentidos com o nosso delicioso e tropical 'Bolo no Pote Prestígio'.. mais
    `,
  },
  {
    id: 5,
    nome: "Sabor: Ninho",
    preco: "R$ 13,00",
    categoria: "bolo",
    imagem: "img/ninho.jpeg",
    descricao: `
        Bolo no Pote Chocolate 70% com Creme de Leite Ninho (250ml)*

        Desperte seus sentidos com o nosso delicioso e suave 'Bolo no Pote Chocolate 70% com Creme de Leite Ninho'.. mais
    `,
  },
  {
    id: 6,
    nome: "Ice Smirnoff",
    preco: "R$ 13,00",
    categoria: "garrafa",
    imagem: "img/ice.jpeg",
    descricao: "",
  },
  {
    id: 7,
    nome: "Dose de passport",
    preco: "R$ 25,00",
    categoria: "dose",
    imagem: "img/passaport.jpeg",
    descricao: "Acompanha gelo e vibe",
  },
  {
    id: 8,
    nome: "Dose de gin Eternity",
    preco: "$ 18,00",
    categoria: "dose",
    imagem: "img/combo-gin-eternity.jpeg",
    descricao:
      "Monte sua dose Escolha o gelo e o baly Gelo: coco melancia Maracujá Baly: Morango com pêssego  Tropical Melancia Maçã verde Tradicional",
  },
  {
    id: 9,
    nome: "Skol",
    preco: "R$ 4,29",
    categoria: "fermentado",
    imagem: "img/skol.jpeg",
    descricao: "",
  },
  {
    id: 10,
    nome: "Império",
    preco: "R$ 3,99",
    categoria: "fermentado",
    imagem: "img/imperio.jpeg",
    descricao: "",
  },
  {
    id: 11,
    nome: "Draft",
    preco: "R$ 16,89",
    categoria: "garrafa",
    imagem: "img/draft.jpeg",
    descricao: "",
  },
  {
    id: 12,
    nome: "Budweise",
    preco: "R$ 16,89",
    categoria: "fermentado",
    imagem: "img/budweise.jpeg",
    descricao: "",
  },
  {
    id: 13,
    nome: "Baly Tropical",
    preco: "R$ 15,50",
    categoria: "garrafa",
    imagem: "img/baly-tropical.jpeg",
    descricao: "",
  },
  {
    id: 14,
    nome: "Ballantine's",
    preco: "R$ 40,00",
    categoria: "dose",
    imagem: "img/ballantines.jpeg",
    descricao: "",
  },
  {
    id: 15,
    nome: "Coko - Gelo melancia",
    preco: "R$ 4,50",
    categoria: "dose",
    imagem: "img/gelo-melancia.jpeg",
    descricao: "",
  },
  {
    id: 16,
    nome: "Coko - Gelo maracujá",
    preco: "R$ 4,50",
    categoria: "dose",
    imagem: "img/gelo-maracuja.jpeg",
    descricao: "",
  },
  {
    id: 17,
    nome: "Coko - Gelo coco",
    preco: "R$ 4,50",
    categoria: "dose",
    imagem: "img/gelo-coco.jpeg",
    descricao: "",
  },
];

// container dos cards
const container = document.getElementById("products-list");

// pega categoria da URL
const params = new URLSearchParams(window.location.search);

const categoria = params.get("categoria");

// filtra produtos
const produtosFiltrados = categoria
  ? produtos.filter((produto) => produto.categoria === categoria)
  : produtos;

// renderiza
produtosFiltrados.forEach((produto) => {
  container.innerHTML += `
    <div class="card">
        <div class="img-card">
          <img
          src="${produto.imagem}"
          alt=""
          />
        </div>

        <div class="desc">
            <h2>${produto.nome}</h2>
            <p id="valor-card">${produto.preco}</p>
            <p>
                ${produto.descricao}
            </p>
            <a href="about.html?numberLoc=${produto.id}">Saiba mais</a>
        </div>
    </div>
  `;
});

const tituloCategoria = document.getElementById("categoria-titulo");

tituloCategoria.innerText =
  "Categoria" + (categoria != null ? " - " + categoria : "");
