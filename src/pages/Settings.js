import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget, ChoosePhotoBackWidget } from "../components/Widgets";
import { GeneralInfoForm,ModifyInfoForm,DeleteInfoForm } from "../components/Forms";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";


export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
          <ModifyInfoForm />
          <DeleteInfoForm />
        </Col>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Foto de perfil"
                photo={Profile3}
              />
              <ChoosePhotoWidget
                title="Imagen de fondo"
                photo={Profile3}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
