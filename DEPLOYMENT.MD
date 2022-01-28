# Deploy information


# Evolution [TODO]:
- Create an instance EC2 for admin only
- Isolate database in an AWS Aurora
- Connect EC2 api to Aurora
- Connect EC2 admin to api
- Connect EC2 app to api


## Currently 
### On stage
- Push and merge on stage trigger CI/CD on EC2


## How to

### Change AWS EC2
In CI/CD variables : 
- Update new server IP 
- Update new server private key ```~/.ssh/id_rsa```

In your Gitlab account :
- Add ssh public key to your ssh keys : ````cat ~/.ssh/id_rsa.pub````

On server :  
```cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys```

### Deploy PROD
#### FRONTEND
- Main command is ````sudo docker-compose -f docker-compose.prod.front.yml up --build```` (Add the ```-d``` to up to detach)
- It should keep the certificates generated from certbot. If not, remove the HTTPS part of nginx conf. Then up without build. Then move back the HTTPS part and use this command : 
 ```sudo docker-compose -f docker-compose.prod.front.yml up frontend```
- Verify everything runs smoothly without error.
- Stop it with ````CTRL+C````
- Run ```sudo docker-compose -f docker-compose.prod.front.yml up -d frontend```

#### API
The API is running behind a nginx server. To update API code do the following : 
- ````docker-compose -f docker-compose.prod.api.yml stop api````
- git pull
- ````docker-compose -f docker-compose.prod.api.yml up api````
- Verify everything runs smoothly without error.
- Stop it with ````CTRL+C````
- Run ```sudo docker-compose -f docker-compose.prod.api.yml up -d api```

(You should not have to stop nginx server)

### Ref 
#### Tuto certbot
https://mindsers.blog/fr/post/configurer-https-nginx-docker-lets-encrypt/