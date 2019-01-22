// Generación de reporte de secundaria  


function onFormSubmit(e){

  var tiempoRegistro =  e.values[0];
  var correo =  e.values[1];
  var grupo = e.values[2];
  var nombre = e.values[3];
  var tipo = e.values[4];
  var descrpcion = e.values[5];
  const correo_orientacion = 'isanchez@ifp.mx';

  ///Estilos

var estilo = {};
    estilo[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    estilo[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
    estilo[DocumentApp.Attribute.FOREGROUND_COLOR] = '#4a86e8';
    estilo[DocumentApp.Attribute.FONT_SIZE] = 20;
    estilo[DocumentApp.Attribute.BOLD] = true;
var estilo1 = {};
    estilo1[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    estilo1[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
    estilo1[DocumentApp.Attribute.FOREGROUND_COLOR] = '#434343';
    estilo1[DocumentApp.Attribute.FONT_SIZE] = 14;
    estilo1[DocumentApp.Attribute.ITALIC] = true ;
    estilo1[DocumentApp.Attribute.BOLD] = false;
var estilo2 = {};
    estilo2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    estilo2[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
    estilo2[DocumentApp.Attribute.FOREGROUND_COLOR] = '#434343';
    estilo2[DocumentApp.Attribute.FONT_SIZE] = 18;
    estilo2[DocumentApp.Attribute.BOLD] = true;



  // Plantilla de archivo
 
    var doc = DocumentApp.create(nombre + ' | Reporte de conducta').addViewer(correo).addViewer(correo_orientacion);
        //Header
    var ifp =      doc.addHeader().appendParagraph('Instituto Francisco Possenti');
    var frase =    doc.getHeader().appendParagraph('Per Crucem ad lucem ');
    var sec =      doc.getHeader().appendParagraph('Secundaria');
    var nom =      doc.getHeader().appendParagraph('Reporte de conducta');
                   doc.appendHorizontalRule();
        //Body
                   doc.getBody().appendParagraph('Nombre del alumno:  ' + nombre);
                   doc.getBody().appendParagraph('    ');
                   doc.getBody().appendParagraph('Grupo:  ' + grupo);
                   doc.getBody().appendParagraph('    ');
                   doc.getBody().appendParagraph('Tipo de falta:  ' + tipo);
                   doc.getBody().appendParagraph('    ');
                   doc.getBody().appendParagraph('Descripción de los hechos:  ' + descrpcion);
                   doc.getBody().appendParagraph('    ');
        
        //Footer  
                   doc.addFooter().appendHorizontalRule();
      var dep =    doc.getFooter().appendParagraph('Departamento de Orientación Secundaria ');

// Asignación de atributos

    ifp.setAttributes(estilo);
    frase.setAttributes(estilo1);
    sec.setAttributes(estilo2);
    nom.setAttributes(estilo2);
    dep.setAttributes(estilo);

// Obtención de los argumentos del archivo

    var url = doc.getUrl();
    var subject = doc.getName();
    var body = 'Reporte adjunto ' +url;
    
// Tiempo de espera para el servidor

    Utilities.sleep(3000);
    GmailApp.sendEmail(correo,subject,body); 
    GmailApp.sendEmail(correo_orientacion, subject, body)
  
}


  
