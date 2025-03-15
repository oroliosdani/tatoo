

 "use client"
import { useState, useEffect } from "react";
import Magica from "../components/Magica";
import Curriculo from "../components/Curriculo";
// import { redirect } from "next/navigation";

export default function Home() {
  const [type, setType] = useState("");
  const [texto, setTexto] = useState("");
  const [link, setLink] = useState("");
  const [carta, setCarta] = useState("");
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");



  useEffect(() => {

    const fetchData = async () => {
     
      try {
        const response = await fetch("https://api-tatoo.onrender.com/getdata");
        if (!response.ok) throw new Error("Erro ao buscar dados");

        const result = await response.json();

        console.log(result.data.type);
        setType(result.data.type || "magica");
        setTexto(result.data.texto || "Texto padrão");
        setCarta(result.data.carta || "AE");
        setLink(result.data.link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        // console.log(result.data);

        if (result.data.type== "link"){
          console.log(result.data.link);

          window.location.href = result.data.link;
        } 

      } catch (err) {
        console.log (err)
        // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
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
        return <div>{texto}</div>;
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

