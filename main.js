document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los formularios y mensajes de error
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error-message');
    const registerError = document.getElementById('register-error-message');

    // Manejar el envío del formulario de registro
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = registerForm['register-email'].value;
        const password = registerForm['register-password'].value;
        const name = registerForm['register-name'].value;

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Guardar datos adicionales en Firestore
            await db.collection('users').doc(user.uid).set({
                name: name,
                email: email,
                role: 'donante', // Rol por defecto
                location: new firebase.firestore.GeoPoint(0, 0) // Geopunto por defecto
            });

            console.log('Registro exitoso. Usuario:', user);
            window.location.href = 'home.html'; // Redirige al home
        } catch (error) {
            registerError.textContent = 'Error: ' + error.message;
            registerError.classList.remove('d-none');
        }
    });

    // Manejar el envío del formulario de login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            console.log('Inicio de sesión exitoso:', user.email);
            window.location.href = 'home.html'; // Redirige al home
        } catch (error) {
            loginError.textContent = 'Error: ' + error.message;
            loginError.classList.remove('d-none');
        }
    });

    // Escucha el estado de autenticación
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('Usuario autenticado:', user.email);
        } else {
            console.log('No hay usuario autenticado.');
        }
    });
});
