from typing import Optional

from redis import Redis


class RedisDAO:
    _redis_instance: Optional["RedisDAO"] = None

    def __init__(self):
        # parse data from .env
        self.redis = Redis(host="redis", port=6379)
        self.drop_visitors()

    def drop_visitors(self):
        self.redis.set("visitors", 0)

    def __new__(cls, *args, **kwargs) -> "RedisDAO":
        if cls._redis_instance is None:
            cls._redis_instance = super().__new__(cls)
        return cls._redis_instance

    def new_visitor(self):
        self.redis.incr("visitors")


redis_db = RedisDAO()
