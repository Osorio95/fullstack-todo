'use client'

import React, { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Content style={{ padding: '24px', minHeight: 280 }}>
            {children}
        </Content>
    )
}
