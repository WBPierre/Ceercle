# Deployment

[PROD] Frontend & Admin

## Dev


## Prod

1) Build Image

```docker-compose -f docker-compose.prod.front.yml build```

2) Run (To verify)
- First run : ```docker run -p 80:80 --name frontend frontend-pro```

- Otherwise :
````docker start frontend````