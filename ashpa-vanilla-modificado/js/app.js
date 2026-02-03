// === DATOS DE LAS CARTAS CON VOCABULARIO KICHWA ===
const cards = [
    { id: 1, image: 'assets/cards/1.png', kichwa: 'Napaykullayki', spanish: 'saludo', category: 'Saludos', unlocked: true, stars: 0 },
    { id: 2, image: 'assets/cards/2.png', kichwa: 'Ñuka', spanish: 'yo', category: 'Pronombres', unlocked: false, stars: 0 },
    { id: 3, image: 'assets/cards/3.png', kichwa: 'Kan', spanish: 'tu', category: 'Pronombres', unlocked: false, stars: 0 },
    { id: 4, image: 'assets/cards/4.png', kichwa: 'Mashi', spanish: 'amigo', category: 'Familia', unlocked: false, stars: 0 },
    { id: 5, image: 'assets/cards/5.png', kichwa: 'Challwana', spanish: 'pescar', category: 'Acciones', unlocked: false, stars: 0 },
    { id: 6, image: 'assets/cards/6.png', kichwa: 'Wawa', spanish: 'bebe', category: 'Familia', unlocked: false, stars: 0 },
    { id: 7, image: 'assets/cards/7.png', kichwa: 'Tushuna', spanish: 'bailar', category: 'Acciones', unlocked: false, stars: 0 },
    { id: 8, image: 'assets/cards/8.png', kichwa: 'Allpa', spanish: 'tierra', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 9, image: 'assets/cards/9.png', kichwa: 'Waka', spanish: 'vaca', category: 'Animales', unlocked: false, stars: 0 },
    { id: 10, image: 'assets/cards/10.png', kichwa: 'Atallpa', spanish: 'gallina', category: 'Animales', unlocked: false, stars: 0 },
    { id: 11, image: 'assets/cards/11.png', kichwa: 'Kuchi', spanish: 'chancho', category: 'Animales', unlocked: false, stars: 0 },
    { id: 12, image: 'assets/cards/12.png', kichwa: 'Misi', spanish: 'gato', category: 'Animales', unlocked: false, stars: 0 },
    { id: 13, image: 'assets/cards/13.png', kichwa: 'Allku', spanish: 'perro', category: 'Animales', unlocked: false, stars: 0 },
    { id: 14, image: 'assets/cards/14.png', kichwa: 'Kuntur', spanish: 'condor', category: 'Animales', unlocked: false, stars: 0 },
    { id: 15, image: 'assets/cards/15.png', kichwa: 'Challwa', spanish: 'pez', category: 'Animales', unlocked: false, stars: 0 },
    { id: 16, image: 'assets/cards/16.png', kichwa: 'Wishina', spanish: 'cuchara', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 17, image: 'assets/cards/17.png', kichwa: 'Nina', spanish: 'fuego', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 18, image: 'assets/cards/18.png', kichwa: 'Waska', spanish: 'cuerda', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 19, image: 'assets/cards/19.png', kichwa: 'Chakana', spanish: 'escalera', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 20, image: 'assets/cards/20.png', kichwa: 'Kawitu', spanish: 'cama', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 21, image: 'assets/cards/21.png', kichwa: 'Mishki', spanish: 'miel', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 22, image: 'assets/cards/22.png', kichwa: 'Tanta', spanish: 'pan', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 23, image: 'assets/cards/23.png', kichwa: 'Palanta', spanish: 'platano', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 24, image: 'assets/cards/24.png', kichwa: 'Sara', spanish: 'choclo', category: 'Alimentos', unlocked: false, stars: 0 },
    { id: 25, image: 'assets/cards/25.png', kichwa: 'Pakarina', spanish: 'amanecer', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 26, image: 'assets/cards/26.png', kichwa: 'Tuta', spanish: 'noche', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 27, image: 'assets/cards/27.png', kichwa: 'Chishi', spanish: 'tarde', category: 'Tiempo', unlocked: false, stars: 0 },
    { id: 28, image: 'assets/cards/28.png', kichwa: 'Puytu', spanish: 'nube', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 29, image: 'assets/cards/29.png', kichwa: 'Illapa', spanish: 'rayo', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 30, image: 'assets/cards/30.png', kichwa: 'Tamya', spanish: 'lluvia', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 31, image: 'assets/cards/31.png', kichwa: 'Mayu', spanish: 'rio', category: 'Naturaleza', unlocked: false, stars: 0 },
    { id: 32, image: 'assets/cards/32.png', kichwa: 'Chaka', spanish: 'puente', category: 'Objetos', unlocked: false, stars: 0 },
    { id: 33, image: 'assets/cards/33.png', kichwa: 'Rumi', spanish: 'piedra', category: 'Naturaleza', unlocked: false, stars: 0 }
];

