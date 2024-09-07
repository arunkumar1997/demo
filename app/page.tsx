import prisma from "./utils/db";

interface Data {
  id: number;
  name?: string;
}

export default async function Home() {
  const data: Data | null = await prisma.env.findFirst();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>
        This is
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {"  "}
          {data?.name}
          {"  "}
        </span>
        env
      </h1>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const env = await prisma.env.findFirst();
//   return { props: { env } };
// };
