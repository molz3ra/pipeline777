# 🚀 Calculadora Dinâmica com Pipeline CI/CD

![Status do Build](https://github.com/molz3ra/pipeline777/actions/workflows/ci.yml/badge.svg)
![Node Version](https://img.shields.io/badge/node-v20-blue)
![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)

Este projeto é uma demonstração de um fluxo completo de **Engenharia de Software Moderna**. Mais do que uma simples calculadora, ele implementa uma esteira automatizada de entrega de software (CI/CD).

## 🌐 Link do Projeto em Produção
O projeto está rodando ao vivo no Render:  
👉 [https://pipeline777.onrender.com](https://pipeline777.onrender.com)

---

## 🛠️ Tecnologias e Ferramentas

* **Runtime:** [Node.js](https://nodejs.org/) (Express)
* **Qualidade de Código:** [ESLint](https://eslint.org/) (Padronização e Linting)
* **Testes Automatizados:** [Jest](https://jestjs.io/) (Testes Unitários)
* **Containerização:** [Docker](https://www.docker.com/) (Ambiente Isolado)
* **CI (Integração Contínua):** [GitHub Actions](https://github.com/features/actions)
* **CD (Entrega Contínua):** [Render](https://render.com/)

---

## ⚙️ O Pipeline (Fluxo Automático)

Este repositório está configurado para que cada `git push` dispare as seguintes etapas:

1.  **Checkout:** O robô baixa o código mais recente.
2.  **Linting:** O ESLint verifica se o código segue as boas práticas.
3.  **Testes:** O Jest roda os testes unitários da lógica matemática.
4.  **Docker Build:** A imagem do container é construída para validar o ambiente.
5.  **Deploy Automático:** Se todos os passos acima passarem (Check Verde ✅), o **Render** atualiza o site automaticamente em produção.

---

## 🚀 Como rodar localmente

### Com Node.js instalado:
```bash
npm install
npm start
Acesse: http://localhost:3000

Com Docker:
Bash
docker build -t minha-calculadora .
docker run -p 3000:3000 minha-calculadora
👨‍💻 Autor
Desenvolvido por Lucas Mol como parte de um estudo aprofundado em DevOps e Automação.

---