import React from "react";

function PageContainer(props) {
  return (
    <main className="h-full mx-auto my-auto bg-blue3 text-center p-14">
      {props.children}
    </main>
  );
}

export default PageContainer;
