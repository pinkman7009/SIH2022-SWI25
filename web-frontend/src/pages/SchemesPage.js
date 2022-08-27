import { useState } from "react";
import { BarGraph } from "../components/schemes/BarGraph";
import NGOTable from "../components/schemes/NGOTable";
import SchemesTable from "../components/schemes/SchemesTable";

const SchemesPage = () => {
  return (
    <div>
      <BarGraph />
      <SchemesTable />
      <NGOTable />
    </div>
  );
};

export default SchemesPage;
