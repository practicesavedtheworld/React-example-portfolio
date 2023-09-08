from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from visitors.router import router as visitors_router

app = FastAPI(title="Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "https://localhost:3000",
                   "http://localhost:10000",
                   "https://localhost:10000",
                   "https://localhost:8000",
                   "http://localhost:8000",
                   ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(visitors_router)
