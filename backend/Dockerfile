FROM python:3.11

WORKDIR /app/backend

COPY requirements.txt .

RUN pip install -U pip
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y redis-server
COPY . .
#gunicorn main:app --workers=2 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
CMD ["gunicorn", "main:app", "--workers=2", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000"]