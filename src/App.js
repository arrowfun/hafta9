import { useEffect, useState } from "react";
import Kisi from "./bilesenler/Kisi";

function App() {
  const [veri, veriGuncelle] = useState([])
  const [yukleniyor, yukleGuncelle] = useState([true])

  useEffect( ()=>{
    const lsVeriCek = async () => localStorage.getItem("rehberJSON")

    async function rehberCek() {
      const rehberJSON = await lsVeriCek()
      const rehverVeri = JSON.parse(rehberJSON)

      veriGuncelle(rehverVeri)
      yukleGuncelle(false)
    }

    setTimeout(rehberCek, 2000)
  }, [] )

  console.log(veri);

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>

        <div className="row">
          { yukleniyor && <p>Veriler Yükleniyor...</p>}
          { veri.map(eleman => <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel}/> ) }
        </div>

      </section>
    </>
  );
}

export default App;
