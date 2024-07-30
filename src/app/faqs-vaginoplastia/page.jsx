import Accordions from "@/components/Accordions";

function page() {
  return (
    <section className="sectionPage">
      <article className="lg:w-3/4 lg:px-11 articlePage">
        <h1>PREGUNTAS FRECUENTES SOBRE VAGINOPLASTIA</h1>
        <img
          className="h-80 object-cover rounded-lg"
          src="/vaginoplastiafaqs.jpg"
          alt="vaginoplastia"
        />
        <p>
          Estas son las preguntas frecuentes sobre vaginoplastia de las personas
          trans que han pensado pasar por una vaginoplastia por inversión
          peneana o colovaginoplastia (por trasplante rectosigmoidal).
        </p>
        <div className="my-6 grid grid-cols-2 gap-4">
          <Accordions
            pregunta="¿Con la colovaginoplastia se consiguen los mismos resultados que con la vaginoplastia por inversión peneana?"
            respuesta="La técnica de la colovaginoplastia está indicada cuando el equipo médico considera que con la técnica de inversión peneana no se puede conseguir profundidad vaginal suficiente (en casos de penes circuncidados, intervenciones previas, micropenes, etc.). A pesar de su complejidad y riesgos, se obtienen muy buenos resultados: una vagina de gran profundidad y abundantemente lubricada. Pero se debe tener en cuenta que este tipo de intervención conlleva mayores riesgos, por lo que solo debe realizarse en los casos que el equipo médico crea necesario."
          />
          <Accordions
            pregunta="¿Una vez operada de vaginoplastia tendré sensibilidad y podré llegar al orgasmo en las relaciones sexuales?"
            respuesta="Tras un amplio estudio realizado a través de encuestas personales a las pacientes, el 95 % de las encuestadas mantienen relaciones sexuales placenteras y experimentan orgasmo de forma frecuente en un 81 % de los casos. La sensibilidad erógena se experimenta tanto a nivel clitoriano como vaginal y perineal."
          />
          <Accordions
            pregunta="¿Mi vagina se lubricará igual que cualquier otra durante las relaciones sexuales después de una vaginoplastia?"
            respuesta="No presenta una lubricación natural tan abundante como una vagina de nacimiento. Pero con el tiempo, la piel que recubre la vagina se adapta a su nueva posición más interna, y por tanto a una mayor temperatura, que permite unos cambios epiteliales progresivos hasta conseguir una secreción espontánea suficiente en un 40% de los casos. En los casos que esta secreción no es suficiente se suele suplir con hidratantes o lubricantes íntimos."
          />
          <Accordions
            pregunta="¿Hasta cuándo debo realizar las dilataciones tras la vaginoplastia?"
            respuesta="Las dilataciones son una parte muy importante de todo el tratamiento tras haberse sometido a una operación de vaginoplastia. Su práctica constante y metódica durante los primeros tres meses es estrictamente necesaria. Pasado ese periodo, se puede empezar a mantener relaciones sexuales, siendo la penetración natural mejor que una dilatación mecánica."
          />
          <Accordions
            pregunta="¿Cuándo podré tener la primera relación sexual con penetración después de la vaginoplastia?"
            respuesta="No es aconsejable realizar la primera penetración hasta que haya transcurrido un mínimo de dos meses desde la intervención. Además, es aconsejable que esta primera relación con penetración se realice con una pareja que conozca su situación personal para conseguir, de esta manera, una primera relación satisfactoria y no dolorosa."
          />
          <Accordions
            pregunta="¿Se puede realizar deporte después de la cirugía de vaginoplastia?"
            respuesta="Deberás esperar un tiempo hasta que puedas practicar deporte de nuevo. El tiempo necesario dependerá del deporte que se desea realizar: no es lo mismo realizar yoga qué ciclismo o equitación. Es preferible consultarlo antes con su cirujano. En IM Gender facilitamos un listado de los deportes más habituales y el tiempo de espera aproximado y orientativo."
          />
          <Accordions
            pregunta="¿Puedo abandonar el tratamiento hormonal una vez operada de vaginoplastia?"
            respuesta="El tratamiento hormonal es necesario de por vida, pero las dosis serán modificadas a la baja según se desprenda de los controles posteriores a la intervención y su edad. Esta modificación debe ser siempre realizada bajo la supervisión de un endocrinólogo. La automedicación puede poner en riesgo su salud."
          />
          <Accordions
            pregunta="¿Debo acudir a un ginecólogo una vez operada de vaginoplastia?"
            respuesta="Su vagina no está expuesta a las patologías ginecológicas habituales. Además, no existe ni útero, ni ovarios, ni matriz, ni cérvix. Por lo que no es necesario una revisión periódica de la vagina por un ginecólogo. Sin embargo, ante cualquier síntoma, es aconsejable una consulta con el cirujano plástico para una revisión rutinaria."
          />
          <Accordions
            pregunta="¿Debo realizar controles de la próstata después de una operación de vaginoplastia?"
            respuesta="Con el tratamiento hormonal, la próstata disminuye de tamaño considerablemente en pocos años y, en muchos casos, acaba por atrofiarse, por lo que la incidencia de cáncer de próstata es prácticamente nula. Al margen de esto, no está de más someterse a una determinación del PSA a partir de los 50 años."
          />
        </div>
        <p>
          Si tienes otras dudas, envíanos tu consulta y te responderemos
          personalmente.
        </p>
      </article>
    </section>
  );
}

export default page;
