import { create } from "zustand";
import { Patient } from "./types";

type PatientStore = {
  patients: Patient[];
};

export const usePatientSore = create<PatientStore>(() => ({
  patients: [],
}));
