import { Input , Button , Select , Textarea , ButtonGroup , Link , Center , Heading} from "@chakra-ui/react";
import { useRef } from "react"
import axios from "axios"
function App() {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = {
      "Title": form.Title.value,
      "Image": form.Image.value,
      "MainCategory": form.MainCategory.value,
      "Geans": form.Geans.value,
      "FileID": form.FileID.value,
      "Plateform": form.Plateform.value
    }
    axios.post("https://pelis-skataland-api.onrender.com/PelisskatalandApi",formdata)
    .then(response => {
     alert(response);
  })
}
  return (
    <>
    <Center><Heading color="blue" m="50px">Pelis Skataland</Heading></Center>
      <div style={{maxWidth:"500px",margin:"auto"}}>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="form" ref={formRef}>
       <Textarea name="Title" color="blue" type="text" placeholder="Titulo del Video..." required m="10px" />
       <Input name="Image" color="blue" type="text" placeholder="Imagen del Video..." m="10px" required />
       <Textarea name="FileID" color="blue" type="text" placeholder="ID del Video..." m="10px" required />
       <Select name="MainCategory" color="blue" m="10px" placeholder='Seleccionar categoría principal...' required >
          <option value='Peliculas'>Peliculas</option>
          <option value='Series'>Series</option>
          <option value='Conciertos'>Conciertos</option>
       </Select>
       <Select name="Geans" color="blue" m="10px"  placeholder='Selecionar Genero...' required >
          <option value='Accion'>Accion</option>
          <option value='Comedia'>Comedia</option>
          <option value='Aventuras'>Aventuras</option>
          <option value='Mexicana'>Mexicana</option>
          <option value='Superheroes'>Superheroes</option>
          <option value='Documentales'>Documentales</option>
          <option value='Infantiles'>Infantiles</option>
          <option value='Caricaturas'>Caricaturas</option>
          <option value='Capos'>Capos</option>
          <option value='Conciertos'>Conciertos</option>
          <option value='Ska'>Ska</option>
          <option value='Metal'>Metal</option>
          <option value='Numetal'>Numetal</option>
          <option value='Rock-Ingles'>Rock-Ingles</option>
          <option value='Rock-Español'>Rock-Español</option>
          <option value='Pop-80-90-y-mas'>Pop-80-90-y-mas</option>
          <option value='Musica-del-Recuerdo'>Musica-del-Recuerdo</option>
          <option value='Norteñas-y-mas'>Norteñas-y-mas</option>
       </Select>
       <Select name="Plateform" color="blue" m="10px"  placeholder='Selecionar Plataforma...' >
          <option value='Doodstream'>Doodstream</option>
          <option value='Youtube'>Youtube</option>
          <option value='Uqload'>Uqload</option>
          <option value='streamtape'>Streamtape</option>
          <option value='filemoon'>Filemoon</option>
          <option value='Netu'>Netu</option>
          <option value='Streamsb'>Streamsb</option>
          <option value='Streamplay'>Streamplay</option>
          <option value='Povvldeo'>Povvldeo</option>
          <option value='Vidoza'>Vidoza</option>
          <option value='filefactory'>filefactory</option>
       </Select>
       <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
           <Link href = "https://pelis-skataland-api.onrender.com/" isExternal><Button>Revisar</Button></Link>
           <Button type="submit">Agregar a la pagina ... </Button>
        </ButtonGroup>
    </form>
      </div>
    </>
  );
}

export default App;
