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

 const routes = {
            'sobre': { view: 'home-view', section: 'sobre' },
            'recursos': { view: 'home-view', section: 'recursos' },
            'contato': { view: 'home-view', section: 'contato' },
            'download': { view: 'download-view', section: null },
            '': { view: 'home-view', section: 'inicio' } // Rota padrão
        };

        // Função principal de navegação
        function navigate() {
            const hash = window.location.hash.substring(1);
            const route = routes[hash] || routes[''];
            
            // Esconde todas as views
            document.querySelectorAll('.content-view').forEach(view => {
                view.classList.remove('active');
            });
            
            // Mostra a view correta
            const activeView = document.getElementById(route.view);
            activeView.classList.add('active');
            
            // Scroll para a seção se necessário
            if (route.section) {
                document.getElementById(route.section).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        // Configura eventos
        document.getElementById('download-nav-btn').addEventListener('click', function(e) {
            e.preventDefault();
            window.location.hash = 'download';
        });
        
        // Configura eventos
        document.getElementById('home').addEventListener('click', function(e) {
            e.preventDefault();
            window.location.hash = 'home';
        });

        // Configura eventos
        document.getElementById('about').addEventListener('click', function(e) {
            e.preventDefault();
            window.location.hash = 'sobre';

            window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        });

        // Observa mudanças na hash
        window.addEventListener('hashchange', navigate);
        
        // Navegação inicial
        window.addEventListener('load', navigate);