let usuario = prompt("cual es tu peso real?");
    let planeta = parseInt(prompt("elije tu planeta\n1 es marte, 2 es jupiter, 3 es venus"));
    let peso = parseInt(usuario);
    // las variables que guardan la gravedad en los planetas
    let g_tierra = 9.8;
    let g_marte = 3.7;
    let g_jupiter = 24.8;
    let g_venus = 8.87;
    let peso_final;
    let nombre;
    
    // Marte
    if(planeta == 1)
    {
      peso_final = peso * g_marte / g_tierra;
      nombre = "Marte";
    }
    
    // Jupiter
    else if(planeta == 2)
    {
      peso_final = peso * g_jupiter / g_tierra;
      nombre = "Jupiter";
    }
    
    // Venus
    else if(planeta == 3)
    {
      peso_final = peso * g_venus / g_tierra
      nombre = "Venus";
    }
    
    //si no pone ningunas de esas opciones le bromeamos un poco
    else
    {
      peso_final = 110;
      nombre = "la tierra";
    }
    peso_final = parseInt (peso_final);
    document.write("<p class=pesoFinal >Tu peso en " + nombre + " es de <strong>" + peso_final + " kilos</strong></p>");