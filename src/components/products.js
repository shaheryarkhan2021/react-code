import { Card, Row, Col } from "react-bootstrap"


function Products(props) {
  return (
    <>
      <Row>
          {props.list.map((item) => {
            return (
              <Col md={4} key={item.id}>
                <Card style={{height: "100%"}}>
                  <Row>
                    <img src={item.pictureLink} style={{height: "200px"}}/>
                  </Row>
                  <Row>
                    <p><b>{item.name}</b></p>
                  </Row>
                  <Row>
                    <p>{item.explanation}</p>
                  </Row>
                  <Row>
                    <p>{`rating: ${item.starRating}`}</p>
                  </Row>
                  <Row>
                    <p>{`price: ${item.price}`}</p>
                  </Row>
                </Card>
              </Col>
            )
          })}
      </Row>
    </>
  );
}

export default Products;