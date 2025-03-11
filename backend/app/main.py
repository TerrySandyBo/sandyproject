from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .data.database import db
from .api import user_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
)

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 在生产环境中应该设置具体的域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 启动事件
@app.on_event("startup")
async def startup_db_client():
    await db.connect_db()

# 关闭事件
@app.on_event("shutdown")
async def shutdown_db_client():
    await db.close_db()

# 包含路由
app.include_router(
    user_router,
    prefix=f"{settings.API_V1_STR}/auth",
    tags=["authentication"]
) 