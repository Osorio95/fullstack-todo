// Importa las funciones y módulos necesarios
import { describe, expect, it } from '@jest/globals';
import { createMocks, createRequest, createResponse } from 'node-mocks-http'
import { GET } from './route';
import { NextRequest, NextResponse } from 'next/server';

export type ApiRequest = NextRequest & ReturnType<typeof createRequest>;
export type APiResponse = NextResponse & ReturnType<typeof createResponse>;

describe('GET and POST endpoint test', () => {
    it('should return 200', async () => {
        const { req, res } = createMocks<ApiRequest, APiResponse>({
            method: 'GET',
        })
        await GET(req);
        expect(res._getStatusCode()).toBe(200);
    });
});