// === ESTADO DEL JUEGO ===
let currentCardId = null;
let totalStars = 0;

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    initVocabulary();
    initGameBoard();
    
    // Enter key en modal
    document.getElementById('modal-answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswerModal();
        }
    });
});

// === FUNCIÓN PARA INICIALIZAR EL VOCABULARIO ===
// CAMBIO 4: Vocabulario organizado por módulos con acordeón
function initVocabulary() {
    const vocabularyGrid = document.querySelector('.vocabulary-grid');
    
    // Agrupar palabras por categoría
    const categorias = {};
    cards.forEach(card => {
        if (!categorias[card.category]) {
            categorias[card.category] = [];
        }
        categorias[card.category].push(card);
    });
    
    // Iconos para cada categoría
    const iconosCategoria = {
        'Saludos': '👋',
        'Pronombres': '👤',
        'Familia': '👨‍👩‍👧‍👦',
        'Acciones': '🏃',
        'Naturaleza': '🌳',
        'Animales': '🐾',
        'Objetos': '🔧',
        'Alimentos': '🍎',
        'Tiempo': '⏰'
    };
    
    // Crear módulos acordeón para cada categoría
    vocabularyGrid.innerHTML = '';
    
    Object.keys(categorias).forEach(categoria => {
        const modulo = document.createElement('div');
        modulo.className = 'modulo-acordeon';
        
        const icono = iconosCategoria[categoria] || '📚';
        
        modulo.innerHTML = `
            <div class="modulo-header" onclick="toggleModulo(this)">
                <h3>${icono} ${categoria}</h3>
                <span class="arrow">▼</span>
            </div>
            <div class="modulo-content">
                <div class="palabras-grid">
                    ${categorias[categoria].map(card => `
                        <div class="vocab-card">
                            <div class="vocab-card-inner">
                                <div class="vocab-kichwa">${card.kichwa}</div>
                                <div class="vocab-spanish">${card.spanish}</div>
                                <div class="vocab-category">${card.category}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        vocabularyGrid.appendChild(modulo);
    });
}

// Función para toggle del acordeón
function toggleModulo(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    // Cerrar todos los módulos
    document.querySelectorAll('.modulo-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
    });
    
    // Si el módulo no estaba activo, abrirlo
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

/* 
===============================================
💬 INSTRUCCIONES PARA AGREGAR MÁS PALABRAS:
===============================================

Para agregar más palabras al vocabulario, simplemente edita el array "cards"
al inicio de este archivo (líneas 2-36).

Cada palabra sigue este formato:

{ 
    id: NÚMERO_ÚNICO, 
    image: 'assets/cards/NÚMERO.png', 
    kichwa: 'PALABRA_EN_KICHWA', 
    spanish: 'traducción', 
    category: 'CATEGORÍA', 
    unlocked: false, 
    stars: 0 
}

CATEGORÍAS DISPONIBLES:
- Saludos
- Pronombres
- Familia
- Acciones
- Naturaleza
- Animales
- Objetos
- Alimentos
- Tiempo

EJEMPLO para agregar una nueva palabra:

{ id: 34, image: 'assets/cards/34.png', kichwa: 'Inti', spanish: 'sol', category: 'Naturaleza', unlocked: false, stars: 0 },

Las palabras se agruparán automáticamente en sus módulos según la categoría.
Si quieres crear una nueva categoría, simplemente usa un nombre nuevo y 
agrega el icono correspondiente en el objeto "iconosCategoria" dentro 
de la función initVocabulary().

===============================================
*/

