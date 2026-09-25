const App = () => {

   // const age = 0;
   const age = 19;
   let output = null;

   if (age >= 18) {
      output = (
         <>
            <h2>Vote can be given</h2>
         </>
      );
   }else{
     output=(
       <>
      <h2>vote cannot be given</h2>
      </>
     );
   }

   return (
      <>
         <h2>App component class 7</h2>
         <p>conditional Rendering / CSS</p>
         {
            // age>=18?
            // <><h3>vote can be given</h3> <h4>wow</h4></>
            // :
            // <> 
            // {/* <h3>vote canot be given</h3> */}
            // {/* null */}
            // </>

            // output

         }
         {
            // age>=18 && <h2>vote can be given</h2>
            // age && <h2>vote can be given</h2>
            
         }

      </>
   )
}
export { App }