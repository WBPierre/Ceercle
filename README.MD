# Ceercle


Version [0.1.0]

## Requirements

- Docker
- Git
- Node ^17.0.1

### Starting up

Go to project directory and run :
```docker-compose -f docker-compose.dev.yml up```

If you don't need the console, add ````-d```` to up in order to run it in background.

### Troubleshooting

- If you're using Windows with Docker and WSL2, modify your : ````/etc/wsl.conf```` inside your WSL System.
- Add to the file :   
```
[automount]
root = /
options = "metadata"
```

Save, reboot, and retry

### How to use Git


Rules :
[Never push on main branch]

Commands : 
- ````git clone https://gitlab.com/l585/spacecorner.git````

- ```git pull``` : to fetch any changes

- ```git branch``` : check on which branch you are
- ```git checkout -b {BRANCH_NAME}``` : create a branch and go to it
- ````git add {FILES | . }```` : add giles to git commit
- ````git commit -m "{MESSAGE}"```` : add a message to commit
- ```git push``` : push to gitlab

- Go to gitlab to merge your branch if necessary
  
