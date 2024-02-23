import { GeneratorForm } from "./features/GeneratorForm";

export const App = () => {
  return (
    <div className="p-4 mx-auto w-full max-w-2xl flex flex-col">
      <h1 className="mb-4 text-xl">Générateur de candidature</h1>
      <GeneratorForm />
    </div>
  );
};
