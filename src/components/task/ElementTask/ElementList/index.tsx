import React from 'react'
import { getTodoListService } from '@/services/todo/todoService'
import { useQuery } from '@tanstack/react-query'
import { Col, Flex, Row, Typography, theme } from 'antd'
import { Element } from '../Element'
import { Spinner } from '@/components/ui/spinner'
import { useLayoutTask } from '@/hooks/useLayoutTask'
import { CurrentStatusListLabels } from '@/constants/status'
import Title from 'antd/es/typography/Title'

export const ElementList = () => {
    const { isLoading, tasksByStatus, statusKeys } = useLayoutTask()

    const {
        token: { colorBgContainer, borderRadiusLG, padding },
    } = theme.useToken();

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <Row gutter={[24, 24]} style={{ overflow: 'scroll' }}>
                    {statusKeys.map((taskCategory, catIdx) => (
                        <Col key={'category-' + catIdx} span={24 / statusKeys.length}
                            style={{
                                minWidth: 300
                            }}>
                            <div
                                style={{
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                    padding
                                }}>
                                <Title level={2}>
                                    {CurrentStatusListLabels[taskCategory]}
                                </Title>
                                <Row gutter={[8, 8]}>
                                    {tasksByStatus[taskCategory].map((task) => (
                                        <Col key={task._id} span={24}>
                                            <Element task={task} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            }

        </>

    )
}
