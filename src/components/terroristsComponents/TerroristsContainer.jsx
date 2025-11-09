import { useState } from "react";
import TerroristsList from "./TerroristsList";
import TerroristDialog from "./TerroristDialog";

export default function TerroristsContainer({ terrorists }) {
  const [selectedTer, setSelectedTer] = useState(null);

  return (
    <>
      <TerroristsList
        terrorists={terrorists}
        onSelect={(ter) => setSelectedTer(ter)}
      />

      <TerroristDialog
        open={!!selectedTer}
        terrorist={selectedTer}
        onClose={() => setSelectedTer(null)}
      />
    </>
  );
}
