import Accordions from "@/components/Accordions";

function page() {
  return (
    <section className="sectionPage">
      <article className="lg:w-3/4 lg:px-11 articlePage">
        <h1>PREGUNTAS FRECUENTES SOBRE FALOPLASTIA</h1>
        <img
          className="h-80 object-cover rounded-lg"
          src="/faloplastiafaqs.jpg"
          alt="faloplastia"
        />
        <p>
          Dudas e inquietudes más frecuentes que las personas trans que han
          pensado pasar por una faloplastia tienen.
        </p>
        <Accordions
          pregunta={
            "¿Tendré sensibilidad en el pene después de la faloplastia?"
          }
          respuesta={
            "La sensibilidad del pene se puede dividir en dos componentes: por un lado, tenemos la sensibilidad táctil, térmica, dolorosa…, es decir, la sensibilidad que podemos tener en cualquier parte del cuerpo. Y por otro lado, tenemos la sensibilidad erógena, específica de algunas partes del cuerpo, como el pene o el clítoris. Ambas sensibilidades están presentes tras la faloplastia. La primera, gracias a la unión de un nervio del falo a uno de los nervios de la pierna. La segunda, gracias a la unión de un nervio del pene del hombre trans con un nervio del clítoris.  No obstante, esta sensibilidad no está presente desde el primer momento, es preciso esperar un período aproximado de 6 a 8 meses para que la recuperación sensitiva sea completa. También es preciso un período de «aprendizaje” para que el cerebro identifique el estímulo nervioso como procedente del pene."
          }
        />
        <Accordions
          pregunta={
            "¿Podré tener relaciones sexuales después de la cirugía de faloplastia?"
          }
          respuesta={
            "Tras la faloplastia, la rigidez del falo del hombre trans no permite mantener relaciones sexuales con penetración. Este es demasiado flácido y, aunque algún paciente refiere haberlo practicado, lo cierto es que no es posible mantener relaciones previas. Para ello se precisa una segunda intervención para el implante de una prótesis de pene que permita aportar la rigidez necesaria. Antes de proceder a este segundo procedimiento es necesario que el paciente haya recuperado la sensibilidad el pene, pero una vez se lleva a cabo esta segunda intervención, el paciente podrá mantener relaciones con normalidad."
          }
        />
        <Accordions
          pregunta={"¿Podré recibir placer sexual después de la faloplastia?"}
          respuesta={
            "El pene tras una faloplastia tiene sensibilidad erógena plena por lo que, efectivamente, se puede recibir placer sexual y llegar al orgasmo con absoluta normalidad."
          }
        />
        <Accordions
          pregunta={
            "¿Deberé continuar con la hormonación tras la cirugía de faloplastia?"
          }
          respuesta={
            "Una vez se ha llevado a cabo la cirugía genital deberá pedir cita con su endocrino, quien le recomendará qué pautas seguir con respecto a su tratamiento hormonal, si así lo desea."
          }
        />
        <Accordions
          pregunta={"¿Existen distintos volúmenes de prótesis testiculares?"}
          respuesta={
            "Sí, existen distintos tamaños de prótesis testiculares. La elección del tamaño a utilizar dependerá de diversas circunstancias, entre ellas la elasticidad de los tejidos y de la decisión del hombre."
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
