import { usePatientSore } from "../store";
import PatientDetails from "./PatientDetail";

export default function PatientList() {
  const patients = usePatientSore((state) => state.patients);

  return (
    <div
      className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll
     scrollbar-hide"
    >
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {patients.map((patient) => {
            return <PatientDetails key={patient.id} patient={patient} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              Y administralos desde aquí
            </span>
          </p>
        </>
      )}
    </div>
  );
}
