import  { useEffect, useState } from "react";
/* import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer"; */
import Table from "../../components/table/Table";
import { Card, Container } from "react-bootstrap";
import api from "../../services/api.js";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [columns, setColumns] = useState([]);

  const getUsers = async () => {
    const response = await api.get(`/users`); // Chamando o endpoint
    //setCepData(response.data);

    const data = response.data;
    console.log("getUsers:", data, JSON.stringify(data));

    setUsers(data);

    // Define as colunas a partir das chaves do primeiro item
    if (data.length > 0) {
      const cols = Object.keys(data[0]).map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 145,
        //valueGetter: (value, row) =>   `${row.firstName || ""} ${row.lastName || ""}`,
      }));
      console.log("columns", cols, data);

      setColumns(cols);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <Container>
        <Card className="text-center">
          <Card.Header><h2>Usuarios</h2></Card.Header> 
          <Card.Body>
            {/* <Card.Title>Usuários</Card.Title> */}
            <Card.Text>
            <Table data={users} columns={columns} />
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
        {/* <h2 className="mb-5">Usuarios</h2>
        <Table data={users} columns={columns} /> */}
      </Container>
      {/* <Footer /> */}
    </div>
  );
};
