export const Crear = () => {
  return (
    <div>
        <h3 className="title">Añadir Pelítucla</h3>
        <form>
            <input type="text" id="title" placeholder="Titulo"/>
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
