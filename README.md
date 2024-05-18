# Projeto de Teste Técnico - Sistema de Autenticação e Perfil de Usuário

## Visão Geral

Este projeto é um sistema de autenticação e perfil de usuário desenvolvido como parte de um teste técnico para uma vaga de desenvolvedor na B2BIT. O sistema permite que os usuários façam login, visualizem suas informações pessoais e façam logout. O projeto utiliza diversas tecnologias e práticas recomendadas, incluindo Axios interceptors, testes E2E com Cypress, TypeScript, Tailwind CSS, e aruitetura MVC.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Axios**: Cliente HTTP para fazer requisições ao backend.
- **Cypress**: Ferramenta para testes E2E.
- **Tailwind CSS**: Framework de CSS utilitário para estilização.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **Local Storage**: Para armazenar tokens de autenticação.
- **Deploy**: Aplicação foi implantada utilizando [Vercel](https://vercel.com/)

## Estrutura de Pastas

├── assets/
├── components/
│   ├── Input.tsx
│   ├── LogoutButton.tsx
├── controllers/
│   ├── AuthController.ts
│   ├── UserProfileController.ts
├── routes/
│   ├── AppRouter.tsx
│   ├── ProtectedRoute.tsx
├── types/
│   ├── apiResponses.ts
│   ├── userProfile.ts
├── utils/
│   ├── axiosInterceptors.ts
├── views/
│   ├── SignInPage.tsx
│   ├── UserProfilePage.tsx


# Funcionalidades

## Autenticação

O sistema permite que os usuários façam login utilizando o endpoint de autenticação. As credenciais são enviadas para a API, e os tokens recebidos são armazenados no Local Storage. Um interceptor do Axios é utilizado para adicionar o token JWT a todas as requisições subsequentes.

## Perfil de Usuário

Após o login, o usuário é redirecionado para a página de perfil, onde suas informações pessoais são exibidas. As informações são obtidas da API utilizando o token JWT armazenado.

## Logout

O botão de logout, localizado no cabeçalho da aplicação, permite que o usuário saia do sistema. Ao clicar no botão, os tokens de autenticação são removidos do Local Storage, e o usuário é redirecionado para a página de login.

## Testes E2E com Cypress

Os testes E2E garantem que o fluxo de autenticação funcione conforme o esperado. Os testes incluem:

- Teste de login com credenciais válidas.
- Teste de erro com credenciais inválidas.
- Teste de logout.

# Conclusão

Este projeto demonstra a implementação de um sistema de autenticação com React, utilizando TypeScript para tipagem estática, Axios interceptors para manuseio de requisições HTTP, Tailwind CSS para estilização, e Cypress para testes E2E. A aplicação está configurada para ser facilmente implantada em plataformas de hospedagem modernas.
