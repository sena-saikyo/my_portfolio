FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# 依存ファイルを先にコピーしてインストール
COPY package*.json ./
RUN npm install

# 残りのファイルをコピー
COPY . .

# Viteのポートを公開
EXPOSE 5173

# Vite 開発サーバーをホスト指定で起動
CMD ["npm", "run", "dev", "--", "--host"]
