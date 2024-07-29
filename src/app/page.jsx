import { PageBase, PageBaseRight } from "@/components/PageBase";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <PageBase
        title="UNIDAD DE GÉNERO CARDIOROFFE"
        text="La Unidad de Género CARDIOROFFE abrió sus puertas hace más de veinte años y se ha convertido en un referente internacional en Cirugía de Reasignación de Género. CARDIOROFFE ha atendido a más de 3.000 personas trans que han decidido llevar a cabo algún tratamiento o procedimiento quirúrgico en la Unidad, ya sea una cirugía de afirmación genital (vaginoplastia, faloplastia, metaidoplastia), cirugía corporal (mastectomía, aumento de pecho trans, lipoescultura feminizante, entre otras.), cirugía facial (feminización facial, tiroplastia, masculinización de rasgos, etc.) u otros tratamientos, tanto quirúrgicos como de medicina estética."
        text1="CARDIOROFFE se nutre de todas las ventajas de CARDIOROFFE CLINIC, una clínica pionera por su concepto de entender la asistencia sanitaria de forma global y personalizada. Es por ese motivo, que le confiere unas características diferenciadoras que le permiten ofrecer una alta calidad asistencial."
        text2="En CARDIOROFFE encontrarás una clara apuesta por la tecnología más puntera y solvente, con quirófanos tecnológicamente punteros y con la aparatología más innovadora del sector. Todo ello, sumado a un equipo médico experto en cirugía de género con más de dos décadas de experiencia liderado por el Dr. Ivan Mañero, el cirujano plástico especializado en cirugía de reasignación de género más reconocido de Europa e, incluso, a nivel internacional. Además, el Dr. Mañero fue pionero en determinadas técnicas quirúrgicas de afirmación genital, como la vaginoplastia con injerto."
        text3="Todo el equipo humano que forma IM GENDER, desde Atención al Paciente hasta los profesionales médicos, sanitarios, psicólogos y fisioterapeutas, están formados en una atención sanitaria basada en los derechos humanos, en el respeto y la protección de la intimidad de todos los pacientes. Nuestro objetivo es ofrecer toda la información necesaria antes, durante y después de la intervención a través de un trato cercano y una atención personalizada."
        imagesrc="/prueba1.jpg"
      />
      <PageBaseRight
        title="HISTORIA DE CARDIOROFFE"
        text="En el año 2002, CARDIOROFFE nace de la necesidad de ofrecer un equipo especializado a un colectivo de personas, cuyas necesidades y demandas habían sido ignoradas y desatendidas por una buena parte del colectivo médico, ya sea por desconocer el tratamiento o por no aplicarlo correctamente."
        text1="El equipo médico de la Unidad de Género de CARDIOROFFE comenzó a atender a personas trans desde 1999 (año de su creación). Por aquel entonces, el Dr. Ivan Mañero ya se había especializado en cirugía de afirmación genital ante la demanda de algunas de sus pacientes, advirtiendo que en otros centros no recibían la atención que merecían. En 2002, ante el número de personas trans que desean ser atendidas por nuestro equipo, se decide crear una unidad especializada que les ofrezca una atención y servicio personalizados."
        text2="Hoy, más de 20 años después, la Unidad de Género convertida en un referente a nivel internacional en Cirugía de Afirmación de Género, da un nuevo salto convirtiéndose en CARDIOROFFE."
        text3="CARDIOROFFE reúne un equipo de más de 30 profesionales, ofrecen más servicios y en más disciplinas, siempre, con la sensibilidad, el compromiso y la excelencia que caracteriza la Unidad de Género de CARDIOROFFE CLINIC."
        imagesrc="/prueba2.jpg"
      />
      <PageBase
        title="DR. ROFFE, UN REFERENTE"
        text="El Dr. Roffe, cirujano plástico reparador y estético, es un referente internacional en cirugía de afirmación de género en personas trans."
        text1="Lleva más de dos décadas realizando y perfeccionando esta y todo tipo de cirugías destinadas a personas trans, tanto dentro como fuera de nuestras fronteras."
        text2="Su profesionalidad le ha llevado a ser internacionalmente conocido y solicitado, participando y moderando actos en congresos del sector. Desde sus comienzos abogó por una atención especializada y sensibilizada con las personas trans. Sin embargo, en los inicios, tuvo que lidiar con otros profesionales y la incomprensión social que no entendían por qué un especialista como él atendía a este tipo de personas."
        text3="CPionero en determinadas técnicas quirúrgicas de reasignación de género, el Dr. Ivan Mañero ha colaborado con diversas administraciones para conseguir que este tipo de intervenciones estén contempladas dentro del servicio sanitario público de nuestro país. Para, así, poder ofrecer una mayor y mejor atención a las personas trans que lo requieran."
        imagesrc="/prueba3.jpg"
      />
      <section className="h-96 bg-zinc-800 flex items-center justify-center text-white text-xl">
        <h2>Sección 2</h2>
      </section>
      <section className="h-96 bg-zinc-300 flex items-center justify-center text-white text-xl">
        <h2>Sección 3</h2>
      </section>
      <section className="h-96 bg-zinc-600 flex items-center justify-center text-white text-xl">
        <h2>Sección 4</h2>
      </section>
    </main>
  );
}
