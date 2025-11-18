# Apresentação Performance Web

Aplicação React para visualizar slides HTML em formato de apresentação.

## Funcionalidades

- ✅ Navegação com setas do teclado (← → ↑ ↓)
- ✅ Navegação com barra de espaço
- ✅ Botões de navegação na interface
- ✅ Indicador de progresso
- ✅ Miniaturas dos slides para navegação rápida
- ✅ Atalhos de teclado:
  - `Home`: Ir para o primeiro slide
  - `End`: Ir para o último slide

## Como usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

## Adicionar novos slides

1. Crie um novo componente React em `src/slides/SlideN.jsx` (onde N é o número do slide)
2. Use o componente `SlideBase` como base:

```jsx
import SlideBase from '../components/SlideBase'
import '../components/SlideComponents.css'

function SlideN() {
  return (
    <SlideBase subtitle="Título do Slide">
      {/* Conteúdo do slide aqui */}
    </SlideBase>
  )
}

export default SlideN
```

3. Importe e adicione o componente no array `SLIDES` em `src/App.jsx`:

```jsx
import SlideN from './slides/SlideN'

const SLIDES = [
  Slide1,
  Slide2,
  // ... outros slides
  SlideN, // Adicione aqui
]
```

## Estrutura do projeto

```
├── src/
│   ├── components/
│   │   ├── SlideBase.jsx           # Componente base para slides
│   │   ├── SlideBase.css           # Estilos do componente base
│   │   ├── SlideComponents.css    # Estilos compartilhados dos slides
│   │   ├── SlideViewer.jsx         # Componente principal do visualizador
│   │   └── SlideViewer.css         # Estilos do visualizador
│   ├── slides/
│   │   ├── Slide1.jsx              # Componentes individuais dos slides
│   │   ├── Slide2.jsx
│   │   └── ...                     # (Slide3 até Slide14)
│   ├── App.jsx                     # Componente raiz
│   ├── App.css                     # Estilos globais
│   ├── main.jsx                    # Ponto de entrada
│   └── index.css                   # Reset CSS
├── index.html                      # HTML principal
├── package.json
└── vite.config.js
```

## Características

- ✅ **Componentes React**: Todos os slides são componentes React reutilizáveis
- ✅ **Totalmente responsivo**: Adapta-se a diferentes tamanhos de tela
- ✅ **Navegação por teclado**: Setas, espaço, Home e End
- ✅ **Design moderno**: Interface limpa e profissional
- ✅ **Fácil de estender**: Estrutura modular para adicionar novos slides

