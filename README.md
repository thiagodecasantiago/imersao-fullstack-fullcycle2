# Desafios 2 e 3 da Imersão Full Stack && Full Cycle 2.0

## Informações dos desafios:
### Desafio 2 - Backend e frontend

Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.

Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos
- A aplicação Nest.js precisa rodar na porta 3000
- Aplicação React.js precisa rodar na porta 3001.
- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.
- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude

#### Desafio 3 - Deploy no Kubernetes

Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.

Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).

## Funcionamento:
### Desafio 2 - Backend e frontend

Na pasta raiz do repositório:
```docker-compose up -d```

Para parar:
```docker-compose down```

### Desafio 3 - Deploy no Kubernetes
Na pasta raiz do repositório, depois de instalar o kind:
```
kind create cluster
kubectl cluster-info --context kind-kind
cd k8s/backend
kubectl apply -f deploy-yaml -f service.yaml
kubectl port-forward service/backend-service 3000 &
cd ../frontend
kubectl apply -f deploy-yaml -f service.yaml
kubectl port-forward service/frontend-service 3001:80 &
```
Para parar:
```
> fg
CTRL+C
> fg
CTRL+C
```
