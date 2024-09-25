# Manual de Uso das Funções Comuns

Este documento tem como objetivo explicar de forma simples as funções disponíveis no código fornecido, que faz parte de um bot de mensagens. O código foi desenvolvido por [guiireal](https://github.com/guiireal). Abaixo, você encontrará uma descrição de cada função, como ela funciona e exemplos de uso.

## Estrutura do Código

O código define uma série de funções que facilitam o envio e o recebimento de mensagens, além de gerenciar arquivos de mídia (como imagens, vídeos e figurinhas) no contexto de um bot de mensagens.

### Funções Principais

#### 1. `sendText(text)`

* **Descrição**: Envia uma mensagem de texto para o usuário.
* **Como Funciona**: Adiciona um emoji antes do texto e envia a mensagem para o `remoteJid`.
* **Exemplo**:
  
      await sendText("Olá, mundo!");
  

#### 2. `sendReply(text)`

* **Descrição**: Responde a uma mensagem específica.
* **Como Funciona**: Envia uma mensagem de texto como resposta à mensagem recebida (`webMessage`).
* **Exemplo**:
  
      await sendReply("Obrigado pela sua mensagem!");
  

#### 3. `sendReact(emoji)`

* **Descrição**: Envia uma reação (emoji) à mensagem recebida.
* **Como Funciona**: Adiciona uma reação à mensagem específica usando o emoji fornecido.
* **Exemplo**:
  
      await sendReact("👍");
  

#### 4. `downloadImage(webMessage, fileName)`

* **Descrição**: Baixa uma imagem da mensagem recebida.
* **Como Funciona**: Usa a função `download` para salvar a imagem em um arquivo.
* **Exemplo**:
  
      await downloadImage(webMessage, "imagem.png");
  

#### 5. `downloadVideo(webMessage, fileName)`

* **Descrição**: Baixa um vídeo da mensagem recebida.
* **Como Funciona**: Usa a função `download` para salvar o vídeo em um arquivo.
* **Exemplo**:
  
      await downloadVideo(webMessage, "video.mp4");
  

#### 6. `sendStickerFromFile(file)`

* **Descrição**: Envia uma figurinha (sticker) a partir de um arquivo.
* **Como Funciona**: Lê o arquivo da figurinha e envia para o usuário.
* **Exemplo**:
  
      await sendStickerFromFile("sticker.webp");
  

#### 7. `sendImageFromFile(file)`

* **Descrição**: Envia uma imagem a partir de um arquivo.
* **Como Funciona**: Lê o arquivo da imagem e envia para o usuário.
* **Exemplo**:
  
      await sendImageFromFile("imagem.png");
  

#### 8. `sendVideoFromFile(file)`

* **Descrição**: Envia um vídeo a partir de um arquivo.
* **Como Funciona**: Lê o arquivo do vídeo e envia para o usuário.
* **Exemplo**:
  
      await sendVideoFromFile("video.mp4");
  

### Funções de Reação e Resposta

As funções `sendSuccesReact`, `sendWaitReact`, `sendWarningReact` e `sendErrorReact` enviam diferentes reações para indicar o status da operação (sucesso, espera, aviso e erro, respectivamente). Elas podem ser usadas em conjunto com as funções de resposta, como `sendSuccesReply(text)`.

#### Exemplo de Uso

    await sendWaitReply("Aguarde um momento, estou processando sua solicitação...");

### Considerações Finais

Estas funções são úteis para gerenciar interações em um bot de mensagens, permitindo responder a mensagens, enviar reações e gerenciar arquivos de mídia de forma simples e eficiente.

Se você tiver mais perguntas sobre como usar estas funções ou sobre JavaScript em geral, fique à vontade para perguntar!
