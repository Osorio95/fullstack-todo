import { afterEach, jest } from '@jest/globals';

afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
});

jest.mock('next/navigation', () => ({
    usePathname: () => ''
}));

jest.mock('@auth0/nextjs-auth0', () => {
    return {
        getSession: () => ({
            user: {
                email: 'test@test.com'
            }
        }),
        getAccessToken: () => 'access_token',
        withApiAuthRequired: (handler: any) => handler,
        withPageAuthRequired: (page: any) => () => page()
    };
});