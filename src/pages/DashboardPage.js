import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import OverviewPanel from '../components/Sidebar/Dashboard/OverviewPanel';
import RepairPriorityTrends from '../components/Sidebar/Dashboard/Widgets/RepairPriorityTrends';
import ServiceReminders from '../components/Sidebar/Dashboard/Widgets/ServiceReminders';
import AssetStatus from '../components/Sidebar/Dashboard/Widgets/AssetStatus';
import LatestMeterReadings from '../components/Sidebar/Dashboard/Widgets/LatestMeterReadings';
import FuelAndServiceCosts from '../components/Sidebar/Dashboard/Widgets/FuelAndServiceCosts';
import OtherCosts from '../components/Sidebar/Dashboard/Widgets/OtherCosts';
import TopReasonsForRepair from '../components/Sidebar/Dashboard/Widgets/TopReasonsForRepair';

const DashboardPage = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  return (
    <Container fluid>
      <h1 className="my-4">Dashboard</h1>

      {/* Global Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter all widgets..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Widgets Grid */}
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <OverviewPanel filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <RepairPriorityTrends filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <ServiceReminders filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <AssetStatus filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <LatestMeterReadings filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <FuelAndServiceCosts filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <OtherCosts filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <TopReasonsForRepair filter={globalFilter} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;