document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userMessage = messageInput.value.trim();
        if (userMessage === '') return;
        
        addMessage(userMessage, 'user-message', 'Вы');
        
        messageInput.value = '';
        
        setTimeout(() => {
            const response = generateResponse(userMessage);
            addMessage(response, 'system-message', 'Поддержка');
        }, 1000);
    });
    
    function addMessage(text, messageClass, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', messageClass);
        
        const senderElement = document.createElement('div');
        senderElement.classList.add('sender');
        senderElement.textContent = sender + ':';
        senderElement.style.fontWeight = 'bold';
        senderElement.style.marginBottom = '5px';
        
        const textElement = document.createElement('div');
        textElement.textContent = text;
        
        messageElement.appendChild(senderElement);
        messageElement.appendChild(textElement);
        messagesContainer.appendChild(messageElement);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function generateResponse(userMessage) {
        const responses = [
            "Спасибо за ваше сообщение. Мы уже работаем над вашим запросом.",
            "Поняли ваш вопрос. Наш специалист скоро с вами свяжется.",
            "Благодарим за обратную связь! Мы ценим ваше мнение.",
            "Ваш запрос принят в обработку. Ожидайте ответ в течение 24 часов.",
            "Мы получили ваше сообщение. Спасибо, что обратились к нам!"
        ];
        
        if (userMessage.toLowerCase().includes('привет') || userMessage.toLowerCase().includes('здравствуйте')) {
            return "Здравствуйте! Чем мы можем вам помочь?";
        } else if (userMessage.toLowerCase().includes('спасибо')) {
            return "Всегда рады помочь! Обращайтесь, если у вас будут ещё вопросы.";
        } else if (userMessage.toLowerCase().includes('проблема') || userMessage.toLowerCase().includes('ошибка')) {
            return "Сообщите подробнее о проблеме, и мы постараемся её решить как можно скорее.";
        } else if (userMessage.toLowerCase().includes('время работы')) {
            return "Наша служба поддержки работает с 9:00 до 18:00 по будним дням.";
        }
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
});
