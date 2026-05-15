const produtos = [
  {
    id: 1,
    nome: "Sabor: Doce de Leite",
    preco: "R$ 16,89",
    categoria: "bolo",
    imagem: "img/doce-de-leite.jpeg",
    descricao: `
      Bolo no Pote Chocol ate 70% com Doce de Leite (250ml)*
    
      Desperte seus sentidos com o nosso delicioso e reconfortante 'Bolo no Pote Chocolate 70% com Doce de Leite'. Em um pote de 250ml, essa delícia é cuidadosamente preparada com duas generosas camadas de massa de chocolate 70% cacau, intensa e rica, intercaladas com três camadas do nosso cremoso e aveludado doce de leite, proporcionando uma explosão de sabor adocicado e envolvente a cada colherada. Finalizamos com raspas de chocolate 70% cacau, acrescentando uma camada extra de textura e um toque de sofisticação. Uma combinação verdadeiramente irresistível!
    `,
  },
  {
    id: 2,
    nome: "Sabor: Mousse de Maracujá",
    preco: "R$ 16,89",
    categoria: "bolo",
    imagem: "img/mousse-de-maracuja.jpeg",
    descricao: `
      Bolo no Pote Chocolate 70% com Mousse de Maracujá (250ml)*

      Desperte seus sentidos com o nosso delicioso e vibrante 'Bolo no Pote Chocolate 70% com Mousse de Maracujá'. Em um pote de 250ml, essa delícia é cuidadosamente preparada com duas generosas camadas de massa de chocolate 70% cacau, intensa e rica, intercaladas com três camadas do nosso aerado e refrescante mousse de maracujá, proporcionando uma explosão de sabor agridoce a cada colherada. Finalizamos com sementes de maracujá frescas, acrescentando uma camada extra de textura e um toque cítrico. Uma combinação verdadeiramente irresistível!
    `,
  },
  {
    id: 3,
    nome: "Sabor: Brigadeiro",
    preco: "R$ 16,89",
    categoria: "bolo",
    imagem: "img/brigadeiro.jpeg",
    descricao: `
      Bolo no Pote Brigadeiro com Chocolate 70% (250ml)*

      Desperte seus sentidos com o nosso delicioso 'Bolo no Pote Brigadeiro com Chocolate 70%'. Em um pote de 250ml, essa delícia é cuidadosamente preparada com duas generosas camadas de massa de chocolate 70% cacau, intensa e rica, intercaladas com três camadas do brigadeiro mais cremoso que você já experimentou, proporcionando uma explosão de sabor a cada colherada. Finalizamos com uma generosa cobertura de granulado, acrescentando uma camada extra de textura e indulgência. Uma combinação verdadeiramente irresistível!
    `,
  },
  {
    id: 4,
    nome: "Sabor: Prestígio",
    preco: "R$ 16,89",
    categoria: "bolo",
    imagem: "img/prestigio.jpeg",
    descricao: `
        Bolo no Pote Prestígio (Chocolate 70% e Beijinho) - 250ml*

        Desperte seus sentidos com o nosso delicioso e tropical 'Bolo no Pote Prestígio'. Em um pote de 250ml, essa delícia é cuidadosamente preparada com duas generosas camadas de massa de chocolate 70% cacau, intensa e rica, intercaladas com três camadas do nosso cremoso recheio de beijinho, proporcionando uma explosão de sabor a cada colherada. Finalizamos com uma generosa cobertura de coco ralado, acrescentando uma camada extra de textura e um toque exótico. Uma combinação verdadeiramente irresistível!
    `,
  },
  {
    id: 5,
    nome: "Sabor: Ninho",
    preco: "R$ 16,89",
    categoria: "bolo",
    imagem: "img/ninho.jpeg",
    descricao: `
          Bolo no Pote Chocolate 70% com Creme de Leite Ninho (250ml)*
    
          Desperte seus sentidos com o nosso delicioso e suave 'Bolo no Pote Chocolate 70% com Creme de Leite Ninho'. Em um pote de 250ml, essa delícia é cuidadosamente preparada com duas generosas camadas de massa de chocolate 70% cacau, intensa e rica, intercaladas com três camadas do nosso aerado e delicado creme de Leite Ninho, proporcionando uma experiência de sabor doce e aveludada a cada colherada. Finalizamos com uma leve camada de Leite Ninho polvilhado, acrescentando um toque extra de maciez e um visual convidativo. Uma combinação verdadeiramente irresistível!
      `,
  },
  {
    id: 6,
    nome: "Ice Smirnoff",
    preco: "R$ 13,00",
    categoria: "dose",
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
    preco: "R$ 18,00",
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
    categoria: "dose",
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

// pega categoria da URL
const params = new URLSearchParams(window.location.search);

const idProduto = params.get("numberLoc");

// filtra produtos
const produtosFiltrados = produtos.find(
  (produto) => String(produto.id) === idProduto,
);

const produtoInfo = document.getElementById("produto-info");

// renderiza
if (produtosFiltrados) {
  produtoInfo.innerHTML += `
        <div class="foto">
            <img
            src="${produtosFiltrados.imagem}"
            alt=""
            />
        </div>

        <div class="info">
            <h2>${produtosFiltrados.nome}</h2>
            <h3>${produtosFiltrados.preco}</h3>
            <p>
            ${produtosFiltrados.descricao}
            </p>

            <a target="_blank" href='https://wa.me/5511994182226?text=Olá, eu gostaria de pedir o item: ${produtosFiltrados.nome}, ${produtosFiltrados.preco}'>Fazer pedido</a>
        </div>
    `;
}
