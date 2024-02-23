import { ErrorBoundary } from "react-error-boundary";
import { ErrorAlert } from "../components/Alerts";
import { Button } from "../components/Button";
import { TextInput } from "../components/forms/Inputs";
import { Select } from "../components/forms/Select";
import { ExperiencesPrefabs } from "../lib/constants";

export const GeneratorForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <UserInfos />
      <JobInfos />
      <ErrorBoundary
        fallback={
          <ErrorAlert title={"Impossible de générer le PDF"}>
            Une erreur est survenue lors de la génération du PDF. Consultez le
            journal de l'application pour en savoir plus.
          </ErrorAlert>
        }
      >
        <Button className="w-full">Télécharger</Button>
      </ErrorBoundary>
    </form>
  );
};

const UserInfos = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="font-bold mb-2">Informations personelles</h2>
      <TextInput className="mb-4">NOM Prénom</TextInput>
      <div className="grid grid-cols-2 gap-2">
        <TextInput className="mb-4">Adresse (ligne1)</TextInput>
        <TextInput className="mb-4">Code Postal + Ville</TextInput>
      </div>
    </div>
  );
};

const JobInfos = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="font-bold mb-2">Informations sur le poste</h2>
      <div className="grid grid-cols-2 gap-2">
        <TextInput className="mb-4">Intitulé du poste</TextInput>
        <TextInput className="mb-4">Entreprise</TextInput>
      </div>
      <Select className="mb-4" options={ExperiencesPrefabs}>
        Expérience
      </Select>
    </div>
  );
};
