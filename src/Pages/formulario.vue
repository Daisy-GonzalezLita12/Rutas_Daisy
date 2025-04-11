<template>   
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
        <title>Formulario de Registro</title>
    </head>
    <body>
    
        <div class="form-container">
            <h2>Iniciar Sesión</h2>
            <form action="#" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
    
                <label for="apellido_paterno">Apellido Paterno:</label>
                <input type="text" id="apellido_paterno" name="apellido_paterno" required>
    
                <label for="apellido_materno">Apellido Materno:</label>
                <input type="text" id="apellido_materno" name="apellido_materno" required>
    
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required>
    
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
    
                <input type="submit" value="Iniciar sesión">
            </form>
        </div>
    
    </body>
          
      </template>
      
      
      <style scoped>
     body {
        font-family: Cambria, serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
       display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .form-container {
        background-color: #fff;
        padding: 70px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 500px;
        margin: 0 auto;
    }
    .form-container h2 {
        margin-bottom: 20px;
        font-size: 24px;
        text-align: center;
    }
    .form-container label {
        display: block;
        margin-bottom: 5px;
      
      font-weight: bold;
    }
    .form-container input[type="text"],
    .form-container input[type="email"],
    .form-container input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
    .form-container input[type="submit"] {
        width: 100%;
        padding: 10px;
        background-color: #AD2E05;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
    .form-container input[type="submit"]:hover {
        background-color: #AD2E05;
    }
      </style>
      