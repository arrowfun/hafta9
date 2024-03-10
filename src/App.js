import { useEffect, useState } from "react";


function App() {
  const [sayac,sayacGuncelle] = useState(0)

  useEffect( ()=> { 
    console.log("1.effect calisti");
  }, [sayac] )

  useEffect( ()=> { 
    console.log("2.effect calisti");
  } )

 
  return (
    <>
      Sayac: {sayac}
    </>
  
  );
}

export default App;
