'use client'

import React from 'react';
import { CreateTask } from '@/components/task/CreateTask';
import { ElementList } from '@/components/task/ElementTask/ElementList';
import { Col, Row } from 'antd';

export const Main = () => {
    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} md={8} xl={6}>
                <CreateTask />
            </Col>
            <Col xs={24} md={12} xl={18}>
                <ElementList />
            </Col>
        </Row>
    )
}
