import { Document, Page } from "@react-pdf/renderer";

export const DocumentPage = () => {
  return (
    <Document>
      <Page size="A4"></Page>
    </Document>
  );
};
