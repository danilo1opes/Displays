# CSS Layouts: Flexbox e Grid

Bem-vindo ao repositório sobre **CSS Flexbox** e **CSS Grid**! Este repositório contém exemplos práticos e explicações detalhadas sobre como usar `display: flex` e `display: grid` para criar layouts responsivos e modernos.

## Objetivo

Este repositório tem como objetivo ensinar os conceitos básicos e avançados do Flexbox e do Grid, dois dos principais métodos de layout em CSS. Através de exemplos simples e explicativos dois sites foram criados com o intuito de mostrar cada propriedade e suas funcionalidades "flexblog e WildBeast".

## Projeto

Você pode ver um exemplo prático de uso de Flexbox e Grid no [Flexblog Project](https://flexblogproject.netlify.app/) e [WildBeast Project](https://wildbeastproject.netlify.app/).

## Índice

1. [Introdução ao Flexbox](#introdução-ao-flexbox)
   - O que é Flexbox?
   - Propriedades do Container Flex
   - Propriedades dos Itens Flex
   - Exemplos Práticos com Flexbox
2. [Introdução ao Grid](#introdução-ao-grid)
   - O que é CSS Grid?
   - Propriedades do Container Grid
   - Propriedades dos Itens Grid
   - Exemplos Práticos com Grid
3. [Comparando Flexbox e Grid](#comparando-flexbox-e-grid)
   - Quando usar Flexbox?
   - Quando usar Grid?
4. [Conclusão](#conclusão)
5. [Contribuição](#contribuição)
6. [Licença](#licença)

## Introdução ao Flexbox

### O que é Flexbox?

Flexbox é um modelo de layout unidimensional que organiza elementos em linhas ou colunas, permitindo que os itens dentro de um container flex se ajustem de forma flexível.

### Propriedades do Container Flex

- **display: flex;** Define um container como flexível.
- **flex-direction;** Define a direção dos itens dentro do container (`row`, `row-reverse`, `column`, `column-reverse`).
- **justify-content;** Alinha os itens ao longo do eixo principal (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`).
- **align-items;** Alinha os itens ao longo do eixo perpendicular (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`).
- **align-content;** Alinha as linhas do container em relação ao eixo vertical. A propriedade só funciona se existir mais de uma linha de flex-itens. Para isso o flex-wrap precisa ser wrap. Além disso o efeito dela apenas será visualizado caso o container seja maior que a soma das linhas dos itens. Isso significa que se você não definir height para o container, a propriedade não influencia no layout.
- **flex-flow;** O flex-flow é um atalho para as propriedades flex-direction e flex-wrap. Você não verá muito o seu uso, pois geralmente quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap. E quando mudamos o flex-wrap para wrap, mantemos o padrão do flex-direction que é row.
- **flex-wrap;** Define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo. Essa é geralmente uma propriedade que é quase sempre definida como flex-wrap: wrap; Pois assim quando um dos flex itens atinge o limite do conteúdo, o último item passa para a coluna debaixo e assim por diante.

### Propriedades dos Itens Flex

- **flex-grow;** Define a capacidade de um item de crescer para ocupar o espaço restante.
- **flex-shrink;** Define a capacidade de um item de encolher caso necessário.
- **flex-basis;** Define o tamanho inicial de um item antes de o espaço disponível ser distribuído.
- **align-self;** Permite alinhar um item individualmente dentro do container flex.
- **order;** Modifica a ordem dos flex itens. Sempre do menor para o maior, assim order: 1, aparece na frente de order: 5.
- **flex;** Atalho para as propriedades flex-grow, flex-shrink e flex-basis. Geralmente você verá a propriedade flex nos flex itens ao invés de cada um dos valores separados. Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada. No exemplo é possível ver as mesmas configurações do exemplo do flex-basis porém agora utilizando apenas a propriedade flex.

### Exemplos Práticos com Flexbox

- Flexbog

## Introdução ao Grid

### O que é CSS Grid?

CSS Grid é um modelo de layout bidimensional que permite a criação de layouts de grade, organizando elementos em linhas e colunas.

### Propriedades do Container Grid

- **display: grid;** Define um container como uma grade.
- **grid-template-columns;** Define a estrutura das colunas da grade.
- **grid-template-rows;** Define a estrutura das linhas da grade.
- **grid-gap;** Define o espaço entre as colunas e linhas.
- **grid-template-areas;** Permite a criação de layouts nomeados, associando áreas específicas da grade a nomes.
- **grid-template;** Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas.
- **grid-auto-columns;** Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida).
- **grid-auto-rows;** Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida).
- **grid-auto-flow;** Define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas.
- **grid;** Atalho geral para definir o grid: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow.
- **justify-content;** Justifica os itens do grid em relação ao eixo x (horizontal).
- **align-content;** Alinha os itens do grid em relação ao eixo y (vertical).
- **justify-items;** Justifica o conteúdo dos itens do grid em relação ao eixo x (horizontal). Justifica em relação a célula.
- **align-items;** Alinha o conteúdo dos itens do grid em relação ao eixo y (vertical). Alinha em relação a célula.

### Propriedades dos Itens Grid

- **grid-column;** Define a posição e o tamanho de um item ao longo das colunas.
- **grid-row;** Define a posição e o tamanho de um item ao longo das linhas.
- **grid-area;** Posiciona um item em uma área nomeada da grade.
- **justify-self;** Justifica o item do grid em relação ao eixo x (horizontal). Justifica em relação a célula.
- **align-self;** Justifica o item do grid em relação ao eixo y (vertical). Alinha em relação a célula.

### Exemplos Práticos com Grid

- WildBeast

## Comparando Flexbox e Grid

### Quando usar Flexbox?

Use Flexbox quando precisar de um layout unidimensional, como um menu de navegação, uma barra de ferramentas, ou uma lista de itens que devem se ajustar automaticamente ao espaço disponível.

### Quando usar Grid?

Use Grid quando precisar de um layout bidimensional, como uma página complexa com várias seções (cabeçalho, rodapé, conteúdo, barra lateral) ou uma grade de galeria de imagens.

## Conclusão

Flexbox e Grid são poderosos métodos de layout que se complementam. Ao dominar ambos, você terá as ferramentas necessárias para criar layouts flexíveis, responsivos e bem-estruturados.

## Contribuição

Contribuições são bem-vindas! Se você tem exemplos ou melhorias para este repositório, sinta-se à vontade para abrir um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
