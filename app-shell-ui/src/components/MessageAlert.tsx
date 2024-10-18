export const MessageAlert = ({ message }: { message: string }) => {
  return (
    <section className="grid justify-center pt-64 w-full">
      <p className="text-3xl text-teal-100">{message}</p>
    </section>
  );
};
