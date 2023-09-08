from typing import TypeAlias

from fastapi import APIRouter
from starlette.requests import Request

from dao.redis_db import redis_db

TOTAL_VISITORS: TypeAlias = int
router = APIRouter(
    tags=["Visitors"],
)


@router.post("/new_visitor")
async def new_visitor(request: Request) -> dict:
    """ Add new visitor(as +1) to a total visitors counter"""
    redis_db.new_visitor()  # add new visitor
    return {"status": "OK"}


@router.post("/total_visitors")
async def total_visitors(request: Request) -> TOTAL_VISITORS:
    """ Return visitors quantity as a number"""
    return int(redis_db.redis.get("visitors"))
