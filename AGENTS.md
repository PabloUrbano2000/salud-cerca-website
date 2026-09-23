# Proyecto: Registro de citas médicas

Este repositorio contiene una maqueta web responsive para gestionar el registro de citas médicas. La experiencia toma como referencia conceptual a Teladoc Health, pero se mantiene deliberadamente más simple, clara y enfocada en una primera versión visual.

## Objetivo de la maqueta

Presentar el flujo de una plataforma de citas médicas: acceso como paciente o doctor, búsqueda de atención, reserva y confirmación. Es una maqueta exclusivamente de frontend, sin servidor ni persistencia de datos.

## Principios de diseño

- Diseño sereno, cercano y confiable; priorizar legibilidad y accesibilidad.
- Interfaz en español.
- Diseño responsive: cada vista debe funcionar con claridad en móvil, tablet y escritorio.
- No hay backend, autenticación real, persistencia, pagos ni integraciones.
- No implementar validaciones, mensajes de error ni estados de fallo; usar datos y recorridos simulados.
- Priorizar el recorrido principal: buscar atención, seleccionar profesional, reservar y ver confirmación.
- Usar información ficticia y no mostrar ni solicitar datos médicos reales.

## Alcance de la maqueta

Cada flujo se construye únicamente a nivel visual e interactivo del cliente, usando información ficticia. No incluye servicios, autenticación real, validaciones ni manejo de errores.

1. Registro e inicio de sesión de pacientes: pantalla compartida de correo y contraseña, con selector de rol.
2. Registro e inicio de sesión de doctores: el mismo acceso compartido, con entrada al área de doctor.
3. Perfil del doctor: datos profesionales, especialidad, ubicación y presentación de disponibilidad.
4. Categorización de doctores por especialidad: categorías y listado filtrable de especialistas.
5. Búsqueda de doctores por especialidad y ubicación.
6. Visualización de horarios disponibles por doctor.
7. Reserva de cita: selección de profesional, fecha y hora, seguida de una confirmación visual.
8. Configuración semanal del pool de horarios: vista del doctor para mostrar y editar bloques de disponibilidad simulados.
9. Inicio de paciente y panel básico de doctor para conectar los recorridos anteriores.

## Rutas de la maqueta

- `/login`: acceso y selección de rol.
- `/paciente`: inicio del paciente.
- `/doctor`: inicio del doctor.

Usar React Router en modo declarativo para la navegación del cliente. Las rutas no dependen de autenticación ni de servicios de servidor.

## Referencia

La inspiración de producto es https://www.teladochealth.com/, sin replicar su identidad visual ni la amplitud de sus funcionalidades.
