document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    // 存储所有需要翻译的文本
    const translations = {
        'en': {
            'home': 'Home',
            'about': 'About',
            'projects': 'Projects',
            'blog': 'Blog',
            // ... 其他翻译文本
        },
        'zh': {
            'home': '首页',
            'about': '关于',
            'projects': '项目',
            'blog': '博客',
            // ... 其他翻译文本
        }
    };
    
    // 获取所有可翻译元素
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    // 切换语言函数
    function toggleLanguage() {
        const currentLang = langText.textContent;
        const newLang = currentLang === 'EN' ? 'CN' : 'EN';
        const translateTo = currentLang === 'EN' ? 'zh' : 'en';
        
        // 更新按钮文本
        langText.textContent = newLang;
        
        // 更新所有可翻译元素
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[translateTo][key];
        });
        
        // 保存语言偏好
        localStorage.setItem('preferred-language', translateTo);
    }
    
    // 绑定点击事件
    langToggle.addEventListener('click', toggleLanguage);
    
    // 初始化语言设置
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang === 'zh') {
        toggleLanguage();
    }
}); 