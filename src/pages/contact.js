import { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <p>In progress</p>
    </Suspense>
  );
};

export default Contact;
