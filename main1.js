class ChatBot {
    constructor() {
        this.initializeElements();
        this.initializeEventListeners();
        this.setupAutoResize();
    }

    // Initialize DOM Elements
    initializeElements() {
        // Main containers
        this.chatContainer = document.getElementById('chatContainer');
        
        // Form elements
        this.chatForm = document.querySelector('.chat-form');
        this.messageInput = document.querySelector('.chat-input');
        
        // Buttons
        this.sendButton = document.querySelector('.send-btn');
        this.voiceButton = document.querySelector('.voice-btn');
        this.attachmentButton = document.querySelector('.attachment-btn');
        this.clearButton = document.querySelector('.clear-btn');
        
        // Modals
        this.voiceModal = document.getElementById('voiceModal');
        
        // Mobile elements
        this.menuButton = document.querySelector('.menu-btn');
        this.sidebar = document.querySelector('.sidebar');
    }

    // Set up event listeners
    initializeEventListeners() {
        // Form submission
        this.chatForm.addEventListener('submit', (e) => this.handleSubmit(e));
        this.messageInput.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Button clicks
        this.sendButton.addEventListener('click', () => this.handleSubmit(event));
        this.voiceButton.addEventListener('click', () => this.toggleVoiceRecording());
        this.attachmentButton.addEventListener('click', () => this.handleAttachment());
        this.clearButton.addEventListener('click', () => this.confirmClearChat());

        // Mobile menu
        if (this.menuButton) {
            this.menuButton.addEventListener('click', () => this.toggleSidebar());
        }

        // Voice modal close
        if (this.voiceModal) {
            const stopButton = this.voiceModal.querySelector('.stop-recording-btn');
            stopButton.addEventListener('click', () => this.stopVoiceRecording());
        }

        // Click outside sidebar to close (mobile)
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    }

    // Auto-resize textarea
    setupAutoResize() {
        this.messageInput.addEventListener('input', () => {
            this.messageInput.style.height = 'auto';
            this.messageInput.style.height = this.messageInput.scrollHeight + 'px';
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        const message = this.messageInput.value.trim();
        
        if (message) {
            // Add user message
            this.addMessage({
                type: 'user',
                content: message
            });
            
            // Clear input
            this.messageInput.value = '';
            this.messageInput.style.height = 'auto';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Process message and get response
            this.processMessage(message);
        }
    }

    // Handle enter key press
    handleKeyPress(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    // Add message to chat
   // Update fungsi addMessage
addMessage({ type, content }) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type} group`; // Tambahkan class group

    const time = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });

    const bubbleContent = `
        <div class="message-bubble ${type} hover:shadow-md transition-all">
            <div class="flex items-center ${type === 'user' ? 'justify-end' : ''} gap-2 mb-1">
                <span class="text-xs opacity-60">${time}</span>
            </div>
            <p class="text-[15px] leading-relaxed">${content}</p>
        </div>
        ${this.getMessageActions(type)}
    `;

    messageDiv.innerHTML = bubbleContent;
    this.chatContainer.appendChild(messageDiv);
    this.scrollToBottom();
}

    // Get message actions HTML
    getMessageActions(type) {
        if (type === 'user') {
            return `
                <div class="flex items-center justify-end gap-3 mt-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button class="message-action-btn">
                        <i class="fas fa-edit text-xs"></i>
                        <span class="text-xs">Edit</span>
                    </button>
                    <button class="message-action-btn">
                        <i class="fas fa-copy text-xs"></i>
                        <span class="text-xs">Copy</span>
                    </button>
                </div>
            `;
        }

        const actionButtons = actions.map(action => `
            <button class="action-btn">
                <i class="fas fa-${action.icon}"></i>
                ${action.text}
            </button>
        `).join('');

        return `
            <div class="message-actions">
                ${actionButtons}
                <button class="action-btn copy-btn">
                    <i class="fas fa-copy"></i>
                    Copy
                </button>
            </div>
        `;
    }

    // Show typing indicator
    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        this.chatContainer.appendChild(indicator);
        this.scrollToBottom();
    }

    // Hide typing indicator
    hideTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // Process message and get response
    async processMessage(message) {
        // Simulate AI processing delay
        setTimeout(() => {
            this.hideTypingIndicator();
            
            // Get response based on message
            const response = this.generateResponse(message);
            
            // Add bot response
            this.addMessage({
                type: 'bot',
                content: response
            });
        }, 1500);
    }

    // Generate response (replace with actual AI implementation)
    generateResponse(message) {
        const lowercaseMsg = message.toLowerCase();
        
        if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
            return "Hello! How can I assist you today?";
        } else if (lowercaseMsg.includes('help')) {
            return "I'm here to help! What would you like to know?";
        } else if (lowercaseMsg.includes('bye')) {
            return "Goodbye! Feel free to return if you need more assistance.";
        } else {
            return "I understand. Could you please provide more details about what you'd like to know?";
        }
    }

    // Voice recording handlers
    toggleVoiceRecording() {
        this.voiceModal.style.display = 'flex';
        // Add actual voice recording logic here
    }

    stopVoiceRecording() {
        this.voiceModal.style.display = 'none';
        this.showToast('Voice recording feature coming soon!', 'info');
    }

    // Handle file attachment
    handleAttachment() {
        // Implement file attachment logic
        this.showToast('File attachment coming soon!', 'info');
    }

    // Clear chat confirmation
    // Di class ChatBot, update fungsi confirmClearChat
confirmClearChat() {
    const modal = document.getElementById('clearChatModal');
    const modalContainer = modal.querySelector('.modal-container');
    const cancelBtn = document.getElementById('cancelClear');
    const confirmBtn = document.getElementById('confirmClear');

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Handle cancel
    const closeModal = () => {
        modalContainer.classList.add('closing');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            modalContainer.classList.remove('closing');
        }, 300);
        
        // Remove event listeners saat modal ditutup
        cancelBtn.removeEventListener('click', closeModal);
        confirmBtn.removeEventListener('click', handleConfirm);
        modal.removeEventListener('click', handleOutsideClick);
    };

    // Handle confirm
    const handleConfirm = () => {
        this.chatContainer.innerHTML = '';
        closeModal();
        this.showToast('Chat history cleared successfully', 'success');
    };

    // Handle outside click
    const handleOutsideClick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };

    // Add event listeners
    cancelBtn.addEventListener('click', closeModal, { once: true });
    confirmBtn.addEventListener('click', handleConfirm, { once: true });
    modal.addEventListener('click', handleOutsideClick, { once: true });
}

    // Mobile sidebar toggle
    toggleSidebar() {
        this.sidebar?.classList.toggle('active');
    }

    // Handle click outside sidebar
    handleOutsideClick(e) {
        if (this.sidebar?.classList.contains('active') && 
            !e.target.closest('.sidebar') && 
            !e.target.closest('.menu-btn')) {
            this.sidebar.classList.remove('active');
        }
    }

    // Toast notification
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        toast.innerHTML = `
            <i class="fas fa-${this.getToastIcon(type)}"></i>
            <span>${message}</span>
        `;

        const container = document.getElementById('toastContainer');
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Get toast icon based on type
    getToastIcon(type) {
        switch (type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'warning': return 'exclamation-triangle';
            default: return 'info-circle';
        }
    }

    // Utility to scroll chat to bottom
    scrollToBottom() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
}



// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatBot = new ChatBot();
});


// Di main.js, tambahkan
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle.querySelector('i');
        this.themeText = this.themeToggle.querySelector('.theme-text');
        this.init();
    }

    init() {
        // Check saved theme or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            this.updateToggleUI(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateToggleUI('dark');
        }

        // Add event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateToggleUI(newTheme);
    }

    updateToggleUI(theme) {
        this.themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        this.themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

// Initialize theme manager when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
});