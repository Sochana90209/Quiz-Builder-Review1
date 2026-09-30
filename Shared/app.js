(function () {
    const storage = window.QBStorage;

    const paths = {
        signup: '../Authentication/signup.html',
        login: '../Authentication/login.html',
        role: '../Authentication/role.html',
        dashboard: '../Admin/dashboard.html',
        create: '../Admin/create.html',
        quizzes: '../Admin/quizzes.html',
        results: '../Admin/creator-results.html',
        profile: '../Admin/profile.html',
        join: '../User/join.html',
        play: '../User/play.html',
        result: '../User/result.html'
    };

    function go(page) {
        location.href = paths[page] || page;
    }

    function requireRole(role) {
        const user = storage.session();

        if (!user) {
            go('login');
            return null;
        }

        if (role && user.role !== role) {
            go(user.role === 'creator' ? 'dashboard' : 'join');
            return null;
        }

        return user;
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>'"]/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[character]));
    }

    function createTopbar() {
        const user = storage.session();
        const topbar = document.querySelector('[data-topbar]');

        if (!topbar) return;

        if (!user) {
            topbar.innerHTML = '';
            return;
        }

        const home = user.role === 'creator' ? paths.dashboard : paths.join;
        const avatar = user.role === 'creator'
            ? '../Shared/assets/mascot-jellyfish.png'
            : '../Shared/assets/mascot-turtle.png';

        topbar.innerHTML = `
            <header class="topbar">
                <a class="brand" href="${home}">
                    <span class="brand-icon">💡</span>
                    <span>
                        <span class="brand-title">Quiz Builder</span>
                        <span class="brand-sub">Create • Play • Learn</span>
                    </span>
                </a>

                <div class="user-chip">
                    <img class="avatar" src="${avatar}" alt="">
                    <span>Hello, ${escapeHtml(user.name)}</span>
                    <button type="button" class="btn btn-sm" data-logout>
                        Logout
                    </button>
                </div>
            </header>
        `;

        topbar.querySelector('[data-logout]')?.addEventListener('click', () => {
            storage.logout();
            go('login');
        });
    }

    function createSidebar(active) {
        const sidebar = document.querySelector('[data-sidebar]');

        if (!sidebar) return;

        const links = [
            ['dashboard', '⌂', 'Dashboard'],
            ['create', '✎', 'Create Quiz'],
            ['quizzes', '▣', 'Your Quizzes'],
            ['results', '▥', 'Results'],
            ['profile', '♙', 'Profile']
        ];

        sidebar.innerHTML = `
            <aside class="sidebar">
                ${links.map(([page, icon, label]) => `
                    <a
                        class="nav-link ${active === page ? 'active' : ''}"
                        href="${paths[page]}"
                    >
                        <span>${icon}</span>
                        ${label}
                    </a>
                `).join('')}

                <a class="nav-link logout" href="#" data-logout>
                    ⇥ Logout
                </a>
            </aside>
        `;

        sidebar.querySelector('[data-logout]')?.addEventListener('click', event => {
            event.preventDefault();
            storage.logout();
            go('login');
        });
    }

    function shell(active) {
        createTopbar();
        createSidebar(active);
    }

    function toast(message) {
        const element = document.querySelector('.toast');
        if (!element) return;

        element.textContent = message;
        element.classList.add('show');

        setTimeout(() => {
            element.classList.remove('show');
        }, 2300);
    }

    window.QBApp = {
        S: storage,
        P: paths,
        go,
        requireRole,
        shell,
        escapeHtml,
        toast
    };
})();
