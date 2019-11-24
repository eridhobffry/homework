import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import {products} from "../variable/data_list.jsx"

const textAlignCenter = {
    textAlign: 'center'
  };

function ProductPage() {

  var date_diff_indays = function(date1, date2) {
     const dt1 = new Date(date1);
     const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-page");
    return function cleanup() {
      document.body.classList.remove("product-page");
    };
  });
  const today = new Date()
  return (
    <>
      <div className="main">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <h4>Products</h4>
                <br />
              </Col>
              <Row>
              {products.map((p) => {
                        return (
                            <>
                            
                            <Col md="4" sm="4">
                            <Card className="card-product">
                                <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={p.image_url}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">
                          {p.title}
                        </CardTitle>
                        <p className="card-description">
                            {date_diff_indays(p.created_at, today) === 14 ? "2 weeks ago"
                        :
                        <>
                        {date_diff_indays(p.created_at, today)} days ago
                        </>    
                        }
                        {/* {p.created_at} */}
                        </p>
                      </div>

                      <br/>
                      <div className="">
                        <h5 className="">฿ {p.price}</h5>
                      </div>
                    </CardBody>
                  </div>
                            </Card>
                            </Col>
                            </>
                        )
                    })}
                            </Row>
                            
            </Row>
            <Row>
                                <Col lg="5">
                                </Col>
                                <Col lg="4" className="text-center">
                                <Pagination>
                
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                      >
                    <i
                      aria-hidden={true}
                      className="fa fa-angle-double-right"
                    />
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
                                </Col>
                                <Col lg="4">
                                
                                </Col>
                            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
