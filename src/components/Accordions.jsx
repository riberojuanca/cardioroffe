import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordions({ pregunta, respuesta }) {
  return (
    <Accordion className="" type="single" collapsible>
      <AccordionItem className="rounded-lg" value="item-1">
        <AccordionTrigger className=" h-20 bg-sky-100 p-4 rounded-lg">
          {pregunta}
        </AccordionTrigger>
        <AccordionContent className="bg-sky-50 p-4 rounded-lg mt-2">
          {respuesta}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordions;
