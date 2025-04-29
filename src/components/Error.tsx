export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-1
       border rounded-lg text-center mt-1 text-sm"
    >
      {children}
    </p>
  );
}
