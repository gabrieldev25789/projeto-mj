import "./Biography.css"
import mjImg from "../../assets/img/mjintro.jpg"

function Biography() {
  return (
    <section className="biography">

      <h2>Biografia</h2>

      <div className="bio-section">
        <h3>O Rei do Pop</h3>
        <p>
          Michael Jackson foi um dos artistas mais influentes da história da música,
          revolucionando o pop e marcando gerações com seu talento único.
        </p>
      </div>

      <div className="bio-section">
        <h3>Infância e Início</h3>
        <div className="bio-content">
          <img src={mjImg} alt="Michael Jackson jovem" />
          <p>
            Desde muito jovem, Michael já demonstrava um talento extraordinário.
            Como integrante do Jackson 5, iniciou sua jornada musical ainda na infância.
          </p>
        </div>
      </div>

      <div className="bio-section">
        <h3>Carreira Solo</h3>
        <div className="bio-content reverse">
          <img src={mjImg} alt="Michael Jackson carreira solo" />
          <p>
            Ao iniciar sua carreira solo, Michael redefiniu o conceito de música pop,
            trazendo inovação, criatividade e performances inesquecíveis.
          </p>
        </div>
      </div>

      <div className="bio-section">
        <h3>Auge da Carreira</h3>
        <div className="bio-content">
          <img src={mjImg} alt="Michael Jackson auge" />
          <p>
            Com álbuns históricos, ele alcançou um sucesso global sem precedentes,
            tornando-se o artista mais reconhecido do planeta.
          </p>
        </div>
      </div>

      <div className="bio-section">
        <h3>Legado</h3>
        <p>
          Seu impacto vai além da música. Michael Jackson deixou um legado eterno
          que continua influenciando artistas e emocionando milhões de pessoas
          ao redor do mundo.
        </p>
      </div>

    </section>
  )
}

export default Biography