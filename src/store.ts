import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "./types";

// Definición del estado de los pacientes
type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientId: (id: Patient["id"]) => void;
  updatePatient: (id: DraftPatient) => void;
};

// función para crear un nuevo paciente con un id único
const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidv4(),
  };
};

// creación del store para las acciones de los pacientes
export const usePatientSore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: "",

    // función para agregar un nuevo paciente
    addPatient: (data) => {
      const newPatient = createPatient(data);
      set((state) => ({
        patients: [...state.patients, newPatient],
      }));
    },

    // función para eliminar un paciente
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },

    // función para obtener un paciente por su id
    getPatientId(id) {
      set(() => ({
        activeId: id,
      }));
    },

    // función para actualizar un paciente
    updatePatient: (data) => {
      set((state) => ({
        patients: state.patients.map((patient) =>
          patient.id === state.activeId
            ? { id: state.activeId, ...data }
            : patient
        ),
        activeId: "",
      }));
    },
  }))
);