// === INICIALIZAR TABLERO DE JUEGO ===
function initGameBoard() {
    const cardsGrid = document.getElementById('cards-grid');
    cardsGrid.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card-item ${card.unlocked ? '' : 'locked'}`;
        cardElement.setAttribute('data-card-id', card.id);
        
        cardElement.innerHTML = `
            <img src="${card.image}" alt="Carta ${card.id}">
            ${card.unlocked ? '' : '<i class="fas fa-lock card-lock-icon"></i>'}
            ${card.unlocked && card.stars > 0 ? `
                <div class="card-stars">
                    ${Array(card.stars).fill('<i class="fas fa-star"></i>').join('')}
                </div>
            ` : ''}
        `;
        
        if (card.unlocked) {
            cardElement.addEventListener('click', () => openGameModal(card.id));
        }
        
        cardsGrid.appendChild(cardElement);
    });
    
    updateStats();
}

// === ACTUALIZAR ESTADÍSTICAS ===
function updateStats() {
    const unlockedCount = cards.filter(c => c.unlocked).length;
    document.getElementById('unlocked-count').textContent = unlockedCount;
    document.getElementById('total-count').textContent = cards.length;
    document.getElementById('stars-count').textContent = totalStars;
}

// === INICIAR JUEGO (CAMBIAR A TABLERO) ===
function startGame() {
    document.getElementById('instructions-screen').style.display = 'none';
    document.getElementById('game-board-screen').style.display = 'block';
}

// === VOLVER A INSTRUCCIONES ===
function backToInstructions() {
    document.getElementById('game-board-screen').style.display = 'none';
    document.getElementById('instructions-screen').style.display = 'block';
}

// === ABRIR MODAL DE JUEGO ===
function openGameModal(cardId) {
    const card = cards.find(c => c.id === cardId);
    
    if (!card || !card.unlocked) {
        showToast('Esta carta está bloqueada', 'warning');
        return;
    }
    
    currentCardId = cardId;
    document.getElementById('modal-card-image').src = card.image;
    document.getElementById('modal-level').textContent = cardId;
    document.getElementById('modal-answer').value = '';
    
    const modal = document.getElementById('game-modal');
    modal.classList.add('show');
}

// === CERRAR MODAL ===
function closeGameModal() {
    document.getElementById('game-modal').classList.remove('show');
    currentCardId = null;
}

// === VERIFICAR RESPUESTA EN MODAL ===
function checkAnswerModal() {
    const userAnswer = document.getElementById('modal-answer').value.toLowerCase().trim();
    const card = cards.find(c => c.id === currentCardId);
    const inputElement = document.getElementById('modal-answer');
    
    if (!userAnswer) {
        showToast('Por favor escribe una respuesta', 'warning');
        return;
    }
    
    if (userAnswer === card.spanish) {
        // Respuesta correcta
        if (card.stars === 0) {
            card.stars = 3;
            totalStars += 3;
        }
        
        showToast('¡Excelente! ⭐⭐⭐', 'success');
        
        // Desbloquear siguiente carta
        const nextCard = cards.find(c => c.id === currentCardId + 1);
        if (nextCard && !nextCard.unlocked) {
            nextCard.unlocked = true;
            showToast(`¡Carta ${nextCard.id} desbloqueada!`, 'success');
        }
        
        setTimeout(() => {
            closeGameModal();
            initGameBoard();
            
            // Si completó todas, mostrar mensaje especial
            const allUnlocked = cards.every(c => c.unlocked);
            if (allUnlocked) {
                showToast('¡Felicidades! ¡Has completado todos los niveles! 🎉', 'success');
            }
        }, 1000);
        
    } else {
        // Respuesta incorrecta
        showToast('Intenta de nuevo', 'danger');
        inputElement.classList.add('shake');
        setTimeout(() => {
            inputElement.classList.remove('shake');
        }, 500);
    }
}

// === FUNCIÓN PARA SCROLL SUAVE ===
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.custom-navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// === MOSTRAR TOAST (MENSAJE) ===
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    // Agregar icono según tipo
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 
                     type === 'danger' ? 'fas fa-times-circle' : 
                     'fas fa-exclamation-circle';
    toast.prepend(icon);
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// === REGISTRO DE USUARIO ===
function registrarUsuario(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const userData = {
        nombres: formData.get('nombres'),
        apellidos: formData.get('apellidos'),
        fechaNacimiento: formData.get('fechaNacimiento'),
        correo: formData.get('correo'),
        pais: formData.get('pais'),
        estado: formData.get('estado')
    };
    
    console.log('Datos del usuario:', userData);
    
    showToast('¡Registro exitoso! Bienvenido/a', 'success');
    
    // Limpiar formulario
    event.target.reset();
    
    return false;
}
