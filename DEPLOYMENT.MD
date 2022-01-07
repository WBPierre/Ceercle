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