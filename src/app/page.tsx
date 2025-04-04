

 "use client"
import { useState, useEffect } from "react";
import Magica from "../components/Magica";
import Lock from "../components/Lock";
import Texto from "../components/Texto";
import Curriculo from "../components/Curriculo";

export default function Home() {
  const [type, setType] = useState("");
  const [texto, setTexto] = useState("");
  const [link, setLink] = useState("");
  const [carta, setCarta] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchData = async () => {
     
      try {
        // const response = await fetch("https://api-tatoo.onrender.com/getdata");
        const response = await fetch("http://localhost:3333/getdata");
        if (!response.ok) throw new Error("Erro ao buscar dados");

        const result = await response.json();

        setType(result.data.type );
        setTexto(result.data.texto);
        setCarta(result.data.carta);
        setLink(result.data.link);

        if (result.data.type== "link"){
          window.location.href = result.data.link;
        } 

      } catch (err) {
        console.log (err)
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    if (type == "link") window.location.href = link;

  }, []);

  const renderContent = () => {
    if (loading) return <p>Carregando...</p>;

    else{
    switch (type) {
      case "curriculo":
        return <Curriculo />;
      case "magica":
        return <Magica carta={carta}  />;
      case "texto":
        return <Texto text={texto}  />;
      case "lock":
        return <Lock />;
      case "link":
          return <div />;
      default:
        return <p>Ocorreu um erro. Tente novamente.</p>;
    }}
  };

 

  return (
    <div>
      {renderContent()}

    </div>
  );
}

