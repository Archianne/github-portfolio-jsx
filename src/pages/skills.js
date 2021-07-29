import { Suspense } from "react";

const Skills = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>Hi</h1>
    </Suspense>
  );
};

export default Skills;
