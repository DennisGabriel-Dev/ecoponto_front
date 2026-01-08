# Plano de Ação - EcoPonto

## Objetivo
Desenvolver uma aplicação web simples para localizar e cadastrar pontos de coleta seletiva no município de Coelho Neto - MA.

## Abordagem Simplificada
- **Sem backend**: Usar dados estáticos (JSON) e localStorage para persistência local
- **Cadastro**: Link para Google Forms (sem necessidade de autenticação complexa)
- **Mapa**: Usar Leaflet (gratuito, open source) ao invés de Google Maps
- **Design**: Interface moderna, responsiva e intuitiva

## Tarefas

### Fase 1: Configuração e Estrutura Base
- [ ] Instalar dependências necessárias (react-router-dom, leaflet, react-leaflet)
- [ ] Criar estrutura de rotas básica (Home/Mapa, Sobre/Informações, Cadastro)
- [ ] Criar arquivo de dados estáticos com pontos de coleta exemplo
- [ ] Configurar estilos globais com tema verde/ambiental

### Fase 2: Componente de Mapa
- [ ] Criar componente de mapa usando Leaflet
- [ ] Configurar mapa centrado em Coelho Neto - MA
- [ ] Exibir marcadores dos pontos de coleta no mapa
- [ ] Adicionar popup nos marcadores com informações do ponto (endereço, tipos de resíduos)

### Fase 3: Página Principal e Navegação
- [ ] Criar header/navbar com navegação entre páginas
- [ ] Criar página inicial com mapa interativo
- [ ] Adicionar filtros simples por tipo de resíduo (opcional, se necessário)
- [ ] Adicionar botão/link para cadastrar novo ponto (redireciona para Google Forms)

### Fase 4: Página Informativa
- [ ] Criar página "Sobre" ou "Informações" sobre descarte correto
- [ ] Adicionar conteúdo educativo sobre tipos de resíduos
- [ ] Incluir informações sobre a importância do descarte correto

### Fase 5: Integração com Google Forms
- [ ] Criar link/botão para formulário Google Forms
- [ ] Adicionar instruções sobre como cadastrar novo ponto
- [ ] (Opcional) Criar página intermediária explicando o processo

### Fase 6: Responsividade e Ajustes Finais
- [ ] Garantir que o mapa seja responsivo em dispositivos móveis
- [ ] Ajustar layout para diferentes tamanhos de tela
- [ ] Testar funcionalidades básicas
- [ ] Ajustar cores e estilos para tema ambiental

## Tecnologias a Utilizar
- **React** (já instalado)
- **React Router DOM** (para navegação)
- **Leaflet** + **React-Leaflet** (para mapas - gratuito)
- **CSS** (estilização simples, sem bibliotecas pesadas)

## Estrutura de Arquivos Proposta
```
src/
  ├── App.jsx (rotas principais)
  ├── components/
  │   ├── Map.jsx (componente do mapa)
  │   ├── Navbar.jsx (navegação)
  │   └── EcoPointMarker.jsx (marcador no mapa)
  ├── pages/
  │   ├── Home.jsx (página com mapa)
  │   ├── About.jsx (página informativa)
  │   └── Register.jsx (página de cadastro/link)
  ├── data/
  │   └── ecopoints.json (dados dos pontos de coleta)
  └── styles/
      └── (arquivos CSS)
```

## Dados Iniciais
Criar arquivo JSON com alguns pontos de exemplo em Coelho Neto - MA, incluindo:
- Nome do ponto
- Endereço
- Coordenadas (latitude/longitude)
- Tipos de resíduos aceitos
- Horário de funcionamento (se disponível)

## Revisão
_(Será preenchido após conclusão das tarefas)_

