# Deployment

Passo a passo para construir localmente o ambiente da aplicação da lanchonete em ambiente Linux ou via WSL.

## Inicializar o cluster do Kubernetes utilizando Minikube
1. Executar `sudo apt update -y`
2. Instalar dependências `sudo apt install curl wget apt-transport-https -y`
3. Realizar download do binário do Minikube `curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64` 
4. Instalar Minikube `sudo install minikube-linux-amd64 /usr/local/bin/minikube`
5. Verificar se a instação foi bem sucedida `minikube version`
6. Inicializar o minikube via docker `minikube start --vm-driver docker`
7. Verificar o status do cluster `minikube status`

## Instalar o kubectl
1. Realizar o download do binário do kubectl `curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"`
2. Tornar o binário executável `chmod +x ./kubectl`
3. Mover o binário para o /bin `sudo mv kubectl /usr/local/bin/`
4. Verificar se o comando do kubectl está funcionando `kubectl version --client --output=yaml`
5. Acessar as informações do cluster do minikube `kubectl cluster-info`

## Realizar o deploy das metricas do Kubernetes
1. Criar todos os recursos referentes as metricas `kubectl apply -f deployments/metrics/`
2. Verificar metricas do cluster `kubectl top nodes`

## Realizar o deploment do banco de dados
1. Criar namespace para o database `kubectl create namespace lanchonete`
2. Criar todos os recursos referentes ao banco de dados `kubectl apply -f deployments/database/`
3. Verificar se o database está funcionando sem erros `kubectl get pods -n lanchonete`

## Realizar deployment da aplicação
1. Criar todos os recursos referentes a API `kubectl apply -f deployments/app/`
2. Verficar se a aplicação está funcionando sem erros `kubectl get pods -n lanchonete`

## Conectar na aplicação via port-forward e enviar requests
1. Executar `kubectl port-forward -n lanchonete services/app 7000:80`
2. Utilizar a collection do [postman](https://github.com/teamG11/lanchonete/blob/main/tooling/postman/lanchonete.postman_collection.json) para enviar requests a aplicação (seguir a ordem numérica das requests).