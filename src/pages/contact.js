import { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <p>Email: helena19w@gmail.com</p>
    </Suspense>
  );
};

export default Contact;
