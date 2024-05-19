'use client'

import { LoginButton } from '@/components/auth/LoginButton';
import { LogoutButton } from '@/components/auth/LogoutButton';
import { SignupButton } from '@/components/auth/SignupButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Flex, Layout, theme } from 'antd';
import React from 'react'

export const Navbar = () => {
    const { user } = useUser();
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', background: colorBgContainer }}>
            <Flex justify='end' align='center' gap={12}>
                {!user && (
                    <>
                        <SignupButton />
                        <LoginButton />
                    </>
                )}
                {user && (
                    <>
                        <LogoutButton />
                    </>
                )}
            </Flex >
        </Header>
    )
}
