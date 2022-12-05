const Contacto = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="" id=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunucación</h2>
        <p>
          Tambien puede Contactarse con nosotros usando los siguientes medios
        </p>
      </div>
      <ul>
        <li>Telefono: 12345678</li>
        <li>Email: contacto@transportesx.com</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Whatsapp</li>
      </ul>
    </main>
  );
};

export default Contacto;
