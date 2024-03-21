import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { PdfProp } from "@/types/PDF.type"; // Importa os tipos das props esperadas
// Cria os estilos da página
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffff", //Cor da página
    color: "black", // Cor do texto
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    //Estilos do titulo
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  viewer: {
    width: 1080, //Viwer é o tamanho da janela que o usuario tera para poder visualizar o pdf e ter as opções de imprimir, zoom, etc...
    height: 750,
  },
  text: {
    fontSize: "16px",
    paddingRight: "44px",
    paddingLeft: "44px",
  },
  line: {
    marginLeft: 34,
  },
  reference: {
    marginLeft: 30,
  },
  lineTwo: {
    marginLeft: 34,
    fontSize: "12px",
  },
  lineThree: {
    marginLeft: 34,
    fontSize: "14px",
  },
});

// Create Document Component
function BasicDocument(prop: PdfProp) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {/*Page engloba tudo e é onde os textos estão inseridos*/}
          <View style={styles.section}>
            {/* View são as sessões da página (Titulo), (Corpo), (Footer). No caso desse primeiro é o titulo */}
            <Text style={styles.title}>{prop.title}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>{prop.text}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>{prop.expertiseAt}</Text>
          </View>
          <View style={styles.reference}>
            <Text style={styles.line}>{prop.assignatureLine}</Text>
          </View>
          <View style={styles.reference}>
            <Text style={styles.line}>{prop.professional}</Text>
            <Text style={styles.lineTwo}>Médico Psiquiatra</Text>
            <Text style={styles.lineThree}>
              CRM {prop.crmExpeditor} {prop.crm} {prop.crmCurse}
              {prop.crmCurseNumber}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
