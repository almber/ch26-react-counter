// Props: Comunican los componentes padres con los componentes hijos
const ParagraphLink = ( propiedades ) => { // { clave:valor, href: "" }

      console.log( propiedades );

  const myParagraph = (
    <>
      <a 
      style = { { textDecoration: 'none', color: propiedades.color } } 
      href= { propiedades.href }
      target= '_blank'
      >
        <p> { propiedades.children } </p>
      </a>
    </>
  );
    return myParagraph;
};

export default ParagraphLink; // exportación por default.
/*
 Desestructuración
   const [varA, varB] = [23, 45];
   const {varC, varD:varG } = {varC, varF, VarG, } 
*/



