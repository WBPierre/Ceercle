# Ceercle
Project created in 2022 as a company handling flex office during COVID.
(Originally hosted on Gitlab)

## Requirements

- Docker
- Git
- Node ^17.0.1

## Installation

Go to project directory and run :

```bash
docker-compose -f docker-compose.dev.yml up
```

If you don't need the console, add ```-d``` to up in order to run it in background.


### Troubleshooting

- If you're using Windows with Docker and WSL2, modify your : ```/etc/wsl.conf``` inside your WSL System.
- Add to the file :
```bash
[automount]
root = /
options = "metadata"
```

Save, reboot, and retry

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)