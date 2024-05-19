import React, { PropsWithChildren } from 'react';
import { Layout, Menu } from 'antd';
import { Navbar } from '../Navbar';
import { ContentWrapper } from '../Content';
import { FooterWrapper } from '../Footer';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </Layout>
            <FooterWrapper />
        </Layout>
    );
};