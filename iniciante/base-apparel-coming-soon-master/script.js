function validacaoEmail(field) {
   usuario = field.value.substring(0, field.value.indexOf("@"));
   dominio = field.value.substring(
      field.value.indexOf("@") + 1,
      field.value.length
   );

   if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
   ) {
      document.getElementById("js-error-message").style.display = "none";
      document.getElementById("js-error-img").style.display = "none";
   } else {
      document.getElementById("js-error-message").style.display = "block";
      document.getElementById("js-error-img").style.display = "block";
   }
}
