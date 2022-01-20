# Deployment

[PROD] API

## Dev


## Prod

1) Build Image

```docker-compose -f docker-compose.prod.yml build```

2) Run (To verify)
- First run : ```docker run -p 80:80 --name frontend spacecorner_frontend```

- Otherwise :
  ````docker start frontend````