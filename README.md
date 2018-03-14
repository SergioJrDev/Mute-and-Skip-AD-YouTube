# Mute and Skip AD YouTube
Mute e pule as propagandas do YouTube automaticamente.

## Motivo
É muito incômodo ser bombardeado de propagandas a todo mundo, principalmente quando você está ouvindo uma playlist no YouTube. Por isso, criei esse script para mutar a propaganda e pular ela depois dos 5 segundos.

## Objetivo
O objetivo é criar uma extensão pro Chrome e Firefox e poder executa-lo automaticamente entrar num vídeo do YouTube. Tutorial: https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/.

## GetStarter
Por enquanto, para usar o script, basta copia-lo e usa-lo no console do YouTube.

```js
(function() {
    const mute = document.querySelector('.ytp-mute-button.ytp-button');
    const skip = document.querySelector('.videoAdUiSkipButton');
    const ad = document.querySelector('.ad-interrupting');
    
    if(ad) {
        mute.click();
        setTimeout(() => {
            skip.click();
            mute.click();
        }, 6000);
    }
})();
```

Sim, é algo bem simples.