import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordions({ pregunta, respuesta }) {
  return (
    <Accordion className="" type="single" collapsible>
      <AccordionItem className="" value="item-1">
        <AccordionTrigger className="bg-zinc-800 text-white p-4 rounded-lg">
          {pregunta}
        </AccordionTrigger>
        <AccordionContent className="bg-amber-300 p-4 rounded-lg mt-2">
          {respuesta}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordions;
