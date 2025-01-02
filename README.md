# aulas
pasta para salvar aulas


ALGUNS COMANDOS MAIS UTILIZADOS:

Todos os comandos devem ser precedidos da palavra git

INIT: inicia um arquivo .git no repositório selecionado. Para utilizar o Git esse é o primeiro comando que deve ser utilizado.
STATUS: Lista os arquivos do diretório e o status de cada um.
ADD: Adiciona o(s) arquivo(s) para o estado Staged. É utilizado com o nome do arquivo, ou com o * para adicionar todos os arquivos da branch.
DIFF: Lista todas as alterações feitas no arquivo.
COMMIT: Comita as alterações feitas nos arquivos e retorna para o estado Unmodified. É utilizado da seguinte maneira: git commit -m "mensagem do commit". Todos os commits devem ter uma breve mensagem sobre a alteração que foi feita, por isso, é importante fazer commits regulares a cada alteração importante.
RM: Exclui um arquivo.
LOG: Exibe o histórico dos últimos commits. Não tem a mesma função do comando DIFF, pois o comando DIFF lista as alterações no ARQUIVO e o comando LOG lista os útlimos COMMITS realizados.
RESTORE: Retorna ao estado anterior.
BRANCH: Cria uma nova branch. É utilizado da seguinte maneira: git branch nomedanovabranch
FETCH: Mostra as diferenças entre os arquivos remotos e os locais.
PULL: Pega arquivos remotos e merge com os arquivos locais. Cuidado ao utilizar esse comando, pois ele merge as alterações sem perguntar antes. É recomendado utilizar o comando FETCH antes para visualizar as alterações que serão mescladas com os arquivos locais.
PUSH: Envia os arquivos locais para o repositório remoto. É usado da seguinte maneira: git push origin nomedabranch
CHECKOUT: Muda da branch atual para a branch escolhida. É utilizado da seguinte maneira: git checkout nomedabranch
MERGE: Mescla duas branches. É utilizado da seguinte maneira: git merge nomedabranch o nome da branch é o nome da branch que deseja dar o merge com a branch atual.


A maioria das tags tem seus próprios atributos. Contudo, existem alguns atributos genéricos que podem ser utilizados na maioria das tags HTML, vamos estudá-los:

class=”…“ – Atribui uma classe ao elemento (uma classe pode ser utilizada para um ou mais elementos);
id=”…“ – Atribui um id ao elemento (um id deve ser único, ou seja atribuído a um único elemento);
style=”…” – Permite incluir elementos CSS (estilos) dentro da tag;
lang=”…” – Define o idioma principal do elemento;
title=”…” – Define o título do elemento;
alt=”…” – Define um texto alternativo e, por isso, é muito utilizado em imagens, auxilia nas práticas de SEO;
hidden – Oculta o elemento;
align=”…” – Permite definir o padrão de alinhamento desse elemento, como por exemplo: right, center, left e justify;
width=”…” – Define uma largura para o elemento;
height=”…” – Define uma altura para o elemento.


# pet-love

as tags HTML mais usadas:

<!DOCTYPE html>: Declara o tipo de documento e a versão do HTML.

<html>: Elemento raiz que envolve todo o conteúdo da página.

<head>: Contém metadados, links para CSS, scripts e o título da página.

<title>: Define o título da página, que aparece na aba do navegador.

<meta>: Fornece metadados sobre a página, como charset e descrição.

<link>: Usado para vincular arquivos externos, como folhas de estilo CSS.

<script>: Inclui scripts JavaScript na página.

<body>: Contém todo o conteúdo visível da página, como texto, imagens e links.

<h1>, <h2>, <h3>, etc.: Tags de cabeçalho que definem títulos e subtítulos, com <h1> sendo o mais importante.

<p>: Define um parágrafo de texto.

<a>: Cria um link para outra página ou recurso.

<img>: Insere uma imagem na página. Deve incluir o atributo alt.

<ul>: Cria uma lista não ordenada (com marcadores).

<ol>: Cria uma lista ordenada (numerada).

<li>: Define um item em uma lista (usado dentro de <ul> ou <ol>).

<form>: Cria um formulário para entrada de dados do usuário.

<input>: Define um campo de entrada em um formulário.

<button>: Cria um botão que pode ser clicado.

<table>: Cria uma tabela.

<tr>, <th>, <td>: Usados dentro de <table> para definir linhas, cabeçalhos e células de dados, respectivamente.
