import Accordions from "@/components/Accordions";

function page() {
  return (
    <section className="sectionPage">
      <article className="lg:w-3/4 lg:px-11 articlePage">
        <h1>PREGUNTAS FRECUENTES SOBRE MASTECTOMÍA</h1>
        <img
          className="h-80 object-cover rounded-lg"
          src="/mastectomiafaqs.jpg"
          alt="mastectomia"
        />
        <p>
          Estas son las dudas más frecuentes en personas trans que han pensado
          pasar por una mastectomía bilateral subcutánea con la intención de dar
          a su tórax un aspecto más similar a lo que comúnmente se entiende por
          masculino. Si tienes otras dudas, envíanos tu consulta.
        </p>
        <Accordions
          pregunta={
            "¿Es preciso un tratamiento hormonal previo para someterse a una mastectomía para la masculinización de tórax?"
          }
          respuesta={
            "El tratamiento hormonal no afecta de manera significativa al tamaño de las mamas si estas están desarrolladas. Por ello no es imprescindible un tratamiento hormonal previo a la cirugía."
          }
        />
        <Accordions
          pregunta={
            "¿Puedo sufrir cáncer de mama si me he sometido a una masculinización de tórax?"
          }
          respuesta={
            "Después de la masculinización de tórax, que se practica en personas trans, el riesgo de sufrir cáncer de mama es prácticamente nulo, puesto que la intervención supone la exéresis. Es decir, la extirpación de la totalidad de la glándula mamaria. A pesar de ello, se han descrito casos muy concretos de cáncer de mama en pacientes mastectomizados, mediante mastectomía subcutánea. Pues, en un tanto por ciento muy bajo, persisten restos de glándula mamaria tras la intervención. Por lo tanto, es aconsejable el autoexamen y la consulta a su cirujano ante cualquier tumoración en la zona mamaria o axilar."
          }
        />
        <Accordions
          pregunta={
            "¿Deberé llevar alguna prenda especial después de la mastectomía o masculinización de tórax?"
          }
          respuesta={
            "Sí, tras la mastectomía es recomendable llevar una prenda compresiva durante unas cuatro semanas aproximadamente."
          }
        />
        <Accordions
          pregunta={"¿Podré volver a hacer deporte después de la mastectomía?"}
          respuesta={
            "Habitualmente es necesario esperar un mes, aproximadamente, antes de iniciar la práctica deportiva o hacer esfuerzos como coger peso. Sin embargo, es imprescindible seguir siempre los consejos del cirujano."
          }
        />
        <Accordions
          pregunta={
            "¿Qué pasa si dejo de hormonarme después de la mastectomía?"
          }
          respuesta={
            "Antes de abandonar su tratamiento hormonal deberá hablar con su endocrino que le informará de los riesgos, ya que si persisten restos de glándula mamaria tras la intervención podría presentar un aumento de la glándula. NO ABANDONE EL TRATAMIENTO SIN ANTES CONSULTARLO CON SU ENDOCRINO, es importante para su salud."
          }
        />

        <p>
          Si tienes otras dudas, envíanos tu consulta y te responderemos
          personalmente.
        </p>
      </article>
    </section>
  );
}

export default page;
