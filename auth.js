// Sistema de Autenticación
class AuthSystem {
    constructor() {
        this.USERS_KEY = 'site_users';
        this.SESSION_KEY = 'current_session';
        this.initializeDefaultAdmin();
    }

    // Inicializar usuario admin por defecto
    initializeDefaultAdmin() {
        const users = this.getUsers();
        if (users.length === 0) {
            const adminUser = {
                id: this.generateId(),
                username: 'Yapete',
                password: this.hashPassword('Yape.d200604'),
                role: 'admin',
                createdAt: new Date().toISOString()
            };
            this.saveUser(adminUser);
        }
    }

    // Generar ID único
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Hash simple de contraseña (para producción usar bcrypt o similar)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    }

    // Obtener todos los usuarios
    getUsers() {
        const users = localStorage.getItem(this.USERS_KEY);
        return users ? JSON.parse(users) : [];
    }

    // Guardar usuario
    saveUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    // Actualizar usuarios
    updateUsers(users) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    // Registrar nuevo usuario
    register(username, password) {
        // Validaciones
        if (!username || !password) {
            return { success: false, message: 'Usuario y contraseña son requeridos' };
        }

        if (username.length < 3) {
            return { success: false, message: 'El usuario debe tener al menos 3 caracteres' };
        }

        if (password.length < 6) {
            return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
        }

        // Verificar si el usuario ya existe
        const users = this.getUsers();
        const existingUser = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        
        if (existingUser) {
            return { success: false, message: 'El usuario ya existe' };
        }

        // Crear nuevo usuario
        const newUser = {
            id: this.generateId(),
            username: username,
            password: this.hashPassword(password),
            role: 'user',
            createdAt: new Date().toISOString()
        };

        this.saveUser(newUser);
        return { success: true, message: 'Usuario registrado exitosamente' };
    }

    // Iniciar sesión
    login(username, password) {
        const users = this.getUsers();
        const hashedPassword = this.hashPassword(password);
        
        const user = users.find(u => 
            u.username === username && u.password === hashedPassword
        );

        if (user) {
            // Crear sesión
            const session = {
                userId: user.id,
                username: user.username,
                role: user.role,
                loginTime: new Date().toISOString()
            };
            localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
            return { success: true, message: 'Inicio de sesión exitoso', user: session };
        }

        return { success: false, message: 'Usuario o contraseña incorrectos' };
    }

    // Cerrar sesión
    logout() {
        localStorage.removeItem(this.SESSION_KEY);
        return { success: true, message: 'Sesión cerrada exitosamente' };
    }

    // Verificar si hay sesión activa
    isAuthenticated() {
        const session = this.getCurrentSession();
        return session !== null;
    }

    // Obtener sesión actual
    getCurrentSession() {
        const session = localStorage.getItem(this.SESSION_KEY);
        return session ? JSON.parse(session) : null;
    }

    // Verificar si el usuario es admin
    isAdmin() {
        const session = this.getCurrentSession();
        return session && session.role === 'admin';
    }

    // Obtener información del usuario actual
    getCurrentUser() {
        return this.getCurrentSession();
    }

    // Cambiar contraseña
    changePassword(username, oldPassword, newPassword) {
        const users = this.getUsers();
        const hashedOldPassword = this.hashPassword(oldPassword);
        
        const userIndex = users.findIndex(u => 
            u.username === username && u.password === hashedOldPassword
        );

        if (userIndex === -1) {
            return { success: false, message: 'Contraseña actual incorrecta' };
        }

        if (newPassword.length < 6) {
            return { success: false, message: 'La nueva contraseña debe tener al menos 6 caracteres' };
        }

        users[userIndex].password = this.hashPassword(newPassword);
        this.updateUsers(users);

        return { success: true, message: 'Contraseña actualizada exitosamente' };
    }

    // Eliminar usuario (solo admin)
    deleteUser(userId) {
        const session = this.getCurrentSession();
        if (!session || session.role !== 'admin') {
            return { success: false, message: 'No tienes permisos para eliminar usuarios' };
        }

        const users = this.getUsers();
        const userToDelete = users.find(u => u.id === userId);

        if (!userToDelete) {
            return { success: false, message: 'Usuario no encontrado' };
        }

        if (userToDelete.role === 'admin' && userToDelete.username === 'Yapete') {
            return { success: false, message: 'No se puede eliminar el usuario administrador principal' };
        }

        const filteredUsers = users.filter(u => u.id !== userId);
        this.updateUsers(filteredUsers);

        return { success: true, message: 'Usuario eliminado exitosamente' };
    }

    // Listar todos los usuarios (solo admin)
    listUsers() {
        const session = this.getCurrentSession();
        if (!session || session.role !== 'admin') {
            return { success: false, message: 'No tienes permisos para ver usuarios' };
        }

        const users = this.getUsers();
        return { 
            success: true, 
            users: users.map(u => ({
                id: u.id,
                username: u.username,
                role: u.role,
                createdAt: u.createdAt
            }))
        };
    }
}

// Crear instancia global
const auth = new AuthSystem();
