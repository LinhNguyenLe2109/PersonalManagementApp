import PageContainer from "@/components/PageContainer";
import React from "react";

import { connectDatabase, disconnectDatabase, getDatabase } from "@/lib/mongodb";

export async function getStaticProps() {
  await connectDatabase();

  const db = getDatabase();
  const collection = db.collection("users");

  const data = await collection.findOne({ userName: "user1" });

  await disconnectDatabase();

  return {
    props: {
      data,
      collection,
      db
    },
  };
}

function Test({ data, collection, db }) {
  console.log(db);
  return (
    <PageContainer>
      <h1>Testing</h1>
      <h2>Value from mongoDB users</h2>
      <div>{typeof collection}</div>
    </PageContainer>
  );
}

export default Test;
