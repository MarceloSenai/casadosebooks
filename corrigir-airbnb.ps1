Write-Host "🔧 Iniciando correção da pasta 'airbnb' como diretório comum..." -ForegroundColor Cyan

# Etapa 1: Remove submódulo do Git
git rm --cached airbnb
Write-Host "✅ Submódulo 'airbnb' removido do controle do Git." -ForegroundColor Green

# Etapa 2: Remove referências internas do submódulo
if (Test-Path ".git\modules\airbnb") {
    Remove-Item -Recurse -Force ".git\modules\airbnb"
    Write-Host "✅ Referência de submódulo interna apagada (.git\modules\airbnb)." -ForegroundColor Green
}

if (Test-Path ".gitmodules") {
    Remove-Item ".gitmodules"
    Write-Host "✅ Arquivo .gitmodules removido." -ForegroundColor Green
}

# Etapa 3: Remove pasta airbnb antiga
if (Test-Path "airbnb") {
    Remove-Item -Recurse -Force "airbnb"
    Write-Host "✅ Pasta antiga 'airbnb' deletada." -ForegroundColor Green
}

# Etapa 4: Copia conteúdo do airbnb_novo para nova pasta airbnb
New-Item -ItemType Directory -Path "airbnb" | Out-Null
Copy-Item -Path "airbnb_novo\*" -Destination "airbnb" -Recurse -Force
Write-Host "📂 Conteúdo copiado de 'airbnb_novo' para nova pasta 'airbnb'." -ForegroundColor Yellow

# Etapa 5: Adiciona tudo ao Git e faz commit/push
git add .
git commit -m "Corrige submódulo e reenvia pasta airbnb como diretório comum"
git push

Write-Host "`n🚀 Finalizado com sucesso! Verifique o GitHub e o Vercel." -ForegroundColor Green
