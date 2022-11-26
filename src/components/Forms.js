
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Informacion General</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Nombres</Form.Label>
                <Form.Control required type="text" placeholder="Nombres" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control required type="text" placeholder="Apellidos" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Genero</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Seleccione...</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="email@email.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="9998887766" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="btn btn-outline-success d-inline-flex align-items-center me-md-3" type="submit">Guardar</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const ModifyInfoForm = () => {

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Modificar cuenta</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="editUser">
                <Form.Label>Editar usuario</Form.Label>
                <Form.Control type="text" placeholder="Nuevo usuario" />
              </Form.Group>
              <div className="mt-3">
                <Button variant="btn btn-outline-warning d-inline-flex align-items-center me-md-3" id="edit_user" type="submit">Modificar usuario</Button>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="editPass">
                <Form.Label>Editar contraseña</Form.Label>
                <Form.Control type="text" placeholder="Nueva contraseña" />
              </Form.Group>
              <div className="mt-3">
                <Button variant="btn btn-outline-warning d-inline-flex align-items-center me-md-3" id="edit_pass" type="submit">Modificar contraseña</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const DeleteInfoForm = () => {

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Borrar Datos</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Button variant="btn btn-outline-danger d-inline-flex align-items-center me-md-3" id="delete_photo" type="submit">Eliminar foto</Button>
            </Col>
            <Col md={6} className="mb-3">
            <Button variant="btn btn-outline-danger d-inline-flex align-items-center me-md-3" id="delete_user" type="submit">Eliminar Usuario</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
