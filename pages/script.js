   // JavaScript opcional para melhorar a experiência
   document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        
        // Atualiza a URL sem recarregar a página
        history.pushState(null, null, targetId);
    });
});