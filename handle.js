const loginBtn = document.querySelector('.header__navbar-item--has-login')
const registerBtn = document.querySelector('.header__navbar-item--has-register')
const loginModal = document.querySelector('.modal-login')
const registerModal = document.querySelector('.modal-register')
const formRegister = document.querySelector('.auth-form__register')
const formLogin = document.querySelector('.auth-form__login')
const formContainer = document.querySelector('.auth-form__container')
function startApp() {
        handleLogin()
        handleRegister()
}

startApp()

function handleLogin() {
        function toggleLoginModal() {
                loginModal.classList.toggle('hidden')
        }

        
        loginBtn.addEventListener('click', toggleLoginModal)
        loginModal.addEventListener('click', function(e) {
                if(e.target.closest('.auth-form__controls-back')) {
                        toggleLoginModal()
                } 
        })
       


}

function handleRegister() {
        function toggleRegisterModal() {
                registerModal.classList.toggle('hidden')
        }
        
        registerBtn.addEventListener('click', toggleRegisterModal)
        registerModal.addEventListener('click', function(e) {
                if(e.target.closest('.auth-form__controls-back')) {
                        toggleRegisterModal()
                }
        })
}


















