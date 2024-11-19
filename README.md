# 📂 **MyReposits**

Um aplicativo React que permite ao usuário adicionar repositórios do GitHub à sua lista, exibir detalhes sobre eles e visualizar issues relacionadas. Este projeto utiliza a API do GitHub para buscar e gerenciar repositórios e issues.

---

## 🚀 **Tecnologias Utilizadas**
- React
- React Router DOM
- Styled Components
- Axios
- React Icons
- API do GitHub

---

## 📦 **Instalação**
```bash
# Clone este repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Crie um arquivo .env na raiz do projeto e adicione o token do GitHub
echo "REACT_APP_GITHUB_TOKEN=seu_token_aqui" > .env

# Inicie o projeto
npm start
```

--- 

## 🧭 **Funcionalidades**

### **Adicionar Repositórios**
- Pesquisa repositórios no GitHub.
- Adiciona repositórios à lista após realizar validações.

### **Listar Repositórios**
- Armazena repositórios no local storage para persistência.

### **Visualizar Issues**
- Exibe as issues abertas, fechadas ou todas para o repositório selecionado.
- Paginação para navegar entre as issues.

### **Deletar Repositórios**
- Remove um repositório da lista.

---

## 🔗 **Rotas**
- `/`: Página principal para listar e adicionar repositórios.
- `/repositorio/:repositorio`: Página para exibir detalhes e issues do repositório selecionado.

---

## 📄 **Explicação do Código**

### **Página Principal (Main)**
#### **Objetivo:** 
Permitir ao usuário adicionar e gerenciar repositórios.

#### **Destaques:**
1. **Estado Local:** 
   - `repositorios`: Lista de repositórios.
   - `newRepo`: Nome do repositório a ser adicionado.
   - `loading`: Estado de carregamento.

2. **Hooks:**
   - `useEffect`: 
     - Carrega repositórios do local storage ao montar o componente.
     - Salva repositórios no local storage ao atualizar a lista.
   - `useCallback`: 
     - Gerencia o envio do formulário.
     - Lida com a exclusão de repositórios.

3. **Funcionalidades:**
   - Busca repositórios via API.
   - Verifica duplicidade antes de adicionar.
   - Exibe mensagens de erro.
   - Remove repositórios da lista.

---

### **Página de Repositório (Repositorio)**
#### **Objetivo:** 
Exibir detalhes do repositório e suas issues.

#### **Destaques:**
1. **Estado Local:** 
   - `esseRepositorio`: Dados do repositório selecionado.
   - `issues`: Lista de issues do repositório.
   - `page`: Página atual das issues.
   - `filters`: Configurações de filtragem.
   - `filterIndex`: Índice do filtro ativo.
   - `loading`: Estado de carregamento.

2. **Hooks:**
   - `useEffect`: 
     - Busca informações do repositório e suas issues ao montar o componente.
     - Atualiza issues ao mudar filtros ou página.

3. **Funcionalidades:**
   - Filtragem e paginação das issues.
   - Exibe avatar, nome e descrição do repositório.

---

## 🛠️ **Configuração da API (api.js)**
- Configura o Axios com a base URL da API do GitHub para realizar as requisições.

---

## 🔗 **Configuração de Rotas (route.js)**
- Define as rotas principais do aplicativo utilizando `BrowserRouter` e `Routes`.

---

## 🖥️ **Componentes e Suas Funções**

### **Main Page**
1. **`handleSubmit`:**
   - Busca um repositório e adiciona-o à lista.
2. **`handleDelete`:**
   - Remove um repositório da lista.
3. **`handleInputChange`:**
   - Atualiza o estado do repositório a ser adicionado.

### **Repositorio Page**
1. **`load`:**
   - Busca informações do repositório e suas issues iniciais.
2. **`loadIssue`:**
   - Atualiza issues ao mudar filtros ou páginas.
3. **`handlePage`:**
   - Gerencia navegação entre páginas.
4. **`handleFilter`:**
   - Altera o filtro ativo para as issues.
