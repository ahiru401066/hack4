FROM python:3.11-slim-buster

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/* 

# コンテナ内の作業ディレクトリを設定
WORKDIR /app/backend

# 依存関係ファイル（requirements.txt）を先にコピー
COPY requirements.txt ./

# 依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースコードを全てコピー
# COPY . .

# FastAPIのサーバーを起動
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]