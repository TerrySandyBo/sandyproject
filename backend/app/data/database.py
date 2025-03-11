from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional
from ..core.config import settings

class Database:
    client: Optional[AsyncIOMotorClient] = None
    
    @classmethod
    async def connect_db(cls):
        cls.client = AsyncIOMotorClient(settings.MONGODB_URL)
        
    @classmethod
    async def close_db(cls):
        if cls.client is not None:
            cls.client.close()
            
    @classmethod
    def get_db(cls):
        return cls.client[settings.DB_NAME]

db = Database() 