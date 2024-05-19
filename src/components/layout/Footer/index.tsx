'use client'
import { Layout } from 'antd';
import React from 'react'

const { Footer } = Layout;

export const FooterWrapper = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            David Osorio ©{new Date().getFullYear()}
        </Footer>
    )
}
