# ASHPA - Plataforma Educativa para Aprender Kichwa

## 📋 Descripción
ASHPA es una aplicación web educativa diseñada para enseñar el idioma Kichwa (Quichua) a través de un juego interactivo de cartas con sistema de desbloqueo progresivo.

## ✨ Características Principales

### 1. **Sección de Vocabulario**
- Aprende 33 palabras en Kichwa antes de jugar
- Tarjetas organizadas por categorías:
  - 🗣️ Saludos y Pronombres
  - 👨‍👩‍👧 Familia
  - 🐕 Animales
  - 🍽️ Objetos
  - 🍌 Alimentos
  - 🌄 Naturaleza
  - ⏰ Tiempo
  - 🏃 Acciones

### 2. **Juego con Sistema de Desbloqueo**
- Solo avanzas si aciertas la respuesta
- Sistema de puntuación
- Progreso visual (Carta X de 33)
- Feedback inmediato (correcto/incorrecto)

### 3. **Registro de Usuarios**
- Formulario completo para futuros usuarios
- Validación de campos
- Diseño responsive

## 🚀 Cambios Realizados (Ionic → Vanilla)

### **Eliminado:**
- ❌ Ionic Framework
- ❌ Angular
- ❌ Swiper.js (carrusel)
- ❌ Dependencias externas pesadas

### **Agregado:**
- ✅ HTML5 puro
- ✅ CSS3 vanilla con animaciones
- ✅ JavaScript puro (ES6+)
- ✅ **Nueva sección de vocabulario con 33 palabras en Kichwa**
- ✅ **Sistema de desbloqueo progresivo** (solo avanzas si aciertas)
- ✅ Sistema de toast/notificaciones personalizado
- ✅ Diseño 100% responsive

## 📂 Estructura del Proyecto

```
ashpa-vanilla/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   └── app.js              # Lógica del juego y vocabulario
└── assets/
    ├── cards/              # 33 imágenes de cartas
    ├── img/                # Imágenes del sitio
    └── icon/               # Favicon
```

## 🎮 Cómo Funciona el Juego

1. **Aprende el vocabulario** en la sección dedicada
2. **Ve a la sección de juego** 
3. **Observa la carta** con la imagen
4. **Escribe la respuesta en español**
5. **Solo avanzas si aciertas** ✅
6. **Completa las 33 cartas** para ganar

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Flexbox y Grid
  - Animaciones y transiciones
  - Backdrop filters (efecto glassmorphism)
  - Responsive design
- **JavaScript ES6+**:
  - Manipulación del DOM
  - Event listeners
  - Template literals
  - Arrow functions

## 📱 Responsive

El diseño se adapta perfectamente a:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🌟 Características Técnicas

### **Vocabulario Kichwa**
Cada carta incluye:
- **Kichwa**: Palabra en idioma originario
- **Español**: Traducción
- **Categoría**: Clasificación temática

### **Sistema de Desbloqueo**
- No puedes avanzar sin acertar
- Contador de progreso visible
- Sistema de puntuación
- Feedback visual inmediato

### **Animaciones**
- Entrada suave de elementos
- Efecto float en avatares
- Shake en respuestas incorrectas
- Transiciones suaves en hover

## 🔧 Instalación y Uso

1. **Descargar el proyecto**
2. **Abrir `index.html`** en cualquier navegador moderno
3. **¡Listo para usar!** No requiere instalación ni servidor

## 📝 Vocabulario Incluido (33 Palabras)

| Kichwa | Español | Categoría |
|--------|---------|-----------|
| Napaykullayki | Saludo | Saludos |
| Ñuka | Yo | Pronombres |
| Allku | Perro | Animales |
| Misi | Gato | Animales |
| Waka | Vaca | Animales |
| Nina | Fuego | Naturaleza |
| Mayu | Río | Naturaleza |
| Tanta | Pan | Alimentos |
| ... | ... | ... |

(Ver código fuente para la lista completa)

## 🎯 Objetivo Educativo

Preservar y promover el idioma Kichwa a través de una experiencia interactiva y divertida, facilitando el aprendizaje para las nuevas generaciones.

## 👥 Equipo

Equipo multidisciplinario comprometido con la preservación de lenguas ancestrales.

## 📄 Licencia

Proyecto educativo de código abierto.

---

**¡Aprendamos juntos nuestro idioma!** 🌟
