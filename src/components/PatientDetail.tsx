import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientSore } from "../store";
import { Bounce, toast } from "react-toastify";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailProps) {
  const deletePatient = usePatientSore((state) => state.deletePatient);
  const getPatientId = usePatientSore((state) => state.getPatientId);

  return (
    <div
      className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl
    cursor-pointer"
    >
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha de alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-3">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
         text-white font-bold uppercase rounded-lg"
          onClick={() => {
            getPatientId(patient.id);
          }}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700
         text-white font-bold uppercase rounded-lg "
          onClick={() => {
            deletePatient(patient.id);
            toast.error("Paciente eliminado", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
